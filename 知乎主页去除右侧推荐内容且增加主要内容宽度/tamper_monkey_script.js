// ==UserScript==
// @name         知乎主页去除右侧推荐内容且增加主要内容宽度
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  知乎主页去除右侧推荐内容且增加主要内容宽度
// @author       码农怪兽
// @match        *://www.zhihu.com/*
// @match        *://zhuanlan.zhihu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    // 知乎主页右侧推荐节点
    var rightDelete=document.querySelector("#root > div > main > div > div.Topstory-container > div.css-1qyytj7");
    // 删除右侧推荐节点
    document.querySelector("#root > div > main > div > div.Topstory-container").removeChild(rightDelete);
    // 修改知乎主页的主要内容的宽度
    document.querySelector("#root > div > main > div > div.Topstory-container > div.Topstory-mainColumn").style.width="100%";
})();