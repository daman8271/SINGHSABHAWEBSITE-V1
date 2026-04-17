# Singh Sabha Enterprise

The 2023–24 awards & trophies catalogue for **Singh Sabha Enterprise**, Delhi — as a modern web catalogue.

## Stack

- Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion
- Product photos extracted from the source PDF
- WhatsApp-based quote flow (no cart, no listed prices)

## Routes

| Path        | Purpose                                                  |
| ----------- | -------------------------------------------------------- |
| `/`         | Hero, categories, featured pieces, trust strip           |
| `/catalog`  | Full catalogue — category filter + code search           |
| `/gallery`  | Page-by-page viewer of the full 134-page catalogue       |
| `/about`    | Workshop story                                           |
| `/contact`  | WhatsApp, email, workshop + quick-inquiry form           |

## Run it

```bash
cd web
npm install
npm run dev
# http://localhost:3000
```

## Regenerating catalogue assets

The source PDF is gitignored (>100 MB). To regenerate images and product data:

```bash
python -m venv .venv && source .venv/bin/activate
pip install pypdfium2 pillow
# drop catalog-2023-2024_compressed.pdf at the repo root, then:
python scripts/render_pages.py          # -> web/public/catalog/
python scripts/extract_products.py      # -> web/public/products/
python scripts/build_products_json.py   # -> web/data/products.json
```

## Configure

Update WhatsApp number, email and address in [web/lib/site.ts](web/lib/site.ts).
