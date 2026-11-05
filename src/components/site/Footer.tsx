import { Link } from "@tanstack/react-router";
import logo from "@/assets/comfort-mobility-logo.png";
import { WHATSAPP_HREF, WHATSAPP_NUMBER } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div className="md:col-span-1">
          <img src={logo} alt="Comfort Mobility" width={600} height={480} className="h-20 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-700">
            Wheelchairs and mobility equipment for customers across Australia. Prices in Australian
            dollars.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Shop</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                to="/shop"
                search={{ category: "electric-wheelchairs" }}
                className="hover:underline"
              >
                Electric wheelchairs
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                search={{ category: "manual-wheelchairs" }}
                className="hover:underline"
              >
                Manual wheelchairs
              </Link>
            </li>
            <li>
              <Link
                to="/shop"
                search={{ category: "childrens-wheelchairs" }}
                className="hover:underline"
              >
                Children&rsquo;s wheelchairs
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:underline">
                Full catalogue
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Comfort Mobility</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/about" hash="faq" className="hover:underline">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/refunds" className="hover:underline">
                Refunds
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:underline">
                Privacy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold">Talk to us</h2>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">
            Message us on WhatsApp. We help customers choose a chair and confirm delivery within
            Australia.
          </p>
          <a
            href={WHATSAPP_HREF}
            className="mt-3 inline-block text-sm font-semibold underline decoration-[#f88820] decoration-2 underline-offset-4"
          >
            {WHATSAPP_NUMBER}
          </a>
        </div>
      </div>
      <div className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 pb-24 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Comfort Mobility. Australia.</p>
          <p>All prices in AUD and include GST.</p>
        </div>
      </div>
    </footer>
  );
}
