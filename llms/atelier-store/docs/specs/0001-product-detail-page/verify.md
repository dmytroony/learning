# Verify: Product detail page · spec 0001 · updated 2026-10-06
_Steps derived from spec 0001 acceptance criteria. `/check verify` runs these; `/test` locks the durable ones._

## UI / manual
- [ ] Visit `/products/satin-bomber-terracotta` → large main image plus two detail crops, category "Outerwear", name, "$420", "In stock" → AC-1
- [ ] Visit each of the four catalog products → every page renders imagery, name, price, category and a stock state → AC-1
- [ ] Visit `/products/biker-jacket-black` → stock reads "Only 2 left" (S and M have 1 each) → AC-2
- [ ] Visit `/products/top-handle-bag-teal` → stock reads "Sold out", size is struck through, button reads "Sold out" and is disabled → AC-2
- [ ] On the bomber, press Add to bag with no size chosen → browser asks for a size, page does not navigate → AC-3
- [ ] On the bomber, XL is struck through and cannot be selected, by mouse or keyboard → AC-3
- [ ] On the bomber, choose M and press Add to bag → navigates to `/bag?product=satin-bomber-terracotta&size=M` → AC-3
- [ ] Visit `/products/does-not-exist` → 404 status, "This page has moved on", links to home and new arrivals → AC-4
- [ ] Click a product card on the homepage → lands on its detail page; header and footer match the homepage → AC-5
- [ ] Check the page at 390px, 820px and 1440px wide → no horizontal scroll; gallery swipes on phones, stacks beside a sticky info column from 768px → AC-5

## Value sourcing
- [ ] Set every size stock of a product to 0 in `src/data/catalog.ts` → page shows "Sold out" and its homepage card shows a "Sold out" badge
- [ ] Set a product's total stock to 3 → "Only 3 left"; set it to 4 → "In stock" (threshold `LOW_STOCK_THRESHOLD`)

## Commands
- [ ] `pnpm exec tsc --noEmit` → no errors → AC-1..AC-5
- [ ] `pnpm lint` → no errors → AC-1..AC-5
- [ ] `pnpm build` → all four `/products/<slug>` routes prerendered as SSG → AC-1, AC-4

## Acceptance-criteria coverage
- AC-1 covered by UI steps 1 and 2 · AC-2 by steps 3 and 4 · AC-3 by steps 5 to 7 · AC-4 by step 8 · AC-5 by steps 9 and 10
