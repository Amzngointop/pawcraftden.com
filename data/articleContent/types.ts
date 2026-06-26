import type { ReactNode } from "react";
import type { FAQItem } from "@/components/FAQ";

export interface ComparisonRow {
  productId: number;
  bestForLabel: string;
  keyFeature: string;
  topCon: string;
}

export interface ArticleBody {
  intro: ReactNode;
  buyingGuide: ReactNode;
  faqItems: FAQItem[];
  comparisonRows: ComparisonRow[];
  relatedSlugs: string[];
}
