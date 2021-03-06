const path = require('path');
const fs = require('fs');

module.exports = {
  title: "coyle-docs",
  description: 'coyle的文档',
  head: [ // 额外的需要被注入到当前页面的 HTML <head> 中的标签, 下面的是 favicon
    ['link', { rel: 'icon', href: '/img/favicon.ico' }]
  ],
  // extend: '@vuepress/theme-default',
  themeConfig: {
    lastUpdated: 'Last Updated', // 最后更新时间
    sidebarDepth: 2, // 侧边栏搜索深度，将同时提取 h2 和 h3 标题。
    nav: [
      {
        text: 'JavaScript',
        link: '/javascript/introduction'
      },
      {
        text: 'Vue',
        link: '/vue/introduction'
      },
      {
        text: 'Node',
        link: '/node/introduction'
      },
      {
        text: 'Linux',
        link: '/linux/introduction'
      },
      {
        text: '小工具',
        link: '/tools/introduction'
      },
      {
        text: '组件',
        link: '/components/introduction'
      },
      {
        text: '了解更多',
        items: [
          { text: 'Github', link: 'https://github.com/CoyleCyq' },
          { text: '简书', link: 'https://www.jianshu.com/u/47845479bcae' }
        ]
      }
    ],
    sidebar: {
      "/javascript/": [
        "introduction",
        {
          title: "基础",
          collapsable: true,
          children: genSidebarConfig("javascript/jsBasic", true)
        },
        {
          title: "笔记",
          collapsable: true,
          children: genSidebarConfig("javascript/note", true)
        },
        {
          title: "案例",
          collapsable: true,
          children: genSidebarConfig("javascript/demoDoc", true)
        }
      ],
      "/node/": [
        "introduction",
        {
          title: "模块API",
          collapsable: false,
          children: genSidebarConfig("node/moduleAPI", true)
        },
        {
          title: "egg",
          collapsable: false,
          children: genSidebarConfig("node/egg", true)
        },
      ],
      "/linux/": [
        "introduction",
        {
          title: "基础",
          collapsable: false,
          children: genSidebarConfig("linux/basic", true)
        },
        {
          title: "安装",
          collapsable: false,
          children: genSidebarConfig("linux/install", true)
        },
      ],
      "/vue/":[
        "introduction",
        {
          title: 'vue基础',
          collapsable: false,
          children: genSidebarConfig("vue/vueBasic", true)
        }
      ],
      "/tools/":[
        "introduction",
        {
          title: '小工具',
          collapsable: false,
          children: genSidebarConfig("tools/mytools", true)
        }
      ],
      '/components/': [
        "introduction",
        {
          title: 'UI',
          collapsable: false,
          children: genSidebarConfig("components/UI", true)
        }
      ]
    }
  },
  sass: { indentedSyntax: true },
  // markdown: {
  //   lineNumbers: true // 代码块显示行号
  // },
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      popupComponent: 'MySWUpdatePopup',
      updatePopup: {
        message: "新的风暴已经出现",
        buttonText: "盘他"
      }
    },
    // '@vuepress/google-analytics': {
    //   ga: 'UA-138698333-1'
    // }
  }
};

function genSidebarConfig(dir, hasSub) {
  let p = path.join(__dirname, '../', dir);
  let files = fs.readdirSync(p);
  let subDir = hasSub ? dir.split('/')[1] : '';
  files = files.map(item => {
    item = subDir ? subDir + '/' + path.basename(item, '.md') : path.basename(item, '.md');
    return item;
  });
  return files;
}