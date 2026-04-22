"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const navWithConnection = navigator as Navigator & {
      connection?: {
        effectiveType?: string;
        saveData?: boolean;
      };
    };
    const connection = navWithConnection.connection;
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 767px)");

    const applyVideoStrategy = () => {
      const shouldDisableVideo =
        reducedMotionQuery.matches ||
        connection?.saveData === true ||
        connection?.effectiveType === "slow-2g" ||
        connection?.effectiveType === "2g";

      setVideoReady(false);
      setVideoSrc(
        shouldDisableVideo
          ? null
          : mobileQuery.matches
            ? "/hero-bg-mobile.mp4"
            : "/hero-bg-desktop.mp4",
      );
    };

    applyVideoStrategy();
    reducedMotionQuery.addEventListener("change", applyVideoStrategy);
    mobileQuery.addEventListener("change", applyVideoStrategy);

    return () => {
      reducedMotionQuery.removeEventListener("change", applyVideoStrategy);
      mobileQuery.removeEventListener("change", applyVideoStrategy);
    };
  }, []);

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center pt-24 pb-12 bg-ink-dark z-20 overflow-hidden">

      {/* Full-bleed dark background layer */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <div
          className="absolute inset-y-0 right-0 h-full w-full md:w-[60%]"
          style={{ opacity: 0.9 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-bg-poster.jpg"
            alt=""
            aria-hidden
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              videoReady ? "opacity-0" : "opacity-100"
            }`}
            style={{ objectPosition: "center" }}
          />
          {videoSrc ? (
            <video
              key={videoSrc}
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/hero-bg-poster.jpg"
              onLoadedData={() => setVideoReady(true)}
              className={`h-full w-full object-cover transition-opacity duration-700 ${
                videoReady ? "opacity-100" : "opacity-0"
              }`}
              style={{ objectPosition: "center" }}
            />
          ) : null}
        </div>
        {/* Placeholder textured bg — replace with hero-bg image */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            background:
              "radial-gradient(ellipse at 70% 40%, rgba(212,130,10,0.18) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(42,37,32,0.8) 0%, transparent 60%), #0a0806",
          }}
        />
        {/* Left-to-right darkening gradient (readability) */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink-dark via-ink-dark/80 to-transparent" />
        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 inset-x-0 h-32 md:h-48 bg-gradient-to-t from-ink-dark to-transparent pointer-events-none" />
      </div>

      {/* Right-side rotated accent placeholder (hero-accent position) */}
      <div className="absolute top-24 md:top-32 right-0 h-[100dvh] w-[90vw] md:w-[60vw] flex items-center justify-end pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0, scale: 1.02, rotate: -88 }}
          animate={{ opacity: 1, scale: 1.15, rotate: -92 }}
          transition={{ duration: 1.4, ease: EASE }}
          className="relative h-[120vh] aspect-square origin-center translate-x-1/4 pointer-events-auto cursor-pointer"
          style={{ filter: "brightness(0.9) contrast(1.1)" }}
        >
        </motion.div>
      </div>

      {/* Content grid */}
      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center z-20 pointer-events-none">
        <div className="md:col-span-7 flex flex-col items-start pointer-events-auto">
          <div>
            <span className="inline-flex items-center rounded-full border border-white/15 bg-black/35 px-5 py-3 text-[0.92rem] font-semibold tracking-[0.22em] uppercase text-white mb-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md">
              Atelier &amp; Archive
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-cream mb-8 text-balance">
              Crafted
              <br />
              <span className="text-amber italic font-normal">
                to be remembered.
              </span>
            </h1>

            <p className="text-lg text-cream/80 leading-relaxed max-w-[40ch] mb-10 text-balance">
              Trophies, medals, mementos and frames for schools, colleges, and
              institutions across Delhi. Architectural craft, not generic awards.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/catalog"
                className="relative inline-flex items-center justify-center font-medium overflow-hidden rounded-full transition-colors focus:outline-none py-3 tracking-tight h-14 px-8 text-base bg-cream text-ink hover:bg-cream/90"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Collections
                </span>
              </Link>
              <Link
                href="/about"
                className="relative inline-flex items-center justify-center font-medium overflow-hidden rounded-full transition-colors focus:outline-none py-3 tracking-tight bg-transparent h-14 px-8 text-base text-cream hover:bg-white/10"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Our Manifesto
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
