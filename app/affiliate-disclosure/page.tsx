import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "PawCraftDen's affiliate disclosure regarding Amazon Associates commission links.",
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <main className="max-w-2xl mx-auto px-4 md:px-6 lg:px-8 py-12">
      <h1 className="font-heading font-extrabold text-3xl text-textPrimary mb-6">Affiliate Disclosure</h1>
      <div className="flex flex-col gap-6 text-[14px] text-textSecondary leading-relaxed">
        <p>
          PawCraftDen is a participant in the Amazon Services LLC Associates Program, an affiliate
          advertising program designed to provide a means for sites to earn advertising fees by advertising
          and linking to Amazon.com.
        </p>
        <p>
          When you click a product link on PawCraftDen and make a qualifying purchase, we may earn a small
          commission at no additional cost to you. This does not affect the price you pay.
        </p>
        <p>
          Our editorial recommendations are based on independent research and are not influenced by the
          presence or absence of an affiliate relationship. We do not accept payment in exchange for
          favorable reviews.
        </p>
        <p>
          As an Amazon Associate, PawCraftDen earns from qualifying purchases made through links on this site.
        </p>
      </div>
    </main>
  );
}
