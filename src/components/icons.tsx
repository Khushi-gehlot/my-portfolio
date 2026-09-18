import { BrainCircuit, Database, Code2, BarChart3, ShieldCheck, Wrench, Sparkles, type LucideIcon } from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  brain: BrainCircuit,
  database: Database,
  code: Code2,
  chart: BarChart3,
  shield: ShieldCheck,
  tools: Wrench,
  sparkles: Sparkles,
};

export function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const C = MAP[name] ?? Code2;
  return <C size={size} strokeWidth={2} />;
}
