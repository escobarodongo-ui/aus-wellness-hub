import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero-botanical.jpg";
import { categories, products } from "@/data/products";
import { ProductCard } from "@/components/site/ProductCard";
import { Leaf, ShieldCheck, Stethoscope, Truck } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cannabinoid Clinical — Sydney Medical Cannabis Apothecary" },
      { name: "description", content: "Doctor-approved access to medical cannabis flower, vapes, oils and edibles for Australian patients. Based in Sydney." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src={hero} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/55 to-primary/20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-32 md:py-44 text-primary-foreground">
          <div className="max-w-2xl">
            <div className="text-[11px] tracking-[0.4em] uppercase text-gold mb-6">Sydney · Clinical Apothecary</div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-balance">
              Plant medicine,<br />
              <span className="italic text-gold">prescribed with care.</span>
            </h1>
            <p className="mt-6 text-lg opacity-90 max-w-xl leading-relaxed">
              Australia&rsquo;s discreet, doctor-led pathway to lawful medical cannabis &mdash;
              from initial consultation to apothecary-grade product delivered to your door.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/e-prescription" className="btn-gold px-7 py-3.5 text-sm tracking-widest uppercase rounded-sm">
                Request E-Prescription
              </Link>
              <Link to="/how-it-works" className="btn-outline-cream px-7 py-3.5 text-sm tracking-widest uppercase rounded-sm">
                How it Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-secondary/60">
        <div className="mx-auto max-w-7xl px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { I: Stethoscope, t: "AHPRA-registered doctors" },
            { I: ShieldCheck, t: "TGA-compliant pathway" },
            { I: Leaf, t: "Pharmaceutical-grade product" },
            { I: Truck, t: "Discreet AU-wide delivery" },
          ].map(({ I, t }) => (
            <div key={t} className="flex flex-col items-center gap-2">
              <I className="h-6 w-6 text-gold" />
              <span className="text-xs tracking-widest uppercase text-foreground/80">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-4xl px-4 py-24 text-center">
        <div className="text-[11px] tracking-[0.4em] uppercase text-gold">Our Apothecary</div>
        <h2 className="font-display text-4xl md:text-5xl mt-4 text-balance">
          A Sydney clinic dedicated to the considered use of cannabinoid medicine.
        </h2>
        <div className="gold-rule w-24 mx-auto my-8" />
        <p className="text-muted-foreground leading-relaxed text-lg">
          Cannabinoid Clinical is a Barangaroo-based practice connecting Australians with experienced
          prescribers and curated, lab-verified medicines. We pair each patient with a clinician, refine
          dosing carefully, and dispense from our own pharmacy partner &mdash; nothing more, nothing less.
        </p>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-[11px] tracking-[0.4em] uppercase text-gold">The Collection</div>
            <h2 className="font-display text-4xl mt-2">Browse by formulary</h2>
          </div>
          <Link to="/shop" className="hidden md:inline text-sm tracking-widest uppercase text-primary border-b border-gold pb-1">View Full Shop</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c) => (
            <Link key={c.slug} to="/shop" className="group block">
              <div className="aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                <img src={c.image} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="font-display text-2xl mt-4">{c.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{c.blurb}</p>
              <span className="inline-block mt-3 text-xs tracking-widest uppercase text-gold">Explore →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="bg-secondary/40 border-y border-border py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <div className="text-[11px] tracking-[0.4em] uppercase text-gold">Most Prescribed</div>
            <h2 className="font-display text-4xl mt-2">Patient favourites</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {products.slice(0, 4).map((p) => <ProductCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-4 py-24">
        <div className="text-center mb-14">
          <div className="text-[11px] tracking-[0.4em] uppercase text-gold">The Process</div>
          <h2 className="font-display text-4xl mt-2">From consultation to delivery</h2>
        </div>
        <ol className="grid md:grid-cols-4 gap-10">
          {[
            ["01", "Eligibility", "Complete our 3-minute clinical questionnaire."],
            ["02", "Consult", "Telehealth appointment with an AHPRA prescriber."],
            ["03", "Prescription", "Receive an SAS-B or Authorised Prescriber script."],
            ["04", "Delivery", "Dispensed discreetly to your door within 48 hours."],
          ].map(([n, t, d]) => (
            <li key={n} className="text-center">
              <div className="font-display text-5xl text-gold">{n}</div>
              <div className="gold-rule w-12 mx-auto my-4" />
              <h3 className="font-display text-2xl">{t}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{d}</p>
            </li>
          ))}
        </ol>
        <div className="text-center mt-12">
          <Link to="/e-prescription" className="btn-gold px-8 py-3.5 text-sm tracking-widest uppercase rounded-sm inline-block">
            Begin Your Assessment
          </Link>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="text-gold text-2xl mb-6">&ldquo; &rdquo;</div>
          <blockquote className="font-display text-2xl md:text-3xl leading-snug italic">
            After years of trial and error with chronic pain, the team at Cannabinoid Clinical
            finally helped me find a regimen that lets me sleep. The care has been genuinely clinical.
          </blockquote>
          <div className="mt-8 text-xs tracking-[0.3em] uppercase opacity-80">— Verified Patient, NSW</div>
        </div>
      </section>
    </>
  );
}
