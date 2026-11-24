// Real-Life Patch Notes — entry for make.fun's "Real-Life Patch Notes: The Comedy Changelog" bounty.
// Writes one line to /output/entry.txt: a software patch note for a bug in
// real life, in the terse register of a real release note. The bug is the
// shower replay — the brain replays your most embarrassing moment from 2014
// at full volume every time the shower runs. The line is 126 characters
// (limit 160).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "v2.7.0: Fixed a bug where the brain replayed your most embarrassing moment from 2014 at full volume every time the shower ran.";

// The gate counts characters, so refuse to write anything outside 1..160
// or containing a line break: a sealed scorer would list it as invalid.
if (LINE.length < 1 || LINE.length > 160 || LINE.includes("\n")) {
  throw new Error(`entry line out of gate: ${LINE.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to entry.txt`);
