import type { ReactNode } from "react";

export interface SectionHeading {
  id: string;
  label: string;
}

export interface GuideBody {
  body: ReactNode;
  sections: SectionHeading[];
  relatedArticleSlugs: string[];
}
