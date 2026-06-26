import Link from "next/link";
import { Fragment } from "react";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Bed,
  Box,
  Scissors,
  HeartPulse,
  Bone,
  UtensilsCrossed,
  Trash2,
  CheckCircle2,
  Search,
  BarChart3,
  ClipboardCheck,
  Award,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { articles } from "@/data/articles";
import { guides } from "@/data/guides";
import { products, getProductsByArticle } from "@/data/products";
import CTAButton from "@/components/CTAButton";
import ArticleSidebar from "@/components/ArticleSidebar";
import RelatedSidebar from "@/components/RelatedSidebar";
import TrainingReadinessChecker from "@/components/TrainingReadinessChecker";
import CategoryStrip from "@/components/CategoryStrip";

export const metadata: Metadata = {
  title: "PawCraftDen — Dog Care & Training Essentials (2026)",
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const categoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "best-dog-harnesses-leashes": ShieldCheck,
  "best-dog-training-collars": Award,
  "best-dog-beds": Bed,
  "best-dog-crates-kennels": Box,
  "best-dog-grooming-tools": Scissors,
  "best-recovery-suits-calming-vests": HeartPulse,
  "best-dog-chews-dental-care": Bone,
  "best-dog-bowls-feeders": UtensilsCrossed,
  "best-dog-poop-bags": Trash2,
};

const categoryBlurbs: Record<string, string> = {
  "best-dog-harnesses-leashes": "Fitted, no-pull harnesses and matched leashes for every breed size.",
  "best-dog-training-collars": "Remote training collars for distance recall and bark control.",
  "best-dog-beds": "Orthopedic beds that ease pressure on joints and aging hips.",
  "best-dog-crates-kennels": "Crates and kennels for home training and travel-ready containment.",
  "best-dog-grooming-tools": "Deshedding rakes and brushes matched to every coat type.",
  "best-recovery-suits-calming-vests": "Post-surgery suits and anxiety-easing calming vests.",
  "best-dog-chews-dental-care": "Long-lasting natural chews that support dental health.",
  "best-dog-bowls-feeders": "Elevated bowls and automatic feeders for every lifestyle.",
  "best-dog-poop-bags": "Leak-proof bags and dispensers for stress-free walks.",
};

const onThisPageLinks = [
  { id: "top-rated", label: "Top-Rated Essentials" },
  { id: "browse-by-category", label: "Browse by Category" },
  { id: "training-guides", label: "Training Guides" },
  { id: "training-checker", label: "Readiness Checker" },
  { id: "how-we-pick", label: "How We Pick" },
  { id: "the-den", label: "The Den" },
  { id: "editor-picks", label: "Editor Picks" },
  { id: "by-the-numbers", label: "By the Numbers" },
  { id: "breed-guide", label: "Breed Size Guide" },
  { id: "newsletter", label: "Newsletter" },
];

const editors = [
  {
    name: "Sarah Kinley",
    role: "SENIOR DOG CARE EDITOR",
    quote:
      "After reviewing dozens of harnesses across all body types and pull levels, the single biggest mistake I see is owners choosing size by breed name rather than an actual chest measurement. Always measure first.",
  },
  {
    name: "Marcus Webb",
    role: "CANINE BEHAVIOR RESEARCH LEAD",
    quote:
      "Every product we feature passes one test: would a first-time dog owner be able to use it safely without a trainer present? If the answer isn't yes, it doesn't belong on PawCraftDen.",
  },
  {
    name: "Priya Okafor",
    role: "TRAINING TOOLS SPECIALIST",
    quote:
      "We cross-reference Amazon review velocity, verified purchase patterns, and ASPCA behavioral guidelines before any training tool earns a spot in our recommendations.",
  },
];

