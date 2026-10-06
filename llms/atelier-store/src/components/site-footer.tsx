import Link from "next/link";

const columns = [
  { title: "Shop", links: ["Women", "Men", "Bags", "New arrivals"] },
  { title: "Client care", links: ["Contact", "Shipping", "Returns", "Care guide"] },
  { title: "Atelier", links: ["Our story", "Craftsmanship", "Sustainability", "Stores"] },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="page-content section-y grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="flex max-w-sm flex-col gap-4">
          <p className="eyebrow">Newsletter</p>
          <p className="heading-3">Be the first to see new collections.</p>
          <form className="flex border-b border-ink" action="/newsletter">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              required
              placeholder="Email address"
              className="min-w-0 flex-1 bg-transparent py-3 outline-none placeholder:text-muted"
            />
            <button type="submit" className="link-cta cursor-pointer">
              Subscribe
            </button>
          </form>
        </div>
        {columns.map((column) => (
          <nav key={column.title} aria-label={column.title} className="flex flex-col gap-3">
            <p className="eyebrow">{column.title}</p>
            {column.links.map((label) => (
              <Link key={label} href="#" className="link-reveal w-fit">
                {label}
              </Link>
            ))}
          </nav>
        ))}
      </div>
      <div className="page-content flex flex-col gap-2 border-t border-line py-6 text-muted sm:flex-row sm:justify-between">
        <p>© 2026 Atelier. All rights reserved.</p>
        <p>Sample storefront, images via Unsplash.</p>
      </div>
    </footer>
  );
}
