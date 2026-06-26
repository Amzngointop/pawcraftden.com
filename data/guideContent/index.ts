import type { GuideBody } from "./types";
import { content as crateTrain } from "./how-to-crate-train-your-dog";
import { content as socialization } from "./puppy-socialization-guide";
import { content as leashPulling } from "./stop-dog-pulling-on-leash";
import { content as groomingAtHome } from "./dog-grooming-at-home";
import { content as bodyLanguage } from "./how-to-read-dog-body-language";
import { content as dailyRoutine } from "./daily-routine-for-dogs";

export const guideContentMap: Record<string, GuideBody> = {
  "how-to-crate-train-your-dog": crateTrain,
  "puppy-socialization-guide": socialization,
  "stop-dog-pulling-on-leash": leashPulling,
  "dog-grooming-at-home": groomingAtHome,
  "how-to-read-dog-body-language": bodyLanguage,
  "daily-routine-for-dogs": dailyRoutine,
};

export function getGuideContent(slug: string): GuideBody | undefined {
  return guideContentMap[slug];
}
