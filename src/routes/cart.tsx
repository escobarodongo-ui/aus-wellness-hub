import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Cart — Cannabinoid Clinical" }] }),
  component: () => (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <h1 className="font-display text-5xl">Your cart is empty</h1>
      <div className="gold-rule w-24 mx-auto my-6" />
      <p className="text-muted-foreground">Begin by requesting an e-prescription or browsing our formulary.</p>
      <div className="mt-8 flex gap-4 justify-center">
        <Link to="/shop" className="btn-gold px-6 py-3 text-sm tracking-widest uppercase rounded-sm">Browse Shop</Link>
      </div>
    </div>
  ),
});
