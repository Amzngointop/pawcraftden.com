import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { X, CheckCircle2 } from "lucide-react";
import { articles, getArticleBySlug } from "@/data/articles";
import { getProductsByArticle, getProductById } from "@/data/products";
import { getArticleContent } from "@/data/articleContent";
import { siteConfig } from "@/data/site";
import CTAButton from "@/components/CTAButton";
import ComparisonTable from "@/components/ComparisonTable";
import BreedFitScoreBar from "@/components/BreedFitScoreBar";
import AccordionSection from "@/components/AccordionSection";
import FAQ from "@/components/FAQ";
import ArticleSidebar from "@/components/ArticleSidebar";
import RelatedSidebar from "@/components/RelatedSidebar";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.metaDescription,
    alternates: { canonical: `/best/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url: `${siteConfig.url}/best/${article.slug}`,
    },
  };
}

const badgeOrdinals = ["1. BEST OVERALL", "2.", "3.", "4.", "5.", "6."];

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const content = getArticleContent(slug);
  if (!article || !content) return notFound();

  const articleProducts = getProductsByArticle(article.slug);
  const jumpToLinks = articleProducts.map((p) => ({ id: `product-${p.id}`, label: p.name }));
  const otherArticles = articles.filter((a) => a.slug !== article.slug);

  const comparisonRows = content.comparisonRows.map((row) => ({
    product: getProductById(row.productId)!,
    bestForLabel: row.bestForLabel,
    keyFeature: row.keyFeature,
    topCon: row.topCon,
  }));

  return (
    <main className="bg-bg overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-10">
        <ArticleSidebar links={jumpToLinks} heading="JUMP TO" />

        <article className="w-full flex-1 lg:max-w-[740px] mx-auto lg:mx-0">
          <nav className="text-[12px] text-muted mb-4 flex flex-wrap items-center gap-x-1">
            <Link href="/" className="hover:text-accent">Home</Link> / <span>Reviews</span> / <span className="text-textPrimary">{article.title}</span>
          </nav>

          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-accent block mb-2">{article.category}</span>
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-textPrimary mb-3 leading-tight">{article.title}</h1>
          <p className="text-[13px] text-muted mb-6">Updated 2026 · {article.readMinutes} min read · 6 products reviewed</p>

          <div className="w-full border-l-[3px] border-amber bg-calloutBg rounded-r-lg p-4 mb-6">
            <p className="text-[13px] text-textSecondary">
              <strong>Affiliate Disclosure:</strong> PawCraftDen is reader-supported. As an Amazon Associate, we earn from qualifying purchases at no extra cost to you.
            </p>
          </div>

          <div className="prose-content text-[15px] text-textSecondary leading-relaxed mb-8">{content.intro}</div>

          <ComparisonTable rows={comparisonRows} />

          <div className="flex flex-col gap-10 mt-10">
            {articleProducts.map((product, i) => (
              <div key={product.id} id={`product-${product.id}`}>
                <span className="inline-block text-[11px] font-medium uppercase tracking-[0.12em] text-white bg-accent px-3 py-1 rounded-pill mb-4">
                  {badgeOrdinals[i]} {product.badge}
                </span>
                <div className="bg-card rounded-lg p-3 mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    style={{ width: "100%", maxHeight: "280px", objectFit: "contain", padding: "12px" }}
                  />
                </div>
                <h3 className="font-heading font-bold text-xl text-textPrimary mb-2">{product.name}</h3>
                <p className="italic text-[14px] text-textSecondary mb-3">{product.summary}</p>

                <BreedFitScoreBar
                  comfortScore={product.comfortScore}
                  buildScore={product.buildScore}
                  valueScore={product.valueScore}
                />

                <div className="mb-4">
                  <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-muted mb-2">Considerations</p>
                  <ul className="flex flex-col gap-1.5">
                    {product.cons.map((con) => (
                      <li key={con} className="flex items-start gap-2 text-[13px] text-textSecondary">
                        <X size={14} className="text-amber shrink-0 mt-0.5" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <AccordionSection title="Why We Picked It" defaultOpen>
                    <ul className="flex flex-col gap-1.5 mt-2">
                      {product.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2">
                          <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </AccordionSection>
                  <AccordionSection title="Who It's For">{product.bestFor}</AccordionSection>
                  <AccordionSection title="How to Use It">{product.howToUse}</AccordionSection>
                </div>

                <CTAButton href={product.affiliateUrl} variant="amazon">View on Amazon →</CTAButton>

                {i < articleProducts.length - 1 && <div className="border-t border-dashed border-divider mt-8" />}
              </div>
            ))}
          </div>

          <div className="mt-12 prose-content text-[15px] text-textSecondary leading-relaxed">{content.buyingGuide}</div>

          <div className="mt-12">
            <h2 className="font-heading font-bold text-2xl text-textPrimary mb-5">Frequently Asked Questions</h2>
            <FAQ items={content.faqItems} />
          </div>

          <div className="mt-10 border-t border-divider pt-6">
            <h3 className="font-heading font-bold text-[15px] text-textPrimary mb-3">Further Reading</h3>
            <ul className="flex flex-col gap-2">
              {content.relatedSlugs.map((slug) => {
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

          <div className="w-full border-l-[3px] border-amber bg-calloutBg rounded-r-lg p-4 mt-8">
            <p className="text-[13px] text-textSecondary">
              <strong>Affiliate Disclosure:</strong> Links on this page may earn PawCraftDen a commission as an Amazon Associate.
            </p>
          </div>
        </article>

        <RelatedSidebar
          heading="MORE BUYING GUIDES"
          items={otherArticles.map((a) => ({ href: `/best/${a.slug}`, category: a.category, title: a.title }))}
        />
      </div>
    </main>
  );
}
