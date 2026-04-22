"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

type ScrollOffset = Parameters<typeof useScroll>[0] extends infer P
  ? P extends { offset?: infer O }
    ? O
    : never
  : never;

type Props = {
  targetRef: RefObject<HTMLElement>;
  frameCount?: number;
  pathPrefix?: string;
  pathSuffix?: string;
  posterIndex?: number;
  className?: string;
  offset?: ScrollOffset;
};

const framePath = (i: number, prefix: string, suffix: string) =>
  `${prefix}${String(i + 1).padStart(3, "0")}${suffix}`;

export default function ScrollFrames({
  targetRef,
  frameCount = 200,
  pathPrefix = "/frames/ezgif-frame-",
  pathSuffix = ".jpg",
  posterIndex = 99,
  className = "",
  offset = ["start end", "end start"],
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const [ready, setReady] = useState(false);
  const [canAnimate, setCanAnimate] = useState(false);
  const [shouldLoadFrames, setShouldLoadFrames] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setCanAnimate(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const target = targetRef.current;
    if (!target || !canAnimate) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setShouldLoadFrames(true);
        observer.disconnect();
      },
      { rootMargin: "400px 0px" },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [canAnimate, targetRef]);

  useEffect(() => {
    if (!canAnimate || !shouldLoadFrames) return;
    let cancelled = false;
    let loaded = 0;
    const imgs: HTMLImageElement[] = new Array(frameCount);

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = framePath(i, pathPrefix, pathSuffix);
      img.onload = img.onerror = () => {
        loaded += 1;
        if (i < 20 && !cancelled && !ready) {
          setReady(true);
        }
        if (loaded === frameCount && !cancelled) {
          drawFrame(currentFrameRef.current);
        }
      };
      imgs[i] = img;
    }
    imagesRef.current = imgs;

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canAnimate, frameCount, pathPrefix, pathSuffix, shouldLoadFrames]);

  const drawFrame = (index: number) => {
    const canvas = canvasRef.current;
    const img = imagesRef.current[index];
    if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    const scale = Math.max(cw / iw, ch / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, dx, dy, dw, dh);
  };

  useEffect(() => {
    if (!canAnimate) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = container.getBoundingClientRect();
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      drawFrame(currentFrameRef.current);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    return () => ro.disconnect();
  }, [canAnimate]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!canAnimate) return;
    const clamped = Math.max(0, Math.min(1, v));
    const idx = Math.min(frameCount - 1, Math.floor(clamped * (frameCount - 1)));
    if (idx === currentFrameRef.current) return;
    currentFrameRef.current = idx;
    drawFrame(idx);
  });

  const posterSrc = framePath(posterIndex, pathPrefix, pathSuffix);

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={posterSrc}
        alt=""
        aria-hidden
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          canAnimate && ready ? "opacity-0" : "opacity-100"
        }`}
        loading={shouldLoadFrames ? "eager" : "lazy"}
        decoding="async"
      />
      {canAnimate && shouldLoadFrames && (
        <canvas
          ref={canvasRef}
          aria-hidden
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}
