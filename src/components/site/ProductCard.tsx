import { Link } from "@tanstack/react-router";
import { type Product } from "@/data/products";

export function ProductCard({ p }: { p: Product }) {
  return (
    <Link to="/product/$slug" params={{ slug: p.slug }} className="group block">
      <div className="aspect-square overflow-hidden bg-muted rounded-sm">
        <img
          src={p.image}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="pt-4 text-center">
        <div className="text-[10px] tracking-[0.28em] uppercase text-muted-foreground">
          {p.strain ?? p.category}
        </div>
        <h3 className="font-display text-xl mt-1 text-foreground">{p.name}</h3>
        <div className="text-xs text-muted-foreground mt-1 space-x-2">
          {p.thc && <span>THC {p.thc}</span>}
          {p.cbd && <span>· CBD {p.cbd}</span>}
        </div>
        <div className="mt-2 text-gold font-medium">${p.price.toFixed(2)} AUD</div>
      </div>
    </Link>
  );
}
