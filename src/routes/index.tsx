import { createFileRoute, Link } from "@tanstack/react-router";
import {
  categoryCount,
  categoryImage,
  featuredWheelchairs,
  formatAud,
  heroProduct,
  homeCategories,
  products,
  WARRANTY_SUMMARY,
  warrantyFor,
} from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { WHATSAPP_HREF, WHATSAPP_NUMBER } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Comfort Mobility — Wheelchairs in Australia" },
      {
        name: "description",
        content:
          "Shop wheelchairs and mobility equipment in Australia. Prices in AUD, with warranty cover stated on every product.",
      },
    ],
    links: [
      {
        rel: "preload",
        as: "image",
        href: heroProduct.image,
        fetchPriority: "high",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const heroWarranty = warrantyFor(heroProduct.category, heroProduct.condition);

  return (
    <>
      <section className="border-b border-neutral-200">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:gap-16 md:py-20">
          <div>
            <p className="text-sm font-semibold text-black">Wheelchairs · Australia</p>
            <h1 className="mt-3 max-w-xl text-4xl font-semibold tracking-tight text-black md:text-5xl">
              Wheelchairs for everyday comfort.
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-neutral-800">
              Comfort Mobility supplies wheelchairs and mobility equipment across Australia. Every
              price is in Australian dollars, and the warranty is written on the product.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/shop"
                search={{ category: "electric-wheelchairs" }}
                className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-black hover:bg-[#e07812]"
              >
                Shop wheelchairs
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-md border border-black bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-black hover:text-white"
              >
                About us
              </Link>
            </div>
          </div>
          <div>
            <Link
              to="/product/$slug"
              params={{ slug: heroProduct.slug }}
              className="block bg-[#f6f6f6]"
            >
              <img
                src={heroProduct.image}
                alt={heroProduct.name}
                width={heroProduct.width}
                height={heroProduct.height}
                fetchPriority="high"
                className="h-auto w-full object-contain"
              />
            </Link>
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                <p className="font-semibold leading-snug">{heroProduct.name}</p>
                <p className="mt-1 text-sm text-neutral-700">{heroWarranty.label}</p>
              </div>
              <p className="shrink-0 text-lg font-semibold">
                {formatAud(heroProduct.price)} <span className="text-xs font-medium">AUD</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-[#f6f6f6]">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-3">
          <p className="text-sm">
            <span className="block text-base font-semibold text-black">
              {products.length} products
            </span>
            Listed with AUD prices, including GST.
          </p>
          <p className="text-sm">
            <span className="block text-base font-semibold text-black">Warranty on every item</span>
            3-year, 12-month, or 6-month, stated on the product.
          </p>
          <p className="text-sm">
            <span className="block text-base font-semibold text-black">
              WhatsApp {WHATSAPP_NUMBER}
            </span>
            Ask about fit, delivery, or a chair in the shop.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold">Wheelchairs</h2>
            <p className="mt-2 max-w-xl text-neutral-700">
              New and pre-owned powerchairs, manual chairs, and children&rsquo;s wheelchairs.
            </p>
          </div>
          <Link
            to="/shop"
            className="hidden text-sm font-semibold underline decoration-[#f88820] decoration-2 underline-offset-4 sm:inline"
          >
            Full catalogue
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeCategories.map((category) => {
            const sample = categoryImage(category.slug);
            if (!sample) return null;
            return (
              <Link
                key={category.slug}
                to="/shop"
                search={{ category: category.slug }}
                className="group border border-neutral-200"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f6f6f6]">
                  <img
                    src={sample.image}
                    alt=""
                    width={sample.width}
                    height={sample.height}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                </div>
                <div className="flex items-baseline justify-between gap-3 px-4 py-4">
                  <h3 className="font-semibold group-hover:underline">{category.name}</h3>
                  <span className="text-sm text-neutral-600">{categoryCount(category.slug)}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <h2 className="text-3xl font-semibold">Featured chairs</h2>
          <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {featuredWheelchairs.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 md:flex md:items-center md:justify-between md:gap-12">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-white">Warranty</h2>
            <p className="mt-3 text-base leading-relaxed text-white/90">{WARRANTY_SUMMARY}</p>
          </div>
          <a
            href={WHATSAPP_HREF}
            className="mt-6 inline-flex shrink-0 items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-black hover:bg-[#e07812] md:mt-0"
          >
            Message us
          </a>
        </div>
      </section>
    </>
  );
}
