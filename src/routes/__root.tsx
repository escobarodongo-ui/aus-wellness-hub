import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import logo from "@/assets/comfort-mobility-logo.png";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { FloatingActions } from "../components/site/FloatingActions";
import { CartProvider } from "../lib/cart";

const description =
  "Comfort Mobility is an Australian shop for wheelchairs and mobility equipment. Prices in AUD, with the warranty stated on every product.";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-white px-5">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-semibold text-black">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-neutral-700">
          That page is not part of the Comfort Mobility shop.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-black hover:bg-[#e07812]"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  const router = useRouter();
  console.error(error);
  useEffect(() => {
    const reported = error instanceof Error ? error : new Error("This page didn't load");
    reportLovableError(reported, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-white px-5">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight">This page didn&rsquo;t load</h1>
        <p className="mt-2 text-sm text-neutral-700">
          Something went wrong. You can try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-black hover:bg-[#e07812]"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-black bg-white px-4 py-2 text-sm font-medium"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Comfort Mobility — Wheelchairs in Australia" },
      { name: "description", content: description },
      { name: "author", content: "Comfort Mobility" },
      { property: "og:title", content: "Comfort Mobility — Wheelchairs in Australia" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Comfort Mobility — Wheelchairs in Australia" },
      { name: "twitter:description", content: description },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: logo },
      { rel: "preload", as: "image", href: logo, fetchPriority: "high" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <div className="flex min-h-screen flex-col bg-white">
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
          <FloatingActions />
        </div>
      </CartProvider>
    </QueryClientProvider>
  );
}
