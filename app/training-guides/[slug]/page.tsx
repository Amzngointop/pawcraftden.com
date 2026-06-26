import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { guides, getGuideBySlug } from "@/data/guides";
import { articles } from "@/data/articles";
import { getGuideContent } from "@/data/guideContent";
import { siteConfig } from "@/data/site";
import ArticleSidebar from "@/components/ArticleSidebar";
import RelatedSidebar from "@/components/RelatedSidebar";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.metaDescription,
    alternates: { canonical: `/training-guides/${guide.slug}` },
    openGraph: {
      title: guide.title,
      description: guide.metaDescription,
      url: `${siteConfig.url}/training-guides/${guide.slug}`,
    },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  const content = getGuideContent(slug);
  if (!guide || !content) return notFound();

  const otherGuides = guides.filter((g) => g.slug !== guide.slug);

  return (
    <main className="bg-bg">
      <div className="w-full lg:max-w-3xl lg:mx-auto pt-10 px-4 md:px-6">
        <Image
          src={guide.coverImage}
          alt={guide.title}
          width={768}
          height={480}
          quality={85}
          priority
          className="w-full h-auto rounded-lg shadow-md object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-10">
        <ArticleSidebar links={content.sections} heading="IN THIS GUIDE" />

        <article className="w-full flex-1 lg:max-w-[740px] mx-auto lg:mx-0">
          <nav className="text-[12px] text-muted mb-4 flex flex-wrap items-center gap-x-1">
            <Link href="/" className="hover:text-accent">Home</Link> / <Link href="/training-guides" className="hover:text-accent">Training Guides</Link> / <span className="text-textPrimary">{guide.title}</span>
          </nav>

          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-accent block mb-2">{guide.category}</span>
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-textPrimary mb-3 leading-tight">{guide.title}</h1>
          <p className="text-[13px] text-muted mb-4">Updated 2026 · {guide.readMinutes} min read</p>
          <p className="text-[15px] text-textSecondary mb-8">{guide.excerpt}</p>

          <div className="prose-content text-[15px] text-textSecondary leading-relaxed">{content.body}</div>

          <div className="mt-10 border-t border-divider pt-6">
            <h3 className="font-heading font-bold text-[15px] text-textPrimary mb-3">Related Buying Guides</h3>
            <ul className="flex flex-col gap-2">
              {content.relatedArticleSlugs.map((slug) => {
                const a = articles.find((x) => x.slug === slug);
                if (!a) return null;
                return (
                  <li key={slug}>
                    <Link href={`/best/${slug}`} className="text-link border-b-2 border-linkBorder text-[13px] font-medium hover:text-linkHover hover:border-link">
                      {a.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </article>

        <RelatedSidebar
          heading="MORE GUIDES"
          items={otherGuides.map((g) => ({ href: `/training-guides/${g.slug}`, category: g.category, title: g.title }))}
        />
      </div>
    </main>
  );
}
