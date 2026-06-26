import Link from "next/link";

export interface RelatedItem {
  href: string;
  category: string;
  title: string;
}

export default function RelatedSidebar({ items, heading }: { items: RelatedItem[]; heading: string }) {
  return (
    <aside className="hidden lg:block w-[220px] shrink-0">
      <div className="sticky top-24">
        <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-accent">{heading}</span>
        <ul className="mt-3 flex flex-col gap-4">
          {items.map((item) => (
            <li key={item.href} className="pb-4 border-b border-dashed border-divider last:border-0">
              <span className="block text-[10px] font-medium uppercase tracking-[0.1em] text-accent mb-1">
                {item.category}
              </span>
              <Link href={item.href} className="text-[13px] font-medium text-textPrimary hover:text-accent leading-snug">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
