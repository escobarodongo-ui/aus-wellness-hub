import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { WHATSAPP_HREF, WHATSAPP_NUMBER } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Comfort Mobility" },
      {
        name: "description",
        content: `Contact Comfort Mobility on WhatsApp ${WHATSAPP_NUMBER} about wheelchairs and mobility equipment in Australia.`,
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const text = [`Hello Comfort Mobility, my name is ${name || "a customer"}.`, message]
      .filter(Boolean)
      .join("\n\n");
    window.open(
      `${WHATSAPP_HREF}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-semibold">Contact</h1>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-neutral-800">
            Ask about a wheelchair, a warranty, or delivery anywhere in Australia. WhatsApp is the
            fastest way to reach us.
          </p>
          <dl className="mt-8 space-y-6">
            <div>
              <dt className="text-sm font-semibold">WhatsApp</dt>
              <dd className="mt-1">
                <a
                  href={WHATSAPP_HREF}
                  className="text-lg font-semibold underline decoration-[#f88820] decoration-2 underline-offset-4"
                >
                  {WHATSAPP_NUMBER}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold">Where we sell</dt>
              <dd className="mt-1 text-neutral-800">Australia. Prices in AUD, including GST.</dd>
            </div>
            <div>
              <dt className="text-sm font-semibold">Hours</dt>
              <dd className="mt-1 text-neutral-800">
                Monday to Friday, 9am–5pm AEST. We reply to WhatsApp messages in business hours.
              </dd>
            </div>
          </dl>
        </div>
        <form onSubmit={onSubmit} className="border border-neutral-200 p-6 md:p-8">
          <h2 className="text-xl font-semibold">Send a message</h2>
          <p className="mt-2 text-sm text-neutral-700">
            This opens WhatsApp with your note filled in. Nothing is stored on this website.
          </p>
          <label className="mt-6 block text-sm font-medium">
            Name
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-base font-normal outline-none focus:border-black"
              autoComplete="name"
            />
          </label>
          <label className="mt-4 block text-sm font-medium">
            Message
            <textarea
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              rows={6}
              className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2 text-base font-normal outline-none focus:border-black"
            />
          </label>
          <button
            type="submit"
            className="mt-6 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-black hover:bg-[#e07812]"
          >
            Send on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
