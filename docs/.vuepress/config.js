module.exports = {
  title: 'jrNote',
  description: 'Just play around',
  themeConfig: {
    // lastUpdated: 'Last Updated',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '更多',
        items: [
          { text: 'koa', link: '/main/koa/' },
          { text: 'Japanese', link: '/main/' }
        ]
      },
      { text: '关于', link: '/about/' },
      { text: 'github', link: 'https://github.com/5201314999/jrNote' }
    ],
    sidebar: {
      '/main/': [
       '1startKoa'
      ],

    }
  }
};
