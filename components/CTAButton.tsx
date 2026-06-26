import Link from "next/link";
import { ShoppingCart } from "lucide-react";

interface CTAButtonProps {
  href: string;
  variant?: "primary" | "secondary" | "amazon";
  children: React.ReactNode;
  className?: string;
}

export default function CTAButton({ href, variant = "primary", children, className = "" }: CTAButtonProps) {
  if (variant === "amazon") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow sponsored"
        className={`inline-flex items-center gap-2 bg-amber text-white text-[13px] font-medium px-5 py-2.5 rounded-leaf hover:bg-amberDark hover:scale-[1.02] transition-all duration-150 ${className}`}
      >
        <ShoppingCart size={14} />
        {children}
      </a>
    );
  }

  if (variant === "secondary") {
    return (
      <Link
        href={href}
        className={`inline-flex items-center gap-2 bg-transparent text-accent text-[13px] font-medium px-[22px] py-2.5 rounded-pill border-[1.5px] border-accent hover:bg-accent/[0.06] transition-all duration-150 ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 bg-accent text-white text-[13px] font-medium px-[22px] py-2.5 rounded-pill hover:bg-accentDark hover:-translate-y-px active:scale-[0.98] transition-all duration-150 ${className}`}
    >
      {children}
    </Link>
  );
}
