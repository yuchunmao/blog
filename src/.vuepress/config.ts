import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { getDirname, path } from 'vuepress/utils';


const __dirname = getDirname(import.meta.url);
const SrcPath = path.resolve(__dirname, '../');

export default defineUserConfig({
  alias: {
    '@components': path.resolve(__dirname, 'components'),
    '@src': SrcPath,
  },

  dest: 'dist',
  host: '0.0.0.0',
  port: 9451,
  base: '/blog/',
  temp: '.vscode/.vp-temp',
  cache: '.vscode/.vp-cache',
  lang: 'zh-CN',
  plugins: [],

  theme,
  // Enable it with pwa
  shouldPrefetch: false,
});

// export default defineUserConfig({
//   base: "/blog/",
//
//   lang: "zh-CN",
//   title: "博客演示",
//   description: "vuepress-theme-hope 的博客演示",
//
//   theme,
//
//   // 和 PWA 一起启用
//   // shouldPrefetch: false,
// });
