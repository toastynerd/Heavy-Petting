!function e(n,r,o){function t(s,u){if(!r[s]){if(!n[s]){var c="function"==typeof require&&require;if(!u&&c)return c(s,!0);if(i)return i(s,!0);var a=new Error("Cannot find module '"+s+"'");throw a.code="MODULE_NOT_FOUND",a}var f=r[s]={exports:{}};n[s][0].call(f.exports,function(e){var r=n[s][1][e];return t(r?r:e)},f,f.exports,e,n,r,o)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<o.length;s++)t(o[s]);return t}({1:[function(e,n,r){n.exports={"default":e("core-js/library/fn/json/stringify"),__esModule:!0}},{"core-js/library/fn/json/stringify":2}],2:[function(e,n,r){var o=e("../../modules/_core"),t=o.JSON||(o.JSON={stringify:JSON.stringify});n.exports=function(e){return t.stringify.apply(t,arguments)}},{"../../modules/_core":3}],3:[function(e,n,r){var o=n.exports={version:"2.4.0"};"number"==typeof __e&&(__e=o)},{}],4:[function(e,n,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var t=e("babel-runtime/core-js/json/stringify"),i=o(t);!function(){var e=encodeURIComponent(top.document.referrer),n=encodeURIComponent(top.document.location),r=Date.now(),o="cac2c915-0ccb-4da1-a7cb-c21ec8835f32",t=encodeURIComponent(i["default"]({dfpViewUrl:"%%VIEW_URL_UNESC%%"})),s=document.createElement("script"),u=sessionStorage.getItem("spoutable-"+o);if(!u){var c=Math.random.bind(Math);u=i["default"]({sessionId:[r,c(),c(),c(),c(),c(),c(),c(),c(),c(),c(),c(),c()]}),sessionStorage.setItem("spoutable-"+o,u)}s.async=!0,s.src="//s.spoutable.com/s?u="+o+"&s="+encodeURIComponent(u)+"&p="+n+"&r="+e+"&o="+t+"&t="+r,document.head.appendChild(s)}()},{"babel-runtime/core-js/json/stringify":1}]},{},[4]);