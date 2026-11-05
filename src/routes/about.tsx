import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { products, WARRANTY_SUMMARY } from "@/data/products";
import { WHATSAPP_HREF, WHATSAPP_NUMBER } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Comfort Mobility" },
      {
        name: "description",
        content:
          "Comfort Mobility is an Australian wheelchair shop. Read how we sell, deliver, and warrant mobility equipment.",
      },
    ],
  }),
  component: About,
});

const faqs = [
  {
    q: "Where does Comfort Mobility sell?",
    a: "We are based in Australia and supply customers across the country. Prices on this site are in Australian dollars and include GST.",
  },
  {
    q: "What warranty comes with a product?",
    a: `${WARRANTY_SUMMARY}. The warranty for the item you are looking at is also shown on its product page.`,
  },
  {
    q: "Do you sell electric and manual wheelchairs?",
    a: "Yes. The shop includes new and used electric wheelchairs, manual wheelchairs, children's wheelchairs, and other mobility equipment.",
  },
  {
    q: "How do I ask about a chair?",
    a: `Message us on WhatsApp at ${WHATSAPP_NUMBER}. The WhatsApp button stays on the screen while you browse, including on your phone.`,
  },
  {
    q: "How does an order work?",
    a: "Add the products you want to the cart, then send the list on WhatsApp. We confirm availability, warranty, and delivery before anything leaves us.",
  },
  {
    q: "Can I return something?",
    a: "Contact us within 14 days of delivery if an unused item is not right. Faulty goods are handled under the Australian Consumer Law, alongside the warranty stated on the product.",
  },
];

function About() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-12 md:py-16">
      <p className="text-sm font-semibold">Comfort Mobility</p>
      <h1 className="mt-3 text-4xl font-semibold">About us</h1>
      <div className="mt-8 space-y-5 text-lg leading-relaxed text-neutral-800">
        <p>
          Comfort Mobility is an Australian shop for wheelchairs and mobility equipment. The
          catalogue covers electric wheelchairs, manual wheelchairs, children&rsquo;s chairs, and
          related gear, with {products.length} products priced in Australian dollars.
        </p>
        <p>
          We keep the buying path straightforward. Each product shows its name, its price in AUD,
          and the warranty that applies. If you want help comparing chairs, message us on WhatsApp
          and we will talk it through.
        </p>
        <p>
          Delivery is arranged within Australia. We confirm stock before dispatch so the chair that
          arrives is the one you asked for.
        </p>
      </div>

      <section id="faq" className="mt-16 scroll-mt-28">
        <h2 className="text-3xl font-semibold">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="mt-6 border-t border-neutral-200">
          {faqs.map((item, index) => (
            <AccordionItem key={item.q} value={`faq-${index}`}>
              <AccordionTrigger className="py-4 text-base font-semibold hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-neutral-800">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-8 text-sm text-neutral-700">
          Still deciding?{" "}
          <a href={WHATSAPP_HREF} className="font-semibold underline">
            Message {WHATSAPP_NUMBER} on WhatsApp
          </a>
          .
        </p>
      </section>
    </article>
  );
}
