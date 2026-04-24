import { defineConfig, HeadConfig } from 'vitepress'
import sidebar from './sidebar.mts';
import * as cheerio from 'cheerio';
import { normalize } from "vitepress/dist/client/shared.js";
import { createLogger } from 'vite';
// import type { Sidebar, SidebarItem } from 'vitepress-sidebar/types';
// import { generateSidebar } from 'vitepress-sidebar';

// const sidebar = generateSidebar({
//   documentRootPath: '/docs',
//   collapsed: false,
//   underscoreToSpace: true,
//   hyphenToSpace: true,
//   useTitleFromFileHeading: true,
//   useTitleFromFrontmatter: true,
//   sortFolderTo: "top",
//   useFolderTitleFromIndexFile: true,
//   collapseDepth: 2,
//   capitalizeEachWords: true
// });

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",

  title: "GD Docs",
  lang: 'en-US',

  sitemap: {
    hostname: 'https://boomlings.dev'
  },

  cleanUrls: true,

  markdown: {
    math: true
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/assets/logo.png",
    nav: [
      { text: 'Home', link: '/' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gd-docs/gd-docs' }
    ],

    editLink: {
      pattern: 'https://github.com/gd-docs/gd-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    sidebar: sidebar,

    lastUpdated: true,

    search: {
      provider: 'local'
    },

    docFooter: {
      prev: false,
      next: false,
    },

    aside: false
  },

  head: [
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/logo32.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "96x96", href: "/logo96.png" }],
    ["link", { rel: "icon", type: "image/png", sizes: "192x192", href: "/logo192.png" }],
    ["meta", { name: "og:site_name", content: "GD Docs" }],
    ["meta", { name: "og:image", content: "https://boomlings.dev/logo96.png" }],
    ["meta", { name: "theme-color", content: "#00D9FF" }],
    ["meta", { name: "og:type", content: "website" }],
  ],

  transformHead(ctx) { // called only on npm run build
    const logger = createLogger(undefined, { prefix: "transformHtml" });
    const pageId = ctx.pageData.filePath || ctx.pageData.title;
    
    const head: HeadConfig[] = [['meta', { name: "og:title", content: ctx.pageData.title }]];
    
    const pageUrl = new URL(normalize(ctx.pageData.relativePath), ctx.siteConfig.sitemap!.hostname).href; //https://olets.dev/posts/per-page-dynamic-social-metas-in-vitepress/#url
    head.push(['meta', { name: "og:url", content: pageUrl }]);
    
    let description: string = ctx.pageData.frontmatter.description;

    if (!description) {
      const $ = cheerio.load(ctx.content, undefined, true);
      const firstP = $("main > div > div > p").first(); //first top-level paragraph

      if (firstP.length) {
        description = firstP.text().trim();
        if (description.length > 350) {
          const lastWordEnd = description.indexOf(" ", 350);
          description = description.substring(0, lastWordEnd) + "…";
        }

        clearLine(); logger.info(`got description (${description.length} chars) for ${pageId}`);
      }
    } else {
      clearLine(); logger.info(`using frontmatter description for ${pageId}`);
    }

    if (description) {
      head.push(['meta', { name: "description", content: description }]);
      head.push(['meta', { name: "og:description", content: description }]);
    } else {
      clearLine(); logger.warn(`no description found for ${pageId}`);
    }

    return head;
  },
});

//https://github.com/vitejs/vite/blob/14fcb60cf376e0c7b93d84dad19851ac985f59c4/packages/vite/src/node/plugins/reporter.ts
const tty = process.stdout.isTTY && !process.env.CI;
function clearLine() {
  if (!tty)
    return;
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
}
