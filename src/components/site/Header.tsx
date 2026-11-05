import { Link } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/comfort-mobility-logo.png";
import { useCart } from "@/lib/cart";
import { WHATSAPP_HREF, WHATSAPP_NUMBER } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { count } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="bg-black text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2 text-sm">
          <p>Australia-wide delivery · Prices in AUD</p>
          <a href={WHATSAPP_HREF} className="hidden font-medium sm:inline">
            {WHATSAPP_NUMBER}
          </a>
        </div>
      </div>
      <div className="border-b border-neutral-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <Link to="/" className="shrink-0" aria-label="Comfort Mobility home">
            <img
              src={logo}
              alt="Comfort Mobility"
              width={600}
              height={480}
              fetchPriority="high"
              className="h-16 w-auto md:h-20"
            />
          </Link>
          <nav className="hidden items-center gap-8 text-[0.95rem] font-medium lg:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-black/80 hover:text-black"
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{
                  className:
                    "text-black underline decoration-[#f88820] decoration-2 underline-offset-8",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/cart"
              aria-label={count > 0 ? `Cart, ${count} items` : "Cart"}
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-md hover:bg-neutral-100"
            >
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[11px] font-semibold text-black">
                  {count}
                </span>
              )}
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md hover:bg-neutral-100 lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-neutral-200 bg-white lg:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-5 py-2">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="border-b border-neutral-100 py-3 text-base font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
