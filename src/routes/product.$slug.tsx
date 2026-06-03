import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { products } from "@/data/products";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const p = products.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — Cannabinoid Clinical` },
          { name: "description", content: loaderData.description },
          { property: "og:image", content: loaderData.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <h1 className="font-display text-4xl">Product not found</h1>
      <Link to="/shop" className="text-gold mt-6 inline-block">← Back to shop</Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <h1 className="font-display text-4xl">Something went wrong</h1>
      <p className="text-muted-foreground mt-3">{error.message}</p>
      <button onClick={reset} className="btn-gold px-6 py-3 mt-6 text-sm uppercase tracking-widest">Try again</button>
    </div>
  ),
  component: Product,
});

function Product() {
  const p = Route.useLoaderData();
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 grid md:grid-cols-2 gap-14">
      <div className="aspect-square overflow-hidden rounded-sm bg-muted">
        <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
      </div>
      <div>
        <div className="text-[11px] tracking-[0.4em] uppercase text-gold">{p.strain ?? p.category}</div>
        <h1 className="font-display text-5xl mt-2">{p.name}</h1>
        <div className="gold-rule w-16 my-6" />
        <p className="text-lg text-muted-foreground leading-relaxed">{p.description}</p>
        <dl className="mt-8 grid grid-cols-2 gap-y-3 text-sm border-t border-border pt-6">
          {p.thc && (<><dt className="text-muted-foreground uppercase tracking-widest text-xs">THC</dt><dd>{p.thc}</dd></>)}
          {p.cbd && (<><dt className="text-muted-foreground uppercase tracking-widest text-xs">CBD</dt><dd>{p.cbd}</dd></>)}
          <dt className="text-muted-foreground uppercase tracking-widest text-xs">Schedule</dt><dd>S8 / S4</dd>
          <dt className="text-muted-foreground uppercase tracking-widest text-xs">Origin</dt><dd>Australia</dd>
        </dl>
        <div className="mt-10 flex items-center justify-between">
          <div className="font-display text-4xl text-gold">${p.price.toFixed(2)}</div>
          <Link to="/e-prescription" className="btn-gold px-8 py-3.5 text-sm tracking-widest uppercase rounded-sm">
            Request via Prescription
          </Link>
        </div>
        <p className="mt-6 text-xs text-muted-foreground leading-relaxed">
          Dispensing requires a valid Australian prescription issued through our clinical team or an external prescriber.
          Prices include GST and dispensing fees.
        </p>
      </div>
    </div>
  );
}
