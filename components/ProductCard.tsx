import type { Product } from "@/data/products";
import CTAButton from "./CTAButton";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="flex flex-col border border-purple-200 rounded-lg p-4 bg-white">
      <div className="bg-card rounded-lg p-3 mb-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ width: "100%", maxHeight: "180px", objectFit: "contain" }}
        />
      </div>
      <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent mb-1.5">
        {product.badge}
      </span>
      <h3 className="font-heading font-bold text-[15px] text-textPrimary mb-1.5 leading-snug">
        {product.name}
      </h3>
      <p className="text-[13px] text-textSecondary mb-3 flex-1">{product.summary}</p>
      <CTAButton href={product.affiliateUrl} variant="amazon" className="self-start">
        View on Amazon →
      </CTAButton>
    </div>
  );
}
