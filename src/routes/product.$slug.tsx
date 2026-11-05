import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { categoryName, formatAud, getProduct, warrantyFor } from "@/data/products";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — Comfort Mobility` },
          {
            name: "description",
            content: `${loaderData.name}. ${formatAud(loaderData.price)} AUD. ${warrantyFor(loaderData.category, loaderData.condition).label}.`,
          },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-5 py-24 text-center">
      <h1 className="text-3xl font-semibold">Product not found</h1>
      <Link to="/shop" className="mt-6 inline-block text-sm font-semibold underline">
        Back to shop
      </Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="mx-auto max-w-2xl px-5 py-24 text-center">
      <h1 className="text-3xl font-semibold">Something went wrong</h1>
      <p className="mt-3 text-neutral-700">
        {error instanceof Error ? error.message : "Please try again."}
      </p>
      <button
        onClick={reset}
        className="mt-6 rounded-md bg-primary px-5 py-3 text-sm font-semibold text-black"
      >
        Try again
      </button>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const product = Route.useLoaderData();
  const warranty = warrantyFor(product.category, product.condition);
  const { add } = useCart();
  const [added, setAdded] = useState(false);
  const paragraphs = product.description
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 md:py-16">
      <Link
        to="/shop"
        search={{ category: product.category }}
        className="text-sm font-medium hover:underline"
      >
        ← {categoryName(product.category)}
      </Link>
      <div className="mt-6 grid items-start gap-10 md:grid-cols-2 md:gap-14">
        <div className="bg-[#f6f6f6]">
          <img
            src={product.image}
            alt={product.name}
            width={product.width}
            height={product.height}
            fetchPriority="high"
            className="h-auto w-full object-contain"
          />
        </div>
        <div>
          <p className="text-sm font-medium text-neutral-600">{categoryName(product.category)}</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{product.name}</h1>
          <p className="mt-6 text-3xl font-semibold tracking-tight">
            {formatAud(product.price)}{" "}
            <span className="text-base font-medium text-neutral-600">AUD</span>
          </p>
          <p className="mt-1 text-sm text-neutral-700">Price includes GST.</p>

          <div className="mt-6 flex gap-4 border border-neutral-200 p-4">
            <span className="w-1 shrink-0 bg-primary" aria-hidden="true" />
            <div>
              <p className="font-semibold">{warranty.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-800">{warranty.note}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              add(product, 1);
              setAdded(true);
            }}
            className="mt-8 inline-flex rounded-md bg-primary px-6 py-3 text-sm font-semibold text-black hover:bg-[#e07812]"
          >
            {added ? "Added to cart" : "Add to cart"}
          </button>
          {added && (
            <Link to="/cart" className="ml-4 text-sm font-semibold underline">
              View cart
            </Link>
          )}

          {paragraphs.length > 0 && (
            <div className="mt-10 space-y-4 border-t border-neutral-200 pt-8 text-[0.98rem] leading-relaxed text-neutral-800">
              <h2 className="text-lg font-semibold text-black">About this product</h2>
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
