module.exports = {
  title: 'jrNote',
  description: 'Just play around',

  themeConfig: {
    lastUpdated: '上次更新',
    sidebarDepth: 3,
    nav: [
      { text: '首页', link: '/' },
      {
        text: '更多',
        items: [
          { text: 'koa', link: '/main/koa/' },
          { text: '目标清单', link: '/goal/goalList' },
        ]
      },
      { text: '操作文档',link:'/docs/'},
      { text: '关于', link: '/about/' },
      { text: 'github', link: 'https://github.com/5201314999/jrNote' }
    ],
    sidebar: {
      '/main/': [
       '1startKoa',
       '7koaRouter',
       '8koaQuery',
       '2git',
       '3question',
       '4amazing',
       '5wepy',
       '6business'
      ],
      '/docs/':[
        '',
        '1mdOperate',
        '2linux.md'
      ]
    }
  }
};
