"""Parse CATALOG_OCR.md + extracted product images into data/products.json.

Strategy:
- Split OCR by page.
- For each page, find product codes via regex (J\\d+, MM \\d+, ABS \\d+, Q \\d+, QX \\d+, T \\d+, etc.)
  and infer a category (ABS, Metal Cups, Cut Glass, Acrylic, Crystal, Medals, Ribbons, Frames, ...).
- For each page, look up the extracted images in web/public/products/p{page:03d}-*.webp
  and pair them with codes in order. Leftover codes or images are still recorded (with empty image or empty code) so the catalog grid stays honest.
"""
from __future__ import annotations
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OCR = ROOT / "CATALOG_OCR.md"
IMG_DIR = ROOT / "web" / "public" / "products"
OUT = ROOT / "web" / "data" / "products.json"
OUT.parent.mkdir(parents=True, exist_ok=True)

# category inference — match first match on a page
CATEGORY_KEYWORDS = [
    ("ABS Trophies", re.compile(r"\bABS\b")),
    ("Metal Cups", re.compile(r"METAL\s*CUPS?", re.I)),
    ("Cut Glass", re.compile(r"CUT\s*GLASS", re.I)),
    ("Acrylic", re.compile(r"\bACRYLIC\b", re.I)),
    ("Crystal", re.compile(r"\bCRYSTAL\b", re.I)),
    ("Corporate Mementos", re.compile(r"MOMENTOS|MEMENTOS|CORPORATE", re.I)),
    ("Royal Series", re.compile(r"\bROYAL\b", re.I)),
    ("Economy", re.compile(r"\bECONOMY\b", re.I)),
    ("Medals", re.compile(r"\bMEDAL", re.I)),
    ("Ribbons", re.compile(r"\bRIBBON", re.I)),
    ("Frames", re.compile(r"\bFRAME", re.I)),
    ("Keychains & Badges", re.compile(r"KEYCHAIN|BADGE", re.I)),
    ("Magnets & Nuts", re.compile(r"MAGNET|\bNUTS?\b", re.I)),
    ("Loose Cups", re.compile(r"LOOSE\s*CUPS?", re.I)),
    ("Bases", re.compile(r"\bBASES?\b", re.I)),
    ("Foils", re.compile(r"\bFOILS?\b", re.I)),
]

# Product codes seen in OCR — liberal
CODE_PATTERNS = [
    re.compile(r"\b(J\s?\d{3,4}[A-Z]?)\b"),
    re.compile(r"\b(MM\s?\d{1,3})\b"),
    re.compile(r"\b(ABS\s?\d{1,3}[A-Z]?)\b"),
    re.compile(r"\b(Q\s?\d{1,3})\b"),
    re.compile(r"\b(QX\s?\d{1,3})\b"),
    re.compile(r"\b(T\s?\d{1,3})\b"),
    re.compile(r"\b(NX\s?\d{1,3})\b"),
]

HEIGHT_RE = re.compile(r"HEIGHT\s+([0-9\"\.\s\|]+)", re.I)

CAT_SLUGS = {
    "ABS Trophies": "abs",
    "Metal Cups": "metal-cups",
    "Cut Glass": "cut-glass",
    "Acrylic": "acrylic",
    "Crystal": "crystal",
    "Corporate Mementos": "mementos",
    "Royal Series": "royal",
    "Economy": "economy",
    "Medals": "medals",
    "Ribbons": "ribbons",
    "Frames": "frames",
    "Keychains & Badges": "badges",
    "Magnets & Nuts": "magnets",
    "Loose Cups": "loose-cups",
    "Bases": "bases",
    "Foils": "foils",
}


def split_pages(text: str) -> list[tuple[int, str]]:
    pages = re.split(r"^##\s*Page\s*(\d+)\s*$", text, flags=re.M)
    # pages = ["", "1", "...body...", "2", "...body..."]
    out = []
    for i in range(1, len(pages), 2):
        try:
            num = int(pages[i])
            body = pages[i + 1] if i + 1 < len(pages) else ""
            out.append((num, body))
        except ValueError:
            continue
    return out


def infer_category(body: str) -> str:
    for cat, rx in CATEGORY_KEYWORDS:
        if rx.search(body):
            return cat
    return "Catalogue"


def find_codes(body: str) -> list[str]:
    seen = []
    for rx in CODE_PATTERNS:
        for m in rx.finditer(body):
            code = re.sub(r"\s+", " ", m.group(1).strip())
            if code not in seen:
                seen.append(code)
    return seen


def find_heights(body: str) -> list[str]:
    out = []
    for m in HEIGHT_RE.finditer(body):
        # collect up to next double newline
        blob = m.group(1)
        parts = [p.strip() for p in re.split(r"\s{2,}|\|", blob) if p.strip()]
        parts = [p for p in parts if re.search(r"\d", p)]
        if parts:
            out.append(" · ".join(parts[:4]))
    return out


def images_for_page(pageno: int) -> list[str]:
    pat = f"p{pageno:03d}-*.webp"
    files = sorted(IMG_DIR.glob(pat))
    return [f"/products/{f.name}" for f in files]


def main() -> None:
    text = OCR.read_text(encoding="utf-8")
    pages = split_pages(text)
    products: list[dict] = []
    pid = 0

    for pageno, body in pages:
        category = infer_category(body)
        slug = CAT_SLUGS.get(category, "catalogue")
        codes = find_codes(body)
        heights = find_heights(body)
        images = images_for_page(pageno)

        # skip cover / index pages with no real products
        if pageno <= 2:
            continue

        # Pair codes and images by index (best effort). Use page image as fallback.
        count = max(len(codes), len(images))
        for i in range(count):
            code = codes[i] if i < len(codes) else ""
            image = images[i] if i < len(images) else ""
            if not image and not code:
                continue
            pid += 1
            products.append(
                {
                    "id": pid,
                    "code": code or f"Page {pageno}",
                    "category": category,
                    "categorySlug": slug,
                    "page": pageno,
                    "heights": heights[i] if i < len(heights) else "",
                    "image": image,
                }
            )

    OUT.write_text(json.dumps(products, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Wrote {len(products)} products to {OUT}")
    by_cat: dict[str, int] = {}
    for p in products:
        by_cat[p["category"]] = by_cat.get(p["category"], 0) + 1
    for k, v in sorted(by_cat.items(), key=lambda x: -x[1]):
        print(f"  {k}: {v}")


if __name__ == "__main__":
    main()
