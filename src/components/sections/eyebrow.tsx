import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type EyebrowProps = {
  /** `dark` is for the navy band. */
  tone?: "light" | "dark";
  className?: string;
  children: React.ReactNode;
};

/** The small pill above a section headline. */
export function Eyebrow({ tone = "light", className, children }: EyebrowProps) {
  return (
    <Reveal
      as="p"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border py-1.5 ps-3.5 pe-4 text-sm",
        tone === "light"
          ? "bg-white/70 text-muted-foreground"
          : "border-paper/20 text-paper/80",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn("size-2 rounded-full", tone === "light" ? "bg-brand" : "bg-sky")}
      />
      {children}
    </Reveal>
  );
}