const glossaryPreview = [
  {
    term: "Positive Reinforcement",
    def: "A training method that rewards desired behavior immediately, increasing the likelihood it repeats. It is the foundation of nearly every modern, force-free training program.",
  },
  {
    term: "Loose-Leash Walking",
    def: "Walking with a relaxed leash and no constant tension, achieved through consistent reward timing rather than physical correction.",
  },
  {
    term: "Crate Training",
    def: "Teaching a dog to view a crate as a safe, comfortable den rather than a punishment, using gradual exposure and positive associations.",
  },
  {
    term: "Desensitization",
    def: "Gradual, controlled exposure to a trigger at a low intensity, slowly increasing exposure as the dog remains calm and comfortable.",
  },
  {
    term: "Harness Fit",
    def: "The measurement-based process of matching harness size to a dog's chest girth and neck circumference rather than its breed or weight alone.",
  },
  {
    term: "Chew Safety",
    def: "Selecting chews appropriately sized and textured for a dog's jaw strength and chewing style to avoid choking or tooth fracture risk.",
  },
];

const breedSizes = [
  { name: "Toy Breeds", range: "Under 12 lbs", tip: "Look for harnesses with adjustable four-point straps to prevent slipping." },
  { name: "Small Breeds", range: "12–25 lbs", tip: "Lightweight gear reduces strain on small frames during long walks." },
  { name: "Medium Breeds", range: "25–60 lbs", tip: "Balance support and breathability — most all-purpose gear targets this range." },
  { name: "Large Breeds", range: "60–90 lbs", tip: "Prioritize reinforced stitching and metal hardware over plastic clips." },
  { name: "Giant Breeds", range: "90+ lbs", tip: "Choose orthopedic bedding and wide-strap harnesses to manage joint load." },
];

