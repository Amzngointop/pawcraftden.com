interface BreedFitScoreBarProps {
  comfortScore: number;
  buildScore: number;
  valueScore: number;
}

const metrics = (p: BreedFitScoreBarProps) => [
  { label: "COMFORT", value: p.comfortScore },
  { label: "DURABILITY", value: p.buildScore },
  { label: "VALUE", value: p.valueScore },
];

export default function BreedFitScoreBar(props: BreedFitScoreBarProps) {
  return (
    <div className="flex flex-col gap-2.5 my-4">
      {metrics(props).map((m, i) => (
        <div key={m.label} className="flex items-center gap-3">
          <span className="text-[10px] font-medium uppercase tracking-[0.1em] text-muted w-20 shrink-0">
            {m.label}
          </span>
          <div className="flex-1 h-1.5 rounded-pill bg-barTrack overflow-hidden">
            <div
              className="score-bar-fill h-full rounded-pill bg-accent"
              style={{
                "--bar-value": `${m.value}%`,
                animationDelay: `${i * 150}ms`,
              } as React.CSSProperties}
            />
          </div>
          <span className="text-[12px] font-medium text-textPrimary w-7 text-right">{m.value}</span>
        </div>
      ))}
    </div>
  );
}
