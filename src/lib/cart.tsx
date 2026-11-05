import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { type Product } from "@/data/products";

const STORAGE_KEY = "comfort-mobility-cart";

export type CartLine = {
  id: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  width: number;
  height: number;
  qty: number;
};

type CartContextValue = {
  lines: CartLine[];
  count: number;
  total: number;
  add: (product: Product, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartLine[];
        if (Array.isArray(parsed)) setLines(parsed);
      }
    } catch {
      /* ignore a corrupt cart */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, ready]);

  const value = useMemo<CartContextValue>(() => {
    const count = lines.reduce((sum, line) => sum + line.qty, 0);
    const total = lines.reduce((sum, line) => sum + line.price * line.qty, 0);
    return {
      lines,
      count,
      total,
      add: (product, qty = 1) => {
        setLines((current) => {
          const existing = current.find((line) => line.id === product.id);
          if (!existing) {
            return [
              ...current,
              {
                id: product.id,
                slug: product.slug,
                name: product.name,
                price: product.price,
                image: product.image,
                width: product.width,
                height: product.height,
                qty,
              },
            ];
          }
          return current.map((line) =>
            line.id === product.id ? { ...line, qty: line.qty + qty } : line,
          );
        });
      },
      setQty: (id, qty) => {
        setLines((current) =>
          qty <= 0
            ? current.filter((line) => line.id !== id)
            : current.map((line) => (line.id === id ? { ...line, qty } : line)),
        );
      },
      remove: (id) => setLines((current) => current.filter((line) => line.id !== id)),
    };
  }, [lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) throw new Error("useCart must be used within CartProvider");
  return value;
}
