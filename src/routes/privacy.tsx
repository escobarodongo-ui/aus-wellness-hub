import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_HREF, WHATSAPP_NUMBER } from "@/lib/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy — Comfort Mobility" }] }),
  component: Privacy,
});

function Privacy() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-12 md:py-16">
      <h1 className="text-4xl font-semibold">Privacy</h1>
      <div className="mt-8 space-y-4 text-neutral-800">
        <p>
          Comfort Mobility handles personal information in line with the Australian Privacy
          Principles and the Privacy Act 1988 (Cth).
        </p>
        <p>
          If you message us about a product, we use your name, phone number, and the details you
          send to reply, confirm stock, and arrange delivery. We do not sell that information.
        </p>
        <p>
          The cart on this website stays in your browser. It is not sent to us until you choose to
          continue the enquiry on WhatsApp.
        </p>
        <p>
          To ask for access to information we hold, or to ask us to correct it, message{" "}
          <a href={WHATSAPP_HREF} className="font-semibold underline">
            {WHATSAPP_NUMBER}
          </a>
          .
        </p>
      </div>
    </article>
  );
}
