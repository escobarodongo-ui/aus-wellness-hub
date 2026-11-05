import { Link } from "@tanstack/react-router";
import { categoryName, formatAud, warrantyFor, type Product } from "@/data/products";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const warranty = warrantyFor(product.category, product.condition);
  return (
    <Link to="/product/$slug" params={{ slug: product.slug }} className="group flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-[#f6f6f6]">
        <img
          src={product.image}
          alt={product.name}
          width={product.width}
          height={product.height}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          className="absolute inset-0 h-full w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col pt-4">
        <p className="text-xs font-medium text-neutral-600">{categoryName(product.category)}</p>
        <h3 className="mt-1 text-base font-semibold leading-snug text-black group-hover:underline">
          {product.name}
        </h3>
        <p className="mt-3 text-lg font-semibold tracking-tight">
          {formatAud(product.price)}
          <span className="ml-1 text-xs font-medium text-neutral-600">AUD</span>
        </p>
        <p className="mt-1 text-sm text-neutral-800">{warranty.label}</p>
      </div>
    </Link>
  );
}
