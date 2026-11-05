import catalog from "./catalog.json";

export type Condition = "new" | "used" | "refurbished";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  condition: Condition;
  price: number;
  image: string;
  width: number;
  height: number;
  description: string;
  featured: boolean;
};

type CatalogFile = {
  heroSlug: string;
  products: Product[];
};

const data = catalog as CatalogFile;

const categoryRank = new Map<string, number>([
  ["electric-wheelchairs", 0],
  ["used-electric-wheelchairs", 1],
  ["manual-wheelchairs", 2],
  ["used-manual-wheelchairs", 3],
  ["childrens-wheelchairs", 4],
  ["new-mobility-scooters", 5],
  ["used-mobility-scooters", 6],
  ["walkers-rollators", 7],
  ["scooter-wheelchair-carriers", 8],
  ["hospital-beds", 9],
  ["birthing-beds", 10],
  ["patient-lifts", 11],
  ["standing-frames", 12],
  ["luxury-massage-chairs", 13],
  ["used-golf-carts", 14],
]);

export const products: Product[] = [...data.products].sort((a, b) => {
  const rank = (categoryRank.get(a.category) ?? 50) - (categoryRank.get(b.category) ?? 50);
  if (rank !== 0) return rank;
  if (a.featured !== b.featured) return a.featured ? -1 : 1;
  return a.name.localeCompare(b.name, "en-AU");
});

export const heroProduct: Product =
  products.find((product) => product.slug === data.heroSlug) ?? products[0];

export const categories = [
  { slug: "electric-wheelchairs", name: "New Electric Wheelchairs" },
  { slug: "used-electric-wheelchairs", name: "Used Electric Wheelchairs" },
  { slug: "manual-wheelchairs", name: "Manual Wheelchairs" },
  { slug: "used-manual-wheelchairs", name: "Used Manual Wheelchairs" },
  { slug: "childrens-wheelchairs", name: "Children's Wheelchairs" },
  { slug: "new-mobility-scooters", name: "New Mobility Scooters" },
  { slug: "used-mobility-scooters", name: "Used Mobility Scooters" },
  { slug: "walkers-rollators", name: "Walkers & Rollators" },
  { slug: "scooter-wheelchair-carriers", name: "Scooter & Wheelchair Carriers" },
  { slug: "hospital-beds", name: "Hospital Beds" },
  { slug: "birthing-beds", name: "Birthing & Delivery Beds" },
  { slug: "patient-lifts", name: "Patient Lifts & Hoists" },
  { slug: "standing-frames", name: "Standing Frames" },
  { slug: "luxury-massage-chairs", name: "Luxury Massage Chairs" },
  { slug: "used-golf-carts", name: "Used Golf Carts" },
] as const;

const wheelchairCategories = new Set<string>([
  "electric-wheelchairs",
  "used-electric-wheelchairs",
  "manual-wheelchairs",
  "used-manual-wheelchairs",
  "childrens-wheelchairs",
]);

export const homeCategories = categories.filter((category) =>
  wheelchairCategories.has(category.slug),
);

export const featuredWheelchairs = products
  .filter(
    (product) =>
      product.featured &&
      wheelchairCategories.has(product.category) &&
      product.slug !== heroProduct.slug,
  )
  .slice(0, 4);

export function categoryName(slug: string) {
  return categories.find((category) => category.slug === slug)?.name ?? slug;
}

export function categoryCount(slug: string) {
  return products.filter((product) => product.category === slug).length;
}

export function categoryImage(slug: string) {
  return products.find((product) => product.category === slug);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function formatAud(price: number) {
  return `$${price.toLocaleString("en-AU", { maximumFractionDigits: 0 })}`;
}

/** Catalogue-wide warranty line, matched to the public product listing. */
export const WARRANTY_SUMMARY =
  "New mobility scooters and electric wheelchairs include a 3-year warranty; other new units come with a 12-month warranty; used & refurbished products come with a 6-month warranty";

const threeYearCategories = new Set(["new-mobility-scooters", "electric-wheelchairs"]);

export function warrantyFor(category: string, condition: string) {
  if (condition === "new" && threeYearCategories.has(category)) {
    return {
      label: "3-Year Warranty",
      short: "3-Yr",
      note: "Every new scooter & powerchair backed by our warranty",
    };
  }
  if (condition === "new" || category === "used-golf-carts") {
    return {
      label: "12-Month Warranty",
      short: "12-Mo",
      note: "Every new product backed by our warranty",
    };
  }
  return {
    label: "6-Month Warranty",
    short: "6-Mo",
    note: "Every product backed by our warranty",
  };
}
