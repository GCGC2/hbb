// 头部的js代码
import "./index.css";
import $ from "jquery";

let pathname = location.pathname; //设置或取得当前 URL 的路径部分

//设置默认首页
if (pathname === "/") {
  pathname += "index.html";
}

// 点击导航切换页面功能,改变选中状态
$(".header-nav a").each((i, ele) => {
  const href = $(ele).attr("href"); //attr 改变被选中元素的属性href(若只是跳转,不改变选中状态,就只写等号后面)
  if (pathname === href) {
    ele.classList.add("header-nav-active"); //选中的元素类名添加为active选中状态
  }
});
