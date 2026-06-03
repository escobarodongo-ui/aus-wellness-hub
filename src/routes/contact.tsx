import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Cannabinoid Clinical" },
      { name: "description", content: "Reach the Cannabinoid Clinical patient care team in Barangaroo, Sydney." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20">
      <header className="text-center mb-14">
        <div className="text-[11px] tracking-[0.4em] uppercase text-gold">Patient Care</div>
        <h1 className="font-display text-5xl mt-3">Contact Us</h1>
        <div className="gold-rule w-24 mx-auto mt-6" />
      </header>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          {[
            { I: MapPin, t: "Clinic", d: "Level 35, Tower One, Barangaroo\n100 Barangaroo Avenue\nSydney NSW 2000" },
            { I: Phone, t: "Telephone", d: "+61 2 8005 4112" },
            { I: Mail, t: "Email", d: "care@cannabinoidclinical.au" },
            { I: Clock, t: "Hours", d: "Monday – Friday · 8am – 7pm AEST\nSaturday · 9am – 1pm AEST" },
          ].map(({ I, t, d }) => (
            <div key={t} className="flex gap-5 border-b border-border pb-6">
              <I className="h-6 w-6 text-gold shrink-0 mt-1" />
              <div>
                <div className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground">{t}</div>
                <div className="font-display text-xl mt-1 whitespace-pre-line">{d}</div>
              </div>
            </div>
          ))}
        </div>
        <form className="bg-card border border-border rounded-sm p-8 md:p-10 grid gap-5">
          <h2 className="font-display text-2xl">Send a message</h2>
          <input placeholder="Your name" className="input" />
          <input placeholder="Email" type="email" className="input" />
          <textarea placeholder="How can we help?" rows={6} className="input" />
          <button className="btn-gold px-8 py-3.5 text-sm tracking-widest uppercase rounded-sm justify-self-start">Send</button>
          <style>{`.input{width:100%;background:var(--color-background);border:1px solid var(--color-border);padding:.7rem .9rem;font-family:var(--font-sans);color:var(--color-foreground);border-radius:2px}.input:focus{outline:2px solid var(--color-gold);outline-offset:1px}`}</style>
        </form>
      </div>
    </div>
  );
}
