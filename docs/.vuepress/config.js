const path = require('path');
const fs = require('fs');
module.exports = {
  title: "coyle-docs",
  description: "Welcome to my docs",
  themeConfig: {
    sidebarDepth: 3,
    nav: [
      {
        text: 'JavaScript',
        link: '/javascript/introduction'
      },
      {
        text: 'Vue组件',
        link: '/components/introduction'
      },
      {
        text: 'Linux',
        link: '/linux/introduction'
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
          collapsable: false,
          children: genSidebarConfig("javascript/jsBasic", true)
        },
        // {
        //   title: "笔记",
        //   collapsable: true,
        //   children: genSidebarConfig("javascript/note", true)
        // }
        // {
        //   title: "案例",
        //   collapsable: true,
        //   children: genSidebarConfig("jsvascript/demo", true)
        // }
      ],
      "/components/": [
        "introduction",
        {
          title: "UI组件",
          collapsable: false,
          children: genSidebarConfig("components/UI", true)
        },
      ],
      "/linux/": [
        "introduction",
        {
          title: "安装",
          collapsable: false,
          children: genSidebarConfig("linux/install", true)
        },
      ]
    }
  },
  sass: { indentedSyntax: true },
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