import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for PawCraftDen, covering content use, affiliate links, and liability.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 md:px-6 lg:px-8 py-12">
      <h1 className="font-heading font-extrabold text-3xl text-textPrimary mb-6">Terms of Use</h1>
      <div className="flex flex-col gap-6 text-[14px] text-textSecondary leading-relaxed">
        <p>Last updated: 2026. By using {siteConfig.domain}, you agree to the following terms.</p>
        <section>
          <h2 className="font-heading font-bold text-lg text-textPrimary mb-2">Content Use</h2>
          <p>All written content on PawCraftDen is original and may not be reproduced without permission. Product images remain the property of their respective owners.</p>
        </section>
        <section>
          <h2 className="font-heading font-bold text-lg text-textPrimary mb-2">No Professional Advice</h2>
          <p>Content on this site is for informational purposes only and is not a substitute for professional veterinary or training advice. Always consult a qualified professional for your dog's specific needs.</p>
        </section>
        <section>
          <h2 className="font-heading font-bold text-lg text-textPrimary mb-2">Affiliate Relationships</h2>
          <p>PawCraftDen participates in the Amazon Associates program and may earn commissions from qualifying purchases made through links on this site.</p>
        </section>
        <section>
          <h2 className="font-heading font-bold text-lg text-textPrimary mb-2">Limitation of Liability</h2>
          <p>We make reasonable efforts to ensure accuracy but make no warranties regarding the completeness or reliability of content. Use of this site is at your own risk.</p>
        </section>
        <section>
          <h2 className="font-heading font-bold text-lg text-textPrimary mb-2">Contact</h2>
          <p>Questions about these terms can be directed to {siteConfig.email}.</p>
        </section>
      </div>
    </main>
  );
}
