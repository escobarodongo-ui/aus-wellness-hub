import { createFileRoute } from "@tanstack/react-router";
import { WARRANTY_SUMMARY } from "@/data/products";
import { WHATSAPP_HREF, WHATSAPP_NUMBER } from "@/lib/site";

export const Route = createFileRoute("/refunds")({
  head: () => ({ meta: [{ title: "Refunds — Comfort Mobility" }] }),
  component: Refunds,
});

function Refunds() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-12 md:py-16">
      <h1 className="text-4xl font-semibold">Refunds</h1>
      <div className="mt-8 space-y-4 text-neutral-800">
        <p>
          If an item arrives unused and you change your mind, contact us within 14 days of delivery.
          We will tell you how to return it and whether a refund or exchange is available.
        </p>
        <p>
          Goods that are faulty, or that do not match what you ordered, are covered by the
          Australian Consumer Law. That sits alongside the warranty on the product:
        </p>
        <p className="border-l-4 border-primary pl-4">{WARRANTY_SUMMARY}.</p>
        <p>
          Message{" "}
          <a href={WHATSAPP_HREF} className="font-semibold underline">
            {WHATSAPP_NUMBER}
          </a>{" "}
          with your order details and we will sort the next step.
        </p>
      </div>
    </article>
  );
}
