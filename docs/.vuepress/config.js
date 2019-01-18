module.exports = {
  title: 'jrNote',
  description: 'Just play around',

  themeConfig: {
    lastUpdated: '上次更新',
    sidebarDepth: 3,
    nav: [
      { text: '首页', link: '/' },
      { text: '储物柜', link: '/docs/' },
      {
        text: '更多',
        items: [
          { text: 'koa', link: '/more/koa/' },
          { text: '目标清单', link: '/goal/goalList' },
          { text: 'js知识', link: '/more/js/' }
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
        '6business',
        '11idea.md',
        '12basicCss.md',
        '13feeling.md'
      ],
      '/docs/': [
        '',
        '3website',
        '1mdOperate',
        '4reg',
        '5flow',
        '6build',
        '7nginx',
        '2linux',
        '8toolProblem',
        '10interview',
        '11python',
        '12python'
      ],
      '/more/koa/': [
        '1'
      ],
      '/more/js/': [
        '',
        '1jsTime',
        '2es6js',
        '3debounce_throttle',
        '4Array',
        '5tree'
      ],
    }
  }
};