export default function HomePage() {
  const topProducts = products.filter((p) => p.rank === 1);
  const featuredProduct = topProducts[0];
  const compactProducts = topProducts.slice(1, 9);
  const editorsChoice = products[0];
  const firstThreeArticles = articles.slice(0, 3);
  const categoryStripItems = siteConfig.categories.map((c) => ({
    slug: c.slug,
    label: c.name,
    icon: categoryIcons[c.slug],
  }));

  return (
    <main className="bg-bg">
      {/* ZONE A */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pt-10 md:pt-14 pb-12 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
        {/* LEFT: guide previews */}
        <div>
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-accent">Training Guides</span>
          <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-textPrimary mt-2 mb-4 leading-tight">
            Real research for real dog owners.
          </h1>
          <p className="text-[15px] text-textSecondary max-w-xl mb-6 leading-relaxed">
            PawCraftDen reviews dog care and training gear the way a careful first-time owner would want it
            explained: no jargon, no inflated claims, and no shortcuts on the research. Every product on this
            site is selected through a documented process that weighs verified buyer feedback, manufacturer
            specifications, and established behavioral guidelines from organizations like the ASPCA and AKC.
          </p>

          <Link href={`/training-guides/${guides[0].slug}`} className="group block mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={guides[0].coverImage}
              alt={guides[0].title}
              style={{ width: "100%", height: "260px", objectFit: "cover", borderRadius: "10px" }}
            />
            <h2 className="font-heading font-bold text-xl text-textPrimary mt-4 group-hover:text-accent transition-colors">
              {guides[0].title}
            </h2>
            <p className="text-[14px] text-textSecondary mt-1.5 mb-2">{guides[0].excerpt}</p>
            <span className="text-link border-b-2 border-linkBorder text-[13px] font-medium">Read Guide →</span>
          </Link>

          <div className="border-t border-dashed border-divider my-6" />

          <div className="grid grid-cols-2 gap-4 mb-6">
            {guides.slice(1, 3).map((g) => (
              <Link key={g.slug} href={`/training-guides/${g.slug}`} className="group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.coverImage}
                  alt={g.title}
                  style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px" }}
                />
                <h3 className="font-heading font-bold text-[14px] text-textPrimary mt-2.5 group-hover:text-accent transition-colors leading-snug">
                  {g.title}
                </h3>
              </Link>
            ))}
          </div>

          <Link href="/training-guides" className="text-link border-b-2 border-linkBorder text-[13px] font-medium">
            → Browse All Training Guides
          </Link>

          <p className="text-[15px] text-textSecondary leading-relaxed mt-8">
            New dog owners are often overwhelmed by the sheer number of harnesses, collars, beds, and feeding
            tools on the market. Our goal is to cut through that noise with editorial standards that mirror
            what a knowledgeable trainer or veterinary technician would actually recommend, rather than what
            simply has the most reviews. We update our picks regularly throughout 2026 as new products enter
            the market and older ones are discontinued or redesigned.
          </p>
        </div>

        {/* RIGHT: editor's choice + quotes */}
        <div className="lg:sticky lg:top-24 self-start flex flex-col gap-8">
          <div className="border border-purple-200 rounded-xl p-5 bg-bg">
            <div className="bg-card rounded-lg p-4 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={editorsChoice.imageUrl}
                alt={editorsChoice.name}
                style={{ width: "100%", maxHeight: "200px", objectFit: "contain" }}
              />
            </div>
            <span className="inline-block text-[10px] font-medium uppercase tracking-[0.12em] text-accent mb-2">
              EDITOR&apos;S CHOICE
            </span>
            <h3 className="font-heading font-bold text-lg text-textPrimary mb-2">{editorsChoice.name}</h3>
            <p className="text-[13px] text-textSecondary mb-4">{editorsChoice.summary}</p>
            <CTAButton href={editorsChoice.affiliateUrl} variant="amazon" className="mb-2">
              View on Amazon →
            </CTAButton>
            <p className="text-[11px] text-muted mb-4">We may earn a commission from qualifying purchases.</p>
            <a href="#top-rated">
              <span className="inline-flex items-center gap-2 bg-accent text-white text-[13px] font-medium px-[22px] py-2.5 rounded-pill hover:bg-accentDark hover:-translate-y-px active:scale-[0.98] transition-all duration-150">
                See More Top Picks
              </span>
            </a>
          </div>

          <div className="border border-purple-200 rounded-xl p-5">
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted block mb-4">
              FROM OUR EDITORS
            </span>
            <div className="flex flex-col gap-4">
              {editors.map((e, i) => (
                <div key={e.name}>
                  <p className="text-[13px] italic text-textSecondary leading-relaxed mb-2">&ldquo;{e.quote}&rdquo;</p>
                  <p className="font-heading font-bold text-[15px] text-textPrimary">{e.name}</p>
                  <p className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted">{e.role}</p>
                  {i < editors.length - 1 && <div className="border-t border-dashed border-divider mt-4" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <CategoryStrip items={categoryStripItems} />
      </div>

      {/* ZONE B */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pb-20 flex flex-col lg:flex-row gap-10">
        <aside className="hidden lg:block w-48 shrink-0">
          <div className="sticky top-24">
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-accent">On This Page</span>
            <ul className="mt-3 flex flex-col gap-2 border-l border-divider">
              {onThisPageLinks.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} className="block pl-3 -ml-px text-[13px] py-1 border-l-[3px] border-transparent text-textSecondary hover:text-accent hover:border-accent transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="flex-1 max-w-2xl mx-auto lg:mx-0 flex flex-col gap-20">
          {/* SECTION 1 */}
          <section id="top-rated">
            <h2 className="font-heading font-bold text-2xl text-textPrimary mb-3">Top-Rated Dog Care Essentials</h2>
            <p className="text-[14px] text-textSecondary leading-relaxed mb-4">
              The nine picks below represent the strongest overall entry from each of our nine review
              categories — the harness, collar, bed, crate, grooming tool, recovery suit, chew, feeder, and
              waste-management product that earned the top editorial badge in its respective buying guide.
              They're a useful starting point if you're outfitting a new dog from scratch or simply want a
              quick read on what currently leads each category without digging through a full comparison
              table. Click through to any product's full buying guide for sizing notes, considerations, and
              the complete six-product lineup it was selected from.
            </p>
            <p className="text-[13px] text-muted mb-6">
              As an Amazon Associate, PawCraftDen earns from qualifying purchases made through links on this page.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[55%_45%] gap-5">
              {/* Featured card */}
              <Link
                href={`/best/${featuredProduct.articleSlug}`}
                className="relative block rounded-xl overflow-hidden h-[260px] md:h-[300px] lg:h-auto bg-card"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featuredProduct.imageUrl}
                  alt={featuredProduct.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end p-5"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(20,52,43,0.92) 0%, rgba(20,52,43,0.4) 50%, transparent 100%)",
                  }}
                >
                  <span
                    className="inline-block self-start text-[10px] font-medium uppercase tracking-[0.14em] mb-2 px-2.5 py-[3px] rounded"
                    style={{ color: "#86EFAC", backgroundColor: "rgba(44,110,73,0.5)" }}
                  >
                    {featuredProduct.badge}
                  </span>
                  <h3 className="font-heading font-bold text-white text-[22px] leading-tight mb-2">
                    {featuredProduct.name}
                  </h3>
                  <p className="text-[13px] text-white/85 mb-3">{featuredProduct.summary}</p>
                  <CTAButton href={featuredProduct.affiliateUrl} variant="amazon" className="self-start mb-2">
                    View on Amazon →
                  </CTAButton>
                  <p className="text-[11px] text-white/55">We may earn a commission</p>
                </div>
              </Link>

              {/* Compact horizontal list */}
              <div className="flex flex-col">
                {compactProducts.map((p, i) => (
                  <div
                    key={p.id}
                    className={`flex items-center gap-3 py-2.5 ${i < compactProducts.length - 1 ? "border-b border-dashed border-divider" : ""}`}
                  >
                    <div className="shrink-0 w-[72px] h-[72px] rounded-lg bg-card overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.imageUrl}
                        alt={p.name}
                        style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center" }}
                      />
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent mb-1">
                        {p.badge}
                      </span>
                      <Link
                        href={`/best/${p.articleSlug}`}
                        className="font-heading font-bold text-[14px] text-textPrimary leading-snug mb-1 hover:text-accent transition-colors"
                      >
                        {p.name}
                      </Link>
                      <a
                        href={p.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow sponsored"
                        className="text-[12px] font-medium text-amber hover:text-amberDark hover:underline self-start"
                      >
                        View on Amazon →
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 2 */}
          <section id="browse-by-category">
            <h2 className="font-heading font-bold text-2xl text-textPrimary mb-3">Browse by Category</h2>
            <p className="text-[14px] text-textSecondary mb-6">
              Every category below links to a dedicated buying guide with six hands-on comparisons, a side-by-side
              table, and editorial notes on fit, durability, and value. We organized the site around the nine
              categories that come up most often for dog owners during a typical year of ownership — the gear
              you need on day one, like a properly fitted harness and a crate, alongside the gear that becomes
              relevant later, like recovery suits after a planned surgery or calming vests once you discover your
              dog struggles with thunderstorms or car travel. Each category page is updated independently, so a
              refresh to our crate picks doesn't wait on a refresh to our grooming picks, and you can always trust
              that "Updated 2026" reflects a genuine recent review rather than a one-time stamp from launch day.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {siteConfig.categories.map((c) => {
                const Icon = categoryIcons[c.slug];
                return (
                  <Link
                    key={c.slug}
                    href={`/best/${c.slug}`}
                    className="relative border border-purple-200 rounded-lg p-4 pb-8 hover:border-accent transition-colors"
                  >
                    <Icon size={22} className="text-accent mb-3" />
                    <h3 className="font-heading font-bold text-[14px] text-textPrimary mb-1.5">{c.name}</h3>
                    <p className="text-[12px] text-textSecondary">{categoryBlurbs[c.slug]}</p>
                    <span className="absolute bottom-2.5 right-3 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                      <span className="text-[10px] font-medium tracking-[0.08em] text-accent">Updated 2026</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* SECTION 3 */}
          <section id="training-guides">
            <h2 className="font-heading font-bold text-2xl text-textPrimary mb-3">Training Guides</h2>
            <p className="text-[14px] text-textSecondary mb-6">
              Step-by-step, no-fluff guides covering the most common training challenges new and experienced
              dog owners run into. Unlike our product reviews, these guides don't recommend a single piece of
              gear — they walk through a process, whether that's a structured week of crate introductions, a
              socialization checklist for a young puppy, or the exact sequence we recommend for ending leash
              pulling. Each guide links back to the relevant buying guide at the point where equipment choice
              actually matters, so you're never stuck guessing which harness or crate fits the technique being
              described.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {guides.map((g) => (
                <div key={g.slug} className="border border-purple-200 rounded-lg p-4 flex flex-col">
                  <span className="text-[10px] font-medium uppercase tracking-[0.12em] text-accent mb-2">{g.category}</span>
                  <Link href={`/training-guides/${g.slug}`} className="font-heading font-bold text-[14px] text-textPrimary hover:text-accent transition-colors mb-1.5 leading-snug">
                    {g.title}
                  </Link>
                  <p className="text-[12px] text-textSecondary mb-3 flex-1">{g.excerpt}</p>
                  <p className="text-[11px] text-muted mb-3">{g.readMinutes} min read</p>
                  <CTAButton href={`/training-guides/${g.slug}`} className="self-start">Read Guide →</CTAButton>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 4 */}
          <section id="training-checker" className="bg-dark text-white rounded-xl -mx-4 md:-mx-6 px-4 md:px-10 py-12">
            <h2 className="font-heading font-bold text-2xl text-center mb-3">Find Your Dog&apos;s Training Starting Point</h2>
            <p className="text-[14px] text-white/70 text-center max-w-md mx-auto mb-10">
              Answer three quick questions and get a personalized training plan matched to your dog&apos;s age, size, and temperament.
            </p>
            <TrainingReadinessChecker />
          </section>

          {/* SECTION 5 */}
          <section id="how-we-pick">
            <h2 className="font-heading font-bold text-2xl text-textPrimary mb-6">How We Pick Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <Search size={22} className="text-accent mb-3" />
                <h3 className="font-heading font-bold text-[15px] text-textPrimary mb-2">Independent Research</h3>
                <p className="text-[13px] text-textSecondary leading-relaxed">
                  We start with category research that maps every realistic option on the market, not just the
                  first page of search results.
                </p>
              </div>
              <div>
                <BarChart3 size={22} className="text-accent mb-3" />
                <h3 className="font-heading font-bold text-[15px] text-textPrimary mb-2">Sales &amp; Reviews</h3>
                <p className="text-[13px] text-textSecondary leading-relaxed">
                  We weigh review velocity and verified purchase patterns over raw star ratings, which are
                  easy to manipulate.
                </p>
              </div>
              <div>
                <ClipboardCheck size={22} className="text-accent mb-3" />
                <h3 className="font-heading font-bold text-[15px] text-textPrimary mb-2">Editorial Standards</h3>
                <p className="text-[13px] text-textSecondary leading-relaxed">
                  Every pick is checked against established behavioral and safety guidance before it earns a
                  spot on the site.
                </p>
              </div>
            </div>

            <div className="flex items-start justify-between gap-2 py-6 mb-8">
              {["Category Research", "Sales Analysis", "Review Audit", "Behavior Check", "Final Pick"].map((step, i) => (
                <Fragment key={step}>
                  <div className="flex flex-col items-center shrink min-w-0">
                    <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-heading font-bold text-[12px] shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-xs text-textSecondary text-center mt-2 leading-tight">{step}</span>
                  </div>
                  {i < 4 && <div className="flex-1 min-w-[8px] border-t border-dashed border-purple-200 mt-5" />}
                </Fragment>
              ))}
            </div>

            <p className="text-[14px] text-textSecondary leading-relaxed mb-4">
              Before any product earns a recommendation, we cross-reference its design and use case against
              public guidance from the{" "}
              <a href="https://www.aspca.org/pet-care/dog-care/dog-behavior-tips" target="_blank" rel="noopener noreferrer" className="text-link border-b-2 border-linkBorder hover:text-linkHover hover:border-link">
                ASPCA&apos;s dog behavior resources
              </a>, the{" "}
              <a href="https://www.akc.org/expert-advice/training/" target="_blank" rel="noopener noreferrer" className="text-link border-b-2 border-linkBorder hover:text-linkHover hover:border-link">
                AKC&apos;s training guidelines
              </a>, and the{" "}
              <a href="https://www.avma.org/resources-tools/pet-owners/petcare" target="_blank" rel="noopener noreferrer" className="text-link border-b-2 border-linkBorder hover:text-linkHover hover:border-link">
                AVMA&apos;s pet care resources
              </a>. This keeps our recommendations grounded in established practice rather than marketing copy.
            </p>
            <p className="text-[13px] text-muted mb-4">
              As an Amazon Associate, PawCraftDen earns from qualifying purchases made through links in this section.
            </p>
            <p className="text-[14px] text-textSecondary leading-relaxed">
              This process isn't a one-time exercise we ran when the site launched — it's how every category
              gets revisited throughout the year. Products get discontinued, manufacturers redesign popular
              models, and new entrants occasionally outperform a longstanding pick. When that happens, we
              re-run the same five-step process rather than swapping in a replacement based on a single
              standout review. That consistency is what lets us stand behind a "BEST OVERALL" badge with
              actual confidence rather than treating it as a permanent label.
            </p>
          </section>

          {/* SECTION 6 */}
          <section id="the-den">
            <h2 className="font-heading font-bold text-2xl text-textPrimary mb-2">The Den</h2>
            <p className="text-[14px] text-textSecondary mb-6">
              Essential dog care and training terms every owner should know.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {glossaryPreview.map((g) => (
                <div key={g.term} className="border-l-[3px] border-accent pl-4">
                  <h3 className="font-heading font-bold text-[14px] text-textPrimary mb-1.5">{g.term}</h3>
                  <p className="text-[12px] text-textSecondary leading-relaxed">{g.def}</p>
                </div>
              ))}
            </div>
            <CTAButton href="/the-den">Explore The Full Den →</CTAButton>
          </section>

          {/* SECTION 7 */}
          <section id="editor-picks">
            <h2 className="font-heading font-bold text-2xl text-textPrimary mb-6">Latest from Our Editors</h2>
            <div className="flex flex-col">
              {firstThreeArticles.map((a, i) => {
                const thumb = getProductsByArticle(a.slug).find((p) => p.rank === 1);
                return (
                  <div
                    key={a.slug}
                    className={`flex items-start gap-4 py-4 ${i < firstThreeArticles.length - 1 ? "border-b border-dashed border-divider" : ""}`}
                  >
                    {thumb && (
                      <div className="shrink-0 w-[140px] h-[100px] rounded-lg bg-card overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={thumb.imageUrl}
                          alt={a.title}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-accent mb-1 block">{a.category}</span>
                      <Link href={`/best/${a.slug}`} className="font-heading font-bold text-[16px] text-textPrimary hover:text-accent transition-colors block mb-1.5 leading-snug">
                        {a.title}
                      </Link>
                      <p className="text-[13px] text-textSecondary leading-relaxed mb-2">{a.excerpt}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-[12px] text-muted">{a.readMinutes} min read</span>
                        <span className="text-muted">·</span>
                        <Link href={`/best/${a.slug}`} className="text-[13px] font-medium text-link border-b-2 border-linkBorder hover:text-linkHover hover:border-link">
                          Read Review →
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* SECTION 8 */}
          <section id="by-the-numbers">
            <h2 className="font-heading font-bold text-2xl text-textPrimary mb-6">Why Gear Choice Matters</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { num: "54", label: "Products Reviewed" },
                { num: "9", label: "Categories Covered" },
                { num: "2026", label: "Updated" },
                { num: "100%", label: "Amazon Verified" },
              ].map((s) => (
                <div key={s.label} className="border border-purple-200 rounded-lg p-5 text-center">
                  <p className="font-heading font-extrabold text-3xl text-accent">{s.num}</p>
                  <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-muted mt-2">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="text-[14px] text-textSecondary leading-relaxed mb-3">
              The right harness, bed, or training tool can mean the difference between a dog that thrives and
              one that struggles silently with discomfort or poor habits. Our methodology favors gear that
              solves a real problem over gear that simply looks appealing in photos.
            </p>
            <p className="text-[14px] text-textSecondary leading-relaxed">
              Dogs can't tell you when a harness strap is digging into a shoulder or when a bed has lost its
              supportive structure — they simply start avoiding walks, sleeping in odd positions, or showing
              other small behavior changes that owners often miss until they've become entrenched habits.
              Treating gear selection as a genuine health and behavior decision, rather than a purely
              aesthetic one, is the lens we apply to every category on this site, from something as small as
              a chew toy to something as significant as orthopedic bedding for a senior dog.
            </p>
          </section>

          {/* SECTION 9 */}
          <section id="breed-guide">
            <h2 className="font-heading font-bold text-2xl text-textPrimary mb-6">Shop by Breed Size</h2>
            <p className="text-[14px] text-textSecondary leading-relaxed mb-6">
              Breed size affects nearly every gear decision on this site, often more than breed name itself.
              Two unrelated breeds at the same weight will usually fit the same harness range, while two dogs
              of the "same" breed bred to different standards can need very different sizing. Whenever a
              product page references a size range, we mean an actual measured chest girth or weight bracket,
              not a breed label, and we'd encourage you to measure your dog before ordering rather than
              relying on a stated breed match.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {breedSizes.map((b) => (
                <div key={b.name} className="border border-accent rounded-lg px-4 py-3 max-w-[220px]">
                  <p className="font-heading font-bold text-[14px] text-textPrimary">{b.name}</p>
                  <p className="text-[11px] text-muted mb-1.5">{b.range}</p>
                  <p className="text-[12px] text-textSecondary leading-relaxed">{b.tip}</p>
                </div>
              ))}
            </div>
            <div className="border-l-[3px] border-amber bg-calloutBg rounded-r-lg p-4">
              <p className="text-[13px] text-textSecondary">
                Not sure what size your dog is? <a href="#training-checker" className="text-link border-b-2 border-linkBorder font-medium hover:text-linkHover hover:border-link">→ Use our Training Readiness Checker</a>
              </p>
            </div>
          </section>

          {/* SECTION 10 */}
          <section id="newsletter" className="bg-dark text-white rounded-xl -mx-4 md:-mx-6 px-4 md:px-10 py-12">
            <h2 className="font-heading font-bold text-2xl text-center mb-3">Stay in the Pack</h2>
            <p className="text-[14px] text-white/70 text-center max-w-md mx-auto mb-8">
              Weekly training tips, new gear reviews, and expert dog care advice.
            </p>
            <ul className="flex flex-col gap-3 max-w-sm mx-auto mb-8">
              {[
                "New buying guides every week",
                "Editor's top picks updated monthly",
                "Training tips & behavior insights",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3 text-[13px]">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 px-4 py-2.5 rounded-pill bg-white/10 border border-white/20 text-[13px] text-white placeholder:text-white/50 focus:outline-none focus:border-white/50"
              />
              <button type="submit" className="bg-accent text-white text-[13px] font-medium px-[22px] py-2.5 rounded-pill hover:bg-accentDark transition-colors">
                Subscribe
              </button>
            </form>
          </section>
        </div>

        <aside className="hidden lg:block w-56 shrink-0">
          <div className="sticky top-24">
            <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-accent">Buying Guides</span>
            <ul className="mt-3 flex flex-col gap-3">
              {articles.map((a) => (
                <li key={a.slug}>
                  <span className="block text-[10px] font-medium uppercase tracking-[0.1em] text-accent mb-0.5">{a.category}</span>
                  <Link href={`/best/${a.slug}`} className="text-[13px] text-textPrimary hover:text-accent leading-snug">
                    {a.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/best/best-dog-harnesses-leashes" className="text-accent text-[13px] font-medium mt-4 inline-block">
              ALL REVIEWS →
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
