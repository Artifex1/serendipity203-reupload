!function(){for(var a,b=function(){},c=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],d=c.length,e=window.console=window.console||{};d--;)a=c[d],e[a]||(e[a]=b)}();var AccessifyHTML5=function(a,b){"use strict";var c,d,e,f,g,h,i,j,k,l,m={article:{role:"article"},aside:{role:"complementary"},nav:{role:"navigation"},main:{role:"main"},output:{"aria-live":"polite"},section:{role:"region"},"[required]":{"aria-required":"true"}},n={ok:[],warn:[],fail:[]},o=n.fail,p=new RegExp("aria-[a-z]+|role|tabindex|title|alt|data-[\\w-]+|lang|style|maxlength|placeholder|pattern|required|type|target|accesskey|longdesc"),q="acfy-id-",r=0,s=document;if(s.querySelectorAll){if(a&&(a.header&&(m[a.header]={role:"banner"}),a.footer&&(m[a.footer]={role:"contentinfo"}),a.main&&(m[a.main]={role:"main"},m.main={role:""})),b&&b._CONFIG_&&b._CONFIG_.ignore_defaults)m=b;else for(j in b)m[j]=b[j];for(c in m)if(!c.match(/^_(CONFIG|[A-Z]+)_/)&&m.hasOwnProperty(c)){try{d=s.querySelectorAll(c)}catch(t){o.push({sel:c,attr:null,val:null,msg:"Invalid syntax for `document.querySelectorAll` function",ex:t})}for(h=m[c],(!d||d.length<1)&&n.warn.push({sel:c,attr:null,val:null,msg:"Not found"}),i=0;i<d.length;i++)for(g in h)if(h.hasOwnProperty(g)){if(e=g,f=h[g],e.match(/_?note/))continue;if(!e.match(p)){o.push({sel:c,attr:e,val:null,msg:"Attribute not allowed",re:p});continue}if(!(typeof f).match(/string|number|boolean/)){o.push({sel:c,attr:e,val:f,msg:"Value-type not allowed"});continue}if(k=e.match(/(describ|label)l?edby/)){try{l=s.querySelector(f)}catch(t){o.push({sel:c,attr:e,val:f,msg:"Invalid selector syntax (2) - see 'val'",ex:t})}if(!l){o.push({sel:c,attr:e,val:f,msg:"Labelledby ref not found - see 'val'"});continue}l.id||(l.id=q+r),f=l.id,e="aria-"+("label"===k[1]?"labelledby":"describedby"),r++}d[i].hasAttribute(e)?n.warn.push({sel:c,attr:e,val:f,msg:"Already present, skipped"}):(d[i].setAttribute(e,f),n.ok.push({sel:c,attr:e,val:f,msg:"Added"}))}}}return n.input=m,n};!function(a,b,c){"use strict";var d=function(d,e){var f=!!b.getComputedStyle;f||(b.getComputedStyle=function(a){return this.el=a,this.getPropertyValue=function(b){var c=/(\-([a-z]){1})/g;return"float"===b&&(b="styleFloat"),c.test(b)&&(b=b.replace(c,function(){return arguments[2].toUpperCase()})),a.currentStyle[b]?a.currentStyle[b]:null},this});var g,h,i,j,k,l,m=function(a,b,c,d){if("addEventListener"in a)try{a.addEventListener(b,c,d)}catch(e){if("object"!=typeof c||!c.handleEvent)throw e;a.addEventListener(b,function(a){c.handleEvent.call(c,a)},d)}else"attachEvent"in a&&("object"==typeof c&&c.handleEvent?a.attachEvent("on"+b,function(){c.handleEvent.call(c)}):a.attachEvent("on"+b,c))},n=function(a,b,c,d){if("removeEventListener"in a)try{a.removeEventListener(b,c,d)}catch(e){if("object"!=typeof c||!c.handleEvent)throw e;a.removeEventListener(b,function(a){c.handleEvent.call(c,a)},d)}else"detachEvent"in a&&("object"==typeof c&&c.handleEvent?a.detachEvent("on"+b,function(){c.handleEvent.call(c)}):a.detachEvent("on"+b,c))},o=function(a){if(a.children.length<1)throw new Error("The Nav container has no containing elements");for(var b=[],c=0;c<a.children.length;c++)1===a.children[c].nodeType&&b.push(a.children[c]);return b},p=function(a,b){for(var c in b)a.setAttribute(c,b[c])},q=function(a,b){0!==a.className.indexOf(b)&&(a.className+=" "+b,a.className=a.className.replace(/(^\s*)|(\s*$)/g,""))},r=function(a,b){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");a.className=a.className.replace(c," ").replace(/(^\s*)|(\s*$)/g,"")},s=function(a,b,c){for(var d=0;d<a.length;d++)b.call(c,d,a[d])},t=a.createElement("style"),u=a.documentElement,v=function(b,c){var d;this.options={animate:!0,transition:284,label:"Menu",insert:"before",customToggle:"",closeOnNavClick:!1,openPos:"relative",navClass:"nav-collapse",navActiveClass:"js-nav-active",jsClass:"js",init:function(){},open:function(){},close:function(){}};for(d in c)this.options[d]=c[d];if(q(u,this.options.jsClass),this.wrapperEl=b.replace("#",""),a.getElementById(this.wrapperEl))this.wrapper=a.getElementById(this.wrapperEl);else{if(!a.querySelector(this.wrapperEl))throw new Error("The nav element you are trying to select doesn't exist");this.wrapper=a.querySelector(this.wrapperEl)}this.wrapper.inner=o(this.wrapper),h=this.options,g=this.wrapper,this._init(this)};return v.prototype={destroy:function(){this._removeStyles(),r(g,"closed"),r(g,"opened"),r(g,h.navClass),r(g,h.navClass+"-"+this.index),r(u,h.navActiveClass),g.removeAttribute("style"),g.removeAttribute("aria-hidden"),n(b,"resize",this,!1),n(b,"focus",this,!1),n(a.body,"touchmove",this,!1),n(i,"touchstart",this,!1),n(i,"touchend",this,!1),n(i,"mouseup",this,!1),n(i,"keyup",this,!1),n(i,"click",this,!1),h.customToggle?i.removeAttribute("aria-hidden"):i.parentNode.removeChild(i)},toggle:function(){j===!0&&(l?this.close():this.open(),this._enablePointerEvents())},open:function(){l||(r(g,"closed"),q(g,"opened"),q(u,h.navActiveClass),q(i,"active"),g.style.position=h.openPos,p(g,{"aria-hidden":"false"}),l=!0,h.open())},close:function(){l&&(q(g,"closed"),r(g,"opened"),r(u,h.navActiveClass),r(i,"active"),p(g,{"aria-hidden":"true"}),h.animate?(j=!1,setTimeout(function(){g.style.position="absolute",j=!0},h.transition+10)):g.style.position="absolute",l=!1,h.close())},resize:function(){"none"!==b.getComputedStyle(i,null).getPropertyValue("display")?(k=!0,p(i,{"aria-hidden":"false"}),g.className.match(/(^|\s)closed(\s|$)/)&&(p(g,{"aria-hidden":"true"}),g.style.position="absolute"),this._createStyles(),this._calcHeight()):(k=!1,p(i,{"aria-hidden":"true"}),p(g,{"aria-hidden":"false"}),g.style.position=h.openPos,this._removeStyles())},handleEvent:function(a){var c=a||b.event;switch(c.type){case"touchstart":this._onTouchStart(c);break;case"touchmove":this._onTouchMove(c);break;case"touchend":case"mouseup":this._onTouchEnd(c);break;case"click":this._preventDefault(c);break;case"keyup":this._onKeyUp(c);break;case"focus":case"resize":this.resize(c)}},_init:function(){this.index=c++,q(g,h.navClass),q(g,h.navClass+"-"+this.index),q(g,"closed"),j=!0,l=!1,this._closeOnNavClick(),this._createToggle(),this._transitions(),this.resize();var d=this;setTimeout(function(){d.resize()},20),m(b,"resize",this,!1),m(b,"focus",this,!1),m(a.body,"touchmove",this,!1),m(i,"touchstart",this,!1),m(i,"touchend",this,!1),m(i,"mouseup",this,!1),m(i,"keyup",this,!1),m(i,"click",this,!1),h.init()},_createStyles:function(){t.parentNode||(t.type="text/css",a.getElementsByTagName("head")[0].appendChild(t))},_removeStyles:function(){t.parentNode&&t.parentNode.removeChild(t)},_createToggle:function(){if(h.customToggle){var b=h.customToggle.replace("#","");if(a.getElementById(b))i=a.getElementById(b);else{if(!a.querySelector(b))throw new Error("The custom nav toggle you are trying to select doesn't exist");i=a.querySelector(b)}}else{var c=a.createElement("a");c.innerHTML=h.label,p(c,{href:"#","class":"nav-toggle"}),"after"===h.insert?g.parentNode.insertBefore(c,g.nextSibling):g.parentNode.insertBefore(c,g),i=c}},_closeOnNavClick:function(){if(h.closeOnNavClick){var a=g.getElementsByTagName("a"),b=this;s(a,function(c){m(a[c],"click",function(){k&&b.toggle()},!1)})}},_preventDefault:function(a){return a.preventDefault?(a.stopImmediatePropagation&&a.stopImmediatePropagation(),a.preventDefault(),a.stopPropagation(),!1):void(a.returnValue=!1)},_onTouchStart:function(b){this._preventDefault(b),q(a.body,"disable-pointer-events"),this.startX=b.touches[0].clientX,this.startY=b.touches[0].clientY,this.touchHasMoved=!1,n(i,"mouseup",this,!1)},_onTouchMove:function(a){(Math.abs(a.touches[0].clientX-this.startX)>10||Math.abs(a.touches[0].clientY-this.startY)>10)&&(this._enablePointerEvents(),this.touchHasMoved=!0)},_onTouchEnd:function(c){if(this._preventDefault(c),k&&!this.touchHasMoved){if("touchend"===c.type)return this.toggle(),void("after"===h.insert&&setTimeout(function(){r(a.body,"disable-pointer-events")},h.transition+300));var d=c||b.event;3!==d.which&&2!==d.button&&this.toggle()}},_onKeyUp:function(a){var c=a||b.event;13===c.keyCode&&this.toggle()},_enablePointerEvents:function(){r(a.body,"disable-pointer-events")},_transitions:function(){if(h.animate){var a=g.style,b="max-height "+h.transition+"ms";a.WebkitTransition=b,a.MozTransition=b,a.OTransition=b,a.transition=b}},_calcHeight:function(){for(var a=0,b=0;b<g.inner.length;b++)a+=g.inner[b].offsetHeight;var c="."+h.jsClass+" ."+h.navClass+"-"+this.index+".opened{max-height:"+a+"px !important} ."+h.jsClass+" .disable-pointer-events{pointer-events:none !important} ."+h.jsClass+" ."+h.navClass+"-"+this.index+".opened.dropdown-active {max-height:9999px !important}";t.styleSheet?t.styleSheet.cssText=c:t.innerHTML=c,c=""}},new v(d,e)};b.responsiveNav=d}(document,window,0),function(a,b){var c,d=b.fn,e="[object Opera]"==Object.prototype.toString.call(window.opera),f=function(a){var b,c,d,e=a.createElement("details");return"open"in e?(c=a.body||function(){var c=a.documentElement;return b=!0,c.insertBefore(a.createElement("body"),c.firstElementChild||c.firstChild)}(),e.innerHTML="<summary>a</summary>b",e.style.display="block",c.appendChild(e),d=e.offsetHeight,e.open=!0,d=d!=e.offsetHeight,c.removeChild(e),b&&c.parentNode.removeChild(c),d):!1}(a),g=function(a,b,c,d){var e=a.prop("open"),f=e&&d||!e&&!d;f?(a.removeClass("open").prop("open",!1).triggerHandler("close.details"),b.attr("aria-expanded",!1),c.hide()):(a.addClass("open").prop("open",!0).triggerHandler("open.details"),b.attr("aria-expanded",!0),c.show())};d.noSelect=function(){var a="none";return this.bind("selectstart dragstart mousedown",function(){return!1}).css({MozUserSelect:a,msUserSelect:a,webkitUserSelect:a,userSelect:a})},f?(c=d.details=function(){return this.each(function(){var a=b(this),c=b("summary",a).first();c.attr({role:"button","aria-expanded":a.prop("open")}).on("click",function(){var b=a.prop("open");c.attr("aria-expanded",!b),a.triggerHandler((b?"close":"open")+".details")})})},c.support=f):(c=d.details=function(){return this.each(function(){var a=b(this),c=b("summary",a).first(),d=a.children(":not(summary)"),f=a.contents(":not(summary)");c.length||(c=b("<summary>").text("Details").prependTo(a)),d.length!=f.length&&(f.filter(function(){return 3==this.nodeType&&/[^ \t\n\f\r]/.test(this.data)}).wrap("<span>"),d=a.children(":not(summary)")),a.prop("open","string"==typeof a.attr("open")),g(a,c,d),c.attr("role","button").noSelect().prop("tabIndex",0).on("click",function(){c.focus(),g(a,c,d,!0)}).keyup(function(a){(32==a.keyCode||13==a.keyCode&&!e)&&(a.preventDefault(),c.click())})})},c.support=f)}(document,jQuery),function(a){"use strict";a.fn.fitVids=function(b){var c={customSelector:null};if(!document.getElementById("fit-vids-style")){var d=document.head||document.getElementsByTagName("head")[0],e=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",f=document.createElement("div");f.innerHTML='<p>x</p><style id="fit-vids-style">'+e+"</style>",d.appendChild(f.childNodes[1])}return b&&a.extend(c,b),this.each(function(){var b=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];c.customSelector&&b.push(c.customSelector);var d=a(this).find(b.join(","));d=d.not("object object"),d.each(function(){var b=a(this);if(!("embed"===this.tagName.toLowerCase()&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length)){var c="object"===this.tagName.toLowerCase()||b.attr("height")&&!isNaN(parseInt(b.attr("height"),10))?parseInt(b.attr("height"),10):b.height(),d=isNaN(parseInt(b.attr("width"),10))?b.width():parseInt(b.attr("width"),10),e=c/d;if(!b.attr("id")){var f="fitvid"+Math.floor(999999*Math.random());b.attr("id",f)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*e+"%"),b.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto),function(a){if(AccessifyHTML5({header:"#banner",footer:"#colophon"}),a(".nav-collapse").length>0){responsiveNav(".nav-collapse",{customToggle:"#open-nav",closeOnNavClick:!0})}a("#primary").fitVids(),a(".trackback-url").click(function(b){b.preventDefault(),a(this).next(".trackback-hint").show()}),a(".comment_reply, .reply_origin").click(function(b){var c,d,e=a(this);e.is(".comment_reply")?(c="#reply",d=e.attr("id").replace(/serendipity_reply_/g,""),a("#serendipity_replyTo").val(d)):c=e.attr("href"),a("html, body").animate({scrollTop:a(c).offset().top},250),b.preventDefault()}),a(".comment_source_ownerlink").click(function(){return confirm(a(this).attr("title"))}),a(".serendipity_commentDirection").prepend('<span class="icon-info-circled" aria-hidden="true"></span> '),a("html").addClass(a.fn.details.support?"details":"no-details"),a("details").details(),"string"==typeof lsbase&&a('<div id="LSResult" style="display: none;"><div id="LSShadow"></div></div>').appendTo("#searchform")}(jQuery);