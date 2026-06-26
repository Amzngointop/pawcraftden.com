import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Paw Notes — Our Research Method & Editorial Standards",
  description:
    "How PawCraftDen selects, evaluates, and updates its dog care and training gear recommendations — our methodology explained.",
  alternates: { canonical: "/paw-notes" },
  openGraph: {
    title: "Paw Notes — Our Research Method & Editorial Standards",
    description:
      "How PawCraftDen selects, evaluates, and updates its dog care and training gear recommendations — our methodology explained.",
    url: `${siteConfig.url}/paw-notes`,
  },
};

export default function PawNotesPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 md:px-6 lg:px-8 py-12">
      <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-textPrimary mb-3">Paw Notes</h1>
      <p className="text-[15px] text-textSecondary mb-10">
        The thinking, research, and standards behind everything we publish.
      </p>

      <div className="flex flex-col gap-10 text-[15px] text-textSecondary leading-relaxed">
        <section>
          <h2 className="font-heading font-bold text-xl text-textPrimary mb-3">Our Mission</h2>
          <p className="mb-3">
            PawCraftDen exists to make dog gear shopping less overwhelming. The market for harnesses, beds,
            crates, and training tools is enormous, and most of it is marketed with the same handful of
            buzzwords regardless of actual quality. We sift through that noise and publish recommendations
            that reflect genuine fit-for-purpose thinking rather than whatever has the loudest marketing budget.
          </p>
          <p>
            We write for the audience we were once part of ourselves: new puppy parents trying to figure out
            crate sizing for the first time, and experienced owners looking to upgrade gear that's no longer
            serving their dog well.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-textPrimary mb-3">How We Research</h2>
          <p className="mb-3">
            Every category starts with a broad market scan that maps out the realistic range of options
            available, not just the first page of marketplace search results. From there, we narrow the
            field using verified purchase patterns and review velocity, which tend to be more reliable
            signals than raw star counts.
          </p>
          <p>
            We pay particular attention to sizing accuracy, material durability claims, and how a product
            holds up to the kind of daily wear a real household puts it through — information we draw from
            aggregated buyer feedback patterns rather than a single unboxing.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-textPrimary mb-3">Our Standards</h2>
          <p className="mb-3">
            Before any product appears on PawCraftDen, we check it against publicly available behavioral
            and safety guidance from established veterinary and training organizations. If a product's
            design or marketing conflicts with that guidance, it doesn't make the list, regardless of how
            popular it is.
          </p>
          <p>
            We also hold ourselves to a simple internal test: would a first-time dog owner be able to use
            this safely without a trainer standing next to them? If the answer is no, we either skip the
            product or are explicit about the experience level it requires.
          </p>
        </section>

        <section>
          <h2 className="font-heading font-bold text-xl text-textPrimary mb-3">Why Gear Choice Matters for Dogs</h2>
          <p className="mb-3">
            A poorly fitted harness can chafe and discourage walks. An unsupportive bed can leave joint pain
            unaddressed for years. The wrong training tool, used without guidance, can create more behavioral
            problems than it solves. Gear isn't cosmetic — it directly shapes a dog's comfort, health, and
            day-to-day behavior.
          </p>
          <p>
            Our editorial process is built around that reality, which is why every recommendation on this
            site is paired with context on who it's actually for, not just a generic endorsement.
          </p>
        </section>
      </div>
    </main>
  );
}
