"use client";

import { useState } from "react";
import Link from "next/link";

type AgeGroup = "Puppy" | "Young" | "Adult" | "Senior";
type Size = "Toy" | "Small" | "Medium" | "Large" | "Giant";
type Temperament =
  | "Energetic"
  | "Stubborn"
  | "Shy"
  | "Food-Motivated"
  | "Easily Distracted"
  | "Calm";

const ageOptions: { value: AgeGroup; label: string }[] = [
  { value: "Puppy", label: "Puppy (8–16 weeks)" },
  { value: "Young", label: "Young Dog (4–12 months)" },
  { value: "Adult", label: "Adult (1–7 years)" },
  { value: "Senior", label: "Senior (7+ years)" },
];

const sizeOptions: Size[] = ["Toy", "Small", "Medium", "Large", "Giant"];

const temperamentOptions: Temperament[] = [
  "Energetic",
  "Stubborn",
  "Shy",
  "Food-Motivated",
  "Easily Distracted",
  "Calm",
];

interface Plan {
  focus: string;
  sessionLength: string;
  tools: { label: string; href: string }[];
  advice: string;
}

function getPlan(age: AgeGroup, temperaments: Temperament[]): Plan {
  const has = (t: Temperament) => temperaments.includes(t);

  if (age === "Puppy") {
    return {
      focus: "FOUNDATION BASICS",
      sessionLength: "5–10 min / 3× daily",
      tools: [
        { label: "Dog Harnesses & Leashes", href: "/best/best-dog-harnesses-leashes" },
        { label: "Dog Crates & Kennels", href: "/best/best-dog-crates-kennels" },
        { label: "Dog Chews & Dental Care", href: "/best/best-dog-chews-dental-care" },
      ],
      advice:
        "Keep early sessions short, positive, and food-motivated. Focus on name recognition, gentle handling, and crate comfort before introducing any structured obedience work.",
    };
  }

  if (age === "Young" && (has("Energetic") || has("Easily Distracted"))) {
    return {
      focus: "IMPULSE CONTROL",
      sessionLength: "10–15 min / 2× daily",
      tools: [
        { label: "Dog Training Collars", href: "/best/best-dog-training-collars" },
        { label: "Dog Harnesses & Leashes", href: "/best/best-dog-harnesses-leashes" },
      ],
      advice:
        "High energy and distractibility respond best to structured impulse-control games like wait-and-release and engagement exercises before moving to busier environments.",
    };
  }

  if (age === "Young" && has("Shy")) {
    return {
      focus: "CONFIDENCE BUILDING",
      sessionLength: "5–10 min / 2× daily",
      tools: [
        { label: "Dog Harnesses & Leashes", href: "/best/best-dog-harnesses-leashes" },
        { label: "Recovery Suits & Calming Vests", href: "/best/best-recovery-suits-calming-vests" },
        { label: "Dog Chews & Dental Care", href: "/best/best-dog-chews-dental-care" },
      ],
      advice:
        "Shy young dogs benefit from low-pressure exposure paired with high-value rewards. Avoid flooding them with new environments — build confidence gradually at their own pace.",
    };
  }

  if (age === "Adult" && has("Stubborn")) {
    return {
      focus: "ADVANCED OBEDIENCE",
      sessionLength: "10–15 min / 2× daily",
      tools: [
        { label: "Dog Training Collars", href: "/best/best-dog-training-collars" },
        { label: "Dog Harnesses & Leashes", href: "/best/best-dog-harnesses-leashes" },
      ],
      advice:
        "Stubborn adult dogs do best with consistent, clearly communicated cues and a structured reward schedule. Consistency across all household members matters more than session length.",
    };
  }

  if (age === "Adult" && (has("Calm") || has("Food-Motivated"))) {
    return {
      focus: "SKILL BUILDING",
      sessionLength: "10–20 min / flexible",
      tools: [
        { label: "Dog Harnesses & Leashes", href: "/best/best-dog-harnesses-leashes" },
        { label: "Dog Bowls & Feeders", href: "/best/best-dog-bowls-feeders" },
      ],
      advice:
        "Calm, food-motivated adults are ideal candidates for expanding their skill set — think advanced recall, trick training, and longer duration stays.",
    };
  }

  if (age === "Senior") {
    return {
      focus: "GENTLE MAINTENANCE",
      sessionLength: "5 min / as tolerated",
      tools: [
        { label: "Dog Beds", href: "/best/best-dog-beds" },
        { label: "Dog Grooming Tools", href: "/best/best-dog-grooming-tools" },
        { label: "Dog Chews & Dental Care", href: "/best/best-dog-chews-dental-care" },
      ],
      advice:
        "Senior dogs benefit most from gentle mental stimulation and joint-friendly comfort. Keep sessions brief, low-impact, and centered on maintaining existing skills.",
    };
  }

  return {
    focus: "GENERAL OBEDIENCE",
    sessionLength: "10 min / 2× daily",
    tools: [
      { label: "Dog Harnesses & Leashes", href: "/best/best-dog-harnesses-leashes" },
      { label: "Dog Training Collars", href: "/best/best-dog-training-collars" },
    ],
    advice:
      "A balanced routine of structured cues and free play will help reinforce good habits while keeping your dog mentally engaged.",
  };
}

