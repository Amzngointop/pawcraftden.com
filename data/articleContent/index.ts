import type { ArticleBody } from "./types";
import { content as harnesses } from "./best-dog-harnesses-leashes";
import { content as collars } from "./best-dog-training-collars";
import { content as beds } from "./best-dog-beds";
import { content as crates } from "./best-dog-crates-kennels";
import { content as grooming } from "./best-dog-grooming-tools";
import { content as recovery } from "./best-recovery-suits-calming-vests";
import { content as chews } from "./best-dog-chews-dental-care";
import { content as bowls } from "./best-dog-bowls-feeders";
import { content as poopBags } from "./best-dog-poop-bags";

export const articleContentMap: Record<string, ArticleBody> = {
  "best-dog-harnesses-leashes": harnesses,
  "best-dog-training-collars": collars,
  "best-dog-beds": beds,
  "best-dog-crates-kennels": crates,
  "best-dog-grooming-tools": grooming,
  "best-recovery-suits-calming-vests": recovery,
  "best-dog-chews-dental-care": chews,
  "best-dog-bowls-feeders": bowls,
  "best-dog-poop-bags": poopBags,
};

export function getArticleContent(slug: string): ArticleBody | undefined {
  return articleContentMap[slug];
}
