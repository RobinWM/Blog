module.exports = {
  title: "Robin的个人博客",
  description: "王猛,个人博客",
  port: 8888,
  locales:{
    '/':{
      lang:'zh-CN',
    }
  },
  themeConfig: {
    lastUpdated: '上次更新',
    nav: [
      { text: "主页", link: "/" },
      { text: "前端基础", link: "/pages/front-basic/" },
      { text: "指导", link: "/pages/guide/" }
    ],
    sidebar: {
      '/pages/front-basic/':[
        '',
        'first',
        'second'
      ],
      '/pages/guide/':[
        '',
        'first',
        'second',
        'three'
      ]
    }
  },
  head: [["link", { rel: "icon", href: "/icon.png" }]]
};
