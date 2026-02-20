import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";

const blogFile = path.join(process.cwd(), "src", "lib", "blog.ts");
const formsFile = path.join(process.cwd(), "src", "lib", "forms.ts");
const routeFile = path.join(
  process.cwd(),
  "src",
  "app",
  "api",
  "forms",
  "[formType]",
  "route.ts"
);

function extractSlugsFromBlogSource(source) {
  const blockMatch = source.match(/export const blogPosts:[\s\S]*?\];/);
  if (!blockMatch) return [];
  return [...blockMatch[0].matchAll(/slug:\s*"([^"]+)"/g)].map((match) => match[1]);
}

test("blog data has unique slugs and at least one featured post", async () => {
  const content = await readFile(blogFile, "utf8");
  const slugs = extractSlugsFromBlogSource(content);
  const uniqueSlugs = new Set(slugs);
  const featuredCount = [...content.matchAll(/featured:\s*true/g)].length;

  assert.ok(slugs.length >= 5, "Expected at least 5 blog posts.");
  assert.equal(
    uniqueSlugs.size,
    slugs.length,
    "Blog slugs must be unique."
  );
  assert.ok(featuredCount >= 1, "Expected at least one featured blog post.");
});

test("forms API includes the expected form types", async () => {
  const [formsSource, routeSource] = await Promise.all([
    readFile(formsFile, "utf8"),
    readFile(routeFile, "utf8"),
  ]);

  assert.match(formsSource, /contact:/, "Missing contact validator.");
  assert.match(formsSource, /"free-consultation":/, "Missing free-consultation validator.");
  assert.match(formsSource, /booking:/, "Missing booking validator.");

  assert.match(routeSource, /isFormType/, "Missing form type guard in API route.");
  assert.match(routeSource, /"free-consultation"/, "Route must support free-consultation.");
});
