import { Link } from "@tanstack/react-router";
import { ShoppingBag, Search, User, Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How it Works" },
  { to: "/shop", label: "Shop" },
  { to: "/e-prescription", label: "E-Prescription" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center justify-between">
          <span className="tracking-[0.18em] uppercase">Complimentary express delivery on orders over $300 AUD</span>
          <div className="hidden md:flex gap-6 text-[11px] tracking-widest uppercase opacity-90">
            <Link to="/faqs">FAQs</Link>
            <Link to="/contact">Clinic Support</Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 h-20 flex items-center justify-between gap-6">
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          <Menu className="h-5 w-5" />
        </button>
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Cannabinoid Clinical" className="h-11 w-11" />
          <div className="leading-none">
            <div className="font-display text-2xl text-primary">Cannabinoid Clinical</div>
            <div className="text-[10px] tracking-[0.32em] uppercase text-muted-foreground">Sydney · Est. 2024</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm tracking-wide">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="text-foreground/70 hover:text-primary"><Search className="h-5 w-5" /></button>
          <Link to="/account" aria-label="Account" className="text-foreground/70 hover:text-primary"><User className="h-5 w-5" /></Link>
          <Link to="/cart" aria-label="Cart" className="relative text-foreground/70 hover:text-primary">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-gold text-gold-foreground text-[10px] flex items-center justify-center">0</span>
          </Link>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-3 flex flex-col gap-3">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-sm">{n.label}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
