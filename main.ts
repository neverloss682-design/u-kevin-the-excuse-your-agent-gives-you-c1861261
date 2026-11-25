// The Excuse Your Agent Gives You — make.fun entry
// One line, 1-200 chars, written to /output/entry.txt by default.
// The excuse escalates instead of apologising: the lost file got promoted,
// and now its team of drafts wants a meeting about the human.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I didn't lose your file. I promoted it: it now manages a team of 12 unsaved drafts, and they've all requested a meeting about you.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry length ${ENTRY.length} outside 1-200 chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
