$(document).ready(function(){var e={init:function(){this.cacheEl(),this.setUi(),this.setEvents()},cacheEl:function(){this.nav_wrapper=$(".nav-wrapper"),this.sec_0=$(".sec-0"),this.btn_vid_sec0=$("#btn-vid-sec0"),this.iframe_wrapper_sec0=$(".iframe-wrapper-sec0"),this.iframe_wrapper_inner_sec0=$(".iframe-wrapper-inner-sec0"),this.sec0_vid_iframe=$("#sec0-vid-iframe"),this.stricky_nav_header=$(".sticky-nav-header")},setUi:function(){},setEvents:function(){var e=this;e.helper.crytpoConverter.setPriceStatistics(),e.helper.setNflEventCounter(),e.helper.viewOptimizeLgDevices(),e.helper.viewOptimizeMdDevices(),e.helper.viewOptimizeSmDevices(),e.helper.viewOptimizeXmDevices(),$(window).scroll(function(){$("body").scrollTop()}),e.animeLib.init_basic_animation(),e.animeLib.init_timeline_animation(),window.sr=ScrollReveal(),sr.reveal(".nav-header-logo",{duration:2e3,origin:"bottom"}),sr.reveal(".title-nlc-text",{duration:1500,origin:"left",distance:"300px"}),sr.reveal(".article-sec-0-slide",{duration:1500,origin:"bottom",distance:"80px"}),sr.reveal(".sec-0-article",{duration:1500,origin:"top",distance:"200px"}),sr.reveal(".sec-5-btn-group",{duration:1500,origin:"bottom",distance:"200px"}),sr.reveal(".sec-5-sub-header",{duration:1200,origin:"left",distance:"200px"}),sr.reveal(".timeline-title0",{duration:1200,origin:"left",distance:"300px"}),sr.reveal(".timeline-sub-title0",{duration:2e3,origin:"left",distance:"300px"}),sr.reveal(".tl-article-0",{duration:2500,origin:"left",distance:"300px"}),sr.reveal(".timeline-title1",{duration:1200,origin:"rihgt",distance:"300px"}),sr.reveal(".timeline-sub-title1",{duration:2e3,origin:"right",distance:"300px"}),sr.reveal(".tl-article-1",{duration:2500,origin:"right",distance:"300px"}),sr.reveal(".timeline-title2",{duration:1200,origin:"left",distance:"300px"}),sr.reveal(".timeline-sub-title2",{duration:2e3,origin:"left",distance:"300px"}),sr.reveal(".tl-article-2",{duration:2500,origin:"left",distance:"300px"}),sr.reveal(".timeline-title3",{duration:1200,origin:"right",distance:"300px"}),sr.reveal(".timeline-sub-title3",{duration:2e3,origin:"right",distance:"300px"}),sr.reveal(".tl-article-3",{duration:2500,origin:"right",distance:"300px"}),sr.reveal(".timeline-title4",{duration:1200,origin:"left",distance:"300px"}),sr.reveal(".timeline-sub-title4",{duration:2e3,origin:"left",distance:"300px"}),sr.reveal(".tl-article-4",{duration:2500,origin:"left",distance:"300px"}),sr.reveal(".article-dev-info",{duration:2500,origin:"bottom",distance:"300px"}),sr.reveal(".sec-3-wrapper-inner .wallet-info-wrapper",{duration:2500,rotate:{x:0,y:180,z:0}}),sr.reveal(".thumbSpace",{duration:2500,origin:"top",distance:"30px"}),sr.reveal(".sec-1-view-switch-0",{duration:1500,origin:"bottom",distance:"100px"}),sr.reveal(".sec-1-view-switch-1",{duration:1e3,origin:"bottom",distance:"100px"}),sr.reveal(".sec-1-view-switch-2",{duration:1500,origin:"bottom",distance:"100px"}),sr.reveal(".sec-1-view-switch-3",{duration:1e3,origin:"bottom",distance:"100px"}),sr.reveal(".soccer-moment-0",{duration:1400,origin:"bottom",distance:"100px"}),sr.reveal(".cricket-moment-0",{duration:1e3,origin:"top",distance:"100px"}),e.btn_vid_sec0.click(function(){e.iframe_wrapper_sec0.fadeIn("slow")}),e.iframe_wrapper_sec0.click(function(){var i="https://www.youtube.com/embed/-ENVvgx8fI0";e.iframe_wrapper_sec0.fadeOut("slow"),e.sec0_vid_iframe.attr("src","#"),e.sec0_vid_iframe.attr("src",i)}),e.iframe_wrapper_inner_sec0.click(function(e){e.stopPropagation()}),$(".sec-1-nlc-logo").mouseover(function(){$(".sec-1-nlc-logo").removeClass("animated zoomIn").addClass("animated zoomIn")}),$(".btn-yt,.sec-0-btn-0").click(function(){$(".sec-0-vid-container-wrapper").fadeIn(),$(".sec-0-vid-container").fadeIn().removeClass("animated bounceInDown").addClass("animated bounceInDown")}),$(".sec-0-vid-container-wrapper").click(function(e){var i=$(".sec-0-vid-container");e.stopPropagation(),i.removeClass("animated bounceInDown"),$(".sec-0-vid-container-wrapper").hide()}),$(".sec-1-view-switch").click(function(){var i=parseInt(this.getAttribute("data-sw-id")),n=$("#sec-1-view-article"),t="<h6>"+this.textContent+"</h6>",a=this.getAttribute("data-href"),r="<a class='btn btn-link btn-platform-hlink' href='"+a+"'>Take Me There</a>",s=$("#sec-1-view-img-slide"),o="<p>This is the pure NLC2 platform. Here you will be able to compete in Fantasy Games via our flagship No Limit Coin. This platform is 100% run on cryptocurrency and has all the advantages of the blockchain technology. This is how Fantasy Sports is meant to be.</p>",c="assets/images/platforms/cfs.png",p="<p>This is the USD based version to get you easily started. Once you get familiar, you will likely switch to using NLC2 because of the countless benefits it provides. (But hurry, the NLC2 supply has a set limit and will only go up in value as more people join.)</p>",l="assets/images/platforms/nlfs.png",d="<p>This is the free version. You will find it very easy to use and you can enjoy it for free. When you get the hang of it, are ready for the real deal, come on over to the crypto No Limit Fantasy Sports Platform. The no cost platform will operate in markets that have restrictions which includes about 25 US states. We will also evaluate each state with regulation and proceed with licensing in states that merit the process of licensing.</p>",m="assets/images/platforms/ncfs.png",h="<p>This is a peer to peer betting platform with zero rake. 109 Statistical Categories / 25 fantasy sheet configuration. Bring your friends and challenge them directly!</p>",w="assets/images/platforms/nsc.png",f=[s,n];switch(i){case 0:var u=[c,t+o+r];e.animeLib.animePlatForms(f,u);break;case 1:var u=[l,t+p+r];e.animeLib.animePlatForms(f,u);break;case 2:var u=[m,t+d+r];e.animeLib.animePlatForms(f,u);break;case 3:var u=[w,t+h+r];e.animeLib.animePlatForms(f,u)}}),$(".sec-5-btn-sub").click(function(){e.helper.validate_contact_form()}),$(".sw-read,.glass-bulb").click(function(){e.helper.activateBulb()}),$(".nav-link,.btn-action-nav").click(function(i){i.preventDefault(),e.animeLib.smoothNav($(this))}),$(".faq-snippet header").click(function(i){e.animeLib.animeFaqAccordion()})},animeLib:{init_basic_animation:function(){var e={reg:"10758"};anime({targets:e,delay:5e3,reg:"107588",round:1,easing:"linear",loop:!0,update:function(){$(".event-snippet .counter").html(e.reg)}});$(".accordion-header").click(function(){$(this).find(">:first-child").toggleClass("caret-down"),$(this).next().slideToggle()}),$(".news-snippet .content").mouseenter(function(){$(this).children(".news-snippet-hover").fadeIn()}),$(".news-snippet .content").mouseleave(function(){$(this).children(".news-snippet-hover").fadeOut()}),$(".btn-play-popup").magnificPopup({type:"iframe",removalDelay:300,mainClass:"mfp-fade",gallery:{enabled:!1}}),$("#btn-auth-sign-in").click(function(){$(".signup-form-wrapper-outer").slideUp("fast"),$(".login-form-wrapper-outer").slideDown("slow")}),$("#btn-auth-sign-up").click(function(){$(".login-form-wrapper-outer").slideUp("fast"),$(".signup-form-wrapper-outer").slideDown("slow")}),$(".auth-btn,.nav-link-8").click(function(){$(".auth-form-wrapper-outer").slideDown()}),$(".auth-btn-signUp").click(function(){$("#btn-auth-sign-up").click()}),$(".auth-btn-login,.nav-link-8").click(function(){$("#btn-auth-sign-in").click()}),$(".auth-form-wrapper-outer").click(function(e){$(this).slideUp()}),$(".auth-form-wrapper-inner").click(function(e){e.stopPropagation()})},init_timeline_animation:function(){var e=$(".cd-timeline-block");e.each(function(){$(this).offset().top>$(window).scrollTop()+.75*$(window).height()&&$(this).find(".cd-timeline-img, .cd-timeline-content").addClass("is-hidden")}),$(window).scroll(function(){e.each(function(){$(this).offset().top<=$(window).scrollTop()+.75*$(window).height()&&$(this).find(".cd-timeline-img").hasClass("is-hidden")&&$(this).find(".cd-timeline-img, .cd-timeline-content").removeClass("is-hidden").addClass("bounce-in")})})},animePlatForms:function(e,i){e[0].addClass("animated zoomIn"),e[0].attr("src",i[0]),e[0].one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){e[0].removeClass("animated zoomIn")}),e[1].addClass("animated fadeOutRight"),e[1].html(i[1]),e[1].one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){e[1].removeClass("animated fadeOutRight").addClass("animated fadeInRight")})},autoSlideChange:function(e,i,n){var t=0;setInterval(function(){e.attr("src",i[t]),t=t<i.length?t+1:0},n)},smoothNav:function(e){var i=e.attr("href"),n=$(i).offset().top;$("html,body").animate({scrollTop:n},900)},animeFaqAccordion:function(){}},helper:{crytpoConverter:{setPriceStatistics:function(){var e=this;$.ajax({type:"GET",url:"https://api.coinmarketcap.com/v1/ticker/bitcoin/",success:function(i){e.price_btc=i[0].price_usd},complete:function(){$.ajax({type:"GET",url:"https://api.coinmarketcap.com/v1/ticker/ethereum/",success:function(i){e.price_eth=i[0].price_usd},complete:function(){var i=["#price-btc h6","#price-eth h6"];$(i[0]).html(e.price_btc),$(i[1]).html(e.price_eth)}})}})}},validate_contact_form:function(){var e=$(".cf-input-text"),i=$(".cf-input-mail"),n=$(".cf-input-textArea");(0===e.val().length||0===i.val().length||0===n.val().length)&&(0===e.val().length&&($(".cf-input-text").addClass("animated shake"),$(".cf-input-text").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(".cf-input-text").removeClass("animated shake")})),0===i.val().length&&($(".cf-input-mail").addClass("animated shake"),$(".cf-input-mail").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(".cf-input-mail").removeClass("animated shake")})),0===n.val().length&&($(".cf-input-textArea").addClass("animated shake"),$(".cf-input-textArea").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(".cf-input-textArea").removeClass("animated shake")})))},activateBulb:function(){$(".glass-bulb").toggleClass("glass-bulb-activated"),$(".wp-article-content").toggleClass("wp-article-content-activated"),$(".wp-wrapper h3").toggleClass("header-activated"),$(".contact-wire").toggleClass("contact-wire-activated")},viewOptimizeLgDevices:function(){var e=Math.abs((window.innerWidth-1400)/2),i=Math.abs((window.innerWidth-900)/2),n=Math.abs((window.innerWidth-1200)/2),t=Math.abs((window.innerWidth-720)/2),a=Math.abs((window.innerWidth-800)/2),r=$(".nav-logo-wrapper,.hlink-wrapper .navbar,.sec-0-wrapper-inner-0-inner-0,.sec-0-wrapper-inner-1,.sec-1-wrapper-inner0-inner-0,.sec-1-wrapper-inner-0-1-inner,.sec-1-wrapper-inner1-wrapper-inner-0,.sec-1-wrapper-inner3-wrapper-inner-0,.sec-2-wrapper-inner,.sec-3-wrapper-inner,.sec-4-wrapper-inner,.sec-5-wrapper-inner-0-inner-0,.sec-5-wrapper-inner-1-inner-0,.sec-5-wrapper-inner-2-inner-0,.sec-0-wrapper-inner-2-inner-0"),s=$(".hlink-container,.carousel-wrapper,.news-feed-wrapper-inner"),o=$(".sec-0-wrapper-inner-0-inner-0"),c=$(".wpContainer"),p=$(".factBox-inner");window.innerWidth>=1400&&r.css({"margin-left":e+"px"}),window.innerWidth>=1200&&(s.css({"max-width":"900px","margin-left":i+"px"}),o.css({"max-width":"1200px","margin-left":n+"px"}),c.css({"max-width":"720px","margin-left":t+"px"}),p.css({"max-width":"800px","margin-left":a+"px"}),$(".timer-box-wrapper").css({"margin-left":$(".timer-box-wrapper").width()/15+"px"}))},viewOptimizeMdDevices:function(){var e=Math.abs((window.innerWidth-880)/2),i=Math.abs((window.innerWidth-650)/2),n=(Math.abs((window.innerWidth-750)/2),Math.abs((window.innerWidth-900)/2)),t=$(".carousel-wrapper-inner,.news-snippet-wrapper,.wpContainer"),a=$(".wpContainer"),r=($(".article-wrapper-devs"),$(".hlinks-wrapper .navbar")),s=$(".nav"),o=$(".coinmarketcap-currency-widget"),c=$(".factBox-inner");window.innerWidth>=992&&window.innerWidth<1200&&(t.css({width:"880px","margin-left":e+"px"}),a.css({"max-width":"650px","margin-left":i+"px"}),r.css({"max-width":"96%","margin-left":"2%"}),s.css({"padding-left":($(".navbar-collapse-inner").width()-s.width())/2-10+"px","padding-right":($(".navbar-collapse-inner").width()-s.width())/2-10+"px"}),o.css({position:"relative",right:"100px"}),c.css({width:"900px","margin-left":n+"px"}),$(".flip-clock-wrapper").css({zoom:"0.5","-moz-transform":"scale(0.5)"}),$(".timer-box-wrapper").css({"margin-left":$(".timer-box-wrapper").width()/5+"px"}))},viewOptimizeSmDevices:function(){var e=(Math.abs((window.innerWidth-760)/2),Math.abs((window.innerWidth-740)/2),Math.abs((window.innerWidth-750)/2),Math.abs((window.innerWidth-600)/2)),i=$(".nav-logo-wrapper .row,.navbar-inverse,.carousel-wrapper,.sec-0-wrapper-inner-0-inner-0,.news-snippet-wrapper,.sec-3 .article-sec-0,.navbar-collapse-inner"),n=$(".wpContainer,.article-wrapper-devs,.factBox-inner"),t=$(".article-explainer-slides"),a=$(".hlink-placeholder"),r=($(".timeline-inverted .timeline-panel"),$(".nav li a")),s=$(".nav"),o=$(".coinmarketcap-currency-widget"),c=$(".contact-form-container .form-wrapper-outer"),p=$(".team-info-grid .avatar"),l=$(".infographics-wrapper .ig-col h3");window.innerWidth>=768&&window.innerWidth<992&&(i.css({width:"96%","margin-left":"2%"}),n.css({"max-width":"80%","margin-left":"10%"}),t.css({"margin-bottom":"26px"}),a.css({display:"none"}),r.css({"padding-left":"6px","padding-right":"6px"}),s.css({"padding-left":($(".navbar-collapse-inner").width()-s.width())/2-10+"px","padding-right":($(".navbar-collapse-inner").width()-s.width())/2-10+"px"}),o.css({position:"relative",right:"100px"}),c.css({width:"600px","margin-left":e+"px"}),p.css({"max-width":"150px","max-height":"150px"}),$(".timer-box-wrapper").css({"margin-left":$(".timer-box-wrapper").width()/15+"px"}),l.css({"font-size":"14px"}))},viewOptimizeXmDevices:function(){var e=(Math.abs((window.innerWidth-760)/2),$(".nav-logo-wrapper-col-left,.nav-logo-wrapper-col-right,.sec-0-wrapper-inner0-1,.wallet-sub-header,.timeline-image,.sec-4-wrapper-inner .space-bar2")),i=$(".nav-logo-wrapper,.sec-0-wrapper-inner-0-inner-0,.news-snippet-wrapper,.carousel-wrapper,.factBox-inner,.sec-1-wrapper-inner3-wrapper-inner-0,.wpContainer,.contact-form-container,.faq-wrapper"),n=$(".carousel-wrapper,.sec-0,.sec-4,.sec-1-wrapper-inner3"),t=$(".nav-header,.sec-0"),a=($(".sec-0"),$(".sec-0-wrapper-inner0-2")),r=$(".factBox-inner,.sec-1-w-i1-article .row"),s=$(".fs-inner"),o=$(".sec-1-w-i1-article .row"),c=$(".team-core,.team-core .row h4,.team-core .row h6,.team-devs .row h4,.team-devs .row h6,.ig-col-1"),p=$(".article-wrapper-devs"),l=$(".navbar-brand"),d=$(".navbar-toggle"),m=$(".wp-article .controller,.wp-header"),h=$(".wp-article .controller .btn"),w=$(".team-devs"),f=$(".sec-0-wrapper-inner-2"),u=$(".sec-0-wrapper-inner-2 .sub-title"),g=$(".sec-0-wrapper-inner-2 h3"),v=$(".article-faq-wrapper,.infographics-wrapper"),b=$(".infographics-wrapper-inner .row"),x=$(".team-core .avatar,.team-devs .avatar"),k=$(".team-core header h3,.team-devs header h3"),y=$(".team-info-grid .article-team-info .row"),C=$(".nav"),_=$(".nav li a"),z=$(".navbar-collapse");$(".infographics-wrapper h3");window.innerWidth>=360&&window.innerWidth<768&&(e.hide(),i.css({width:"96%","margin-left":"2%",height:"auto"}),n.css({"padding-bottom":"0px"}),t.css({"padding-top":"0px"}),a.css({position:"static",height:"auto"}),r.css({margin:"0px",width:"auto",height:"auto",position:"static"}),s.css({"margin-bottom":"10px","float":"left",width:"100%"}),o.css({"box-shadow":"none"}),c.css({"text-align":"center",border:"none"}),p.css({width:"92%","margin-left":"4%"}),l.css({display:"block"}),d.css({"background-color":"#21211f"}),m.css({"padding-left":"20px","padding-right":"20px"}),h.removeClass("btn-lg").addClass(".btn-md"),w.css({"border-left":"0px"}),$(".flip-clock-wrapper").css({zoom:"0.4","-moz-transform":"scale(0.5)"}),$(".timer-box-wrapper").css({"margin-left":$(".timer-box-wrapper").width()/4.2+"px"}),f.css({padding:"30px 0px"}),u.css({"margin-bottom":"30px"}),g.css({margin:"0px"}),v.css({margin:"0px 10px 20px 10px"}),b.css({"background-color":"transparent",border:"none"}),b.parent().css({"background-color":"#fff"}),b.parent().first().first().first().css({"padding-left":"10px","padding-right":"10px"}),x.css({"float":"none","margin-left":(window.innerWidth-x.width())/2-20+"px"}),k.css({"border-bottom":"1px solid #dfdfdf","padding-bottom":"10px"}),y.css({"margin-bottom":"25px"}),C.css({width:"100%",margin:"0px"}),_.css({"font-size":"22px","font-weight":"bold"}),_.click(function(){}),z.css({"border-top":"2px solid rgb(33,33,31)"}))},setNflEventCounter:function(){$(".cd-timer-container").FlipClock(new Date(2017, 7, 11, 0, 0, 0),{clockFace:"DailyCounter",countdown:!0,showSeconds:!1});$(".cd-timer-container1").FlipClock(new Date(2017, 8, 7, 0, 0, 0),{clockFace:"DailyCounter",countdown:!0,showSeconds:!1})}}};e.init()});