// 多页配置
module.exports = {
  // 键名就是页面名称（对应 chunk 名）
  index: {
    js: "./src/pages/index", // 页面入口js
    html: "./src/pages/index/index.html", // 页面使用的html模板(这里是将每页的模板单独拿出来与js放一起的)
    out: "index.html", // 输出目录中的页面文件名(会放到dist目录下面)
  },
  about: {
    js: "./src/pages/about",
    html: "./src/pages/about/index.html",
    out: "about.html",
  },

  //有要增加的页面就加在这里
};



