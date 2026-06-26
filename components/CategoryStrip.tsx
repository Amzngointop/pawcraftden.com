import Link from "next/link";

interface CategoryStripItem {
  slug: string;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export default function CategoryStrip({ items }: { items: CategoryStripItem[] }) {
  return (
    <nav
      aria-label="Browse categories"
      className="category-strip w-full flex flex-wrap gap-2 py-3 border-t border-b border-dashed border-divider mb-8"
    >
      {items.map(({ slug, label, icon: Icon }) => (
        <Link
          key={slug}
          href={`/best/${slug}`}
          className="inline-flex items-center gap-1.5 whitespace-nowrap px-3.5 py-1.5 rounded-pill border-[1.5px] border-divider text-[12px] font-medium text-[#444440] bg-bg hover:border-accent hover:text-accent transition-colors duration-150"
        >
          <Icon size={14} />
          {label}
        </Link>
      ))}
    </nav>
  );
}