export default function TrainingReadinessChecker() {
  const [step, setStep] = useState(1);
  const [age, setAge] = useState<AgeGroup | null>(null);
  const [size, setSize] = useState<Size | null>(null);
  const [temperaments, setTemperaments] = useState<Temperament[]>([]);
  const [plan, setPlan] = useState<Plan | null>(null);

  const toggleTemperament = (t: Temperament) => {
    setTemperaments((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : prev.length < 3 ? [...prev, t] : prev
    );
  };

  const handleGetPlan = () => {
    if (!age) return;
    setPlan(getPlan(age, temperaments));
  };

  const reset = () => {
    setStep(1);
    setAge(null);
    setSize(null);
    setTemperaments([]);
    setPlan(null);
  };

  return (
    <div className="max-w-xl mx-auto">
      {!plan && (
        <>
          <div className="flex justify-center gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <span
                key={s}
                className={`w-2 h-2 rounded-full ${s === step ? "bg-white" : "bg-accent/40"}`}
              />
            ))}
          </div>

          {step === 1 && (
            <div className="fade-in-stagger">
              <p className="text-center text-[13px] font-medium uppercase tracking-[0.12em] text-white/60 mb-4">
                Step 1 of 3 — Dog&apos;s Age
              </p>
              <div className="flex flex-col gap-3">
                {ageOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => {
                      setAge(opt.value);
                      setStep(2);
                    }}
                    className={`text-left px-5 py-3 rounded-pill border text-[14px] transition-colors ${
                      age === opt.value
                        ? "bg-white text-dark border-white"
                        : "border-white/30 text-white hover:border-white"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="fade-in-stagger">
              <p className="text-center text-[13px] font-medium uppercase tracking-[0.12em] text-white/60 mb-4">
                Step 2 of 3 — Breed Size
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {sizeOptions.map((s) => (
                  <button
                    key={s}
                    onClick={() => {
                      setSize(s);
                      setStep(3);
                    }}
                    className={`px-5 py-2 rounded-pill border text-[13px] transition-colors ${
                      size === s
                        ? "bg-white text-dark border-white"
                        : "border-white/30 text-white hover:border-white"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="fade-in-stagger">
              <p className="text-center text-[13px] font-medium uppercase tracking-[0.12em] text-white/60 mb-4">
                Step 3 of 3 — Temperament (pick up to 3)
              </p>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {temperamentOptions.map((t) => (
                  <button
                    key={t}
                    onClick={() => toggleTemperament(t)}
                    className={`px-5 py-2 rounded-pill border text-[13px] transition-colors ${
                      temperaments.includes(t)
                        ? "bg-white text-dark border-white"
                        : "border-white/30 text-white hover:border-white"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleGetPlan}
                  disabled={temperaments.length === 0}
                  className="bg-accent text-white text-[13px] font-medium px-7 py-3 rounded-pill hover:bg-accentDark transition-colors disabled:opacity-40"
                >
                  Get My Plan
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {plan && (
        <div className="fade-in-stagger bg-white/5 border border-white/10 rounded-xl p-6 md:p-8">
          <span className="inline-block text-[11px] font-medium uppercase tracking-[0.14em] bg-accent text-white px-3 py-1 rounded-pill mb-4">
            {plan.focus}
          </span>
          <p className="text-[13px] text-white/70 mb-1">Recommended session length</p>
          <p className="text-[18px] font-heading font-bold mb-5">{plan.sessionLength}</p>

          <p className="text-[13px] text-white/70 mb-2">Top recommended tools</p>
          <ul className="flex flex-col gap-2 mb-5">
            {plan.tools.map((t) => (
              <li key={t.href}>
                <Link href={t.href} className="text-[14px] text-white underline hover:text-[#7FB69A]">
                  {t.label} →
                </Link>
              </li>
            ))}
          </ul>

          <p className="text-[14px] text-white/85 leading-relaxed mb-6">{plan.advice}</p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/training-guides"
              className="inline-flex items-center gap-2 bg-accent text-white text-[13px] font-medium px-[22px] py-2.5 rounded-pill hover:bg-accentDark transition-colors"
            >
              Explore Training Guides →
            </Link>
            <button
              onClick={reset}
              className="text-[13px] font-medium text-white/70 underline hover:text-white"
            >
              Start over
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
