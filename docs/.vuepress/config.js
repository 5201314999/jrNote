module.exports = {
  title: 'jrNote',
  description: 'Just play around',
  //发布使用
  base:'/jrNoteWebsite/',
  themeConfig: {
    lastUpdated: '上次更新',
    sidebarDepth: 3,
    nav: [
      { text: '首页', link: '/' },
      { text: '储物柜', link: '/docs/' },
      {
        text: '更多',
        items: [
          { text: '目标清单', link: '/goal/goalList' },
          { text: 'js知识', link: '/more/js/' },
          { text: 'todoList', link: '/goal/todoList' },
          // { text: '2019', link: '/goal/2019flag' }
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
        '14koaMysql',
        '2git',
        '3question',
        '4amazing',
        '5wepy',
        '6business',
        '10architecture',
        '11idea.md',
        '12basicCss.md',
        // '13feeling.md',
        '15jscod.md',
        '16graphicDevelop',
        '172019i',
        '18interview',
        '19webrtc',
      ],
      '/docs/': [
        '',
        '3website',
        '21pluginList',
        '1mdOperate',
        '4reg',        
        '5flow',
        '6build',
        '7nginx',
        '2linux',
        '8toolProblem',
        '11python',
        '12python',
        '13unitTest',
        '15mysql',
        '16startReact',
        '17koa2',
        '18privateNpmLib',
        '19mobileAdaptation',
        '14gongwuyuan',
        '20pic',
        '22frontWorkTool',
        '23gitFlow'
      ],
      '/more/js/': [
        '',
        '5tree',
        '1jsTime',
        '2es6js',
        '3debounce_throttle',
        '4Array',
        '6prototype',
        '7dom'
      ],
    }
  }
};
