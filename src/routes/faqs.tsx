import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Cannabinoid Clinical" },
      { name: "description", content: "Common questions about accessing legal medical cannabis in Australia through Cannabinoid Clinical." },
    ],
  }),
  component: FAQs,
});

const faqs = [
  { q: "Is medical cannabis legal in Australia?", a: "Yes. Medical cannabis has been legal in Australia since 2016 and is accessed via the TGA Special Access Scheme or through Authorised Prescribers." },
  { q: "Do I need an existing diagnosis?", a: "Not necessarily. Our clinicians can review symptoms during your initial telehealth consultation and request supporting documents if needed." },
  { q: "How long does the process take?", a: "Most patients complete eligibility and consultation within 48 hours. Medicine is typically delivered within a further 1–2 business days." },
  { q: "Will it affect my driver's licence?", a: "THC-containing products may affect roadside drug screening. We will discuss this in detail during your consultation." },
  { q: "Can I claim it on Medicare or private health?", a: "Medical cannabis is not currently subsidised by Medicare. Some private health funds offer rebates on telehealth consultations." },
  { q: "What if I'm already seeing another prescriber?", a: "We are happy to coordinate with your existing GP or specialist with your written consent." },
];

function FAQs() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <header className="text-center mb-14">
        <div className="text-[11px] tracking-[0.4em] uppercase text-gold">Patient Information</div>
        <h1 className="font-display text-5xl mt-3">Frequently Asked</h1>
        <div className="gold-rule w-24 mx-auto mt-6" />
      </header>
      <div className="divide-y divide-border border-y border-border">
        {faqs.map((f) => (
          <details key={f.q} className="group py-6">
            <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
              <span className="font-display text-xl text-primary">{f.q}</span>
              <span className="text-gold text-2xl leading-none mt-1 group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="text-muted-foreground mt-4 leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
