export interface ArticleConfig {
  slug: string;
  title: string;
  category: string;
  metaDescription: string;
  readMinutes: number;
  excerpt: string;
}

export const articles: ArticleConfig[] = [
  {
    slug: "best-dog-harnesses-leashes",
    title: "Best Dog Harnesses & Leashes for Every Breed Size (2026)",
    category: "Harnesses & Leashes",
    metaDescription:
      "Our 2026 picks for the best dog harnesses and leashes, compared by fit, control, and breed size so you can walk with confidence.",
    readMinutes: 11,
    excerpt: "Six harnesses compared for fit, control, and comfort across every breed size.",
  },
  {
    slug: "best-dog-training-collars",
    title: "Best Dog Training Collars for Effective, Humane Training (2026)",
    category: "Training Collars",
    metaDescription:
      "A 2026 breakdown of the best dog training collars, comparing range, stimulation control, and waterproofing for humane training.",
    readMinutes: 12,
    excerpt: "Remote training collars reviewed for range, control levels, and ease of use.",
  },
  {
    slug: "best-dog-beds",
    title: "Best Orthopedic Dog Beds for Comfort & Joint Support (2026)",
    category: "Dog Beds",
    metaDescription:
      "The best orthopedic dog beds of 2026, compared for foam quality, joint support, and washability.",
    readMinutes: 11,
    excerpt: "Orthopedic beds compared for foam density, support, and easy cleanup.",
  },
  {
    slug: "best-dog-crates-kennels",
    title: "Best Dog Crates & Kennels for Home & Travel (2026)",
    category: "Crates & Kennels",
    metaDescription:
      "Top dog crates and kennels for 2026, reviewed for crate training, travel, and long-term durability.",
    readMinutes: 12,
    excerpt: "Crates and kennels compared for crate training, travel, and everyday durability.",
  },
  {
    slug: "best-dog-grooming-tools",
    title: "Best Dog Grooming Tools for Every Coat Type (2026)",
    category: "Grooming Tools",
    metaDescription:
      "The best dog grooming tools of 2026 for every coat type, from deshedding rakes to self-cleaning slicker brushes.",
    readMinutes: 10,
    excerpt: "Deshedding tools and brushes compared across short, long, and double coats.",
  },
  {
    slug: "best-recovery-suits-calming-vests",
    title: "Best Recovery Suits & Calming Vests for Dogs (2026)",
    category: "Recovery & Calming",
    metaDescription:
      "Our 2026 picks for the best post-surgery recovery suits and anxiety-easing calming vests for dogs.",
    readMinutes: 11,
    excerpt: "Recovery suits and calming vests compared for post-op protection and anxiety relief.",
  },
  {
    slug: "best-dog-chews-dental-care",
    title: "Best Dog Chews & Dental Care Treats for Healthy Teeth (2026)",
    category: "Chews & Dental",
    metaDescription:
      "The best dog chews and dental care treats of 2026, reviewed for ingredient quality and dental benefit.",
    readMinutes: 10,
    excerpt: "Bully sticks and dental chews compared for ingredients, size, and value.",
  },
  {
    slug: "best-dog-bowls-feeders",
    title: "Best Dog Bowls & Automatic Feeders for Every Lifestyle (2026)",
    category: "Bowls & Feeders",
    metaDescription:
      "Top dog bowls and automatic feeders of 2026 for busy households, multi-pet homes, and growing puppies.",
    readMinutes: 10,
    excerpt: "Elevated bowls and automatic feeders compared for convenience and durability.",
  },
  {
    slug: "best-dog-poop-bags",
    title: "Best Dog Poop Bags & Waste Dispensers (2026)",
    category: "Waste Management",
    metaDescription:
      "The best dog poop bags and waste dispensers of 2026, compared for thickness, value, and eco-friendliness.",
    readMinutes: 9,
    excerpt: "Waste bags and dispensers compared for leak resistance, bulk value, and eco impact.",
  },
];

export function getArticleBySlug(slug: string): ArticleConfig | undefined {
  return articles.find((a) => a.slug === slug);
}
