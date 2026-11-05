import { createFileRoute, Link } from "@tanstack/react-router";
import { formatAud } from "@/data/products";
import { useCart } from "@/lib/cart";
import { WHATSAPP_HREF } from "@/lib/site";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Cart — Comfort Mobility" },
      {
        name: "description",
        content: "Review wheelchairs and mobility equipment in your Comfort Mobility cart.",
      },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { lines, total, setQty, remove } = useCart();

  const message = [
    "Hello Comfort Mobility, I would like to enquire about:",
    ...lines.map(
      (line) => `- ${line.name} × ${line.qty} — ${formatAud(line.price * line.qty)} AUD`,
    ),
    `Total ${formatAud(total)} AUD`,
  ].join("\n");

  return (
    <div className="mx-auto max-w-3xl px-5 py-12 md:py-16">
      <h1 className="text-4xl font-semibold">Cart</h1>
      {lines.length === 0 ? (
        <div className="mt-8 border border-neutral-200 p-8">
          <p className="text-neutral-800">Your cart is empty.</p>
          <Link
            to="/shop"
            className="mt-6 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-black hover:bg-[#e07812]"
          >
            Browse the shop
          </Link>
        </div>
      ) : (
        <div className="mt-8">
          <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
            {lines.map((line, index) => (
              <li key={line.id} className="flex gap-4 py-5">
                <Link
                  to="/product/$slug"
                  params={{ slug: line.slug }}
                  className="h-24 w-24 shrink-0 bg-[#f6f6f6]"
                >
                  <img
                    src={line.image}
                    alt=""
                    width={line.width}
                    height={line.height}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-contain"
                  />
                </Link>
                <div className="min-w-0 flex-1">
                  <Link
                    to="/product/$slug"
                    params={{ slug: line.slug }}
                    className="font-semibold leading-snug hover:underline"
                  >
                    {line.name}
                  </Link>
                  <p className="mt-1 text-sm text-neutral-700">{formatAud(line.price)} AUD each</p>
                  <div className="mt-3 flex items-center gap-3">
                    <label className="text-sm">
                      <span className="sr-only">Quantity for {line.name}</span>
                      <input
                        type="number"
                        min={1}
                        max={20}
                        value={line.qty}
                        onChange={(event) => setQty(line.id, Number(event.target.value))}
                        className="w-16 rounded-md border border-neutral-300 px-2 py-1 text-sm"
                      />
                    </label>
                    <button
                      type="button"
                      onClick={() => remove(line.id)}
                      className="text-sm underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <p className="shrink-0 font-semibold">{formatAud(line.price * line.qty)}</p>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-neutral-700">Total, including GST</p>
            <p className="text-2xl font-semibold">
              {formatAud(total)} <span className="text-sm font-medium">AUD</span>
            </p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-neutral-700">
            Send this list on WhatsApp and we will confirm availability and delivery before anything
            is dispatched.
          </p>
          <a
            href={`${WHATSAPP_HREF}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-md bg-primary px-5 py-3 text-sm font-semibold text-black hover:bg-[#e07812]"
          >
            Continue on WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}
