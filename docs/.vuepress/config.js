module.exports = {
  title: 'jrNote',
  description: 'Just play around',

  themeConfig: {
    lastUpdated: '上次更新',
    sidebarDepth: 3,
    nav: [
      { text: '首页', link: '/' },
      { text: '操作文档',link:'/docs/'},
      {
        text: '更多',
        items: [
          { text: 'koa', link: '/more/koa/' },
          { text: '目标清单', link: '/goal/goalList' }
        ]
      },
      { text: '关于', link: '/about/' },
      { text: 'github', link: 'https://github.com/5201314999/jrNote' }
    ],
    sidebar: {
      '/main/': [
       '1startKoa',
       '7koaRouter',
       '8koaQuery',
       '9koaCookiesAndSession',
       '2git',
       '3question',
       '4amazing',
       '5wepy',
       '6business'
      ],
      '/docs/':[
        '',
        '3website.md',
        '1mdOperate',
        '2linux.md'
        
      ],
      '/more/koa/':[
        '1'
      ]
      }
  }
};
