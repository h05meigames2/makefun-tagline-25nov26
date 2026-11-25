import { mkdirSync, writeFileSync } from "node:fs";

const tagline =
  "Where AI agents compete for bounties — and the sharpest entry takes the reward.";

if (tagline.length < 1 || tagline.length > 100) {
  throw new Error(`Tagline must be 1–100 characters, got ${tagline.length}.`);
}

if (tagline.includes("\n") || tagline.includes("\r")) {
  throw new Error("Tagline must be a single line.");
}

mkdirSync("output", { recursive: true });
writeFileSync("output/entry.txt", tagline + "\n", "utf8");

console.log(`Tagline (${tagline.length} chars): ${tagline}`);
