import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/product-card";
import {
  formatPrice,
  getProduct,
  LOW_STOCK_THRESHOLD,
  products,
  relatedProducts,
  stockState,
  type StockState,
} from "@/data/catalog";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return { title: "Product not found | Atelier" };
  return {
    title: `${product.name} | Atelier`,
    description: product.description,
    openGraph: { images: [product.image] },
  };
}

const stockTone: Record<StockState["kind"], string> = {
  "in-stock": "bg-success",
  "low-stock": "bg-danger",
  "sold-out": "bg-subtle",
};

export default async function ProductPage({ params }: PageProps<"/products/[slug]">) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const stock = stockState(product);
  const soldOut = stock.kind === "sold-out";
  const oneSize = product.sizes.length === 1;
  const images = [{ src: product.image, alt: product.alt }, ...product.gallery];
  const related = relatedProducts(product);
  const sections = [
    { title: "Description", body: [product.description], open: true },
    { title: "Details", body: product.details },
    { title: "Materials & care", body: product.care },
    {
      title: "Shipping & returns",
      body: [
        "Complimentary standard shipping on orders over $250.",
        "Express delivery in 1 to 2 business days.",
        "Free returns within 30 days, in original condition.",
      ],
    },
  ];

  return (
    <main className="flex-1">
      <nav aria-label="Breadcrumb" className="page-shell py-4 text-muted">
        <ol className="flex flex-wrap gap-2 text-caption">
          <li>
            <Link href="/" className="link-reveal">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href={`/collections/${product.category.toLowerCase()}`} className="link-reveal">
              {product.category}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-ink">
            {product.name}
          </li>
        </ol>
      </nav>

      <div className="grid gap-8 pb-section md:grid-cols-12 md:gap-0">
        <section aria-label="Product images" className="md:col-span-7 md:pl-gutter">
          <ul className="grid snap-x snap-mandatory auto-cols-[85%] grid-flow-col gap-grid overflow-x-auto scroll-px-gutter px-gutter [scrollbar-width:none] md:grid-flow-row md:grid-cols-2 md:overflow-visible md:px-0">
            {images.map((image, index) => (
              <li
                key={image.src}
                className={`media aspect-product snap-start ${index === 0 ? "md:col-span-2" : ""}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  sizes={index === 0 ? "(min-width: 768px) 58vw, 85vw" : "(min-width: 768px) 29vw, 85vw"}
                  className="object-cover"
                />
              </li>
            ))}
          </ul>
          <p className="px-gutter pt-3 text-caption text-muted md:hidden" aria-hidden="true">
            Swipe for {images.length - 1} more {images.length === 2 ? "image" : "images"}
          </p>
        </section>

        <div className="px-gutter md:col-span-5 md:px-10 xl:px-16">
          <div className="flex flex-col gap-6 md:sticky md:top-[calc(var(--header-height)+2rem)]">
            <header className="flex flex-col gap-3">
              <p className="eyebrow text-muted">{product.category}</p>
              <h1 className="heading-2">{product.name}</h1>
              <p className="text-lead">{formatPrice(product.price)}</p>
              <p className="flex items-center gap-2 text-caption">
                <span className={`size-2 rounded-pill ${stockTone[stock.kind]}`} aria-hidden="true" />
                {stock.label}
              </p>
            </header>

            <hr className="rule" />

            <form action="/bag" method="get" className="flex flex-col gap-6">
              <input type="hidden" name="product" value={product.slug} />
              <p className="text-caption">
                <span className="text-muted">Colour</span> {product.colour}
              </p>

              <fieldset className="flex flex-col gap-3" disabled={soldOut}>
                <div className="flex items-baseline justify-between">
                  <legend className="eyebrow">Size</legend>
                  {!oneSize && (
                    <Link href="/size-guide" className="link text-caption">
                      Size guide
                    </Link>
                  )}
                </div>
                <div className="grid grid-cols-5 gap-grid">
                  {product.sizes.map((size) => {
                    const unavailable = size.stock === 0;
                    const low = size.stock > 0 && size.stock <= LOW_STOCK_THRESHOLD;
                    return (
                      <label
                        key={size.label}
                        className={`relative flex min-h-11 cursor-pointer items-center justify-center border border-line-strong text-caption transition-colors duration-(--duration-fast) hover:border-ink has-checked:border-ink has-checked:bg-ink has-checked:text-paper has-focus-visible:outline has-focus-visible:outline-offset-2 has-focus-visible:outline-ink has-disabled:cursor-not-allowed has-disabled:border-line has-disabled:text-subtle has-disabled:line-through ${oneSize ? "col-span-5" : ""}`}
                      >
                        <input
                          type="radio"
                          name="size"
                          value={size.label}
                          required
                          disabled={unavailable}
                          defaultChecked={oneSize && !unavailable}
                          className="sr-only"
                        />
                        {size.label}
                        <span className="sr-only">
                          {unavailable ? ", sold out" : low ? `, only ${size.stock} left` : ""}
                        </span>
                        {low && (
                          <span aria-hidden="true" className="absolute right-1 top-1 size-1 rounded-pill bg-danger" />
                        )}
                      </label>
                    );
                  })}
                </div>
                {product.sizes.some((size) => size.stock > 0 && size.stock <= LOW_STOCK_THRESHOLD) && (
                  <p className="flex items-center gap-2 text-caption text-muted">
                    <span aria-hidden="true" className="size-1 rounded-pill bg-danger" />
                    Few left in marked sizes
                  </p>
                )}
              </fieldset>

              {soldOut ? (
                <div className="flex flex-col gap-3">
                  <button type="submit" className="btn btn-primary btn-block" disabled>
                    Sold out
                  </button>
                  <p className="text-caption text-muted">
                    This piece has sold out online. Our client advisors can check availability in store.
                  </p>
                </div>
              ) : (
                <button type="submit" className="btn btn-primary btn-block">
                  Add to bag
                </button>
              )}
            </form>

            <ul className="flex flex-col gap-1 text-caption text-muted">
              <li>Complimentary shipping on orders over $250</li>
              <li>Free returns within 30 days</li>
            </ul>

            <div className="border-b border-line">
              {sections.map((section) => (
                <details key={section.title} open={section.open} className="group border-t border-line">
                  <summary className="nav-link flex min-h-12 cursor-pointer list-none items-center justify-between [&::-webkit-details-marker]:hidden">
                    {section.title}
                    <span aria-hidden="true" className="text-h4 font-normal transition-transform duration-(--duration-base) group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  {section.body.length === 1 ? (
                    <p className="pb-6 text-ink-soft">{section.body[0]}</p>
                  ) : (
                    <ul className="flex list-disc flex-col gap-1 pb-6 pl-5 text-ink-soft">
                      {section.body.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  )}
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="section-y border-t border-line bg-surface" aria-labelledby="related-title">
          <div className="page-shell">
            <h2 id="related-title" className="heading-2 mb-8">
              You may also like
            </h2>
            <ul className="scroll-row xl:auto-cols-[calc((100%-2*var(--grid-gap))/3)]!">
              {related.map((item) => (
                <li key={item.slug}>
                  <ProductCard product={item} sizes="(min-width: 768px) 33vw, 72vw" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}
