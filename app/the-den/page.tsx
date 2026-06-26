import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "The Den — Dog Care & Training Glossary (2026)",
  description:
    "Every dog care and training term explained in plain language — from positive reinforcement and crate training to harness fit and chew safety.",
  alternates: { canonical: "/the-den" },
  openGraph: {
    title: "The Den — Dog Care & Training Glossary (2026)",
    description:
      "Every dog care and training term explained in plain language — from positive reinforcement and crate training to harness fit and chew safety.",
    url: `${siteConfig.url}/the-den`,
  },
};

const terms: { term: string; def: string; link?: { href: string; label: string } }[] = [
  {
    term: "Positive Reinforcement",
    def: "A training method that rewards desired behavior immediately after it happens, increasing the likelihood it repeats. It's the foundation of nearly every modern, force-free training program and works for puppies and adults alike.",
    link: { href: "/training-guides/puppy-socialization-guide", label: "Puppy Socialization Guide" },
  },
  {
    term: "Loose-Leash Walking",
    def: "Walking with a relaxed leash and no constant tension, achieved through consistent reward timing rather than physical correction. It's a learned skill, not a default behavior, for most dogs.",
    link: { href: "/training-guides/stop-dog-pulling-on-leash", label: "How to Stop Leash Pulling" },
  },
  {
    term: "Crate Training",
    def: "Teaching a dog to view a crate as a safe, comfortable den rather than a punishment, using gradual exposure and positive associations built over days or weeks.",
    link: { href: "/training-guides/how-to-crate-train-your-dog", label: "7-Day Crate Training Guide" },
  },
  {
    term: "Desensitization",
    def: "Gradual, controlled exposure to a trigger at a low intensity, slowly increasing exposure as the dog remains calm. Commonly used for noise sensitivity, vet visits, and grooming tolerance.",
  },
  {
    term: "Harness Fit",
    def: "The measurement-based process of matching harness size to a dog's chest girth and neck circumference rather than its breed or weight alone. Poor fit is the most common cause of harness-related discomfort.",
    link: { href: "/best/best-dog-harnesses-leashes", label: "Best Dog Harnesses & Leashes" },
  },
  {
    term: "Chew Safety",
    def: "Selecting chews appropriately sized and textured for a dog's jaw strength and chewing style to avoid choking or tooth fracture risk, and supervising chew sessions until a chew shrinks to a swallowable size.",
    link: { href: "/best/best-dog-chews-dental-care", label: "Best Dog Chews & Dental Care" },
  },
  {
    term: "E-Collar",
    def: "Short for electronic collar, a remote-operated training tool that delivers vibration or adjustable stimulation. Most modern training programs recommend starting at the lowest setting and pairing it with verbal cues.",
    link: { href: "/best/best-dog-training-collars", label: "Best Dog Training Collars" },
  },
  {
    term: "Recovery Suit",
    def: "A fitted post-surgical garment that covers incision sites to prevent licking and chewing, often used as a more comfortable alternative to a rigid E-collar cone.",
    link: { href: "/best/best-recovery-suits-calming-vests", label: "Best Recovery Suits & Calming Vests" },
  },
  {
    term: "Grooming Rake",
    def: "A grooming tool with widely spaced teeth designed to reach through a dense topcoat and pull loose undercoat fur free without cutting or damaging the outer coat.",
    link: { href: "/best/best-dog-grooming-tools", label: "Best Dog Grooming Tools" },
  },
  {
    term: "Slow Feeder",
    def: "A bowl or mat with raised ridges or compartments that forces a dog to eat more slowly, reducing the risk of bloat and curbing food-gulping behavior in fast eaters.",
    link: { href: "/best/best-dog-bowls-feeders", label: "Best Dog Bowls & Feeders" },
  },
  {
    term: "Calming Vest",
    def: "A snug-fitting wrap that applies gentle, constant pressure to a dog's torso, mimicking a swaddling sensation that can ease anxiety during storms, travel, or unfamiliar situations.",
    link: { href: "/best/best-recovery-suits-calming-vests", label: "Best Recovery Suits & Calming Vests" },
  },
  {
    term: "Prey Drive",
    def: "A dog's instinctive motivation to chase, stalk, or capture moving objects, rooted in ancestral hunting behavior. Understanding a dog's prey drive helps inform training around recall and leash management.",
    link: { href: "/training-guides/stop-dog-pulling-on-leash", label: "How to Stop Leash Pulling" },
  },
];

export default function TheDenPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-12">
      <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-textPrimary mb-3">The Den</h1>
      <p className="text-[15px] text-textSecondary max-w-xl mb-10">
        Every dog care and training term explained in plain language.
      </p>
      <div className="flex flex-col gap-8">
        {terms.map((t) => (
          <div key={t.term} className="border-l-[3px] border-accent pl-5">
            <h2 className="font-heading font-bold text-lg text-textPrimary mb-2">{t.term}</h2>
            <p className="text-[14px] text-textSecondary leading-relaxed mb-2">{t.def}</p>
            {t.link && (
              <Link href={t.link.href} className="text-link border-b-2 border-linkBorder text-[13px] font-medium hover:text-linkHover hover:border-link">
                Related: {t.link.label} →
              </Link>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
