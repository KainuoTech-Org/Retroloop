import { cn } from "@/lib/utils";

export type ConditionGrade = "S" | "A" | "B" | "C";

interface ConditionBadgeProps {
  grade: ConditionGrade;
  className?: string;
  showLabel?: boolean;
}

const GRADE_CONFIG = {
  S: { color: "bg-emerald-600", label: "DEADSTOCK" },
  A: { color: "bg-retro-black", label: "EXCELLENT" },
  B: { color: "bg-amber-600", label: "WORN" },
  C: { color: "bg-retro-red", label: "DISTRESSED" },
};

export function ConditionBadge({ grade, className, showLabel = false }: ConditionBadgeProps) {
  const config = GRADE_CONFIG[grade];

  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <span
        className={cn(
          "flex items-center justify-center w-8 h-8 rounded-full font-oswald font-bold text-white text-sm border border-retro-beige/20 shadow-sm",
          config.color
        )}
      >
        {grade}
      </span>
      {showLabel && (
        <span className="text-xs font-bold tracking-wider uppercase text-retro-black/70">
          {config.label}
        </span>
      )}
    </div>
  );
}
