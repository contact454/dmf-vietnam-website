import test from "node:test";
import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const appDir = path.join(process.cwd(), "src", "app");
const headerPath = path.join(process.cwd(), "src", "components", "layout", "header.tsx");
const footerPath = path.join(process.cwd(), "src", "components", "layout", "footer.tsx");

async function collectRoutes(dir, prefix = "") {
  const entries = await readdir(dir, { withFileTypes: true });
  const routes = new Set();

  for (const entry of entries) {
    if (entry.name.startsWith("_") || entry.name.startsWith("(")) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const nextPrefix = `${prefix}/${entry.name}`.replace(/\/+/g, "/");
      const nestedRoutes = await collectRoutes(fullPath, nextPrefix);
      nestedRoutes.forEach((route) => routes.add(route));
      continue;
    }

    if (entry.isFile() && entry.name === "page.tsx") {
      routes.add(prefix || "/");
    }
  }

  return routes;
}

async function extractInternalLinks(filePath) {
  const content = await readFile(filePath, "utf8");
  const links = new Set();
  const patterns = [/href:\s*"([^"]+)"/g, /href="([^"]+)"/g];

  for (const pattern of patterns) {
    for (const match of content.matchAll(pattern)) {
      const href = match[1];
      if (!href || !href.startsWith("/")) continue;
      if (href.startsWith("//")) continue;
      links.add(href);
    }
  }

  return links;
}

test("header and footer internal links map to existing app routes", async () => {
  const [routes, headerLinks, footerLinks] = await Promise.all([
    collectRoutes(appDir),
    extractInternalLinks(headerPath),
    extractInternalLinks(footerPath),
  ]);

  const allLinks = new Set([...headerLinks, ...footerLinks]);
  const missing = [...allLinks].filter((href) => !routes.has(href));

  assert.deepEqual(
    missing,
    [],
    `Missing page routes for links: ${missing.join(", ")}`
  );
});
