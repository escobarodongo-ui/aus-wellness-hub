export type Product = {
  id: string;
  slug: string;
  name: string;
  category: "flower" | "vape" | "oil" | "edible";
  thc?: string;
  cbd?: string;
  strain?: "Indica" | "Sativa" | "Hybrid";
  price: number;
  image: string;
  description: string;
};

import flower from "@/assets/cat-flower.jpg";
import vape from "@/assets/cat-vape.jpg";
import oil from "@/assets/cat-oil.jpg";
import edible from "@/assets/cat-edibles.jpg";

export const categories = [
  { slug: "flower", name: "THC Flower", image: flower, blurb: "Hand-cured medicinal flower from licensed Australian cultivators." },
  { slug: "vape", name: "Vapes & Cartridges", image: vape, blurb: "Precision dose vaporizers and 510-thread cartridges." },
  { slug: "oil", name: "Oils & Tinctures", image: oil, blurb: "Full-spectrum CBD and balanced THC:CBD oils." },
  { slug: "edible", name: "Edibles & Lozenges", image: edible, blurb: "Slow-release confections crafted in our Sydney lab." },
] as const;

export const products: Product[] = [
  { id: "p1", slug: "harlequin-flower-10g", name: "Harlequin Flower", category: "flower", strain: "Sativa", thc: "12%", cbd: "8%", price: 199, image: flower,
    description: "A gentle daytime cultivar with a 1:1 leaning profile. Earthy, citrus-forward, suitable for patients new to inhaled therapy." },
  { id: "p2", slug: "northern-lights-flower-10g", name: "Northern Lights", category: "flower", strain: "Indica", thc: "22%", cbd: "<1%", price: 245, image: flower,
    description: "A long-trusted indica selection. Resinous, sweet, recommended for evening pain and sleep support." },
  { id: "p3", slug: "afghani-kush-flower-10g", name: "Afghani Kush", category: "flower", strain: "Indica", thc: "20%", cbd: "<1%", price: 230, image: flower,
    description: "Deep, hash-forward terpenes with a heavy myrcene profile. For chronic discomfort." },
  { id: "p4", slug: "calm-vape-cartridge", name: "Calm 1:1 Cartridge", category: "vape", price: 149, image: vape, thc: "300mg", cbd: "300mg",
    description: "Balanced 1:1 distillate cartridge in CO2-extracted hemp terpenes. 0.5g." },
  { id: "p5", slug: "rest-vape-cartridge", name: "Rest Indica Cartridge", category: "vape", price: 165, image: vape, thc: "500mg",
    description: "Indica-leaning live resin cartridge. Linalool-rich for nighttime use." },
  { id: "p6", slug: "balance-cbd-oil-30ml", name: "Balance CBD 1000mg Oil", category: "oil", price: 189, image: oil, cbd: "1000mg",
    description: "Full-spectrum CBD in MCT carrier. Calibrated dropper for accurate titration." },
  { id: "p7", slug: "duo-thc-cbd-oil-30ml", name: "Duo 10:10 THC:CBD Oil", category: "oil", price: 235, image: oil, thc: "300mg", cbd: "300mg",
    description: "Our most prescribed oil. Balanced cannabinoid profile in cold-pressed olive oil." },
  { id: "p8", slug: "noir-chocolate-100mg", name: "Noir 70% Chocolate", category: "edible", price: 85, image: edible, thc: "100mg",
    description: "Single-origin Tasmanian dark chocolate. 10mg per square, 10 squares per bar." },
  { id: "p9", slug: "pastille-cbd-lozenges", name: "Pastille CBD Lozenges", category: "edible", price: 65, image: edible, cbd: "250mg",
    description: "Mandarin & honey pastilles for sustained release. 25mg per pastille." },
];
