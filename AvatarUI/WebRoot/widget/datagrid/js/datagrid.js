/**
 * AvatarUI-表格
 * @version	v2.0.1
 * @author	Rocky(296456018@qq.com)
 * @date	2013-04-25
 */

;!function(win, $, undefined){
	function e(e){var s=e||window.event,r=a.call(arguments,1),l=0,u=0,d=0,p=0,h=0,f=0;if(e=$.event.fix(s),e.type="mousewheel","detail"in s&&(d=-1*s.detail),"wheelDelta"in s&&(d=s.wheelDelta),"wheelDeltaY"in s&&(d=s.wheelDeltaY),"wheelDeltaX"in s&&(u=-1*s.wheelDeltaX),"axis"in s&&s.axis===s.HORIZONTAL_AXIS&&(u=-1*d,d=0),l=0===d?u:d,"deltaY"in s&&(d=-1*s.deltaY,l=d),"deltaX"in s&&(u=s.deltaX,0===d&&(l=-1*u)),0!==d||0!==u){if(1===s.deltaMode){var g=$.data(this,"mousewheel-line-height");l*=g,d*=g,u*=g}else if(2===s.deltaMode){var v=$.data(this,"mousewheel-page-height");l*=v,d*=v,u*=v}if(p=Math.max(Math.abs(d),Math.abs(u)),(!o||o>p)&&(o=p,n(s,p)&&(o/=40)),n(s,p)&&(l/=40,u/=40,d/=40),l=Math[l>=1?"floor":"ceil"](l/o),u=Math[u>=1?"floor":"ceil"](u/o),d=Math[d>=1?"floor":"ceil"](d/o),c.settings.normalizeOffset&&this.getBoundingClientRect){var j=this.getBoundingClientRect();h=e.clientX-j.left,f=e.clientY-j.top}return e.deltaX=u,e.deltaY=d,e.deltaFactor=o,e.offsetX=h,e.offsetY=f,e.deltaMode=0,r.unshift(e,l,u,d),i&&clearTimeout(i),i=setTimeout(t,200),($.event.dispatch||$.event.handle).apply(this,r)}}function t(){o=null}function n(e,t){return c.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120===0}$.fn.jScrollPane=function(e){function t(e,t){function n(t){var o,r,l,c,u,h,f=!1,g=!1;if(R=t,void 0===L)u=e.scrollTop(),h=e.scrollLeft(),e.css({overflow:"hidden",padding:0}),O=e.innerWidth()+je,F=e.innerHeight(),e.width(O),L=$('<div class="jspPane" />').css("padding",ve).append(e.children()),E=$('<div class="jspContainer" />').css({width:O+"px",height:F+"px"}).append(L).appendTo(e);else{if(e.css("width",""),f=R.stickToBottom&&D(),g=R.stickToRight&&x(),c=e.innerWidth()+je!=O||e.outerHeight()!=F,c&&(O=e.innerWidth()+je,F=e.innerHeight(),E.css({width:O+"px",height:F+"px"})),!c&&me==N&&L.outerHeight()==V)return void e.width(O);me=N,L.css("width",""),e.width(O),E.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}L.css("overflow","auto"),N=t.contentWidth?t.contentWidth:L[0].scrollWidth,V=L[0].scrollHeight,L.css("overflow",""),G=N/O,q=V/F,_=q>1,K=G>1,K||_?(e.addClass("jspScrollable"),o=R.maintainPosition&&(J||te),o&&(r=C(),l=T()),i(),s(),a(),o&&(k(g?N-O:r,!1),b(f?V-F:l,!1)),M(),B(),W(),R.enableKeyboardNavigation&&A(),R.clickOnTrack&&d(),X(),R.hijackInternalLinks&&z()):(e.removeClass("jspScrollable"),L.css({top:0,left:0,width:E.width()-je}),H(),P(),Y(),p()),R.autoReinitialise&&!ge?ge=setInterval(function(){n(R)},R.autoReinitialiseDelay):!R.autoReinitialise&&ge&&clearInterval(ge),u&&e.scrollTop(0)&&b(u,!1),h&&e.scrollLeft(0)&&k(h,!1),e.trigger("jsp-initialised",[K||_])}function i(){_&&(E.append($('<div class="jspVerticalBar" />').append($('<div class="jspCap jspCapTop" />'),$('<div class="jspTrack" />').append($('<div class="jspDrag" />').append($('<div class="jspDragTop" />'),$('<div class="jspDragBottom" />'))),$('<div class="jspCap jspCapBottom" />'))),ne=E.find(">.jspVerticalBar"),ie=ne.find(">.jspTrack"),U=ie.find(">.jspDrag"),R.showArrows&&(ae=$('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",c(0,-1)).bind("click.jsp",S),le=$('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",c(0,1)).bind("click.jsp",S),R.arrowScrollOnHover&&(ae.bind("mouseover.jsp",c(0,-1,ae)),le.bind("mouseover.jsp",c(0,1,le))),l(ie,R.verticalArrowPositions,ae,le)),se=F,E.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){se-=$(this).outerHeight()}),U.hover(function(){U.addClass("jspHover")},function(){U.removeClass("jspHover")}).bind("mousedown.jsp",function(e){$("html").bind("dragstart.jsp selectstart.jsp",S),U.addClass("jspActive");var t=e.pageY-U.position().top;return $("html").bind("mousemove.jsp",function(e){f(e.pageY-t,!1)}).bind("mouseup.jsp mouseleave.jsp",h),!1}),o())}function o(){ie.height(se+"px"),J=0,oe=R.verticalGutter+ie.outerWidth(),L.width(O-oe-je);try{0===ne.position().left&&L.css("margin-left",oe+"px")}catch(e){}}function s(){K&&(E.append($('<div class="jspHorizontalBar" />').append($('<div class="jspCap jspCapLeft" />'),$('<div class="jspTrack" />').append($('<div class="jspDrag" />').append($('<div class="jspDragLeft" />'),$('<div class="jspDragRight" />'))),$('<div class="jspCap jspCapRight" />'))),ce=E.find(">.jspHorizontalBar"),ue=ce.find(">.jspTrack"),Q=ue.find(">.jspDrag"),R.showArrows&&(he=$('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",c(-1,0)).bind("click.jsp",S),fe=$('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",c(1,0)).bind("click.jsp",S),R.arrowScrollOnHover&&(he.bind("mouseover.jsp",c(-1,0,he)),fe.bind("mouseover.jsp",c(1,0,fe))),l(ue,R.horizontalArrowPositions,he,fe)),Q.hover(function(){Q.addClass("jspHover")},function(){Q.removeClass("jspHover")}).bind("mousedown.jsp",function(e){$("html").bind("dragstart.jsp selectstart.jsp",S),Q.addClass("jspActive");var t=e.pageX-Q.position().left;return $("html").bind("mousemove.jsp",function(e){v(e.pageX-t,!1)}).bind("mouseup.jsp mouseleave.jsp",h),!1}),de=E.innerWidth(),r())}function r(){E.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){de-=$(this).outerWidth()}),ue.width(de+"px"),te=0}function a(){if(K&&_){var e=ue.outerHeight(),t=ie.outerWidth();se-=e,$(ce).find(">.jspCap:visible,>.jspArrow").each(function(){de+=$(this).outerWidth()}),de-=t,F-=t,O-=e,ue.parent().append($('<div class="jspCorner" />').css("width",e+"px")),o(),r()}K&&L.width(E.outerWidth()-je+"px"),V=L.outerHeight(),q=V/F,K&&(pe=Math.ceil(1/G*de),pe>R.horizontalDragMaxWidth?pe=R.horizontalDragMaxWidth:pe<R.horizontalDragMinWidth&&(pe=R.horizontalDragMinWidth),Q.width(pe+"px"),ee=de-pe,j(te)),_&&(re=Math.ceil(1/q*se),re>R.verticalDragMaxHeight?re=R.verticalDragMaxHeight:re<R.verticalDragMinHeight&&(re=R.verticalDragMinHeight),U.height(re+"px"),Z=se-re,g(J))}function l(e,t,n,i){var o,s="before",r="after";"os"==t&&(t=/Mac/.test(navigator.platform)?"after":"split"),t==s?r=t:t==r&&(s=t,o=n,n=i,i=o),e[s](n)[r](i)}function c(e,t,n){return function(){return u(e,t,this,n),this.blur(),!1}}function u(e,t,n,i){n=$(n).addClass("jspActive");var o,s,r=!0,a=function(){0!==e&&we.scrollByX(e*R.arrowButtonSpeed),0!==t&&we.scrollByY(t*R.arrowButtonSpeed),s=setTimeout(a,r?R.initialDelay:R.arrowRepeatFreq),r=!1};a(),o=i?"mouseout.jsp":"mouseup.jsp",i=i||$("html"),i.bind(o,function(){n.removeClass("jspActive"),s&&clearTimeout(s),s=null,i.unbind(o)})}function d(){p(),_&&ie.bind("mousedown.jsp",function(e){if(void 0===e.originalTarget||e.originalTarget==e.currentTarget){var t,n=$(this),i=n.offset(),o=e.pageY-i.top-J,s=!0,r=function(){var i=n.offset(),l=e.pageY-i.top-re/2,c=F*R.scrollPagePercent,u=Z*c/(V-F);if(0>o)J-u>l?we.scrollByY(-c):f(l);else{if(!(o>0))return void a();l>J+u?we.scrollByY(c):f(l)}t=setTimeout(r,s?R.initialDelay:R.trackClickRepeatFreq),s=!1},a=function(){t&&clearTimeout(t),t=null,$(document).unbind("mouseup.jsp",a)};return r(),$(document).bind("mouseup.jsp",a),!1}}),K&&ue.bind("mousedown.jsp",function(e){if(void 0===e.originalTarget||e.originalTarget==e.currentTarget){var t,n=$(this),i=n.offset(),o=e.pageX-i.left-te,s=!0,r=function(){var i=n.offset(),l=e.pageX-i.left-pe/2,c=O*R.scrollPagePercent,u=ee*c/(N-O);if(0>o)te-u>l?we.scrollByX(-c):v(l);else{if(!(o>0))return void a();l>te+u?we.scrollByX(c):v(l)}t=setTimeout(r,s?R.initialDelay:R.trackClickRepeatFreq),s=!1},a=function(){t&&clearTimeout(t),t=null,$(document).unbind("mouseup.jsp",a)};return r(),$(document).bind("mouseup.jsp",a),!1}})}function p(){ue&&ue.unbind("mousedown.jsp"),ie&&ie.unbind("mousedown.jsp")}function h(){$("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"),U&&U.removeClass("jspActive"),Q&&Q.removeClass("jspActive")}function f(e,t){_&&(0>e?e=0:e>Z&&(e=Z),void 0===t&&(t=R.animateScroll),t?we.animate(U,"top",e,g):(U.css("top",e),g(e)))}function g(t){void 0===t&&(t=U.position().top),E.scrollTop(0),J=t||0;var n=0===J,i=J==Z,o=t/Z,s=-o*(V-F);(be!=n||ke!=i)&&(be=n,ke=i,e.trigger("jsp-arrow-change",[be,ke,$e,ye])),m(n,i),L.css("top",s),e.trigger("jsp-scroll-y",[-s,n,i]).trigger("scroll")}function v(e,t){K&&(0>e?e=0:e>ee&&(e=ee),void 0===t&&(t=R.animateScroll),t?we.animate(Q,"left",e,j):(Q.css("left",e),j(e)))}function j(t){void 0===t&&(t=Q.position().left),E.scrollTop(0),te=t||0;var n=0===te,i=te==ee,o=t/ee,s=-o*(N-O);($e!=n||ye!=i)&&($e=n,ye=i,e.trigger("jsp-arrow-change",[be,ke,$e,ye])),w(n,i),L.css("left",s),e.trigger("jsp-scroll-x",[-s,n,i]).trigger("scroll")}function m(e,t){R.showArrows&&(ae[e?"addClass":"removeClass"]("jspDisabled"),le[t?"addClass":"removeClass"]("jspDisabled"))}function w(e,t){R.showArrows&&(he[e?"addClass":"removeClass"]("jspDisabled"),fe[t?"addClass":"removeClass"]("jspDisabled"))}function b(e,t){var n=e/(V-F);f(n*Z,t)}function k(e,t){var n=e/(N-O);v(n*ee,t)}function y(e,t,n){var i,o,s,r,a,l,c,u,d,p=0,h=0;try{i=$(e)}catch(f){return}for(o=i.outerHeight(),s=i.outerWidth(),E.scrollTop(0),E.scrollLeft(0);!i.is(".jspPane");)if(p+=i.position().top,h+=i.position().left,i=i.offsetParent(),/^body|html$/i.test(i[0].nodeName))return;r=T(),l=r+F,r>p||t?u=p-R.horizontalGutter:p+o>l&&(u=p-F+o+R.horizontalGutter),isNaN(u)||b(u,n),a=C(),c=a+O,a>h||t?d=h-R.horizontalGutter:h+s>c&&(d=h-O+s+R.horizontalGutter),isNaN(d)||k(d,n)}function C(){return-L.position().left}function T(){return-L.position().top}function D(){var e=V-F;return e>20&&e-T()<10}function x(){var e=N-O;return e>20&&e-C()<10}function B(){E.unbind(Te).bind(Te,function(e,t,n,i){te||(te=0),J||(J=0);var o=te,s=J,r=e.deltaFactor||R.mouseWheelSpeed;return we.scrollBy(n*r,-i*r,!1),o==te&&s==J})}function H(){E.unbind(Te)}function S(){return!1}function M(){L.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(e){y(e.target,!1)})}function P(){L.find(":input,a").unbind("focus.jsp")}function A(){function t(){var e=te,t=J;switch(n){case 40:we.scrollByY(R.keyboardSpeed,!1);break;case 38:we.scrollByY(-R.keyboardSpeed,!1);break;case 34:case 32:we.scrollByY(F*R.scrollPagePercent,!1);break;case 33:we.scrollByY(-F*R.scrollPagePercent,!1);break;case 39:we.scrollByX(R.keyboardSpeed,!1);break;case 37:we.scrollByX(-R.keyboardSpeed,!1)}return i=e!=te||t!=J}var n,i,o=[];K&&o.push(ce[0]),_&&o.push(ne[0]),L.bind("focus.jsp",function(){e.focus()}),e.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(e){if(e.target===this||o.length&&$(e.target).closest(o).length){var s=te,r=J;switch(e.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:n=e.keyCode,t();break;case 35:b(V-F),n=null;break;case 36:b(0),n=null}return i=e.keyCode==n&&s!=te||r!=J,!i}}).bind("keypress.jsp",function(e){return e.keyCode==n&&t(),!i}),R.hideFocus?(e.css("outline","none"),"hideFocus"in E[0]&&e.attr("hideFocus",!0)):(e.css("outline",""),"hideFocus"in E[0]&&e.attr("hideFocus",!1))}function Y(){e.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"),L.unbind(".jsp")}function X(){if(location.hash&&location.hash.length>1){var e,t,n=escape(location.hash.substr(1));try{e=$("#"+n+', a[name="'+n+'"]')}catch(i){return}e.length&&L.find(n)&&(0===E.scrollTop()?t=setInterval(function(){E.scrollTop()>0&&(y(e,!0),$(document).scrollTop(E.position().top),clearInterval(t))},50):(y(e,!0),$(document).scrollTop(E.position().top)))}}function z(){$(document.body).data("jspHijack")||($(document.body).data("jspHijack",!0),$(document.body).delegate("a[href*=#]","click",function(e){var t,n,i,o,s,r,a=this.href.substr(0,this.href.indexOf("#")),l=location.href;if(-1!==location.href.indexOf("#")&&(l=location.href.substr(0,location.href.indexOf("#"))),a===l){t=escape(this.href.substr(this.href.indexOf("#")+1));try{n=$("#"+t+', a[name="'+t+'"]')}catch(c){return}n.length&&(i=n.closest(".jspScrollable"),o=i.data("jsp"),o.scrollToElement(n,!0),i[0].scrollIntoView&&(s=$(window).scrollTop(),r=n.offset().top,(s>r||r>s+$(window).height())&&i[0].scrollIntoView()),e.preventDefault())}}))}function W(){var e,t,n,i,o,s=!1;E.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(r){var a=r.originalEvent.touches[0];e=C(),t=T(),n=a.pageX,i=a.pageY,o=!1,s=!0}).bind("touchmove.jsp",function(r){if(s){var a=r.originalEvent.touches[0],l=te,c=J;return we.scrollTo(e+n-a.pageX,t+i-a.pageY),o=o||Math.abs(n-a.pageX)>5||Math.abs(i-a.pageY)>5,l==te&&c==J}}).bind("touchend.jsp",function(e){s=!1}).bind("click.jsp-touchclick",function(e){return o?(o=!1,!1):void 0})}function I(){var t=T(),n=C();e.removeClass("jspScrollable").unbind(".jsp"),L.unbind(".jsp"),e.replaceWith(Ce.append(L.children())),Ce.scrollTop(t),Ce.scrollLeft(n),ge&&clearInterval(ge)}var R,L,O,F,E,N,V,G,q,_,K,U,Z,J,Q,ee,te,ne,ie,oe,se,re,ae,le,ce,ue,de,pe,he,fe,ge,ve,je,me,we=this,be=!0,$e=!0,ke=!1,ye=!1,Ce=e.clone(!1,!1).empty(),Te=$.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";"border-box"===e.css("box-sizing")?(ve=0,je=0):(ve=e.css("paddingTop")+" "+e.css("paddingRight")+" "+e.css("paddingBottom")+" "+e.css("paddingLeft"),je=(parseInt(e.css("paddingLeft"),10)||0)+(parseInt(e.css("paddingRight"),10)||0)),$.extend(we,{reinitialise:function(e){e=$.extend({},R,e),n(e)},scrollToElement:function(e,t,n){y(e,t,n)},scrollTo:function(e,t,n){k(e,n),b(t,n)},scrollToX:function(e,t){k(e,t)},scrollToY:function(e,t){b(e,t)},scrollToPercentX:function(e,t){k(e*(N-O),t)},scrollToPercentY:function(e,t){b(e*(V-F),t)},scrollBy:function(e,t,n){we.scrollByX(e,n),we.scrollByY(t,n)},scrollByX:function(e,t){var n=C()+Math[0>e?"floor":"ceil"](e),i=n/(N-O);v(i*ee,t)},scrollByY:function(e,t){var n=T()+Math[0>e?"floor":"ceil"](e),i=n/(V-F);f(i*Z,t)},positionDragX:function(e,t){v(e,t)},positionDragY:function(e,t){f(e,t)},animate:function(e,t,n,i){var o={};o[t]=n,e.animate(o,{duration:R.animateDuration,easing:R.animateEase,queue:!1,step:i})},getContentPositionX:function(){return C()},getContentPositionY:function(){return T()},getContentWidth:function(){return N},getContentHeight:function(){return V},getPercentScrolledX:function(){return C()/(N-O)},getPercentScrolledY:function(){return T()/(V-F)},getIsScrollableH:function(){return K},getIsScrollableV:function(){return _},getContentPane:function(){return L},scrollToBottom:function(e){f(Z,e)},hijackInternalLinks:$.noop,destroy:function(){I()}}),n(t)}return e=$.extend({},$.fn.jScrollPane.defaults,e),$.each(["arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){e[this]=e[this]||e.speed}),this.each(function(){var n=$(this),i=n.data("jsp");i?i.reinitialise(e):($("script",n).filter('[type="text/javascript"],:not([type])').remove(),i=new t(n,e),n.data("jsp",i))})},$.fn.jScrollPane.defaults={showArrows:!1,maintainPosition:!0,stickToBottom:!1,stickToRight:!1,clickOnTrack:!0,autoReinitialise:!1,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:void 0,animateScroll:!1,animateDuration:300,animateEase:"linear",hijackInternalLinks:!1,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:3,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:!1,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:!0,hideFocus:!1,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:.8};var i,o,s=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],r="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],a=Array.prototype.slice;if($.event.fixHooks)for(var l=s.length;l;)$.event.fixHooks[s[--l]]=$.event.mouseHooks;var c=$.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var t=r.length;t;)this.addEventListener(r[--t],e,!1);else this.onmousewheel=e;$.data(this,"mousewheel-line-height",c.getLineHeight(this)),$.data(this,"mousewheel-page-height",c.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var t=r.length;t;)this.removeEventListener(r[--t],e,!1);else this.onmousewheel=null;$.removeData(this,"mousewheel-line-height"),$.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var t=$(e),n=t["offsetParent"in $.fn?"offsetParent":"parent"]();return n.length||(n=$("body")),parseInt(n.css("fontSize"),10)||parseInt(t.css("fontSize"),10)||16},getPageHeight:function(e){return $(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};$.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})
	var LANG = {
		'zh-CN': {
			'goto': '转到',
			'from': '显示记录从',
			'to': '到',
			'total': '总数',
			'items': '条'
		},
		'en-US': {
			'goto': '',
			'from': ' From ',
			'to': ' To ',
			'total': '  Total',
			'items': ''
		}
	}
	var Lang = LANG[window.localStorage.lang || window.navigator.language];

	$.fn.Datagrid = function(options) {
		var dafaults = {
			width: '',    //表格宽度设置，默认为 auto
			height: 400,  //表格高度设置，默认为300
			url: '',                     //请求的url
			method: 'POST',              //可选项：'POST','GET'
			dataParam: {},    //向后台传参数,如：'a':1,'b':2
			columns: [],  //定义列参数
					/*
					[
						{field:'select', title:'选择', width:150, align:'center', formatter:function(row){
								return '<input type="checkbox" thisId="'+row.id+'" />';
							}
						},
						{field:'name', title:'姓名', width:150, align:'left', dataType: 'string', sortable:true},
						{field:'email', title:'邮箱', width:150, align:'left', dataType: 'string', sortable:true},
						{field:'score', title:'得分', width:200, align:'center', dataType: 'int', sortable:true},
						{field:'date', title:'日期', width:150, align:'center', dataType: 'date', sortable:true},
						{field:'detail', title:'详情', width:50, align:'center', formatter:function(row){
								return '<a href="javascript:;" onclick="alert('+row.id+')"><img src="images/icon_detail.png"/></a>';
							}
						}
					]
					*/

			initCallback: function(self){},      //表格加载完毕执行回调

			ajaxCallback: function(data, self){},  //ajax返回后处理执行回调

			pageRowList: [10,20,30,50,100],  //每页显示的行数
			pageRowSelected: 10,             //默认选中的行数

			sortType: 'ajax',          //设置排序方式，ajax是请求后台排序，local是本页表格内容排序
			sortRule: 'desc',           //升序
			sortOrderBy: '',       //设置根据那一列来排序

			autoWidth: true,           //表格宽度是否根据自动拉伸
			gapWidth: 11,                //表格头部td的左右padding加边框宽度

			showFooter: true,	//显示表格底
			colShow: false,
			colResize: false,

			dgResize: false, 	//允许拉伸表格

			headerColspan: false,
			firstRowspan: false,

			loadingMsg: '',  			//加载提示语
			errorMsg: '服务器错误！',    				//服务器报错提示
			timeout: 300,             				//设置超时时间
			timeoutMsg: '数据量太大，暂时无法查询出来！',  //查询超时提示
			skins:'',/*gray*/

			heightAdjust: true,
			dgHeaderHeight: false,

			hasFirstCol: true,	//是否显示表格序列号
			firstColWidth: 25,
			firstColHeaderName: '',
			firstColData: [],
			staticData: false,
			conDivAuto: false,	//自动行高
			dgAutoHeight: false,	//表格自动高度
			debugAjax: false,
			noDataTip: '暂无数据！'
		};


		var opt = $.extend({}, dafaults, options);
		var _self = $(this);

		var widthArr = [], widthSum = 0, dgWidth = 0, widthArrFixed = [], adjustAble = true;

		var colIndexStatic = null;
		_self.addClass('dg').show();
		_self.html('').removeAttr('inited').removeAttr('widtharrfixed').removeAttr('widthsum').height(opt.height);

		//表格宽高初始化
		_self.width(opt.width);
		!opt.dgAutoHeight && _self.height(opt.height);

		_self.append('<div class="dgLoading"><div class="dgLoadingCon">'+opt.loadingMsg+'</div></div>');

		if(opt.hasFirstCol){
			_self.css('padding-left', opt.firstColWidth);
			_self.append('<div class="dgFirstCol"><table border="0" cellpadding="0" cellspacing="0" class="tableHeader"><tr><td></td></tr></table><div class="tableCon"><table border="0" cellpadding="0" cellspacing="0"></table></div><table border="0" cellpadding="0" cellspacing="0" class="tableFooter"><tr><td></td></tr></table></div>');

			if(opt.headerColspan !== false){
				_self.find('.tableHeader').addClass('tableHeaderColspan');
			}

			if(opt.staticData !== false){
				_self.find('.dgFirstCol .tableCon').addClass('tableConFirst');
			}
			_self.find('.dgFirstCol').width(opt.firstColWidth);
			_self.find('.dgFirstCol td').width(opt.firstColWidth);
			_self.find('.dgFirstCol .tableHeader td').html(opt.firstColHeaderName);
			if(opt.showFooter){
				_self.find('.dgFirstCol .tableFooter').show();
			}
		}

		//初始化
//			if(_self.attr('inited') != 'inited'){

			/*--- 构建表格DOM start ---*/
			var headerTdStr = '', colResizeStr = '', leftStr = 0, colShowStr = '';
			for(var i = 0; i < opt.columns.length; i++){
				var fieldStr = '', dataTypeStr = '', widthStr = '', titleStr = '', alignStr = '', sortableStr = '', widthStaticStr = '', isNull = false;
				$.each(opt.columns[i], function(k,v){
					fieldStr += k == 'field' ? ' field="'+v+'"' : '';
					titleStr += k == 'title' ? v : '';
					alignStr += k == 'align' ? ' text-align:'+v+';' : '';
					sortableStr += k == 'sortable' ? ' sortable' : '';
					dataTypeStr += k == 'dataType' ? ' datatype="'+v+'"' : '';
					if(k == 'width'){
						if(opt.autoWidth){
							widthArr.push(v);
						}else{
							widthStr += ' width:'+v+'px;';
							if(v != 0){
								leftStr += v+opt.gapWidth;
							}
							widthStaticStr = v;
						}
						widthSum += v;
						widthArrFixed.push(v);
					}
					if(v == 0){
						isNull = true;
					}
				});
				var displayNone = isNull ? ' style="display:none;"' : '';
				headerTdStr += '<td'+fieldStr+dataTypeStr+displayNone+'><div class="dgHeaderTdDiv'+sortableStr+'" style="'+widthStr+alignStr+'">'+titleStr+'</div></td>';

				if(opt.colResize){
					if(!isNull){
						colShowStr += '<div'+fieldStr+' class="colShowItem"><input type="checkbox" checked="checked" />'+titleStr+'</div>';
					}
					var resizeDivLeft = '';
					if(!opt.autoWidth){
						resizeDivLeft = 'left:'+(leftStr-3)+'px';
					}
					colResizeStr += '<div'+fieldStr+' style="'+resizeDivLeft+'" widthstatic="'+widthStaticStr+'"></div>';
				}
			};


			var headerColspan = '';
			if(opt.headerColspan !== false){
				for (var i = 0; i < opt.headerColspan.length; i++) {
					var thisHeader = opt.headerColspan[i];
					headerColspan += '<td colspan="'+thisHeader.colspan+'" align="'+thisHeader.align+'">'+thisHeader.title+'</td>';
				};
				headerColspan = '<tr style="border-bottom:1px solid #ddd;">'+headerColspan+'</tr>';
			}

			var headerStr = '<div class="dgHeader"><table border="0" cellpadding="0" cellspacing="0">'+headerColspan+'<tr class="dgHeaderTr">'+headerTdStr+'</tr></table><div class="colResize">'+colResizeStr+'</div>';

			_self.append(headerStr);
			if(opt.dgHeaderHeight){
				_self.find('.dgHeader').height(opt.dgHeaderHeight);
				_self.find('.dgHeader td').height(opt.dgHeaderHeight);
			};

			if(opt.headerColspan !== false){
				_self.find('.dgHeader').addClass('dgHeaderColspan');
			}

			if(opt.colShow){
				_self.find('.dgHeader').append('<div class="colShow">'+colShowStr+'</div></div>');
			}

			//表格头部宽度初始化
			opt.autoWidth && headerWidthSet();

			if(opt.sortType == 'ajax'){
				_self.find('.dgHeader .dgHeaderTr td').each(function(){
					if($(this).attr('field') == opt.sortOrderBy){
						$(this).find('.dgHeaderTdDiv').addClass('sortable'+opt.sortRule);
						$(this).find('.dgHeaderTdDiv').attr('sortrule',opt.sortRule);
					}
				});
			}

			//初始化表格内容
			_self.append('<div class="dgContent"><table class="dgContentTable" border="0" cellpadding="0" cellspacing="0"></table></div>');

			//初始化表格底部
			var _pageRowOpt = '';
			$.each(opt.pageRowList, function(key,val){
				if(val == opt.pageRowSelected){
					_pageRowOpt += '<option value="'+val+'" selected>'+val+'</option>';
				}else{
					_pageRowOpt += '<option value="'+val+'">'+val+'</option>';
				}
			});

			_self.append('<div class="dgFooter">'
			+'<div class="dgPage"><select class="rowNum">'+_pageRowOpt+'</select>&nbsp;&nbsp;'
			+'<span><a href="javascript:;" class="pageFirst pageFirstAble"><<</a></span>'
			+'<span><a href="javascript:;" class="pagePrev pagePrevAble"><</a></span> '
			+'<input type="text" class="pageNow" value="0" /> / <b class="pageTotal"></b> '
			+'<span><a href="javascript:;" class="pageNext pageNextAble">></a></span>'
			+'<span><a href="javascript:;" class="pageLast pageLastAble">>></a></span>&nbsp;&nbsp;'
			+ Lang.goto + ' <input type="text" class="pageGo" value="1" size="3"/> '
			+'<a href="javascript:;" class="pageGoBtn">Go</a>'
			+'</div>'
			+'<div class="dgPageStatus">'+ Lang.from + '<b class="itemStart"></b>'+ Lang.to + '<b class="itemEnd"></b>, '+ Lang.total + ' <b class="total"></b>'+ Lang.items + ''
			+'</div></div>');

			if(opt.showFooter){
				_self.find('.dgFooter').show();
			}
			if(opt.skins){
				_self.addClass(opt.skins);	
			}
			opt.dgResize &&	_self.append('<div class="dgResize dgResizeRight" resize="right"></div><div class="dgResize dgResizeBottom" resize="bottom"></div><div class="dgResize dgResizeRightBottom" resize="rightBottom"></div>');
			/*--- 构建表格DOM end ---*/

			/*--- 相关操作 start ---*/
			//隐藏列
			if(opt.colShow){
				$(document).mousedown(function(e){
					if($(e.target).closest('.dgHeader').is('div')){
						if(e.which == 3){
							$(document).bind('contextmenu.right', function(){
								return false;
							});
							e.stopPropagation();
							var colShowDiv = $(e.target).closest('.dg').find('.colShow');
							var dgHeader = $(e.target).closest('.dgHeader');
							var _left = e.pageX - dgHeader.offset().left;
							var _top = e.pageY - dgHeader.offset().top;

							colShowDiv.css({'left': _left,'top': _top});
							colShowDiv.show();
							return false;
						}
					}else{
						$(e.target).closest('.dg').find('.colShow').hide();
						$(document).unbind('.right');
					}
				});

				_self.find('.colShowItem').click(function(){
					var thisField = $(this).attr('field');
					if($(this).find('input').prop('checked') == false){
						_self.find('td').each(function(){
							if($(this).attr('field') == thisField){
								$(this).hide();
							}
						});
					}else{
						_self.find('td').each(function(){
							if($(this).attr('field') == thisField){
								$(this).show();
							}
						});
					}
					return false;
				});

				_self.find('.dgHeader').off('mouseleave').on('mouseleave',function(){
					_self.find('.colShow').hide();
				});
			}

			// 表格内容滚动使表格头部跟随
			if(opt.staticData){
				_self.find('.dgContent').bind('scroll',function(){
					_self.find('.dgHeader').css('margin-left', -$(this).scrollLeft());
					if(opt.hasFirstCol){
						_self.find('.dgFirstCol .tableCon table').css('top', -$(this).scrollTop());
					}
				});
			}

	        _self.find('.rowNum').change(function(){
				fillContent(1, _self.find('.rowNum').val());
				return false;
			});

	        _self.find('.pageFirstAble').click(function(){
				fillContent(1, _self.find('.rowNum').val());
				return false;
			});

	        _self.find('.pagePrevAble').click(function(){
	        	var pageNow = _self.find('.pageNow').val();
				if(pageNow > 1){
					fillContent(parseInt(pageNow) - 1, _self.find('.rowNum').val());
				}else{
					fillContent(1, _self.find('.rowNum').val());
				}
				return false;
			});

			_self.find('.pageNextAble').click(function(){
				var pageNow = _self.find('.pageNow').val();
				var pageTotal = _self.find('.pageTotal').html();
				if(parseInt(pageNow) < parseInt(pageTotal)){
					fillContent(parseInt(pageNow) + 1, _self.find('.rowNum').val());
				}else{
					fillContent(pageTotal, _self.find('.rowNum').val());
				}
				return false;
			});

			_self.find('.pageLastAble').click(function(){
				fillContent(parseInt(_self.find('.pageTotal').html()), _self.find('.rowNum').val());
				return false;
			});

			_self.find('.pageGoBtn').click(function(){
				var r = /^\+?[1-9][0-9]*$/; //正整数
				var _pageGo = _self.find('.pageGo');
				if(r.test(_pageGo.val()) == false){
					alert('页码输入格式出错！');
					_pageGo.val('1');
					return;
				}
				if(_pageGo.val() > parseInt(_self.find('.pageTotal').html())){
					alert('不能超出最大页码！');
					$(this).val('1');
					return;
				}
				fillContent(parseInt(_pageGo.val()), _self.find('.rowNum').val());
				return false;
			});

			//排序
			_self.find('.sortable').click(function(){
				_self.find('.sortable').removeClass('sortableasc sortabledesc');

				if($(this).attr('sortRule') == 'desc'){
					$(this).removeClass('sortabledesc');
					$(this).addClass('sortableasc');
					$(this).attr('sortRule', 'asc');
					opt.sortRule = 'asc';
				}else{
					$(this).removeClass('sortableasc');
					$(this).addClass('sortabledesc');
					$(this).attr('sortRule', 'desc');
					opt.sortRule = 'desc';
				}
				opt.sortOrderBy = $(this).parent().attr('field');

				if(opt.sortType == 'ajax'){
					fillContent(1, _self.find('.rowNum').val());
				}else{
					var dataType = $(this).parent().attr('datatype');
					var colIndex = _self.find('.dgHeader .dgHeaderTr td').index($(this).parent());
					sortTableLocal(colIndex, opt.sortRule, dataType);
				}
				return false;
			});

			// 本地排序
			function sortTableLocal(colIndex, sortRule, dataType){
				var trArr = [];
				var contentTableTr = _self.find('.dgContentTable tr');
				$.each(contentTableTr,function(){
					trArr.push($(this).html());
				});
				judge(trArr, colIndex, sortRule, dataType);
			};

			// 判断是否是上一次排序的列
			function judge(trArr, colIndex, sortRule, dataType) {
				if(colIndexStatic == colIndex){
					trArr.reverse();
				}else{
					trArr.sort(getSort(colIndex, sortRule, dataType));
				}
				reCreateDom(trArr);
				colIndexStatic = colIndex;//用作后面判断用
			};

			//创建转换过程
			function getSort(colIndex, sortRule, dataType) {
				return function createSort(a,b) {
					var first = $(a).eq(colIndex).text();
					var second = $(b).eq(colIndex).text();
					var value1 = convert(first,dataType);
					var value2 = convert(second,dataType);
					if(value1 < value2) {
						return sortRule == 'desc' ? 1 : -1;
					} else if(value1 > value2) {
						return sortRule == 'desc' ? -1 : 1;
					} else {
						return 0;
					}
				};
				function convert(value,type) {
					switch(type) {
						case 'int': return parseInt(value);break;
						case 'float': return parseFloat(value);break;
						case 'string': return value.toString();break;
						case 'data': return new Date(Date.parse(value));break;
						default: return value.toString();break;
					}
				}
			};

			function reCreateDom(trArr) {
				var dgContentTalbeTbody = _self.find('.dgContentTable tbody');
				dgContentTalbeTbody.html('');
				$.each(trArr,function(index,val){
					dgContentTalbeTbody.append('<tr>'+val+'</tr>');
				});
				//表格点击变色
				dgContentTalbeTbody.find('tr').filter(':odd').addClass('trOdd');
			};

			if(opt.dgResize){
				//表格拉伸
				_self.find('.dgResize').hover(function(){
					$(this).addClass('resizeHover');
				},function(){
					$(this).removeClass('resizeHover');
				});
				_self.find('.dgResize').mousedown(function(e){
					$(this).addClass('resizeHover');
					var _this = $(this);
					var _drag = true;
					var oldWidth = _self.width();
					var oldHeight = _self.height();
					if(_drag){
						var startX = e.pageX;
						var startY = e.pageY;
						window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty(); //禁止拖放对象文本被选择的方法
						$(document).bind('mousemove.dgResize', function(e){
							if (_drag) {
								var endX = e.pageX;
								var endY = e.pageY;
								var diffX = endX - startX;
								var diffY = endY - startY;
								if(_this.attr('resize') == 'right'){
									_self.width(oldWidth + diffX);
									if(opt.autoWidth){
										headerWidthSet();
										contentWidthSet();
									}
								}
								if(_this.attr('resize') == 'bottom'){
									_self.height(oldHeight + diffY);
									_self.find('.dgContent').css('height',parseInt(_self.height()) - dgHeaderHeight - dgFooterHeight);
									if(opt.hasFirstCol){
										_self.find('.dgFirstCol .tableCon').css('height',parseInt(_self.height()) - dgHeaderHeight - dgFooterHeight);
									}
									_self.find('.dgResizeRight').css('height',parseInt(_self.height()));
								}
								if(_this.attr('resize') == 'rightBottom'){
									_self.width(oldWidth + diffX);
									_self.height(oldHeight + diffY);
									_self.find('.dgContent').css('height',parseInt(_self.height()) - dgHeaderHeight - dgFooterHeight);
									if(opt.hasFirstCol){
										_self.find('.dgFirstCol .tableCon').css('height',parseInt(_self.height()) - dgHeaderHeight - dgFooterHeight);
									}
									_self.find('.dgResizeRight').css('height',parseInt(_self.height()));
									if(opt.autoWidth){
										headerWidthSet();
										contentWidthSet();
									}
								}
								//表格第一列的高度与后面的
								firstColTdHeightResize();
							}
						});
						$(document).bind('mouseup.dgResize', function(){
							_drag = false;
							$(document).unbind('.dgResize');
						});
					}
				});
				_self.find('.dgResize').mouseup(function(){
					$(this).removeClass('resizeHover');
				});
			}

			if(opt.colResize){
				//列拉伸
				_self.find('.dgHeader .colResize div').hover(function(){
					$(this).addClass('resizeHover');
				},function(){
					$(this).removeClass('resizeHover');
				});
				_self.find('.dgHeader .colResize div').mousedown(function(e){
					$(this).addClass('resizeHover');
					var thisField = $(this).attr('field');
					var _this = $(this);
					var thisIndex = $(this).index();

					var oldLeft = parseInt(_this.css('left'));
					var colResizeDivWidthArr = [];
					_self.find('.dgHeader .colResize div').each(function(index){
						colResizeDivWidthArr.push(parseInt($(this).css('left')));
					});

					var oldWidth = parseInt(_this.attr('widthstatic'));
					var diffX = 0;

					var _drag1 = true;
					if(_drag1){
						var startX = e.pageX;
						window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty(); //禁止拖放对象文本被选择的方法
						$(document).bind('mousemove.colResize', function(e){
							if (_drag1) {
								var endX = e.pageX;
								diffX = endX - startX;

								if(colResizeDivWidthArr[thisIndex] + diffX < colResizeDivWidthArr[thisIndex-1] + 50){
									return;
								}

								_self.find('.dgHeader .colResize div').each(function(i){
									if(i >= thisIndex){
										$(this).css('left',colResizeDivWidthArr[i] + diffX + 'px');
									}
								});

								_this.attr('widthstatic',oldWidth + diffX);
								widthArr = [];
								_self.find('.colResize div').each(function(index){
									widthArr.push($(this).attr('widthstatic'));
								});

								_self.find('td').each(function(){
									if($(this).attr('field') == thisField){
										var thisDiv = $(this).find('div');
										thisDiv.width(oldWidth + diffX+'px');
									}
								});
								firstColTdHeightResize();
							}
						});
						$(document).bind('mouseup.colResize', function(){
							_drag1 = false;
							$(document).unbind('.colResize');
						});
					}
				});
				_self.find('.dgHeader .colResize div').mouseup(function(){
					$(this).removeClass('resizeHover');
				});

			}

			//初始化成功标记
			//_self.attr('inited','inited');

			//存储相关信息
			_self.attr('widtharrfixed', widthArrFixed);
			_self.attr('widthsum', widthSum);
//			}else{
//				widthArrFixed = _self.attr('widtharrfixed').split(',');
//				widthSum = _self.attr('widthsum');
//				headerWidthSet();
//				contentWidthSet();
//			}

		//浏览器窗体改变时重设头部和内容的宽度
		$(window).unbind('resize.dgResize_'+_self.attr('id')).bind('resize.dgResize_'+_self.attr('id'), function(){
			if(opt.autoWidth){
				// 表格第一列的高度与后面的
				firstColTdHeightResize();
				headerWidthSet();
				contentWidthSet();
			}
		});

		// 点击网页空白处，表格行的click样式去掉
		$('body').off('.dg').on('click.dg', function(){
			_self.find('.dgContentTable tr').removeClass('trClick');
			_self.find('.dgFirstCol .tableCon table tr').removeClass('trClick');
		});

		//初始化内容的高度和右侧拉伸的高度
		if(!opt.dgAutoHeight){
			var dgHeaderHeight = _self.find('.dgHeader').outerHeight();
			var dgFooterHeight = opt.showFooter ? _self.find('.dgFooter').outerHeight() : 0;
			_self.find('.dgContent').css('height', opt.height - dgHeaderHeight - dgFooterHeight);
			if(opt.hasFirstCol){
				_self.find('.dgFirstCol .tableCon').css({'height': opt.height - dgHeaderHeight - dgFooterHeight});
			}
			_self.find('.dgResizeRight').css('height', opt.height);
		}


		//存储头部的信息
		var fieldArr = [], formatterArr = [], alignArr = [];
		$.each(opt.columns, function(key, val){
			var _formatterHas = 0;
			$.each(val, function(k,v){
				if(k == 'field'){
					fieldArr.push(v);
				}
				if(k == 'align'){
					alignArr.push(v);
				}
				if(k == 'formatter'){
					formatterArr.push(v);
					_formatterHas = 1;
				}
			});
			if(_formatterHas == 0){
				formatterArr.push(0);
			}
		});

		//填充表格数据
		if(opt.staticData !== false){
			var _firstCol = _self.find('.dgFirstCol .tableCon table');
			$.each(opt.firstColData, function(i, v){
				_firstCol.append('<tr><td width="'+opt.firstColWidth+'">'+v+'</td></tr>');
			});
			var _conCol = _self.find('.dgContentTable');
			var headerTdDiv = _self.find('.dgHeader .dgHeaderTr td .dgHeaderTdDiv');
			widthArr = [];
			headerTdDiv.each(function(index){
				widthArr.push(parseInt($(this).css('width')));
			});
			$.each(opt.staticData, function(i, v){
				var thisTr = $('<tr></tr>');
				_conCol.append(thisTr);
				$.each(v, function(key, value){
					thisTr.append('<td><div class="dgContentInnerDiv" style="width:'+widthArr[key]+'px; text-align:'+alignArr[key]+';">'+value+'</div></td>');
				})
			});
			dgTrColor();

			if(opt.heightAdjust){
				//矫正表格高度
				adjustAble && adjustHeight();
			}
			//表格加载完毕后的执行
			opt.initCallback(_self);
			return;
		}

        fillContent(1, _self.find('.rowNum').val(), true);

        //表格加载完毕后的执行
        opt.initCallback(_self);

        //矫正表格高度
        function adjustHeight(){
        	var nowHeight = _self.find('.dgHeader').outerHeight() + _self.find('.dgContentTable').outerHeight();
        	var contentTableWidth = _self.find('.dgContentTable').outerWidth(),
        		contentTableHeight = _self.find('.dgContentTable').outerHeight(),
        		contentWidth = _self.find('.dgContent').outerWidth(),
        		contentHeight = _self.find('.dgContent').outerHeight();

        	if(opt.showFooter){
        		nowHeight += _self.find('.dgFooter').outerHeight();
        	}
			if(nowHeight < opt.height){
				if(contentTableWidth > contentWidth){
					_self.height(nowHeight + 13);
					_self.find('.dgContent').height(contentTableHeight + 12);
				}else{
					_self.height(nowHeight);
					_self.find('.dgContent').height(contentTableHeight);
				}
				if(opt.hasFirstCol){
					var dgHeaderHeight = _self.find('.dgHeader').outerHeight();
					var dgFooterHeight = opt.showFooter ? _self.find('.dgFooter').outerHeight() : 0;
					if(opt.hasFirstCol){
						_self.find('.dgFirstCol .tableCon').css({'height': _self.outerHeight() - dgHeaderHeight - dgFooterHeight - 3});
					}
				}
			}
			adjustAble = false;
        };

		//表格头部宽度重设
		function headerWidthSet(){
			dgWidth = _self.width();
			var bai = widthSum/dgWidth;
			widthArrNew = [];
			var resizeLeft = 0;
			$.each(widthArrFixed, function(index, val){
				if(opt.autoWidth){
					var newWidth = Math.floor(val/bai) - opt.gapWidth;
					newWidth = newWidth < val ? val : newWidth;
					resizeLeft += newWidth + opt.gapWidth;
				}else{
					var newWidth = val;
					resizeLeft += parseInt(newWidth) + opt.gapWidth;
				}
				_self.find('.dgHeader .dgHeaderTr td').eq(index).find('.dgHeaderTdDiv').width(newWidth);
				_self.find('.dgHeader .colResize div').eq(index).attr('widthstatic',newWidth);
				_self.find('.dgHeader .colResize div').eq(index).css('left', (resizeLeft - 3));

				widthArrNew.push(newWidth);
			});
			widthArr = widthArrNew;
		}

		//表格内容宽度重设
		function contentWidthSet(){
			widthArr = [];
			var headerTdDiv = _self.find('.dgHeader .dgHeaderTr td .dgHeaderTdDiv');
			headerTdDiv.each(function(index){
				widthArr.push(parseInt($(this).css('width')));
			});

			var dgContentTableTr = _self.find('.dgContentTable tr');
			dgContentTableTr.each(function(index){
				$(this).find('td').each(function(i){
					$(this).find('.dgContentInnerDiv').width(widthArr[i]);
				});
			});
		}

		// 改变表格颜色
		function dgTrColor(){
			var _trFirstCol = _self.find('.dgFirstCol .tableCon tr');
			var _trContent = _self.find('.dgContentTable tr');

			_trFirstCol.filter(':odd').addClass('trOdd');
			_trContent.filter(':odd').addClass('trOdd');


			//表格hover变色
			_trFirstCol.hover(function(){
				$(this).addClass('trHover');
				_trContent.eq(_trFirstCol.index($(this))).addClass('trHover');
			}, function(){
				$(this).removeClass('trHover');
				_trContent.eq(_trFirstCol.index($(this))).removeClass('trHover');
			});

			//表格点击变色
			_trFirstCol.off('click').on('click', function(){
				$(this).addClass('trClick').siblings().removeClass('trClick');
				_trContent.eq(_trFirstCol.index($(this))).addClass('trClick').siblings().removeClass('trClick');
			});


			//表格hover变色
			_trContent.hover(function(){
				$(this).addClass('trHover');
				_trFirstCol.eq(_trContent.index($(this))).addClass('trHover');
			}, function(){
				$(this).removeClass('trHover');
				_trFirstCol.eq(_trContent.index($(this))).removeClass('trHover');
			});

			//表格点击变色
			_trContent.off('click').on('click', function(){
				$(this).addClass('trClick').siblings().removeClass('trClick');
				_trFirstCol.eq(_trContent.index($(this))).addClass('trClick').siblings().removeClass('trClick');
			});
		};

		function firstColTdHeightResize(){
			var dgContentTableTr = _self.find('.dgContentTable tr'),
			firstColTd = _self.find('.dgFirstCol .tableCon tr');
			var n = 0;
			firstColTd.each(function(i, v){
				if($(this).attr('rowspan') && $(this).attr('rowspan') != 1 ){
					n++;
					return true;
				}
				$(this).height(dgContentTableTr.eq(i-n).outerHeight());
			});
		};


		//向表格中添加数据
		function fillContent(page,rowNum,getDataTotal){
			var headerTdDiv = _self.find('.dgHeader .dgHeaderTr td .dgHeaderTdDiv');

			widthArr = [];
			headerTdDiv.each(function(index){
				widthArr.push(parseInt($(this).css('width')));
			});

			_self.find('.dgHeader').css({'margin-left': 0});
			_self.find('.dgFirstCol .tableCon table').css({'top': 0});
			_self.find('.jspDrag').css({'top': 0, 'left': 0});
			_self.find('.jspPane').css({'top': 0, 'left': 0});

			//数据加载中的loading效果
			_self.find('.dgLoading').css({'width': _self.outerWidth(), 'height': _self.outerHeight()}).show();

			//传送页面参数,其中当前页和显示行数是必须的
			var _param = {'page': page, 'rows':rowNum};
			if(opt.dataParam){
				$.extend(_param, opt.dataParam);
			};
			if(opt.sortType == 'ajax' && opt.sortOrderBy != ''){
				$.extend(_param, {'sortRule': opt.sortRule, 'sortOrderBy': opt.sortOrderBy});
			}
			getDataTotal && $.extend(_param, {'getDataTotal': 1});

	        $.ajax({
	            url: opt.url,
	            type: opt.method,
	            data: _param,
	            dataType: 'json',
	            timeout: opt.timeout*1000,
	            success: function(data){
//	            	if(data.code == 0){
//	            		window.location.href = '#error';
//	            		return;
//	            	}else if(data.code == -1){
//	            		window.location.href = 'cb/login';
//	            		return;
//	            	}else if(data.code == -2){
//	            		window.location.href = '#noAuth';
//	            		return;
//	            	}else if(data.code == -3){
//	            		window.location.href = '#errorParam';
//	            		return;
//	            	}
//	            	
//		            data = data.data;
	        		opt.debugAjax && window.console && console.log(data);


	            	//显示表格
	            	var contentStr = '', dgFirstColTableStr = '';
	            	var _rowNum = _self.find('.rowNum').val(), rowspanName, rowspanMap = {};
	            	if(data instanceof Array &&data.length==0){
	            		contentStr+='<div class="noData">'+opt.noDataTip+'</div>';
	            	}else{
					$.each(data.rows, function(key, val){
						if(opt.hasFirstCol){
							if(opt.firstRowspan !== false){
								dgFirstColTableStr += '<tr>';
								rowspanName = val.firstRowspanName;
								if(rowspanMap[rowspanName] == undefined){
									rowspanMap[rowspanName] = 1;
									dgFirstColTableStr += '<td width="80" row="'+rowspanName+'" rowspan="0">'+rowspanName+'</td>';
								}else{
									rowspanMap[rowspanName] = ++rowspanMap[rowspanName];
								}
								dgFirstColTableStr += '<td width='+opt.firstColWidth+'>'+val.firstCol+'</td>';
								dgFirstColTableStr += '</tr>';
							}else{
								dgFirstColTableStr += '<tr><td width='+opt.firstColWidth+'>'+((page-1)*_rowNum + 1 + key)+'</td></tr>';
							}
						}

						contentStr += '<tr>';
						for(var i = 0; i < fieldArr.length; i++){
							var j = 0;
							$.each(val, function(k, v){
								if(k.toLowerCase() == (fieldArr[i]).toLowerCase()){
									var _display = (widthArr[i] == 0) ? ' style="display:none;"' : '';
									var _val = (formatterArr[i] == 0) ? v : formatterArr[i](val);
									contentStr += '<td field="'+fieldArr[i]+'"'+_display+'><div class="dgContentInnerDiv" style="width:'+widthArr[i]+'px; text-align:'+alignArr[i]+';">'+_val+'</div></td>';
									j = 1;
								}
							});
							if(j == 0){
								contentStr += '<td field="'+fieldArr[i]+'"><div class="dgContentInnerDiv" style="width:'+widthArr[i]+'px; text-align:'+alignArr[i]+';">'+formatterArr[i](val)+'</div></td>';
							}
						}
						contentStr += '</tr>';
					});
					}
					_self.find('.dgLoading').hide();
					_self.find('.dgContentTable').html(contentStr);

					if(opt.hasFirstCol){
						_self.find('.dgFirstCol .tableCon table').html(dgFirstColTableStr);
						var firstColTd = _self.find('.dgFirstCol .tableCon td');
						firstColTd.each(function(i,v){
							if($(this).attr('row')){
								$(this).attr('rowspan', rowspanMap[$(this).attr('row')]);
								return;
							}
						});
					};

					if(opt.conDivAuto){
						_self.find('.dgContentTable .dgContentInnerDiv').addClass('auto');
						firstColTdHeightResize();

						var dgHeaderHeight = _self.find('.dgHeader').outerHeight();
						var dgFooterHeight = opt.showFooter ? _self.find('.dgFooter').outerHeight() : 0;
						if(opt.hasFirstCol){
							_self.find('.dgFirstCol .tableCon').css({'height': _self.outerHeight() - dgHeaderHeight - dgFooterHeight - 2});
						}
						_self.find('.dgResizeRight').css('height', _self.outerHeight());
					};

					if(opt.dgAutoHeight){
						var dgHeaderHeight = _self.find('.dgHeader').outerHeight(),
						dgFooterHeight = opt.showFooter ? _self.find('.dgFooter').outerHeight() : 0,
						dgContentHeight = _self.find('.dgContentTable').outerHeight();
						_self.find('.dgContent').height(dgContentHeight);
						_self.height(dgHeaderHeight + dgFooterHeight + dgContentHeight);
						if(opt.hasFirstCol){
							_self.find('.dgFirstCol .tableCon').css({'height': _self.outerHeight() - dgHeaderHeight - dgFooterHeight - 3});
						}
					};
					var dataTotal = getDataTotal ? data.total : _self.find('.total').html();

					_self.find('.pageNow').val(data.page);
					_self.find('.total').html(dataTotal);
					_self.find('.pageTotal').html(Math.ceil(dataTotal/_rowNum));
					_self.find('.itemStart').html((page-1)*_rowNum + 1);
					if(page*_rowNum < dataTotal){
						_self.find('.itemEnd').html(page*_rowNum);
					}else{
						_self.find('.itemEnd').html(dataTotal);
					}

					if(data.page == 1){
						_self.find('.pageFirst').removeClass('pageFirstAble');
						_self.find('.pagePrev').removeClass('pagePrevAble');
					}else{
						_self.find('.pageFirst').addClass('pageFirstAble');
						_self.find('.pagePrev').addClass('pagePrevAble');
					}

					if(data.page == _self.find('.pageTotal').html()){
						_self.find('.pageNext').removeClass('pageNextAble');
						_self.find('.pageLast').removeClass('pageLastAble');
					}else{
						_self.find('.pageNext').addClass('pageNextAble');
						_self.find('.pageLast').addClass('pageLastAble');
					}

					dgTrColor();

					colIndexStatic = null;

					if(opt.heightAdjust){
						adjustAble && adjustHeight();
					}
//						var _scroll = _self.find('.dgContent').scrollLeft();
//
//						if(_scroll > 1){
//							_self.find('.dgContent').scrollLeft(_scroll-1);
//							_self.find('.dgContent').scrollLeft(_scroll);
//						}


					_self.find('.dgContent').bind('jsp-scroll-y',
	    				function(event, scrollPositionY, isAtTop, isAtBottom){
							if(opt.hasFirstCol){
								_self.find('.dgFirstCol .tableCon table').css('top', -parseFloat(scrollPositionY));
							}
	    				}
	    			).bind('jsp-scroll-x',
	    				function(event, scrollPositionX, isAtTop, isAtBottom){
		    				_self.find('.dgHeader').css('margin-left', -parseFloat(scrollPositionX));
	    					$('#FixedTrCon').css('margin-left', -parseFloat(scrollPositionX));
	    				}
	    			).jScrollPane({
		        		animateScroll: true
		        	});

			        var api = _self.find('.dgContent').data('jsp');
					var throttleTimeout;
					function reScroll(){
						var _div = $('.dg .dgContentTable tr.first .dgContentInnerDiv');

						$('#FixedTrCon .dgContentInnerDiv').each(function(k,v){
							$(this).width(_div.eq(k).width());
						});

						setTimeout(function(){
							$('.dgHeader').css('margin-left', 0);
							$('.dgFirstCol .tableCon table').css({'top': 0});
							$('.jspDrag').css({'top': 0, 'left': 0});
							$('.jspPane').css({'top': 0, 'left': 0});

							var vGap = 0, hGapTr = 0, hGap = -11;
							if($('.jspVerticalBar').length > 0){
								vGap = 11
							}
							if($('.jspHorizontalBar').length > 0){
								hGapTr = 11
								hGap = 0
							}

							$('#FixedFirstCol').css('bottom', hGap);

							if($('.jspVerticalBar').length == 0){
								$('#FixedFirstCol').remove();
								$('#FixedTr').remove();
							}
						}, 200);
//								if ($.browser.msie) {
//									if (!throttleTimeout) {
//										throttleTimeout = setTimeout(
//											function(){
//												api.reinitialise();
//												throttleTimeout = null;
//											},
//											50
//										);
//									}
//								} else {
							api.reinitialise();
//								}
					}
					$(window).bind('resize', reScroll);

					//表格加载完毕后的执行
			        opt.ajaxCallback(data, _self);

	            },
	            error: function(xml,error){
	            	if(error == 'timeout'){
	            		alert(opt.timeoutMsg);
	            	}
	            	_self.find('.dgLoading').hide();
	            }
	        });
        }
	};
}(this, jQuery);