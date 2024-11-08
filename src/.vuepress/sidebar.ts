import { sidebar } from 'vuepress-theme-hope';

const back_posts = {
  text: '返回总目录',
  icon: 'sort',
  link: '/posts/',
};

const back_developer = {
  text: '返回Developer',
  icon: 'developer',
  link: '/developer/',
};

const back_tools = {
  text: '返回工具',
  icon: 'gongju',
  link: '/tools/',
};

export const zhSidebar = sidebar({
  // 关于
  '/about/': [
    back_posts,
    {
      text: '关于',
      icon: 'info',
      link: '/about/',
      children: 'structure',
    },
  ],
  // 工具
  '/tools/': [
    back_posts,
    {
      text: '工具',
      icon: 'gongju',
      link: '/tools/',
      children: 'structure',
    },
  ],
  '/tools/git/': [
    back_tools,
    {
      text: 'Git',
      icon: 'git',
      link: '/tools/git/',
      children: 'structure',
    },
  ],
  '/tools/vscode/': [
    back_tools,
    {
      text: 'Visual Studio Code',
      icon: 'vscode',
      link: '/tools/vscode/',
      children: 'structure',
    },
  ],
  // 开发者
  '/developer/': [
    back_posts,
    {
      text: '开发者',
      icon: 'developer',
      link: '/developer/',
      children: 'structure',
    },
  ],
  '/developer/front_end_web/': [
    back_developer,
    {
      text: 'Web前端',
      icon: 'HTML',
      link: '/developer/front_end_web/',
      children: 'structure',
    },
  ],
  // 收藏
  '/favorite/': [
    back_posts,
    {
      text: '随笔',
      icon: 'ganwu',
      children: 'structure',
      prefix: 'essays/',
      link: '/favorite/essays/',
    },
    {
      text: '链接',
      icon: 'link',
      children: 'structure',
      prefix: 'links/',
      link: '/favorite/links/',
    },
  ],
  // 整体路由划分
  '/': [
    '',
    {
      text: '博文',
      icon: 'note',
      prefix: 'posts/',
      link: '/posts/',
      children: 'structure',
    },
    {
      text: '收藏',
      icon: 'favoritea',
      prefix: 'favorite/',
      link: '/favorite/',
      children: 'structure',
    },
    {
      text: '开发者',
      icon: 'developer',
      prefix: 'developer/',
      link: '/developer/',
      children: 'structure',
    },
    {
      text: '工具',
      icon: 'gongju',
      prefix: 'tools/',
      link: '/tools/',
      children: 'structure',
    },
    {
      text: '关于',
      icon: 'info',
      prefix: 'about/',
      link: '/about/',
      children: 'structure',
    },
  ],
});
