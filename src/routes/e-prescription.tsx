import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/e-prescription")({
  head: () => ({
    meta: [
      { title: "E-Prescription Request — Cannabinoid Clinical" },
      { name: "description", content: "Apply for a legal medical cannabis e-prescription in Australia. Reviewed by AHPRA doctors." },
    ],
  }),
  component: EPrescription,
});

function EPrescription() {
  const [sent, setSent] = useState(false);
  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <header className="text-center">
        <div className="text-[11px] tracking-[0.4em] uppercase text-gold">Patient Intake</div>
        <h1 className="font-display text-5xl mt-3">E-Prescription Request</h1>
        <div className="gold-rule w-24 mx-auto mt-6" />
        <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
          Submit your details below. An Australian-registered clinician will review your case and
          book your telehealth consultation within one business day.
        </p>
      </header>

      {sent ? (
        <div className="mt-14 bg-card border border-border rounded-sm p-10 text-center">
          <h2 className="font-display text-3xl text-primary">Request received</h2>
          <p className="text-muted-foreground mt-3">
            Thank you. A member of our clinical team will be in touch shortly via the contact details provided.
          </p>
        </div>
      ) : (
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="mt-14 grid gap-6 bg-card border border-border rounded-sm p-8 md:p-12"
        >
          <Field label="Full name"><input required className="input" /></Field>
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="Email"><input required type="email" className="input" /></Field>
            <Field label="Mobile"><input required type="tel" className="input" /></Field>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Field label="State"><select className="input"><option>NSW</option><option>VIC</option><option>QLD</option><option>WA</option><option>SA</option><option>TAS</option><option>ACT</option><option>NT</option></select></Field>
            <Field label="Date of birth"><input required type="date" className="input" /></Field>
          </div>
          <Field label="Primary condition">
            <select className="input">
              <option>Chronic pain</option>
              <option>Insomnia</option>
              <option>Anxiety</option>
              <option>Nausea / appetite</option>
              <option>Other</option>
            </select>
          </Field>
          <Field label="Briefly describe your symptoms">
            <textarea rows={4} className="input" />
          </Field>
          <label className="flex items-start gap-3 text-sm text-muted-foreground">
            <input type="checkbox" required className="mt-1" />
            <span>I confirm I am an Australian resident over 18 and consent to a telehealth medical consultation.</span>
          </label>
          <button type="submit" className="btn-gold px-8 py-3.5 text-sm tracking-widest uppercase rounded-sm justify-self-start">
            Submit Request
          </button>
        </form>
      )}

      <style>{`
        .input { width: 100%; background: var(--color-background); border: 1px solid var(--color-border);
                 padding: 0.7rem 0.9rem; font-family: var(--font-sans); color: var(--color-foreground); border-radius: 2px; }
        .input:focus { outline: 2px solid var(--color-gold); outline-offset: 1px; }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
