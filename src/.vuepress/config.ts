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
  base: '/blog/',
  lang: 'zh-CN',
  title: "独白",
  description: "鱼的个人博客",

  theme,
  // Enable it with pwa
  shouldPrefetch: false,
});

