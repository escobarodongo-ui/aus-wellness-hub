import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="" className="h-10 w-10" />
            <span className="font-display text-2xl">Cannabinoid Clinical</span>
          </div>
          <p className="mt-4 text-sm opacity-80 leading-relaxed">
            A Sydney-based clinical apothecary devoted to safe, doctor-approved access to plant medicine for Australian patients.
          </p>
        </div>
        <div>
          <h4 className="font-display text-xl text-gold mb-4">Apothecary</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/how-it-works">How it Works</Link></li>
            <li><Link to="/e-prescription">E-Prescription</Link></li>
            <li><Link to="/about">Our Story</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-xl text-gold mb-4">Patient Care</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/refunds">Refunds & Returns</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-xl text-gold mb-4">Clinic</h4>
          <address className="not-italic text-sm opacity-90 leading-relaxed">
            Cannabinoid Clinical Pty Ltd<br />
            Level 35, Tower One, Barangaroo<br />
            100 Barangaroo Avenue<br />
            Sydney NSW 2000, Australia<br /><br />
            <span className="text-gold">+61 2 8005 4112</span><br />
            care@cannabinoidclinical.au
          </address>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs opacity-70">
          <p>© {new Date().getFullYear()} Cannabinoid Clinical Pty Ltd · ABN 00 000 000 000</p>
          <p>For Australian patients with a valid medical prescription. Schedule 8 medicine.</p>
        </div>
      </div>
    </footer>
  );
}
