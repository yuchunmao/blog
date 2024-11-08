import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar.js";
import { zhSidebar } from "./sidebar.js";
import { getDirname, path } from 'vuepress/utils';



const footerICP_HTML = `
<a class="footer-about" href="/about/website.html">关于本站</a>
`;

export default hopeTheme({
  hostname: 'https://yuchunmao.github.io',
  author: {
    name: '独白',
    email: '758235948@qq.com',
  },
  darkmode: 'toggle',
  editLink: false,
  contributors: false,
  lastUpdated: false,
  fullscreen: true,
  navbarAutoHide: 'always',
  pageInfo: [
    'Author',
    'Category',
    'Date',
    'Original',
    'Tag',
    'ReadingTime',
    'Word',
    'PageView',
    //..
  ],
  navbarLayout: {
    start: ['Brand'],
    center: [],
    end: ['Search', 'Links', 'Language', 'Outlook'],
  },

  iconAssets: '//at.alicdn.com/t/c/font_3855310_3p4qtirn5xz.css',
  logo: '/hero.jpeg',
  docsDir: 'src',
  blog: {
    name: '独白',
    avatar: '/hero.jpeg',
    description: '专心致志做事，大气温和待人。',
    intro: '',
    medias: {
      Email: 'mailto:758235948@qq.com',
      GitHub: 'https://github.com/yuchunmao'
    },
  },

  footer: footerICP_HTML,
  locales: {
    '/': {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      blog: {
        name: '独白',
        description: '专心致志做事，大气温和待人。',
        intro: '/about/me.html',
        timeline: '简单快乐，理应如此。',
      },
    }
  },

  // enable it to preview all changes in time
  hotReload: true,

  plugins: {
    blog: true,
    photoSwipe: false, // 这个插件难用的 一 B
    linksCheck: true,

    // comment: {
    //   provider: 'Waline',
    //   serverURL: 'https://talk.db.cc',
    //   copyright: false,
    //   reaction: true,
    // },

    components: {
      components: ['Badge', 'VPCard', 'BiliBili', 'PDF'],
    },

    copyright: false,

    markdownTab: {
      tabs: true,
    },
    markdownHint: {
      // 启用 GFM 警告
      alert: true,
    },

    feed: {
      atom: true,
      json: true,
      rss: true,
      image: '/hero.jpeg',
      icon: '/hero.jpeg',
    },

    // search暂时不可用
    // searchPro: {
    //   // 索引全部内容
    //   indexContent: true,
    //   autoSuggestions: true,
    //   // 为分类和标签添加索引
    //   customFields: [
    //     {
    //       getter(page: any) {
    //         return page.frontmatter.category;
    //       },
    //       formatter: {
    //         '/blog/': '分类：$content'
    //       },
    //     },
    //     {
    //       getter(page: any) {
    //         return page.frontmatter.tag;
    //       },
    //       formatter: {
    //         '/blog/': '标签：$content'
    //       },
    //     },
    //   ],
    // },

    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      component: true,
      spoiler: true,
      demo: true,
      echarts: true,
      include: {
        resolvePath: (file) => {
          if (file.startsWith('@src')) {
            return file.replace('@src', path.resolve(__dirname, '..'));
          }
          return file;
        },
      },
      mark: true,
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended',
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tasklist: true,
      vPre: true,
      breaks: true,
      linkify: true,
      footnote: true,
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    pwa: {
      favicon: '/hero.jpeg',
      themeColor: '#af7ac5',
      cacheHTML: true,
      cacheImage: true,
      appendBase: true,
      manifest: {
        "name": "独白 - 简单快乐，理应如此",
        "short_name": "独白",
        "theme_color": "#af7ac5",
        "background_color": "#5D6D7E",
        "display": "standalone",
        "start_url": "/?utm_source=web_app_manifest"
      }
    },
  },
});
