"""Extract embedded raster images from the PDF as individual product photos.

For each page, save any embedded image >200px on its longest side as
public/products/p{page:03d}-{idx}.webp. Tiny images (icons, ornaments) are
skipped.
"""
from pathlib import Path
import pypdfium2 as pdfium
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
PDF = ROOT / "catalog-2023-2024_compressed.pdf"
OUT = ROOT / "web" / "public" / "products"
OUT.mkdir(parents=True, exist_ok=True)

MIN_SIDE = 200  # skip tiny decorative images

pdf = pdfium.PdfDocument(str(PDF))
total = 0
skipped = 0

for pageno, page in enumerate(pdf, start=1):
    idx = 0
    for obj in page.get_objects():
        # only PDFium image objects
        try:
            # PdfImage has a .get_bitmap() method in modern pypdfium2
            if obj.type != 3:  # 3 = FPDF_PAGEOBJ_IMAGE
                continue
        except AttributeError:
            continue
        try:
            bmp = obj.get_bitmap(render=False)
            pil = bmp.to_pil()
        except Exception:
            continue
        w, h = pil.size
        if max(w, h) < MIN_SIDE:
            skipped += 1
            continue
        idx += 1
        # cap embed width for web
        if w > 1200:
            r = 1200 / w
            pil = pil.resize((1200, int(h * r)))
        pil = pil.convert("RGB")
        name = f"p{pageno:03d}-{idx:02d}.webp"
        pil.save(OUT / name, "WEBP", quality=82, method=6)
        total += 1
    if pageno % 10 == 0:
        print(f"  page {pageno}: total saved {total}")

print(f"Done. {total} images saved, {skipped} small images skipped.")
