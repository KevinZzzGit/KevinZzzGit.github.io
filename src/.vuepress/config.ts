import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  head: [["link", { rel: "icon", href: "/assets/favicon.ico" }]],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "KevinZzz BLOG",
      description: "KevinZzz 的博客演示",
    },
    "/en/": {
      lang: "en-US",
      title: "KevinZzz BLOG",
      description: "KevinZzz BLOG",
    }
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
