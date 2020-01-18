module.exports = {
  title: "Robin的个人博客",
  description: "Personal Blog",
  port: 8888,
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "前端基础", link: "/pages/front-basic/" },
      { text: "指导", link: "/pages/guide/" }
    ]
  },
  head: [
    ['link', 
        { rel: 'icon', href: '/icon.png' }
    ],  
],
};
