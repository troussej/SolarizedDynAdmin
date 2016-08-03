// ==UserScript==
// @name         Solarized Dynamo Administration
// @namespace    SolarizedDynAdmin
// @include      */dyn/admin/*
// @author  Joël Trousset
// @homepageURL  https://github.com/troussej/SolarizedDynAdmin
// @supportURL   https://github.com/troussej/SolarizedDynAdmin/issues
// @description  Solarized Theme for Oracle Commerce Dyn/Admin

// @grant GM_getResourceText
// @grant GM_addStyle

// @version 0.1
// @resource sdaCss sda.css?version=0.1
// @resource sdaLess sda.less?version=0.1

// @require  https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.1/less.min.js



// @updateUrl https://raw.githubusercontent.com/troussej/SolarizedDynAdmin/master/sda.user.js
// @downloadUrl https://raw.githubusercontent.com/troussej/SolarizedDynAdmin/master/sda.user.js
// ==/UserScript==

try {



    console.log('sda start');
    var devMode = false;

    loadExternalCss = function() {
      if (devMode) {
        var lessTxt = GM_getResourceText("sdaLess");
      } else {
        var css = GM_getResourceText("sdaCss");
        GM_addStyle(css);
      }
    };

    document.getElementsByTagName('body')[0].className += ' sda';
    loadExternalCss();
    console.log('sda end');

} catch (e) {
  console.error(e);
}