import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { collections, editorial, hero, newArrivals } from "@/data/catalog";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="hero scrim" aria-labelledby="hero-title">
        <Image src={hero.image} alt={hero.alt} fill priority sizes="100vw" className="object-cover object-[50%_30%]" />
        <div className="hero-content">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title" className="heading-display">
            {hero.title}
          </h1>
          <Link href={hero.cta.href} className="btn btn-inverse">
            {hero.cta.label}
          </Link>
        </div>
      </section>

      <section className="page-shell section-y" aria-labelledby="collections-title">
        <div className="mb-8 flex items-end justify-between">
          <h2 id="collections-title" className="heading-2">
            Featured collections
          </h2>
          <Link href="/collections" className="link-cta hidden sm:inline">
            View all
          </Link>
        </div>
        <ul className="grid gap-[var(--grid-gap)] md:grid-cols-3">
          {collections.map((collection) => (
            <li key={collection.slug}>
              <Link
                href={`/collections/${collection.slug}`}
                className="media scrim block text-paper"
                style={{ aspectRatio: "var(--aspect-portrait)" }}
              >
                <Image
                  src={collection.image}
                  alt={collection.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[var(--duration-slow)] ease-[var(--ease-luxe)] hover:scale-[1.03]"
                />
                <span className="title absolute inset-x-0 bottom-0 z-10 p-6">{collection.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="section-y border-y border-line bg-surface" aria-labelledby="arrivals-title">
        <div className="page-shell">
          <div className="mb-8 flex items-end justify-between">
            <h2 id="arrivals-title" className="heading-2">
              New arrivals
            </h2>
            <Link href="/new" className="link-cta">
              Shop all
            </Link>
          </div>
          <ul className="grid-products md:grid-cols-4!">
            {newArrivals.map((product) => (
              <li key={product.slug}>
                <ProductCard product={product} sizes="(min-width: 768px) 25vw, 50vw" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid md:grid-cols-2" aria-labelledby="editorial-title">
        <div className="media min-h-[28rem] md:min-h-[40rem]">
          <Image
            src={editorial.image}
            alt={editorial.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col items-start justify-center gap-6 px-[var(--gutter)] py-16 md:px-16 lg:px-24">
          <p className="eyebrow text-muted">{editorial.eyebrow}</p>
          <h2 id="editorial-title" className="heading-1">
            {editorial.title}
          </h2>
          <p className="lead max-w-md">{editorial.body}</p>
          <Link href={editorial.cta.href} className="btn btn-secondary">
            {editorial.cta.label}
          </Link>
        </div>
      </section>

      <section className="page-content section-y" aria-label="Our promise">
        <ul className="grid gap-10 text-center md:grid-cols-3">
          {[
            ["Complimentary shipping", "On all orders over $250, delivered in signature packaging."],
            ["Thirty-day returns", "Not quite right? Return it free within thirty days."],
            ["Made to last", "Responsibly sourced materials and finishing by hand."],
          ].map(([title, body]) => (
            <li key={title} className="flex flex-col items-center gap-3">
              <h3 className="eyebrow">{title}</h3>
              <p className="max-w-xs text-muted">{body}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
