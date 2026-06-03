import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — Cannabinoid Clinical" }] }),
  component: () => (
    <div className="mx-auto max-w-3xl px-4 py-20 prose">
      <h1 className="font-display text-5xl">Privacy Policy</h1>
      <div className="gold-rule w-24 my-6" />
      <p className="text-muted-foreground">Cannabinoid Clinical Pty Ltd is committed to protecting your personal and health information in accordance with the Australian Privacy Principles (APPs) and the Privacy Act 1988 (Cth).</p>
      <p className="text-muted-foreground mt-4">We collect personal and health information solely for the purpose of providing clinical care, dispensing medicine, and complying with regulatory obligations. Information is stored on Australian-hosted servers and is never sold.</p>
      <p className="text-muted-foreground mt-4">For full details or to request access to your records, contact care@cannabinoidclinical.au.</p>
    </div>
  ),
});
