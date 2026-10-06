// Sample storefront data. Replace with database queries once the schema exists.

const unsplash = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80`;

// Close-up of the same photo, cropped around a focal point (x, y in 0–1, zoom ≥ 1).
const detail = (id: string, x: number, y: number, zoom: number) =>
  `${unsplash(id)}&ar=4:5&crop=focalpoint&fp-x=${x}&fp-y=${y}&fp-z=${zoom}`;

export type Collection = {
  slug: string;
  name: string;
  image: string;
  alt: string;
};

export type ProductImage = {
  src: string;
  alt: string;
};

export type ProductSize = {
  label: string;
  stock: number;
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  colour: string;
  image: string;
  alt: string;
  gallery: ProductImage[];
  sizes: ProductSize[];
  description: string;
  details: string[];
  care: string[];
  badge?: string;
};

export const hero = {
  eyebrow: "Autumn / Winter 2026",
  title: "The Quiet Coat",
  cta: { label: "Discover the collection", href: "/collections/outerwear" },
  image: unsplash("photo-1539109136881-3be0616acf4b"),
  alt: "Model in a long pale-blue coat in a cathedral square",
};

export const collections: Collection[] = [
  {
    slug: "outerwear",
    name: "Outerwear",
    image: unsplash("photo-1483985988355-763728e1935b"),
    alt: "Model in a burgundy wool coat holding shopping bags",
  },
  {
    slug: "leather",
    name: "Leather",
    image: unsplash("photo-1551028719-00167b16eac5"),
    alt: "Black leather jacket on a hanger over white linen",
  },
  {
    slug: "bags",
    name: "Bags & Accessories",
    image: unsplash("photo-1594223274512-ad4803739b7c"),
    alt: "Teal leather top-handle bag with gold clasp",
  },
];

const BOMBER = "photo-1591047139829-d91aecb6caea";
const BIKER = "photo-1551028719-00167b16eac5";
const BAG = "photo-1594223274512-ad4803739b7c";
const TEE = "photo-1523381210434-271e8be1f52b";

export const products: Product[] = [
  {
    slug: "satin-bomber-terracotta",
    name: "Satin Bomber Jacket",
    category: "Outerwear",
    price: 420,
    colour: "Terracotta",
    image: unsplash(BOMBER),
    alt: "Terracotta satin bomber jacket on a hanger",
    gallery: [
      { src: detail(BOMBER, 0.5, 0.3, 2.6), alt: "Ribbed collar and zip pull of the satin bomber" },
      { src: detail(BOMBER, 0.5, 0.62, 2.4), alt: "Satin front panel with welt pockets" },
    ],
    sizes: [
      { label: "XS", stock: 4 },
      { label: "S", stock: 6 },
      { label: "M", stock: 5 },
      { label: "L", stock: 3 },
      { label: "XL", stock: 0 },
    ],
    description:
      "A relaxed bomber cut from fluid satin with a soft sheen. Ribbed collar, cuffs and hem keep the shape clean, while the light padding makes it an easy layer from early autumn into spring.",
    details: ["Relaxed fit, true to size", "Two-way front zip", "Side welt pockets", "Ribbed collar, cuffs and hem"],
    care: ["Shell: 100% recycled polyester", "Lining: 100% cupro", "Dry clean only"],
    badge: "New",
  },
  {
    slug: "biker-jacket-black",
    name: "Leather Biker Jacket",
    category: "Leather",
    price: 1450,
    colour: "Black",
    image: unsplash(BIKER),
    alt: "Black leather biker jacket",
    gallery: [
      { src: detail(BIKER, 0.35, 0.7, 2.4), alt: "Zipped chest pocket and silver hardware on the biker jacket" },
      { src: detail(BIKER, 0.25, 0.5, 2.4), alt: "Lapel with press studs and asymmetric zip" },
    ],
    sizes: [
      { label: "XS", stock: 0 },
      { label: "S", stock: 1 },
      { label: "M", stock: 1 },
      { label: "L", stock: 0 },
      { label: "XL", stock: 0 },
    ],
    description:
      "Our signature biker in supple lambskin that softens with every wear. Cut close to the body with an asymmetric zip, notched lapels and polished silver hardware.",
    details: ["Slim fit, size up for layering", "Asymmetric front zip", "Three zipped pockets", "Snap-down lapels"],
    care: ["Shell: 100% lambskin leather", "Lining: 100% viscose", "Specialist leather clean only"],
  },
  {
    slug: "top-handle-bag-teal",
    name: "Top-Handle Bag in Teal",
    category: "Bags",
    price: 980,
    colour: "Teal",
    image: unsplash(BAG),
    alt: "Teal leather top-handle bag",
    gallery: [
      { src: detail(BAG, 0.6, 0.65, 2.6), alt: "Gold push-lock clasp on grained teal leather" },
      { src: detail(BAG, 0.65, 0.35, 2.2), alt: "Rolled leather top handle with gold fittings" },
    ],
    sizes: [{ label: "One size", stock: 0 }],
    description:
      "A structured top-handle bag in pebble-grain calfskin, finished with a gold push-lock clasp. Sized for the essentials, with a detachable strap for wearing across the body.",
    details: ["W 24 × H 18 × D 9 cm", "Push-lock front flap", "Interior slip pocket", "Detachable shoulder strap"],
    care: ["Exterior: 100% calfskin leather", "Lining: 100% cotton", "Wipe with a soft dry cloth"],
    badge: "New",
  },
  {
    slug: "cotton-tee-forest",
    name: "Organic Cotton Tee",
    category: "Essentials",
    price: 95,
    colour: "Forest",
    image: unsplash(TEE),
    alt: "Forest-green cotton t-shirts on wooden hangers",
    gallery: [
      { src: detail(TEE, 0.85, 0.3, 2.4), alt: "Ribbed neckline of the forest-green tee on a wooden hanger" },
      { src: detail(TEE, 0.8, 0.6, 2), alt: "Soft jersey texture of the organic cotton tee" },
    ],
    sizes: [
      { label: "XS", stock: 12 },
      { label: "S", stock: 20 },
      { label: "M", stock: 18 },
      { label: "L", stock: 9 },
      { label: "XL", stock: 7 },
    ],
    description:
      "The everyday tee, refined. Heavyweight organic cotton jersey with a close ribbed neckline and a straight, easy fit that holds its shape wash after wash.",
    details: ["Straight fit", "220 gsm jersey", "Ribbed crew neck", "Made in Portugal"],
    care: ["100% organic cotton", "Machine wash cold", "Dry flat"],
  },
];

export const newArrivals = products;

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);

export const relatedProducts = (product: Product, limit = 4) =>
  products.filter((other) => other.slug !== product.slug).slice(0, limit);

export type StockState = { kind: "in-stock" | "low-stock" | "sold-out"; label: string };

export const LOW_STOCK_THRESHOLD = 3;

export function stockState(product: Product): StockState {
  const total = product.sizes.reduce((sum, size) => sum + size.stock, 0);
  if (total === 0) return { kind: "sold-out", label: "Sold out" };
  if (total <= LOW_STOCK_THRESHOLD) return { kind: "low-stock", label: `Only ${total} left` };
  return { kind: "in-stock", label: "In stock" };
}

export const editorial = {
  eyebrow: "The Edit",
  title: "Layers for the cold months",
  body: "Soft wools, hand-finished knits and heritage tailoring, chosen to be worn for years rather than seasons.",
  cta: { label: "Shop the edit", href: "/collections/the-edit" },
  image: unsplash("photo-1445205170230-053b83016050"),
  alt: "Rail of wool coats and knitwear in warm light",
};

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
