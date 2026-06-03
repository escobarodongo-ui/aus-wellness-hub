import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/refunds")({
  head: () => ({ meta: [{ title: "Refunds & Returns — Cannabinoid Clinical" }] }),
  component: () => (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="font-display text-5xl">Refunds & Returns</h1>
      <div className="gold-rule w-24 my-6" />
      <p className="text-muted-foreground">As a dispenser of Schedule 4 and Schedule 8 medicines, we are unable to accept returns of dispensed product for resale. If a medicine has been damaged in transit or supplied in error, please contact our patient care team within 48 hours of receipt for a replacement or refund.</p>
      <p className="text-muted-foreground mt-4">Consultation fees are refundable up to 24 hours before your scheduled telehealth appointment.</p>
    </div>
  ),
});
