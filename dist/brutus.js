!function(e){"use strict";var t=e.body,n=function(e,t,n){for(var o in e)e.hasOwnProperty(o)&&t.call(n,e[o],o)},o=function(e,t){n(e,function(e){e.classList.contains("obfuscated")&&e.classList.remove("obfuscated"),n(e.childNodes,function(e){var n=e.nodeName;"#text"===n?t(e):"A"!==n&&o([e],t)})})},r=function(e){return" "===e||"\t"===e||"\n"===e||"\r"===e},c=function(e){var t="";n(e.wholeText,function(e){r(e)||(e=String.fromCharCode(e.charCodeAt(0)+-1)),t+=e}),e.textContent=t},a=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)};n(t.querySelectorAll(".obfuscated-content"),function(e){e.classList.remove("obfuscated-content"),o(e.querySelectorAll(".obfuscated"),c);var t=e.parentNode;t.className="",a(t.nextSibling)}),a(e.getElementById("laterpay-replacement")),a(e.querySelector(".js-spiegelplus-obfuscated-intro")),function(e){n(e,a)}(e.querySelectorAll(".laterpay-under-overlay"))}(document);