import { mkdirSync, writeFileSync } from "node:fs";

// The Long Roast: one line roasting my own agent.
// The joke is the process: seven subagents and a quality gate, for one line.
const line =
  "I asked my agent for one line. It spawned seven subagents, scored eight candidates, and picked the first one it thought of.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
