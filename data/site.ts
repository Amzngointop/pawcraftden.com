export const siteConfig = {
  name: "PawCraftDen",
  domain: "pawcraftden.com",
  url: "https://pawcraftden.com",
  niche: "Dog Care & Training Essentials",
  email: "info@pawcraftden.com",
  affiliateTag: "YOURTAG-20",
  description:
    "Independent reviews and buying guides for dog harnesses, training collars, beds, crates, grooming tools, and more — backed by real research, not guesswork.",
  navLinks: [
    { label: "REVIEWS", href: "/#top-rated", isMega: true },
    { label: "TRAINING GUIDES", href: "/training-guides" },
    { label: "THE DEN", href: "/the-den" },
    { label: "PAW NOTES", href: "/paw-notes" },
    { label: "REACH US", href: "/reach-us" },
  ],
  categories: [
    { name: "Dog Harnesses & Leashes", slug: "best-dog-harnesses-leashes" },
    { name: "Dog Training Collars", slug: "best-dog-training-collars" },
    { name: "Dog Beds", slug: "best-dog-beds" },
    { name: "Dog Crates & Kennels", slug: "best-dog-crates-kennels" },
    { name: "Dog Grooming Tools", slug: "best-dog-grooming-tools" },
    { name: "Recovery Suits & Calming Vests", slug: "best-recovery-suits-calming-vests" },
    { name: "Dog Chews & Dental Care", slug: "best-dog-chews-dental-care" },
    { name: "Dog Bowls & Feeders", slug: "best-dog-bowls-feeders" },
    { name: "Dog Poop Bags & Waste Management", slug: "best-dog-poop-bags" },
  ],
  footerLinks: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms" },
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  ],
};

export function withAffiliateTag(url: string): string {
  return `${url}?tag=${siteConfig.affiliateTag}`;
}
