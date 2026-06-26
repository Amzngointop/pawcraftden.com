import Link from "next/link";
import type { Product } from "@/data/products";

interface ComparisonRow {
  product: Product;
  bestForLabel: string;
  keyFeature: string;
  topCon: string;
}

export default function ComparisonTable({ rows }: { rows: ComparisonRow[] }) {
  return (
    <div className="overflow-x-auto my-6 border border-purple-200 rounded-lg">
      <table className="w-full text-left text-[13px]">
        <thead>
          <tr className="bg-card border-b border-purple-200">
            <th className="px-4 py-3 font-heading font-bold text-textPrimary">Product</th>
            <th className="px-4 py-3 font-heading font-bold text-textPrimary">Best For</th>
            <th className="px-4 py-3 font-heading font-bold text-textPrimary">Key Feature</th>
            <th className="px-4 py-3 font-heading font-bold text-textPrimary">Top Con</th>
            <th className="px-4 py-3 font-heading font-bold text-textPrimary">Link</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.product.id} className={i % 2 === 0 ? "bg-bg" : "bg-card/40"}>
              <td className="px-4 py-3 text-textPrimary font-medium border-t border-purple-200">
                {row.product.name}
              </td>
              <td className="px-4 py-3 text-textSecondary border-t border-purple-200">{row.bestForLabel}</td>
              <td className="px-4 py-3 text-textSecondary border-t border-purple-200">{row.keyFeature}</td>
              <td className="px-4 py-3 text-textSecondary border-t border-purple-200">{row.topCon}</td>
              <td className="px-4 py-3 border-t border-purple-200">
                <Link href={`#product-${row.product.id}`} className="text-link border-b-2 border-linkBorder hover:text-linkHover hover:border-link">
                  Jump to →
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
