# 0001 · Product detail page

**Status**: Assumed
**Date**: 2026-10-06
**Authorized by**: d20, during /develop

## Owed decision
What the product detail page shows and where each value comes from: stock state, gallery images, sizes, colour, description and care details. No product schema exists yet, and there is no `design.md` or page level spec.

## Assumption built on
- Product data comes from the typed sample module `src/data/catalog.ts`, the same source the homepage uses. It swaps for Drizzle queries once a product schema exists.
- Stock is a count per size. The page derives one stock state from the total: `0` is sold out, `1` to `3` is low stock ("Only N left"), more is in stock. A size with `0` stock shows as unavailable.
- The gallery is the main product photo plus two detail crops of the same Unsplash photo (imgix focal point crops), so every image shows the actual product.
- The visual direction is the existing homepage and the design system in `src/styles/`.
- Add to bag submits a plain form to `/bag` (size required). No cart exists yet, so nothing is persisted.
- Unknown slugs return the 404 page. Routes are prerendered for every product in the catalog.

## Code area
- `src/app/products/[slug]/` (page, not found state)
- `src/data/catalog.ts`
- `src/components/` (product card, header, footer)
- `src/app/layout.tsx` (header and footer moved here so every page shares them)

## Requirements
- AC-1: `/products/<slug>` shows large product imagery, the name, price, category and stock state for every catalog product.
- AC-2: Stock state reads In stock, Only N left, or Sold out, and a sold out product cannot be added to the bag.
- AC-3: Sizes with no stock are shown but cannot be selected.
- AC-4: An unknown slug shows a not found page with a way back to shopping.
- AC-5: The page matches the homepage (header, footer, type, buttons, product cards) and works from phone to desktop without horizontal scroll.

## Ratify
This decision was recorded by /develop, not deliberated. Run `/architect product detail page`
to deliberate and ratify it. Until then it stays flagged as an owed decision; it does not block marking the feature `done`.
