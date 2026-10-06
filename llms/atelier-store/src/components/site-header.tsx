import Link from "next/link";

const nav = [
  { label: "Women", href: "/women" },
  { label: "Men", href: "/men" },
  { label: "Bags", href: "/collections/bags" },
  { label: "New", href: "/new" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="flex items-center gap-8">
        <details className="relative md:hidden">
          <summary className="nav-link cursor-pointer list-none">Menu</summary>
          <nav
            aria-label="Mobile"
            className="absolute left-0 top-full mt-4 flex w-56 flex-col gap-4 border border-line bg-paper p-6"
          >
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link link-reveal">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <Link href="/" className="title text-center" aria-label="Atelier home">
        Atelier
      </Link>
      <div className="flex items-center justify-end gap-5 md:gap-8">
        <Link href="/search" className="nav-link hidden link-reveal sm:inline">
          Search
        </Link>
        <Link href="/account" className="nav-link hidden link-reveal sm:inline">
          Account
        </Link>
        <Link href="/bag" className="nav-link link-reveal">
          Bag (0)
        </Link>
      </div>
    </header>
  );
}
