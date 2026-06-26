import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <span className="font-heading font-extrabold text-xl">
            PawCraft<span className="text-[#7FB69A]">Den</span>
          </span>
          <p className="text-[13px] text-white/60 mt-3 leading-relaxed">
            Independent dog care and training reviews for owners who want real research, not guesswork.
          </p>
        </div>
        <div>
          <h4 className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/50 mb-3">Explore</h4>
          <ul className="flex flex-col gap-2 text-[13px]">
            <li><Link href="/training-guides" className="hover:text-[#7FB69A]">Training Guides</Link></li>
            <li><Link href="/the-den" className="hover:text-[#7FB69A]">The Den</Link></li>
            <li><Link href="/paw-notes" className="hover:text-[#7FB69A]">Paw Notes</Link></li>
            <li><Link href="/reach-us" className="hover:text-[#7FB69A]">Reach Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/50 mb-3">Categories</h4>
          <ul className="flex flex-col gap-2 text-[13px]">
            {siteConfig.categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/best/${c.slug}`} className="hover:text-[#7FB69A]">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/50 mb-3">Legal</h4>
          <ul className="flex flex-col gap-2 text-[13px]">
            {siteConfig.footerLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className="hover:text-[#7FB69A]">{l.label}</Link></li>
            ))}
          </ul>
          <p className="text-[12px] text-white/50 mt-3">{siteConfig.email}</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-[12px] text-white/50">
        © 2026 PawCraftDen. All rights reserved. As an Amazon Associate, we earn from qualifying purchases.
      </div>
    </footer>
  );
}
