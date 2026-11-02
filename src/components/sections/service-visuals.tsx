"use client";

import { Box, Canvas, Fill, Line } from "@/components/sections/line-art";

/** One line illustration per service. */

function Purchase() {
  return (
    <Canvas>
      <Fill d="M52 58H148V104H52Z" className="fill-white" />
      <Fill d="M88 78H112V104H88Z" className="fill-brand" />
      <Line d="M28 104H172" className="stroke-brand/40" />
      <Line d="M52 58V104H148V58" />
      <Line d="M38 66 100 18 162 66" />
      <Line d="M88 104V78H112V104" />
    </Canvas>
  );
}

function Refinance() {
  return (
    <Canvas>
      <Fill d="M84 64a16 16 0 1 0 32 0a16 16 0 1 0 -32 0Z" className="fill-white" />
      <Line d="M62 48A42 42 0 0 1 140 44" />
      <Line d="M129 35 140 44 129 54" />
      <Line d="M138 72A42 42 0 0 1 60 76" />
      <Line d="M71 85 60 76 71 66" />
      <Fill d="M96 64a4 4 0 1 0 8 0a4 4 0 1 0 -8 0Z" className="fill-brand" />
    </Canvas>
  );
}

function AnyPurpose() {
  return (
    <Canvas>
      <Fill d="M46 22H154V46H46Z" className="fill-brand" />
      <Box x={46} y={22} width={108} height={24} rx={8} />
      <Box x={46} y={50} width={108} height={24} rx={8} />
      <Box x={46} y={78} width={108} height={24} rx={8} />
      <Fill d="M60 34a4 4 0 1 0 8 0a4 4 0 1 0 -8 0Z" className="fill-white" />
      <Fill d="M60 62a4 4 0 1 0 8 0a4 4 0 1 0 -8 0Z" className="fill-brand/40" />
      <Fill d="M60 90a4 4 0 1 0 8 0a4 4 0 1 0 -8 0Z" className="fill-brand/40" />
    </Canvas>
  );
}

function SelfBuild() {
  return (
    <Canvas>
      <Fill d="M100 16 138 38 100 62 62 38Z" className="fill-white" />
      <Line d="M28 108H172" className="stroke-brand/40" />
      <Line d="M100 16 138 38V86L100 108 62 86V38Z" />
      <Line d="M62 38 100 62 138 38" />
      <Line d="M100 62V108" />
    </Canvas>
  );
}

function Advice() {
  return (
    <Canvas>
      <Fill d="M88 50H164V98H88Z" className="fill-brand" />
      <Fill d="M134 98 154 110 148 98Z" className="fill-brand" />
      <Box x={36} y={20} width={84} height={52} rx={12} />
      <Line d="M58 72 50 90 74 72" />
      <Line d="M50 38H104" className="stroke-brand/60" />
      <Line d="M50 54H86" className="stroke-brand/60" />
      <Line d="M102 66H148" className="stroke-white" />
      <Line d="M102 82H132" className="stroke-white" />
    </Canvas>
  );
}

const visuals: Record<string, () => React.JSX.Element> = {
  purchase: Purchase,
  refinance: Refinance,
  "any-purpose": AnyPurpose,
  "self-build": SelfBuild,
  advice: Advice,
};

export function ServiceVisual({ slug }: { slug: string }) {
  const Visual = visuals[slug];
  return Visual ? <Visual /> : null;
}
