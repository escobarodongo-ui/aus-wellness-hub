import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/account")({
  head: () => ({ meta: [{ title: "Patient Portal — Cannabinoid Clinical" }] }),
  component: () => (
    <div className="mx-auto max-w-md px-4 py-24">
      <h1 className="font-display text-4xl text-center">Patient Portal</h1>
      <div className="gold-rule w-24 mx-auto my-6" />
      <form className="grid gap-5 bg-card border border-border p-8 rounded-sm">
        <input placeholder="Email" type="email" className="border border-border bg-background px-4 py-3 rounded-sm" />
        <input placeholder="Password" type="password" className="border border-border bg-background px-4 py-3 rounded-sm" />
        <button className="btn-gold px-6 py-3 text-sm tracking-widest uppercase rounded-sm">Sign In</button>
        <Link to="/e-prescription" className="text-center text-sm text-gold underline-offset-4 hover:underline">New patient? Begin here</Link>
      </form>
    </div>
  ),
});
