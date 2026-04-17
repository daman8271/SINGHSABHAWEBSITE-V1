"""Render every PDF page at 150 dpi to WebP for the /gallery viewer."""
from pathlib import Path
import pypdfium2 as pdfium

ROOT = Path(__file__).resolve().parent.parent
PDF = ROOT / "catalog-2023-2024_compressed.pdf"
OUT = ROOT / "web" / "public" / "catalog"
OUT.mkdir(parents=True, exist_ok=True)

SCALE = 150 / 72.0  # 150 dpi

pdf = pdfium.PdfDocument(str(PDF))
n = len(pdf)
print(f"Rendering {n} pages at 150 dpi -> {OUT}")

for i, page in enumerate(pdf, start=1):
    bmp = page.render(scale=SCALE)
    img = bmp.to_pil().convert("RGB")
    # cap width at 1400px for web
    if img.width > 1400:
        ratio = 1400 / img.width
        img = img.resize((1400, int(img.height * ratio)))
    out = OUT / f"page-{i:03d}.webp"
    img.save(out, "WEBP", quality=82, method=6)
    if i % 10 == 0 or i == n:
        print(f"  {i}/{n}")

print("Done.")
