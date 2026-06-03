import { createFileRoute } from "@tanstack/react-router";
import { products } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Cannabinoid Clinical" },
      { name: "description", content: "Browse our curated formulary of medical cannabis flower, vapes, oils and edibles." },
    ],
  }),
  component: Shop,
});

function Shop() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20">
      <header className="text-center mb-14">
        <div className="text-[11px] tracking-[0.4em] uppercase text-gold">The Apothecary</div>
        <h1 className="font-display text-5xl mt-3">Full Formulary</h1>
        <div className="gold-rule w-24 mx-auto mt-6" />
        <p className="text-muted-foreground max-w-xl mx-auto mt-6">
          Every product below requires an active Australian prescription. Add to your patient file
          and your prescriber will review during your next consultation.
        </p>
      </header>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((p) => <ProductCard key={p.id} p={p} />)}
      </div>
    </div>
  );
}
