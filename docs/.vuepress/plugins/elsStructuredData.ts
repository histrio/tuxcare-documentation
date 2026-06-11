import { slugify } from "../utils/slugify";

/**
 * Build-time structured data for <ELSSteps> blocks.
 *
 *   1. extendsMarkdown: assigns a stable, page-unique `id` (slug of the step
 *      title) to each top-level step <li>, so the anchor is present in the SSR
 *      HTML (machine-addressable), not only after the client-side script runs.
 *   2. extendsPage: emits a schema.org HowTo / HowToStep JSON-LD <script> into
 *      the page <head> (the correct place for JSON-LD; injecting a <script>
 *      into the page body breaks VuePress's SFC compilation).
 *
 * Both paths slug the same step titles with the same page-wide dedup, so the
 * JSON-LD `url` matches the `<li id>` in the HTML.
 */

function clean(s: string): string {
  return (s || "")
    .replace(/`([^`]*)`/g, "$1")
    .replace(/\*\*([^*]*)\*\*/g, "$1")
    .replace(/\*([^*]*)\*/g, "$1")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

// First inline text inside a list item = the step title.
function firstInlineText(tokens: any[], openIdx: number): string {
  for (let j = openIdx + 1; j < tokens.length; j++) {
    if (tokens[j].type === "inline") return tokens[j].content;
    if (tokens[j].type === "list_item_close") break;
  }
  return "";
}

// ---- point 1: assign ids to step <li> at parse time ----
function assignStepIds(md: any) {
  md.core.ruler.push("els_step_ids", (state: any) => {
    const tokens = state.tokens;
    const used = new Set<string>();
    let inSteps = 0;
    let listDepth = 0;

    for (let i = 0; i < tokens.length; i++) {
      const t = tokens[i];
      if (t.type === "html_block" && /<ELSSteps[\s/>]/.test(t.content) && !/<\/ELSSteps>/.test(t.content)) {
        inSteps++;
        continue;
      }
      if (t.type === "html_block" && /<\/ELSSteps>/.test(t.content)) {
        inSteps = Math.max(0, inSteps - 1);
        continue;
      }
      if (!inSteps) continue;

      if (t.type === "ordered_list_open") listDepth++;
      else if (t.type === "ordered_list_close") listDepth--;

      if (t.type === "list_item_open" && listDepth === 1) {
        const base = slugify(clean(firstInlineText(tokens, i))) || "step";
        let id = base;
        let n = 0;
        while (used.has(id)) id = `${base}-${++n}`;
        used.add(id);
        t.attrSet("id", id);
      }
    }
  });
}

// ---- point 2: build HowTo JSON-LD from the markdown source ----
function howToScripts(page: any): any[] {
  const src: string = page?.content || "";
  if (!src.includes("<ELSSteps")) return [];

  const pageTitle = clean(page?.title || "");
  const used = new Set<string>();
  const scripts: any[] = [];

  const blockRe = /<ELSSteps[^>]*>([\s\S]*?)<\/ELSSteps>/g;
  let block: RegExpExecArray | null;
  while ((block = blockRe.exec(src))) {
    const steps: { id: string; name: string }[] = [];
    // top-level numbered items only (no leading whitespace -> not nested)
    const itemRe = /^(\d+)\.\s+(.+)$/gm;
    let item: RegExpExecArray | null;
    while ((item = itemRe.exec(block[1]))) {
      const name = clean(item[2]);
      const base = slugify(name) || "step";
      let id = base;
      let n = 0;
      while (used.has(id)) id = `${base}-${++n}`;
      used.add(id);
      steps.push({ id, name });
    }
    if (!steps.length) continue;

    const howTo = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      name: pageTitle || steps[0].name,
      step: steps.map((s, n) => ({
        "@type": "HowToStep",
        position: n + 1,
        name: s.name,
        text: s.name,
        url: `#${s.id}`,
      })),
    };
    scripts.push(["script", { type: "application/ld+json" }, JSON.stringify(howTo)]);
  }
  return scripts;
}

export const elsStructuredDataPlugin = {
  name: "els-structured-data",
  extendsMarkdown: assignStepIds,
  extendsPage: (page: any) => {
    const scripts = howToScripts(page);
    if (!scripts.length) return;
    page.frontmatter.head = page.frontmatter.head || [];
    page.frontmatter.head.push(...scripts);
  },
};
