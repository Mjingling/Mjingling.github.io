module.exports = {
  title: "turbo's 个人主页",
  description: "turbo's 部落格",
  head: [
    ['link', {
      rel: 'icon',
      href: '/img/logo.ico'
    }],
    ['link', {
      rel: 'manifest',
      href: '/manifest.json'
    }],
  ], 
  themeConfig: {
    nav: [
      {
        text: '主页',
        link: '/'
      },
      {
        text: '博文',
        items: 
          [
            {
            text: 'React Native',
            link: '/android/'
          },
          {
            text: '微信小程序',
            link: '/ios/'
          },
          {
            text: 'webpack学习笔记',
            link: '/web/'
          }
        ]
      },
      {
        text: '前端杂记',
        link: '/about/'
      },
      {
        text: '关于我',
        link: '/about/'
      },
      {
        text: 'Github',
        link: 'https://github.com/Mjingling'
      },
      {
        text: '我的简书',
        link: 'https://www.jianshu.com/u/95c55933a2a0'
      },
    ],
    sidebar: {
      '/android/': [
        "",
        "android1"
      ],
      "/ios/": [
        "",
        "ios1",
      ],
      "/web/": [
        "",
        "web1"
      ],
    },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated',
  },
}