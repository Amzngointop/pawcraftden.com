export interface GuideConfig {
  slug: string;
  title: string;
  category: string;
  metaDescription: string;
  readMinutes: number;
  excerpt: string;
  coverImage: string;
}

export const guides: GuideConfig[] = [
  {
    slug: "how-to-crate-train-your-dog",
    title: "How to Crate Train Your Dog in 7 Days (Step-by-Step)",
    category: "CRATE TRAINING",
    metaDescription:
      "A 7-day, step-by-step plan for crate training your dog with positive reinforcement and minimal stress.",
    readMinutes: 9,
    excerpt: "A gentle, structured 7-day plan to make the crate a place your dog actually wants to be.",
    coverImage: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1170&auto=format&fit=crop",
  },
  {
    slug: "puppy-socialization-guide",
    title: "The Complete Puppy Socialization Guide (0–16 Weeks)",
    category: "PUPPY CARE",
    metaDescription:
      "Everything you need to know about puppy socialization during the critical 0-16 week window.",
    readMinutes: 10,
    excerpt: "How to use the critical socialization window to raise a confident, well-adjusted dog.",
    coverImage: "https://images.unsplash.com/photo-1530667912788-f976e8ee0bd5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    slug: "stop-dog-pulling-on-leash",
    title: "How to Stop Your Dog from Pulling on the Leash",
    category: "LEASH TRAINING",
    metaDescription:
      "Practical, step-by-step techniques to stop leash pulling and build calm, loose-leash walks.",
    readMinutes: 8,
    excerpt: "The exact technique progression we recommend for ending leash pulling for good.",
    coverImage: "https://images.unsplash.com/photo-1581597359121-0f69057e2fb1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    slug: "dog-grooming-at-home",
    title: "Dog Grooming at Home: A Beginner's Step-by-Step Guide",
    category: "GROOMING",
    metaDescription:
      "A beginner-friendly guide to grooming your dog at home, from brushing to bathing to nail care.",
    readMinutes: 9,
    excerpt: "A full at-home grooming routine, broken into manageable steps anyone can follow.",
    coverImage: "https://images.unsplash.com/photo-1581888227599-779811939961?w=1170&auto=format&fit=crop",
  },
  {
    slug: "how-to-read-dog-body-language",
    title: "How to Read Your Dog's Body Language (Visual Guide)",
    category: "BEHAVIOR",
    metaDescription:
      "Learn to read your dog's body language signals, from relaxed to stressed to overstimulated.",
    readMinutes: 10,
    excerpt: "Decode the subtle signals your dog is sending before behavior escalates.",
    coverImage: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=1170&auto=format&fit=crop",
  },
  {
    slug: "daily-routine-for-dogs",
    title: "Building a Daily Routine for a Happy, Well-Behaved Dog",
    category: "LIFESTYLE",
    metaDescription:
      "How to structure a daily routine that supports your dog's physical health and behavioral stability.",
    readMinutes: 8,
    excerpt: "A sample daily structure that keeps dogs physically tired and mentally settled.",
    coverImage: "https://images.unsplash.com/photo-1597633425046-08f5110420b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export function getGuideBySlug(slug: string): GuideConfig | undefined {
  return guides.find((g) => g.slug === slug);
}
