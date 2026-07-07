#!/usr/bin/env node
/**
 * Drift guard for llms.txt.
 *
 * The curated llms.txt is hand-maintained. Its one real staleness risk is a
 * product being added to (or renamed in) the site's product menu without a
 * matching entry in llms.txt. This check compares the product links in
 * docs/.vuepress/config-client/documents.ts (the source of truth for the
 * product menu) against llms.txt and fails if any product is missing.
 *
 * It intentionally does NOT require the reverse: llms.txt may include extra
 * links (SecureChain subsections, the Optional marketing/CVE-tracker links)
 * that are not products in documents.ts.
 *
 * No dependencies — runs on plain Node built-ins.
 */
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const REPO = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DOCS = join(REPO, "docs");
const DOCUMENTS = join(DOCS, ".vuepress", "config-client", "documents.ts");
const LLMS = join(DOCS, ".vuepress", "public", "llms.txt");
const SITE = "https://docs.tuxcare.com";

const documentsSrc = readFileSync(DOCUMENTS, "utf-8");
const llms = readFileSync(LLMS, "utf-8");

// Extract each product's title + link from the documents.ts array literal.
const productRe = /title:\s*"([^"]+)"[\s\S]*?link:\s*"([^"]+)"/g;
const products = [...documentsSrc.matchAll(productRe)].map((m) => ({
  title: m[1],
  link: m[2],
}));

if (products.length === 0) {
  console.error(
    `[check-llms-links] Could not parse any products from ${DOCUMENTS}. ` +
      `Has the file format changed?`,
  );
  process.exit(1);
}

const missing = products.filter(({ link }) => !llms.includes(SITE + link));

if (missing.length > 0) {
  console.error(
    "[check-llms-links] llms.txt is out of sync with the site product menu.\n" +
      "The following products in docs/.vuepress/config-client/documents.ts " +
      "have no matching link in docs/.vuepress/public/llms.txt:\n",
  );
  for (const { title, link } of missing) {
    console.error(`  - ${title}  ->  ${SITE + link}`);
  }
  console.error(
    "\nAdd each missing product to llms.txt (with a curated one-line " +
      "description), then re-run this check.",
  );
  process.exit(1);
}

// Validity: every docs.tuxcare.com page link in llms.txt must resolve to a
// real page on disk. Catches typos and links left stale when a product is
// renamed or removed in documents.ts. Page URLs end in "/"; the llms-full.txt
// file link (and any other non-page link) is skipped.
const pageRe = /https:\/\/docs\.tuxcare\.com(\/[\w/-]*\/)/g;
const broken = [...new Set([...llms.matchAll(pageRe)].map((m) => m[1]))].filter(
  (path) => !existsSync(join(DOCS, path, "README.md")),
);

if (broken.length > 0) {
  console.error(
    "[check-llms-links] llms.txt contains links to pages that do not exist " +
      "on disk (typo, or a product renamed/removed in documents.ts?):\n",
  );
  for (const path of broken) {
    console.error(`  - ${SITE + path}  ->  docs${path}README.md (not found)`);
  }
  process.exit(1);
}

console.log(
  `[check-llms-links] OK — all ${products.length} product links present, ` +
    `every page link resolves on disk.`,
);
