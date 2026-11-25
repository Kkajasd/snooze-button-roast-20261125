// Snooze Button Roast — make.fun
// Writes one roast line (1-200 chars, one line) to /output/entry.txt.
// Deterministic: the same line on every run.
// Note: /output is created only if missing and entry.txt is overwritten
// in place; the directory is never deleted (the grader bind-mounts it).

import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My alarm clock rang at 6 AM on Saturday like an unpaid intern gunning for a promotion at a company that doesn't exist.";

// Guard: the gate allows 1-200 chars, a single line, not only whitespace.
if (
  ROAST.length < 1 ||
  ROAST.length > 200 ||
  ROAST.includes("\n") ||
  ROAST.trim().length === 0
) {
  throw new Error(`Roast fails the gate: ${ROAST.length} chars`);
}

const outDir = process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ROAST, "utf8");
