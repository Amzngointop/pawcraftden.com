"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PawPrint, ChevronDown } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const pathname = usePathname();
  const showTopPicks = pathname === "/";

  return (
    <header className="bg-navBg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="w-8 h-8 flex items-center justify-center bg-accent text-white rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[14px] rounded-br-[14px]">
            <PawPrint size={18} />
          </span>
          <span className="flex flex-col">
            <span className="font-heading font-extrabold text-[1.45rem] tracking-[0.02em] leading-none">
              <span className="text-textPrimary">PawCraft</span>
              <span className="text-accent">Den</span>
            </span>
            <span className="hidden sm:block text-[10px] font-medium uppercase tracking-[0.14em] text-muted">
              Dog Care &amp; Training
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {siteConfig.navLinks.map((link) =>
            link.isMega ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
              >
                <button className="flex items-center gap-1 text-[13px] font-medium text-textPrimary hover:text-accent transition-colors">
                  {link.label}
                  <ChevronDown size={14} />
                </button>
                {megaOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[560px]">
                    <div className="bg-white border border-purple-200 rounded-lg shadow-lg p-5 grid grid-cols-3 gap-3">
                      {siteConfig.categories.map((c) => (
                        <Link
                          key={c.slug}
                          href={`/best/${c.slug}`}
                          className="text-[13px] text-textSecondary hover:text-accent transition-colors"
                        >
                          {c.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium text-textPrimary hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {showTopPicks && (
          <div className="hidden md:block">
            <a
              href="#top-rated"
              className="inline-flex items-center gap-2 bg-accent text-white text-[13px] font-medium px-[22px] py-2.5 rounded-pill hover:bg-accentDark hover:-translate-y-px active:scale-[0.98] transition-all duration-150"
            >
              Top Picks ↓
            </a>
          </div>
        )}

        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-divider bg-bg px-4 py-4 flex flex-col gap-4">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.isMega ? "/#top-rated" : link.href}
              className="text-[14px] font-medium text-textPrimary"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
