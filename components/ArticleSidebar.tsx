"use client";

import { useEffect, useState } from "react";

export interface SidebarLink {
  id: string;
  label: string;
}

export default function ArticleSidebar({ links, heading }: { links: SidebarLink[]; heading: string }) {
  const [active, setActive] = useState<string>(links[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [links]);

  return (
    <>
      <nav className="hidden lg:block w-[200px] shrink-0">
        <div className="sticky top-24">
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-accent">{heading}</span>
          <ul className="mt-3 flex flex-col gap-2 border-l border-divider">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`block pl-3 -ml-px text-[13px] leading-snug py-1 border-l-[3px] whitespace-normal break-words transition-colors ${
                    active === l.id
                      ? "border-accent text-accent font-medium"
                      : "border-transparent text-textSecondary hover:text-accent"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <nav className="lg:hidden flex gap-2 overflow-x-auto pb-2 mb-4 -mx-4 px-4">
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className="shrink-0 text-[12px] px-3 py-1.5 rounded-pill border border-purple-200 text-textSecondary whitespace-nowrap"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </>
  );
}
