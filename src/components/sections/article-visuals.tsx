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

/** Common mistakes: a checklist with a warning on it. */
function Mistakes() {
  return (
    <Canvas>
      <Fill d="M52 16H148V104H52Z" className="fill-white" />
      <Box x={52} y={16} width={96} height={88} rx={10} />
      <Line d="M64 40 69 45 77 34" />
      <Line d="M86 40H128" className="stroke-brand/60" />
      <Line d="M64 58 76 70M76 58 64 70" />
      <Line d="M86 64H120" className="stroke-brand/60" />
      <Line d="M64 86 69 91 77 80" />
      <Line d="M86 86H132" className="stroke-brand/60" />
      <Fill d="M150 24 168 56H132Z" className="fill-brand" />
      <Line d="M150 36V46" className="stroke-white" />
      <Line d="M150 51V51.5" className="stroke-white" />
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
  "five-mistakes": Mistakes,
  "advisor-worth-it": Worth,
};

export function ArticleVisual({ slug }: { slug: string }) {
  const Visual = visuals[slug];
  return Visual ? <Visual /> : null;
}
