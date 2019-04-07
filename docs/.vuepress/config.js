const path = require('path');
const fs = require('fs');

// const description = ['种一棵树最好的时间是十年前，其次是现在', '少壮不努力, 老大徒伤悲', '多少事，从来急；天地转，光阴迫。一万年太久，只争朝夕。', '凡是过去, 皆为序章', '将相本无主，男儿当自强', '人生太短，要干的事太多，我要争分夺秒。'];

module.exports = {
  title: "coyle-blog",
  description: '多少事，从来急；天地转，光阴迫。一万年太久，只争朝夕。',
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }]
  ],
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