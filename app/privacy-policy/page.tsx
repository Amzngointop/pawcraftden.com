import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "PawCraftDen's privacy policy covering data collection, cookies, and third-party links.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 md:px-6 lg:px-8 py-12">
      <h1 className="font-heading font-extrabold text-3xl text-textPrimary mb-6">Privacy Policy</h1>
      <div className="flex flex-col gap-6 text-[14px] text-textSecondary leading-relaxed">
        <p>Last updated: 2026. This Privacy Policy describes how PawCraftDen ("we," "us") handles information when you visit {siteConfig.domain}.</p>
        <section>
          <h2 className="font-heading font-bold text-lg text-textPrimary mb-2">Information We Collect</h2>
          <p>We do not require account creation or collect personal data beyond what you voluntarily submit through our contact form (name, email, message). We may use standard analytics tools to understand aggregate site traffic.</p>
        </section>
        <section>
          <h2 className="font-heading font-bold text-lg text-textPrimary mb-2">Cookies</h2>
          <p>Our site may use cookies for basic functionality and analytics. You can disable cookies through your browser settings at any time.</p>
        </section>
        <section>
          <h2 className="font-heading font-bold text-lg text-textPrimary mb-2">Third-Party Links</h2>
          <p>PawCraftDen contains affiliate links to Amazon and other retailers. We are not responsible for the privacy practices of third-party sites linked from our content.</p>
        </section>
        <section>
          <h2 className="font-heading font-bold text-lg text-textPrimary mb-2">Contact</h2>
          <p>Questions about this policy can be directed to {siteConfig.email}.</p>
        </section>
      </div>
    </main>
  );
}
