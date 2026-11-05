import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";
import { ProductCard } from "@/components/site/ProductCard";
import { categories, categoryCount, products, WARRANTY_SUMMARY } from "@/data/products";

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>) => {
    const category =
      typeof search.category === "string" && search.category.length > 0 && search.category !== "all"
        ? search.category
        : undefined;
    const q = typeof search.q === "string" && search.q.length > 0 ? search.q : undefined;
    return {
      ...(category ? { category } : {}),
      ...(q ? { q } : {}),
    };
  },
  head: () => ({
    meta: [
      { title: "Shop — Comfort Mobility" },
      {
        name: "description",
        content:
          "Browse wheelchairs and mobility equipment. Australian dollar prices, with warranty cover stated on every product.",
      },
    ],
  }),
  component: Shop,
});

function Shop() {
  const search = Route.useSearch();
  const category = search.category ?? "all";
  const q = search.q ?? "";
  const navigate = useNavigate({ from: "/shop" });
  const query = q.trim().toLowerCase();

  function updateSearch(nextCategory: string, nextQuery: string, replace = false) {
    const categoryParam = nextCategory !== "all" ? nextCategory : undefined;
    const qParam = nextQuery.length > 0 ? nextQuery : undefined;
    navigate({
      search: {
        ...(categoryParam ? { category: categoryParam } : {}),
        ...(qParam ? { q: qParam } : {}),
      },
      replace,
    });
  }

  const visible = useMemo(() => {
    return products.filter((product) => {
      const inCategory = category === "all" || product.category === category;
      const matches = query.length === 0 || product.name.toLowerCase().includes(query);
      return inCategory && matches;
    });
  }, [category, query]);

  const activeName =
    category === "all"
      ? "All products"
      : (categories.find((item) => item.slug === category)?.name ?? "All products");

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl font-semibold">Shop</h1>
        <p className="mt-3 text-neutral-800">
          {products.length} products. Prices in Australian dollars, including GST.
        </p>
        <p className="mt-4 border-l-4 border-primary pl-4 text-sm leading-relaxed text-neutral-800">
          {WARRANTY_SUMMARY}
        </p>
      </header>

      <div className="mt-8 flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          <FilterChip
            active={category === "all"}
            label={`All (${products.length})`}
            onClick={() => updateSearch("all", q)}
          />
          {categories.map((item) => {
            const count = categoryCount(item.slug);
            if (count === 0) return null;
            return (
              <FilterChip
                key={item.slug}
                active={category === item.slug}
                label={`${item.name} (${count})`}
                onClick={() => updateSearch(item.slug, q)}
              />
            );
          })}
        </div>
        <label className="block shrink-0 text-sm md:w-64">
          <span className="sr-only">Search products</span>
          <input
            value={q}
            onChange={(event) => updateSearch(category, event.target.value, true)}
            placeholder="Search by name"
            className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-black outline-none focus:border-black"
          />
        </label>
      </div>

      <p className="mt-8 text-sm text-neutral-700">
        Showing {visible.length} {visible.length === 1 ? "product" : "products"}
        {category !== "all" ? ` in ${activeName}` : ""}
      </p>

      {visible.length === 0 ? (
        <p className="mt-10 text-neutral-700">
          No products match that search. Try another name or category.
        </p>
      ) : (
        <div className="mt-6 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product, index) => (
            <ProductCard key={product.id} product={product} priority={index === 0} />
          ))}
        </div>
      )}
    </div>
  );
}

function FilterChip({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        active
          ? "shrink-0 rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-black"
          : "shrink-0 rounded-full border border-neutral-300 bg-white px-3 py-1.5 text-sm text-black hover:border-black"
      }
    >
      {label}
    </button>
  );
}
