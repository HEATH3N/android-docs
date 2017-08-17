/*eslint-disable*/
!(function(){"use strict";function e(){return!0===window.MapboxPageShellProduction||/mapbox\.com$/.test(window.location.hostname)}function t(e){"loading"!==document.readyState?e():document.addEventListener("DOMContentLoaded",e)}function n(){var e=document.createElement("div");e.className="shell-wrapper";var t=document.createElement("div");t.className="shell-loading shell-loading--dark shell-fixed shell-top shell-left shell-right shell-bottom shell-flex-parent shell-bg-darken50",t.style.zIndex="9999",e.appendChild(t),document.body.appendChild(e)}function i(){return pe}function o(e){pe=e}function r(){return ke}function a(){ke=!0}function l(){return ye}function s(e){ye=e}function u(e){we.push(e)}function c(){we.forEach((function(e){e()})),we=[]}function d(e){Ee=e}function m(){Ee&&Ee()}function v(e){be.push(e)}function f(){be.forEach((function(e){e()})),be=[]}function g(e){u(e)}function h(e,t){for(var n=document.querySelectorAll(e),i=0;i<n.length;i++)if(n[i].contains(t))return!0;return!1}function p(){b();for(var e=document.querySelectorAll("[data-display-block-unauthenticated]"),t=document.querySelectorAll("[data-show-unauthenticated]"),n=0;n<t.length;n++)t[n].style.visibility="visible";for(var i=0;i<e.length;i++)e[i].style.display="block"}function y(){for(var e=document.querySelectorAll("[data-display-block-unauthenticated]"),t=document.querySelectorAll("[data-show-unauthenticated]"),n=0;n<t.length;n++)t[n].style.visibility="hidden";for(var i=0;i<e.length;i++)e[i].style.display="none"}function w(e){y();var t=void 0,n=document.querySelectorAll("[data-user-name]");for(t=0;t<n.length;t++)n[t].textContent=e.id;var i=document.querySelectorAll("[data-user-avatar]");for(t=0;t<i.length;t++)i[t].style.background='url("'+e.avatar+'") no-repeat center center',i[t].style.backgroundSize="30px";for(var o=document.querySelectorAll("[data-display-block-authenticated]"),r=document.querySelectorAll("[data-show-authenticated]"),a=0;a<r.length;a++)r[a].style.visibility="visible";for(var l=0;l<o.length;l++)o[l].style.display="block"}function b(){for(var e=document.querySelectorAll("[data-display-block-authenticated]"),t=document.querySelectorAll("[data-show-authenticated]"),n=0;n<t.length;n++)t[n].style.visibility="hidden";for(var i=0;i<e.length;i++)e[i].style.display="none"}function E(e){throw p(),e}function k(){return e()?se:ue}function L(){n();var e=new XMLHttpRequest;e.withCredentials=!0,e.onerror=E,e.onload=function(){if(200===e.status)return window.location.reload();throw new Error(e.statusText)},e.open("DELETE",k()+"/api/logout"),e.send()}function S(e){if(e&&e.authorizations)for(var t=void 0,n=0,i=e.authorizations.length;n<i;n++)if("api"===(t=e.authorizations[n]).client&&"pk"===t.usage&&!0===t.default)return t.token}function I(e){var t=e.triggerEl,n=e.pointerEl,i=e.onCrossMobileThreshhold;Se=function(){window.matchMedia("(min-width: "+he+"px)").matches?A({pointerEl:n,triggerEl:t}):i&&i()},window.addEventListener("resize",Se)}function x(){Le&&(window.clearTimeout(Le),Le=null)}function A(e){var t=e.pointerEl,n=e.triggerEl.getBoundingClientRect();t.style.left=Math.round(n.left+n.width/2)+"px"}function B(){window.removeEventListener("resize",Se),Se=null}function _(e){var t=e.pointerEl,n=e.onPointerReset;Le=window.setTimeout((function(){t&&(t.style.left="auto"),n&&n()}),250)}function T(){return Ae}function C(e){if(Ae&&("Escape"===e.key||"Esc"===e.key||27===e.keyCode)){P();var t=document.getElementById("user-menu-trigger");t&&t.focus()}}function q(e){var t=document.getElementById("user-menu-body"),n=document.getElementById("user-menu-pointer"),i=document.getElementById("user-menu-trigger");t&&n&&i&&(t.contains(e.target)||n.contains(e.target)||i.contains(e.target)||P())}function M(){var e=document.getElementById("user-menu-body"),t=document.getElementById("user-menu-pointer"),n=document.getElementById("user-menu-trigger");e&&t&&n&&(m&&m(),x(),Ae=!0,A({pointerEl:t,triggerEl:n}),e.classList.add("shell-animated-menu--visible"),t.classList.add("shell-animated-menu__pointer--visible"),d(P),e.addEventListener("keydown",C),n.setAttribute("aria-expanded","true"),n.addEventListener("keydown",C),Ie=t,xe=n,document.addEventListener("focusin",q),I({triggerEl:xe,pointerEl:Ie,onCrossMobileThreshhold:P}))}function P(){var e=document.getElementById("user-menu-body"),t=document.getElementById("user-menu-pointer"),n=document.getElementById("user-menu-trigger");e&&t&&n&&(Ae=!1,e.classList.remove("shell-animated-menu--visible"),t.classList.remove("shell-animated-menu__pointer--visible"),e.removeEventListener("keydown",C),n.setAttribute("aria-expanded","false"),n.removeEventListener("keydown",C),document.removeEventListener("focusin",q),B(),_({pointerEl:Ie,onPointerReset:function(){Ie=null}}),xe=null)}function z(e){if(h("[data-sign-out]",e.target))return e.preventDefault(),L();var t=T(),n=document.getElementById("user-menu-trigger");if(!t&&n&&n.contains(e.target))return M();var i=document.getElementById("user-menu-body");return t&&i&&!i.contains(e.target)?P():void 0}function R(e,t){if("function"==typeof e?(t=e,e={}):e=e||{},e.cache=void 0===e.cache||e.cache,r()&&e.cache){var n=i();return n?w(n,l()):p(),c(),void(t&&t())}if(Be)t&&g(t);else{Be=!0;var u=new XMLHttpRequest;u.open("GET",k()+"/api/session"),u.setRequestHeader("Accept","application/json"),u.onerror=E,u.onload=function(){if(a(),403===u.status)p();else if(200!==u.status)p(),console.log(u.statusText);else{var e=JSON.parse(u.response);o(e),s(S(e)),w(e),analytics.identify(e.id,{username:e.id,email:e.email})}document.addEventListener("click",z),c(),t&&t(),Be=!1},u.withCredentials=!0,u.send()}}function j(e,t,n){function i(t){e.contains(t.target)||n.contains(t.target)||r()}function o(){m&&m(),x(),f||(f=!0,clearTimeout(h),A({pointerEl:t,triggerEl:e}),t.classList.add("shell-animated-menu__pointer--visible"),n.classList.add("shell-animated-menu--visible"),e.setAttribute("aria-expanded","true"),d(r),p.addEventListener("focusin",i),console.log(e),I({triggerEl:e,pointerEl:t,onCrossMobileThreshhold:r}))}function r(){f&&(f=!1,clearTimeout(h),g=null,t.classList.remove("shell-animated-menu__pointer--visible"),n.classList.remove("shell-animated-menu--visible"),e.setAttribute("aria-expanded","false"),p.removeEventListener("focusin",i),B(),_({pointerEl:t}))}function a(){if(f&&g===Te)return r();g=Te,f||(clearTimeout(h),o())}function l(){g!==Te&&(g=null,h=setTimeout((function(){f&&null===g&&r()}),Ce))}function s(){g!==Te&&(clearTimeout(h),g=_e)}function u(t){if(t.target.getAttribute&&t.target.getAttribute("data-nav-link"))return r();if(!n.contains(t.target))return e.contains(t.target)?a():void r()}function c(t){f&&("Escape"!==t.key&&"Esc"!==t.key&&27!==t.keyCode||(r(),e.focus()))}var f=!1,g=null,h=void 0,p=window.document;if(!e.hasAttribute("data-page-shell-hover-menu")){e.setAttribute("data-page-shell-hover-menu","");var y=le(e,(function(){g!==Te&&(clearTimeout(h),g=_e,o())}),(function(){}));e.addEventListener("mouseleave",l),e.addEventListener("keydown",c),n.addEventListener("mouseenter",s),n.addEventListener("mouseleave",l),n.addEventListener("keydown",c),p.addEventListener("click",u);var w=[];if("ontouchstart"in document.documentElement)for(var b=document.body.childNodes,E=0,k=b.length;E<k;E++)!(function(e,t){var n=b[e];n.addEventListener("mouseover",qe),w.push((function(){n.removeEventListener("mouseover",qe)}))})(E);v((function(){e.removeAttribute("data-page-shell-hover-menu"),y.remove(),e.removeEventListener("mouseleave",l),e.removeEventListener("keydown",c),n.removeEventListener("mouseenter",s),n.removeEventListener("mouseleave",l),n.removeEventListener("keydown",c),p.removeEventListener("click",u),w.forEach((function(e){e()}))}))}}function N(e){console.log("Raven failed to initialize"),e&&console.log(e)}function O(){t((function(){if(!window.Raven){var e={shouldSendCallback:function(){return Me}},t=document.createElement("script");t.type="text/javascript",t.src="https://cdn.ravenjs.com/"+fe+"/raven.min.js",t.setAttribute("crossorigin","anonymous"),t.setAttribute("async",""),t.setAttribute("defer",""),t.onerror=N,t.onload=function(){window.Raven?window.Raven.config(ge,e).install():N()},document.head.appendChild(t)}}))}function D(){if(!Pe){var e=document.getElementById("page-shell"),t=document.getElementById("mobile-nav-menu"),n=document.getElementById("mobile-nav-backdrop");if(t&&e&&n){var i=Math.max(t.getBoundingClientRect().bottom+80,window.innerHeight);e.style.height=String(i)+"px",e.style.overflow="hidden",n.classList.add("shell-mobile-nav__backdrop--visible"),n.style.height=String(i-parseInt(n.style.top))+"px",Pe=!0}}}function U(){if(Pe){var e=document.getElementById("page-shell"),t=document.getElementById("mobile-nav-backdrop");e&&t&&(e.style.height="",e.style.overflow="",e.style.overflowX="hidden",t.classList.remove("shell-mobile-nav__backdrop--visible"),Pe=!1)}}function X(e,t){return""+e+H(t)}function Y(e,t){return"-"+e+"-"+t}function H(e){return""+e.charAt(0).toUpperCase()+e.substr(1)}function F(e){return e in(arguments.length>1&&void 0!==arguments[1]?arguments[1]:window)}function J(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ze;return e in n.style||!!t&&Re.some((function(t){return J(X(t,e))}))}function W(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:ze,o=n.allowPrefixedProp,r=n.allowPrefixedValue,a=!1;return(o||r)&&(a=Re.some((function(n){return W(o?X(n,e):e,r?Y(n,t):t)}))),a||(i.style[e]=t,i.style[e]===t)}function Q(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ze;(je={flexBox:J("flex",e,t)&&W("display","flex",{allowPrefixedProp:!1,allowPrefixedValue:e},t),viewportUnits:W("width","100vw",{allowPrefixedProp:!1,allowPrefixedValue:!1},t),visibilityState:F("visibilityState",window.document),devicePixelRatio:F("devicePixelRatio")}).doesCutMustard=Object.keys(je).every((function(e){return je[e]}))}function V(){var e=window.document.getElementById("page-shell-compatibility-dismiss"),t=window.document.getElementById("page-shell-compatibility-warning");Oe=!0,Ne=!1,e&&e.removeEventListener("click",V),t&&(t.style.display="none"),window.localStorage&&window.localStorage.setItem("suppress-browser-compatibility-warning","true")}function Z(){if(null==je.doesCutMustard&&Q(!0),!(Oe||je.doesCutMustard||"localStorage"in window&&"true"===window.localStorage.getItem("suppress-browser-compatibility-warning"))){var e=window.document.getElementById("page-shell-compatibility-warning");if(e&&(e.style.display="block"),!Ne){var t=window.document.getElementById("page-shell-compatibility-dismiss");t&&t.addEventListener("click",V)}Ne=!0}}function G(){window.matchMedia("(min-width: "+he+"px)").matches&&K()}function $(){var e=document.getElementById("mobile-nav-menu"),t=document.getElementById("page-header-content");e&&(De=!0,e.classList.add("shell-animated-menu--visible"),t.classList.add("shell-mobile-nav--visible"),J("textOrientation",!0)||(document.querySelector(".shell-mobile-nav__trigger__bar--top").setAttribute("transform","translate(6 -1) rotate(45)"),document.querySelector(".shell-mobile-nav__trigger__bar--bottom").setAttribute("transform","translate(-6.5 6) rotate(-45)")),D(),window.addEventListener("resize",G))}function K(){var e=document.getElementById("mobile-nav-menu"),t=document.getElementById("page-header-content");e&&(De=!1,e.classList.remove("shell-animated-menu--visible"),t.classList.remove("shell-mobile-nav--visible"),J("textOrientation",!0)||(document.querySelector(".shell-mobile-nav__trigger__bar--top").setAttribute("transform",""),document.querySelector(".shell-mobile-nav__trigger__bar--bottom").setAttribute("transform","")),U(),window.removeEventListener("resize",G))}function ee(e){var t=document.getElementById("mobile-nav-trigger-toggle"),n=document.getElementById("mobile-nav-menu"),i=document.getElementById("page-header-content");t&&n&&(e.target.getAttribute&&e.target.getAttribute("data-nav-link")?(document.documentElement.scrollTop=0,document.body.scrollTop=0,K()):t.contains(e.target)?De?K():$():!De||n.contains(e.target)||i.contains(e.target)||K())}function te(){if(!Ue){Ue=!0;var e=document.querySelectorAll("[data-nav-trigger]");if(0!==e.length){var t=void 0,n=void 0,i=void 0;for(i=0;i<e.length;i++)n=(t=e[i]).getAttribute("data-nav-trigger"),j(t,document.querySelector('[data-nav-pointer="'+n+'"]'),document.querySelector('[data-nav-menu="'+n+'"]'));document.addEventListener("click",ee)}}}function ne(){Ue&&(Ue=!1,f(),U(),K(),document.removeEventListener("click",ee))}function ie(){var t=window.analytics=window.analytics||[];if(window.analytics=t,!t.initialize)if(t.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{t.invoked=!0,t.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"],t.factory=function(e){return function(){var n=Array.prototype.slice.call(arguments);return n.unshift(e),t.push(n),t}};for(var n=0;n<t.methods.length;n++){var i=t.methods[n];t[i]=t.factory(i)}t.load=function(e){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=("https:"===document.location.protocol?"https://":"http://")+"cdn.segment.com/analytics.js/v1/"+e+"/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)},t.SNIPPET_VERSION="4.0.0"}e()?t.load(me):t.load(ve),t.page()}function oe(){if(window.history&&window.history.pushState){var e=void 0,t=function(t){t=t||{},setTimeout((function(){t.referrer=e,analytics.page(t),window._cio&&window._cio.page&&window._cio.page(window.location.href),e=window.location.href}),300)},n=window.history.pushState;window.history.pushState=function(){e=window.location.href,t({clientSideRouting:"pushstate"}),n.apply(window.history,arguments)},window.addEventListener("popstate",(function(){t({clientSideRouting:"popstate"})}))}}var re=function(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var i in n)ae.call(n,i)&&(e[i]=n[i])}return e},ae=Object.prototype.hasOwnProperty,le=function(e,t,n){function i(e,t){return f&&(f=clearTimeout(f)),v=0,n.call(e,t)}function o(e){s=e.clientX,u=e.clientY}function r(e,n){if(f&&(f=clearTimeout(f)),Math.abs(c-s)+Math.abs(d-u)<g.sensitivity)return v=1,t.call(e,n);c=s,d=u,f=setTimeout((function(){r(e,n)}),g.interval)}function a(t){return f&&(f=clearTimeout(f)),e.removeEventListener("mousemove",o,!1),1!==v&&(c=t.clientX,d=t.clientY,e.addEventListener("mousemove",o,!1),f=setTimeout((function(){r(e,t)}),g.interval)),this}function l(t){return f&&(f=clearTimeout(f)),e.removeEventListener("mousemove",o,!1),1===v&&(f=setTimeout((function(){i(e,t)}),g.timeout)),this}var s,u,c,d,m={},v=0,f=0,g={sensitivity:7,interval:100,timeout:0};return m.options=function(e){return g=re({},g,e),m},m.remove=function(){e&&(e.removeEventListener("mouseover",a,!1),e.removeEventListener("mouseout",l,!1))},e&&(e.addEventListener("mouseover",a,!1),e.addEventListener("mouseout",l,!1)),m},se="https://www.mapbox.com",ue="https://122e4e-mapbox.global.ssl.fastly.net",ce="pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA",de="pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpZ3BqeDZlcDAwMDBzcmt1YnQ1OTM4cTEifQ.54XwgUSkvlmB7gHW4vWJ3w",me="fl0c8p240n",ve="0biiejpgfj",fe="3.17.0",ge="https://581913e6cd0845d785f5b551a4986b61@sentry.io/11290",he=640,pe=void 0,ye=void 0,we=[],be=[],Ee=void 0,ke=!1,Le=void 0,Se=void 0,Ie=null,xe=null,Ae=!1,Be=!1,_e="mouse",Te="click",Ce=300,qe=function(){},Me=!0,Pe=!1,ze=window.document.createElement("div"),Re=["webkit","moz","o","ms"],je={},Ne=!1,Oe=!1,De=!1,Ue=!1,Xe=!1,Ye={isProduction:e,afterDomContentLoaded:t,hoverintent:le,appendFullscreenLoader:n,getMapboxAccessToken:function(){return e()?ce:de},getUser:i,isUserChecked:r,onNextUserCheck:g,afterUserCheck:function(e){r()?e():g(e)},getUserPublicAccessToken:l,querySelectorContainsElement:h,signOut:L,checkSession:R,createHoverMenu:j,initializeNavigation:te,removeNavigation:ne,initialize:function(){Xe||(ie(),O(),oe()),Xe=!0,t((function(){R(),ne(),te(),Z()}))},disableRaven:function(){Me=!1},generateCompatibilitySummary:Q,getCompatibilitySummary:function(){return je}};window.MapboxPageShell=Ye,Ye.initialize()})();