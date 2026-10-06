import Image from "next/image";
import Link from "next/link";
import { formatPrice, stockState, type Product } from "@/data/catalog";

export function ProductCard({ product, sizes }: { product: Product; sizes: string }) {
  const stock = stockState(product);
  const badge = stock.kind === "sold-out" ? stock.label : product.badge;

  return (
    <Link href={`/products/${product.slug}`} className="product-card">
      <div className="product-card__media">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes={sizes}
          className="!p-0 object-cover mix-blend-normal"
        />
        {badge && <span className="badge absolute left-2 top-2 z-10">{badge}</span>}
      </div>
      <div className="product-card__body">
        <p className="eyebrow text-muted">{product.category}</p>
        <p className="product-card__name">{product.name}</p>
        <p className="product-card__price">
          {formatPrice(product.price)}
          {stock.kind === "low-stock" && <span className="text-danger"> · {stock.label}</span>}
        </p>
      </div>
    </Link>
  );
}
