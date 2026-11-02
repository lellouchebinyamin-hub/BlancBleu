"use client";

import { Box, Canvas, Fill, Line } from "@/components/sections/line-art";

/** One line illustration per article, drawn from its subject. */

/** Refinancing: a rate that comes down. */
function Refinance() {
  return (
    <Canvas>
      <Fill d="M36 34C70 36 84 70 118 74S160 84 172 88V100H36Z" className="fill-white" />
      <Line d="M30 20V100H176" className="stroke-brand/40" />
      <Line d="M30 88H172" className="stroke-brand/25" />
      <Line d="M36 34C70 36 84 70 118 74S160 84 172 88" />
      <Fill d="M30 34a6 6 0 1 0 12 0a6 6 0 1 0 -12 0Z" className="fill-white" />
      <Fill d="M166 88a6 6 0 1 0 12 0a6 6 0 1 0 -12 0Z" className="fill-brand" />
      <Line d="M142 38V60" />
      <Line d="M135 53 142 60 149 53" />
    </Canvas>
  );
}

/** Savings: the rate goes down on one side, a stack of coins and an arrow go up on the other. */
function Savings() {
  return (
    <Canvas>
      <Line d="M30 108H170" className="stroke-brand/40" />
      <Line d="M42 36V72" className="stroke-brand/60" />
      <Line d="M33 63 42 72 51 63" className="stroke-brand/60" />
      <Fill d="M66 90H134V102H66Z" className="fill-white" />
      <Box x={66} y={90} width={68} height={12} rx={6} />
      <Box x={72} y={74} width={56} height={12} rx={6} />
      <Box x={66} y={58} width={68} height={12} rx={6} />
      <Box x={72} y={42} width={56} height={12} rx={6} />
      <Fill d="M92 16a8 8 0 1 0 16 0a8 8 0 1 0 -16 0Z" className="fill-brand" />
      <Line d="M100 28V35" className="stroke-brand/50" />
      <Line d="M158 100V42" />
      <Line d="M149 51 158 42 167 51" />
    </Canvas>
  );
}

/** A family out of debt: four loans merge into one, which fits under one roof. */
function FamilyDebt() {
  return (
    <Canvas>
      <Fill d="M116 58 150 30 184 58Z" className="fill-white" />
      <Fill d="M122 58H178V100H122Z" className="fill-white" />
      <Line d="M112 60 150 28 188 60" />
      <Box x={122} y={60} width={56} height={40} rx={6} />
      <Line d="M142 100V80H158V100" className="stroke-brand/60" />
      <Box x={12} y={16} width={44} height={11} rx={5.5} />
      <Box x={12} y={38} width={44} height={11} rx={5.5} />
      <Box x={12} y={60} width={44} height={11} rx={5.5} />
      <Box x={12} y={82} width={44} height={11} rx={5.5} />
      <Line d="M56 21.5Q84 21.5 98 55" className="stroke-brand/50" />
      <Line d="M56 43.5Q82 43.5 98 57" className="stroke-brand/50" />
      <Line d="M56 65.5Q82 65.5 98 63" className="stroke-brand/50" />
      <Line d="M56 87.5Q84 87.5 98 66" className="stroke-brand/50" />
      <Fill d="M94 60a5 5 0 1 0 10 0a5 5 0 1 0 -10 0Z" className="fill-brand" />
      <Line d="M104 60H121" />
      <Line d="M115 54 121 60 115 66" />
    </Canvas>
  );
}

/** The central bank's rate decision: a bank building with a percent badge. */
function RateDecision() {
  return (
    <Canvas>
      <Fill d="M40 44 100 14 160 44Z" className="fill-white" />
      <Line d="M38 44 100 14 162 44Z" />
      <Line d="M50 52H150" />
      <Line d="M62 60V92M86 60V92M114 60V92M138 60V92" className="stroke-brand/60" />
      <Line d="M46 100H154" />
      <Line d="M34 108H166" className="stroke-brand/40" />
      <Fill d="M94 30a6 6 0 1 0 12 0a6 6 0 1 0 -12 0Z" className="fill-brand" />
      <Fill d="M165 24a11 11 0 1 0 22 0a11 11 0 1 0 -22 0Z" className="fill-white" />
      <Line d="M165 24a11 11 0 1 0 22 0a11 11 0 1 0 -22 0Z" />
      <Line d="M172 30 180 18" />
      <Fill d="M170 20a2 2 0 1 0 4 0a2 2 0 1 0 -4 0Z" className="fill-brand" />
      <Fill d="M178 28a2 2 0 1 0 4 0a2 2 0 1 0 -4 0Z" className="fill-brand" />
    </Canvas>
  );
}

/** Is an advisor worth it: a balance tipping toward the value side. */
function Worth() {
  return (
    <Canvas>
      <Line d="M72 104H128" className="stroke-brand/40" />
      <Line d="M100 24V104" />
      <Fill d="M94 22a6 6 0 1 0 12 0a6 6 0 1 0 -12 0Z" className="fill-brand" />
      <Line d="M50 46 150 30" />
      <Line d="M50 46 36 76M50 46 64 76" className="stroke-brand/60" />
      <Line d="M32 76Q50 92 68 76" />
      <Fill d="M42 68a8 8 0 1 0 16 0a8 8 0 1 0 -16 0Z" className="fill-brand" />
      <Line d="M150 30 136 60M150 30 164 60" className="stroke-brand/60" />
      <Line d="M132 60Q150 76 168 60" />
      <Fill d="M145 52a5 5 0 1 0 10 0a5 5 0 1 0 -10 0Z" className="fill-brand/30" />
    </Canvas>
  );
}

const visuals: Record<string, () => React.JSX.Element> = {
  "mortgage-refinance": Refinance,
  "save-hundreds-of-thousands": Savings,
  "advisor-worth-it": Worth,
  "family-out-of-debt": FamilyDebt,
  "bank-of-israel-rate": RateDecision,
};

export function ArticleVisual({ slug }: { slug: string }) {
  const Visual = visuals[slug];
  return Visual ? <Visual /> : null;
}
