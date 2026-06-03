import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it Works — Cannabinoid Clinical" },
      { name: "description", content: "The four-step pathway to a legal Australian medical cannabis prescription with Cannabinoid Clinical." },
    ],
  }),
  component: HowItWorks,
});

const steps = [
  { n: "01", t: "Eligibility screening", d: "Complete a confidential 3-minute clinical questionnaire so we can determine whether plant medicine is an appropriate next step for your condition." },
  { n: "02", t: "Telehealth consultation", d: "Meet an AHPRA-registered doctor by video. They will review your history, discuss treatment goals and answer any questions." },
  { n: "03", t: "Prescription issued", d: "If clinically appropriate, your prescriber issues a script via the TGA Special Access Scheme (SAS-B) or under their Authorised Prescriber permit." },
  { n: "04", t: "Discreet delivery", d: "Your medicine is dispensed through our pharmacy partner and shipped Australia-wide in tamper-evident, unbranded packaging." },
];

function HowItWorks() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20">
      <header className="text-center">
        <div className="text-[11px] tracking-[0.4em] uppercase text-gold">The Pathway</div>
        <h1 className="font-display text-5xl mt-3">How it Works</h1>
        <div className="gold-rule w-24 mx-auto mt-6" />
      </header>
      <ol className="mt-16 space-y-12">
        {steps.map((s) => (
          <li key={s.n} className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-12">
            <div className="font-display text-6xl text-gold leading-none">{s.n}</div>
            <div>
              <h2 className="font-display text-3xl">{s.t}</h2>
              <p className="mt-3 text-muted-foreground leading-relaxed text-lg">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-16 text-center">
        <Link to="/e-prescription" className="btn-gold px-8 py-3.5 text-sm tracking-widest uppercase rounded-sm inline-block">
          Begin Eligibility Check
        </Link>
      </div>
    </div>
  );
}
