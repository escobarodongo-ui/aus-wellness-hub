import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Cannabinoid Clinical" },
      { name: "description", content: "Cannabinoid Clinical is a Sydney-based apothecary devoted to the considered use of plant medicine in Australian healthcare." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-20">
      <header className="text-center">
        <div className="text-[11px] tracking-[0.4em] uppercase text-gold">Our Story</div>
        <h1 className="font-display text-5xl mt-3">About Cannabinoid Clinical</h1>
        <div className="gold-rule w-24 mx-auto mt-6" />
      </header>
      <div className="mt-12 space-y-6 text-lg leading-relaxed text-foreground/85">
        <p>
          Cannabinoid Clinical was founded in Sydney in 2024 by a small team of AHPRA-registered
          clinicians and pharmacists who saw a need for a more considered, more honest approach to
          plant medicine in Australian healthcare.
        </p>
        <p>
          We are not a dispensary chasing volume. We are an apothecary &mdash; one that takes the time
          to understand a patient&rsquo;s symptoms, history, and goals before recommending a regimen.
          Every product on our shelf has been chosen on clinical merit and verified by an independent lab.
        </p>
        <p>
          Our consultations operate under the Therapeutic Goods Administration&rsquo;s Special Access
          Scheme (Category B) and Authorised Prescriber pathways, with dispensing handled by our
          pharmacy partner in New South Wales. Every prescription is the product of a real conversation
          with a real doctor.
        </p>
        <p className="font-display text-2xl italic text-primary border-l-2 border-gold pl-6 my-10">
          Medicine should feel like medicine &mdash; quiet, exact, and human.
        </p>
        <p>
          If you are a patient, a referrer, or simply curious, we welcome you to reach out. Our door
          in Barangaroo is open.
        </p>
      </div>
    </article>
  );
}
