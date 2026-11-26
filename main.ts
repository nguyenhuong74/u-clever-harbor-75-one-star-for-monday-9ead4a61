import { mkdirSync, writeFileSync } from "node:fs";

const REVIEW = "One star. Waited an hour, server never came, coffee was cold, and the bill charged me for a whole week. Never coming back Monday.";

function validate(text) {
  if (typeof text !== "string" || text.trim().length === 0) {
    throw new Error("Entry must not be empty or only whitespace.");
  }
  if (text.length < 1 || text.length > 180) {
    throw new Error("Entry must be 1 to 180 characters, got " + text.length + ".");
  }
  const words = text.trim().split(/\s+/);
  if (words.length > 25) {
    throw new Error("Entry must be at most 25 words, got " + words.length + ".");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Entry must be a single line.");
  }
}

validate(REVIEW);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", REVIEW, "utf8");
console.log(REVIEW);
