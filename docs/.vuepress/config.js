module.exports = {
  //发布使用
  base:'/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: 'jrNote',
      description: 'jr 笔记',
    }
  },
  //webpack
  chainWebpack (config) {
    config.resolve.alias.set('@', __dirname)
  },
  //主题
  themeConfig: {
    lastUpdated: '上次更新',
    sidebarDepth: 3,
    nav: [
      { text: '首页', link: '/' },
      { text: '储物柜', link: '/docs/' },
      { text: '复习', link: '/frontend/' },
      {
        text: '更多',
        items: [
          { text: '目标清单', link: '/goal/goalList' },
          { text: 'js知识', link: '/more/js/' },
          { text: 'todoList', link: '/goal/todoList' },
          // { text: '2019', link: '/goal/2019flag' }
          { text: '2020', link: '/goal/2020flag' }
        ]
      },
      { text: '关于', link: '/about/' },
      { text: 'github', link: 'https://github.com/5201314999/jrNote' }
    ],
    sidebar: {
      '/main/': [
        '2git',
        '1startKoa',
        '7koaRouter',
        '8koaQuery',
        '9koaCookiesAndSession',
        '14koaMysql',
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
        '23gitFlow',
        '24flutter',
        '25gogs',
        '26viteapp'
      ],
      '/frontend/':[
        '',
        'vue-base',
        'browser',
        'es6-10',
        'gc'
      ],
      '/more/js/': [
        '',
        '5tree',
        '1jsTime',
        '2es6js',
        '3debounce_throttle',
        '4Array',
        '6prototype',
        '7dom',
        '8eventanddom'
      ],
    }
  }
};
