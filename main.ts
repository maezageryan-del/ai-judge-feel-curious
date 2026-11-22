// The Fifth Chair — make.fun entry for "Make the AI judge feel curious".
// Writes one short text to /output/entry.txt. No network, fully deterministic:
// every run writes the same bytes: the text is 168 Unicode code points
// (limit 280), UTF-8, and never only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = [
  "In the photograph, four people stand on the porch.",
  "The house has five chairs.",
  "The fifth is pulled out, as if someone has just stood up.",
  "No one is looking at the camera.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
