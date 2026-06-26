import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Reach Us — Contact PawCraftDen",
  description:
    "Questions, feedback, or partnership ideas — get in touch with the PawCraftDen editorial team.",
  alternates: { canonical: "/reach-us" },
  openGraph: {
    title: "Reach Us — Contact PawCraftDen",
    description:
      "Questions, feedback, or partnership ideas — get in touch with the PawCraftDen editorial team.",
    url: `${siteConfig.url}/reach-us`,
  },
};

const faqItems = [
  {
    question: "Do you offer personalized training advice?",
    answer: "We share general, research-based guidance through our articles and guides, but we're not a substitute for a certified trainer or veterinarian who can assess your dog individually.",
  },
  {
    question: "Can I suggest a product for review?",
    answer: "Yes — send us the product name and category through the form below and we'll consider it for an upcoming buying guide update.",
  },
  {
    question: "How often is content updated?",
    answer: "We review and refresh our buying guides throughout the year as products change, get discontinued, or are replaced by newer versions.",
  },
  {
    question: "Do you accept guest contributions?",
    answer: "We occasionally work with experienced dog trainers and veterinary professionals. Reach out with your background and a sample topic idea.",
  },
];

export default function ReachUsPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 md:px-6 lg:px-8 py-12">
      <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-textPrimary mb-3">Reach Us</h1>
      <p className="text-[15px] text-textSecondary mb-10">
        Questions, feedback, or partnership ideas — we'd love to hear from you.
      </p>

      <form className="flex flex-col gap-4 mb-12">
        <div>
          <label htmlFor="name" className="block text-[12px] font-medium uppercase tracking-[0.1em] text-muted mb-1.5">Name</label>
          <input id="name" type="text" className="w-full px-4 py-2.5 rounded-lg border border-purple-200 bg-white text-[14px] focus:outline-none focus:border-accent" />
        </div>
        <div>
          <label htmlFor="email" className="block text-[12px] font-medium uppercase tracking-[0.1em] text-muted mb-1.5">Email</label>
          <input id="email" type="email" className="w-full px-4 py-2.5 rounded-lg border border-purple-200 bg-white text-[14px] focus:outline-none focus:border-accent" />
        </div>
        <div>
          <label htmlFor="message" className="block text-[12px] font-medium uppercase tracking-[0.1em] text-muted mb-1.5">Message</label>
          <textarea id="message" rows={5} className="w-full px-4 py-2.5 rounded-lg border border-purple-200 bg-white text-[14px] focus:outline-none focus:border-accent" />
        </div>
        <button type="submit" className="self-start bg-accent text-white text-[13px] font-medium px-[22px] py-2.5 rounded-pill hover:bg-accentDark transition-colors">
          Send Message
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 text-[14px] text-textSecondary">
        <div>
          <h2 className="font-heading font-bold text-[15px] text-textPrimary mb-2">Email</h2>
          <p>{siteConfig.email}</p>
        </div>
        <div>
          <h2 className="font-heading font-bold text-[15px] text-textPrimary mb-2">Mailing Address</h2>
          <p>PawCraftDen Media<br />412 Maple Ridge Lane, Suite 220<br />Boulder, CO 80301</p>
        </div>
        <div>
          <h2 className="font-heading font-bold text-[15px] text-textPrimary mb-2">Business Hours</h2>
          <p>Monday–Friday, 9:00 AM–5:00 PM MT</p>
        </div>
      </div>

      <h2 className="font-heading font-bold text-xl text-textPrimary mb-4">Quick Questions</h2>
      <FAQ items={faqItems} />
    </main>
  );
}
