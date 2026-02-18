"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const topLinks = [
  { href: "/", label: "Home" },
  { href: "/videos", label: "Videos" },
  { href: "/artist", label: "Artist" },
  { href: "/events", label: "Events" },
  { href: "/store", label: "Store" },
  { href: "/ai-radio", label: "AI Radio" },
  { href: "/contact", label: "Contact" },
  { href: "/more", label: "More" },
];

const moreLinks = [
  { href: "/lyrical-lab", label: "Lyrical Lab" },
  { href: "/sound-creation", label: "Sound Creation" },
  { href: "/sound-lab", label: "Sound Lab" },
  { href: "/ai-lab", label: "AI Lab" },
  { href: "/community", label: "Community" },
  { href: "/upload", label: "Upload" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div className="nav-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight">
            AI EMG
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {topLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link ${pathname === l.href ? "nav-link-active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden nav-link"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden mx-auto max-w-6xl px-4 pb-4">
            <div className="mobile-panel">
              <div className="grid gap-2">
                {topLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={`mobile-link ${pathname === l.href ? "mobile-link-active" : ""}`}
                  >
                    {l.label}
                  </Link>
                ))}

                <div className="mt-2 pt-2 border-t border-white/10">
                  <div className="text-xs uppercase tracking-wider text-white/60 px-2 mb-2">
                    More Hub Tiles
                  </div>
                  {moreLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={`mobile-link ${pathname === l.href ? "mobile-link-active" : ""}`}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
