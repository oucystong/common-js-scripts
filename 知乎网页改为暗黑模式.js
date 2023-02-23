// ==UserScript==
// @name         知乎网页变为暗黑模式脚本
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  知乎网页变为暗黑模式脚本
// @author       码农怪兽
// @match        *://www.zhihu.com/*
// @match        *://zhuanlan.zhihu.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=zhihu.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    document.getElementsByTagName('html')[0].setAttribute('data-theme','dark')
})();