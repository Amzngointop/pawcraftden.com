import Link from "next/link";
import type { Metadata } from "next";
import { guides } from "@/data/guides";
import CTAButton from "@/components/CTAButton";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Training Guides — Step-by-Step Dog Training (2026)",
  description:
    "Six in-depth training guides covering crate training, puppy socialization, leash pulling, grooming, body language, and daily routines.",
  alternates: { canonical: "/training-guides" },
  openGraph: {
    title: "Training Guides — Step-by-Step Dog Training (2026)",
    description:
      "Six in-depth training guides covering crate training, puppy socialization, leash pulling, grooming, body language, and daily routines.",
    url: `${siteConfig.url}/training-guides`,
  },
};

export default function TrainingGuidesIndex() {
  return (
    <main className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12">
      <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-textPrimary mb-3">Training Guides</h1>
      <p className="text-[15px] text-textSecondary max-w-xl mb-10">
        Step-by-step, no-fluff guides covering the training challenges most new and experienced dog owners run into.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {guides.map((g, i) => (
          <div key={g.slug} className="border border-purple-200 rounded-lg overflow-hidden flex flex-col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={g.coverImage} alt={g.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
            <div className="p-4 flex flex-col flex-1">
              <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-muted mb-1.5">
                {String(i + 1).padStart(2, "0")} · {g.category}
              </span>
              <Link href={`/training-guides/${g.slug}`} className="font-heading font-bold text-[15px] text-textPrimary hover:text-accent transition-colors mb-1.5 leading-snug">
                {g.title}
              </Link>
              <p className="text-[12px] text-textSecondary mb-3 flex-1">{g.excerpt}</p>
              <p className="text-[11px] text-muted mb-3">{g.readMinutes} min read</p>
              <CTAButton href={`/training-guides/${g.slug}`} className="self-start">Read Guide →</CTAButton>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
