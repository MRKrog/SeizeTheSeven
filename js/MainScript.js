/* Main Custom Plugin Scripts */
jQuery(document).ready(function ($) {

    stellerParallax();

    //scrollParallax();
    //Script to help with the parallax scrolling by controling the mouse

    territoryCarousel();

    ambassadorCarousel();
    
    scrollNavigation();

    navigationResponsive();

    detectScreen();

    youtubeClick();

    modalFades();

    imageAnimations();

    niceScroller();
});



function scrollParallax() {
    if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
    window.onmousewheel = document.onmousewheel = wheel;

    function wheel(event) {
        var delta = 0;
        if (event.wheelDelta) delta = event.wheelDelta / 120;
        else if (event.detail) delta = -event.detail / 3;

        handle(delta);
        if (event.preventDefault) event.preventDefault();
        event.returnValue = false;
    }

    function handle(delta) {
        var time = 1000; // delay time
        var distance = 500; // delta point 
        // Dom where it will apply 
        $('html, body').stop().animate({
            scrollTop: $(window).scrollTop() - (distance * delta)
        }, time);
    }
}

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function () {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

jQuery.fn.extend({
    live: function (event, callback) {
        if (this.selector) {
            jQuery(document).on(event, this.selector, callback);
        }
    }
});

$(function () {
    $('#menu').slicknav({
        duration: 500,
    });
});

function niceScroller() {
    $('html, body').niceScroll({
        scrollspeed: 90,
        mousescrollstep: 50,
        touchbehavior: true,
        disableoutline: true,
        bouncescroll: true,
        cursordragspeed: .04,
        smoothscroll: true,
        zindex: 99999,
        cursorborderradius: "3px",
        cursorcolor: "#231f20",
        cursoropacitymax: .5,
        cursorborder: "0px solid #fff",
        cursorwidth: "5px"
    });
}
//Scrolling Affect 

function stellerParallax() {
    if (detectScreen() < 800) {
        $.stellar({
            horizontalScrolling: false,
            verticalOffset: -100
        });
    } else {
        $.stellar({
            horizontalScrolling: false,
            verticalOffset: -350
        });
    }
}
//Parallax Effect

function territoryLogos(index) {

    event.preventDefault();

    var carousel = $('#territory-carousel').carousel()

    $("a.terrClick").removeClass("activeTerr");

    switch (index) {
        case 0:
            terr = 0;
            openModal = "#winterPark"
            terrID = "wp"
            break;
        case 1:
            terr = 1;
            openModal = "#vasquezRidge"
            terrID = "vr"
            break;
        case 2:
            terr = 2;
            openModal = "#parsennBowl"
            terrID = "pb"
            break;
        case 3:
            terr = 3;
            openModal = "#terrainPark"
            terrID = "tp"
            break;
        case 4:
            terr = 4;
            openModal = "#maryJane"
            terrID = "mj"
            break;
        case 5:
            terr = 5;
            openModal = "#eagleWind"
            terrID = "ew"
            break;
        case 6:
            terr = 6;
            openModal = "#theCirque"
            terrID = "tc"
            break;
        case 7:
            terr = 0;
            openModal = "#theValley"
            terrID = "wp"
            break;
        default:
            terr = index
    }

    if ($('.modal').is(':visible')) {

        //close open modal
        $('.modal.fade.in').modal("hide");
        //open clicked modal
        $(openModal).modal("show");
    }

    carousel.select(terr, 0.6);

    var territory = document.getElementById(terrID);

    $(territory).addClass("activeTerr");
    $('.activeTerr').animateCss('swing');

}
//MAIN TERRITORY SWITCH SCRIPT

function imageAnimations() {
    $('.mainPromotions').animateCss('pulse');
}
//Animations

function territoryCarousel() {

    if (detectScreen() < 666) {
        //Small Carousel
        var carousel = $('#territory-carousel').carousel({
            itemWidth: 279,
            itemHeight: 337,
            distance: 250,
            startIndex: "4",
            selectedItemDistance: 0,
            selectedItemZoomFactor: 1,
            unselectedItemZoomFactor: .79,
            unselectedItemAlpha: .45,
            motionStartDistance: 100,
            slideSpeed: 0.6,
            selectByClick: !1
        });

    } else {
        //Large Carousel
        var carousel = $('#territory-carousel').carousel({
            itemWidth: 600,
            itemHeight: 455,
            distance: -425,
            startIndex: "4",
            selectedItemDistance: 100,
            selectedItemZoomFactor: 1,
            unselectedItemZoomFactor: .79,
            unselectedItemAlpha: .65,
            motionStartDistance: 300,
            slideSpeed: 0.4,
            selectByClick: !1
        });
    }

    //Arrows change the Icons Together
    carousel.on('itemSelected.sc', function (evt) {
        var index = evt.item.index();
        
        reply_click(index);
    });

    function reply_click(index) {

        $("a.terrClick").removeClass("activeTerr");

        switch (index) {
            case 0:
                terr = 0;
                terrID = "wp"
                break;
            case 1:
                terr = 1;
                terrID = "vr"
                break;
            case 2:
                terr = 2;
                terrID = "pb"
                break;
            case 3:
                terr = 3;
                terrID = "tp"
                break;
            case 4:
                terr = 4;
                terrID = "mj"
                break;
            case 5:
                terr = 5;
                terrID = "ew"
                break;
            case 6:
                terr = 6;
                terrID = "tc"
                break;
            default:
                terr = index
        }


        var territory = document.getElementById(terrID);
        $(territory).addClass("activeTerr");

        $('.activeTerr').animateCss('swing');
    }
  
}
//Territory Carousel

function ambassadorCarousel() {

    if (detectScreen() < 700) {
        //Small Carousel
        $('#ambassador-carousel').carousel({
            itemWidth: 381,
            itemHeight: 440,
            distance: 220,
            startIndex: "4",
            selectedItemDistance: 50,
            selectedItemZoomFactor: 1,
            unselectedItemZoomFactor: .8,
            unselectedItemAlpha: .35,
            motionStartDistance: 250,
            slideSpeed: 0.6,
            selectByClick: !1
        });

    } else {
        //Large Ambassadors Carousel
        $('#ambassador-carousel').carousel({
            itemWidth: 381,
            itemHeight: 440,
            distance: -190,
            startIndex: "auto",
            selectedItemDistance: 50,
            selectedItemZoomFactor: 1,
            unselectedItemZoomFactor: .7,
            unselectedItemAlpha: .35,
            motionStartDistance: 150,
            slideSpeed: 0.6,
            selectByClick: !1
        });
    }
}
//Ambassador Carousel

function scrollNavigation() {

    if (detectScreen() < 767) {

        //alert("Less Than 767");

        $("a.clickBtn[href^='#']").on('click', function (e) {

            // prevent default anchor click behavior
            e.preventDefault();

            // animate
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 1000, function () {

                // when done, add hash to url
                // (default click behaviour)

            });

        });

    } else {
        //alert("Greater Than 767");

        $("a.clickBtn[href^='#']").on('click', function (e) {

            // prevent default anchor click behavior
            e.preventDefault();

            // animate
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 85
            }, 1000, function () {

                // when done, add hash to url
                // (default click behaviour)

            });

        });

    }

}
//Scroll To

function modalFades() {

    $(".modal").on('show.bs.modal', function () {
        $('body').css('overflow', 'hidden');
    });

    $(".modal").on('hide.bs.modal', function () {

    });

}
//Modal Fades On Body Effect

function detectScreen() {

    var screenWidth = $(window).width();
    
    return screenWidth;

}
//Detect Screen Size

function navigationResponsive() {

    /*!
     * SlickNav Responsive Mobile Menu v1.0.8
     * (c) 2016 Josh Cope
     * licensed under MIT
     */
    !function (e, t, n) { function a(t, n) { this.element = t, this.settings = e.extend({}, i, n), this.settings.duplicate || n.hasOwnProperty("removeIds") || (this.settings.removeIds = !1), this._defaults = i, this._name = s, this.init() } var i = { label: "MENU", duplicate: !0, duration: 200, easingOpen: "swing", easingClose: "swing", closedSymbol: "&#9658;", openedSymbol: "&#9660;", prependTo: "body", appendTo: "", parentTag: "a", closeOnClick: !0, allowParentLinks: !1, nestedParentLinks: !0, showChildren: !1, removeIds: !0, removeClasses: !1, removeStyles: !1, brand: "", animations: "jquery", init: function () { }, beforeOpen: function () { }, beforeClose: function () { }, afterOpen: function () { }, afterClose: function () { } }, s = "slicknav", o = "slicknav"; Keyboard = { DOWN: 40, ENTER: 13, ESCAPE: 27, LEFT: 37, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 }, a.prototype.init = function () { var n, a, i = this, s = e(this.element), r = this.settings; if (r.duplicate ? i.mobileNav = s.clone() : i.mobileNav = s, r.removeIds && (i.mobileNav.removeAttr("id"), i.mobileNav.find("*").each(function (t, n) { e(n).removeAttr("id") })), r.removeClasses && (i.mobileNav.removeAttr("class"), i.mobileNav.find("*").each(function (t, n) { e(n).removeAttr("class") })), r.removeStyles && (i.mobileNav.removeAttr("style"), i.mobileNav.find("*").each(function (t, n) { e(n).removeAttr("style") })), n = o + "_icon", "" === r.label && (n += " " + o + "_no-text"), "a" == r.parentTag && (r.parentTag = 'a href="#"'), i.mobileNav.attr("class", o + "_nav"), a = e('<div class="' + o + '_menu"></div>'), "" !== r.brand) { var l = e('<div class="' + o + '_brand">' + r.brand + "</div>"); e(a).append(l) } i.btn = e(["<" + r.parentTag + ' aria-haspopup="true" role="button" tabindex="0" class="' + o + "_btn " + o + '_collapsed">', '<span class="' + o + '_menutxt">' + r.label + "</span>", '<span class="' + n + '">', '<span class="' + o + '_icon-bar"></span>', '<span class="' + o + '_icon-bar"></span>', '<span class="' + o + '_icon-bar"></span>', "</span>", "</" + r.parentTag + ">"].join("")), e(a).append(i.btn), "" !== r.appendTo ? e(r.appendTo).append(a) : e(r.prependTo).prepend(a), a.append(i.mobileNav); var c = i.mobileNav.find("li"); e(c).each(function () { var t = e(this), n = {}; if (n.children = t.children("ul").attr("role", "menu"), t.data("menu", n), n.children.length > 0) { var a = t.contents(), s = !1, l = []; e(a).each(function () { return e(this).is("ul") ? !1 : (l.push(this), void (e(this).is("a") && (s = !0))) }); var c = e("<" + r.parentTag + ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' + o + '_item"/>'); if (r.allowParentLinks && !r.nestedParentLinks && s) e(l).wrapAll('<span class="' + o + "_parent-link " + o + '_row"/>').parent(); else { var d = e(l).wrapAll(c).parent(); d.addClass(o + "_row") } r.showChildren ? t.addClass(o + "_open") : t.addClass(o + "_collapsed"), t.addClass(o + "_parent"); var p = e('<span class="' + o + '_arrow">' + (r.showChildren ? r.openedSymbol : r.closedSymbol) + "</span>"); r.allowParentLinks && !r.nestedParentLinks && s && (p = p.wrap(c).parent()), e(l).last().after(p) } else 0 === t.children().length && t.addClass(o + "_txtnode"); t.children("a").attr("role", "menuitem").click(function (t) { r.closeOnClick && !e(t.target).parent().closest("li").hasClass(o + "_parent") && e(i.btn).click() }), r.closeOnClick && r.allowParentLinks && (t.children("a").children("a").click(function (t) { e(i.btn).click() }), t.find("." + o + "_parent-link a:not(." + o + "_item)").click(function (t) { e(i.btn).click() })) }), e(c).each(function () { var t = e(this).data("menu"); r.showChildren || i._visibilityToggle(t.children, null, !1, null, !0) }), i._visibilityToggle(i.mobileNav, null, !1, "init", !0), i.mobileNav.attr("role", "menu"), e(t).mousedown(function () { i._outlines(!1) }), e(t).keyup(function () { i._outlines(!0) }), e(i.btn).click(function (e) { e.preventDefault(), i._menuToggle() }), i.mobileNav.on("click", "." + o + "_item", function (t) { t.preventDefault(), i._itemClick(e(this)) }), e(i.btn).keydown(function (t) { var n = t || event; switch (n.keyCode) { case Keyboard.ENTER: case Keyboard.SPACE: case Keyboard.DOWN: t.preventDefault(), n.keyCode === Keyboard.DOWN && e(i.btn).hasClass(o + "_open") || i._menuToggle(), e(i.btn).next().find('[role="menuitem"]').first().focus() } }), i.mobileNav.on("keydown", "." + o + "_item", function (t) { var n = t || event; switch (n.keyCode) { case Keyboard.ENTER: t.preventDefault(), i._itemClick(e(t.target)); break; case Keyboard.RIGHT: t.preventDefault(), e(t.target).parent().hasClass(o + "_collapsed") && i._itemClick(e(t.target)), e(t.target).next().find('[role="menuitem"]').first().focus() } }), i.mobileNav.on("keydown", '[role="menuitem"]', function (t) { var n = t || event; switch (n.keyCode) { case Keyboard.DOWN: t.preventDefault(); var a = e(t.target).parent().parent().children().children('[role="menuitem"]:visible'), s = a.index(t.target), r = s + 1; a.length <= r && (r = 0); var l = a.eq(r); l.focus(); break; case Keyboard.UP: t.preventDefault(); var a = e(t.target).parent().parent().children().children('[role="menuitem"]:visible'), s = a.index(t.target), l = a.eq(s - 1); l.focus(); break; case Keyboard.LEFT: if (t.preventDefault(), e(t.target).parent().parent().parent().hasClass(o + "_open")) { var c = e(t.target).parent().parent().prev(); c.focus(), i._itemClick(c) } else e(t.target).parent().parent().hasClass(o + "_nav") && (i._menuToggle(), e(i.btn).focus()); break; case Keyboard.ESCAPE: t.preventDefault(), i._menuToggle(), e(i.btn).focus() } }), r.allowParentLinks && r.nestedParentLinks && e("." + o + "_item a").click(function (e) { e.stopImmediatePropagation() }) }, a.prototype._menuToggle = function (e) { var t = this, n = t.btn, a = t.mobileNav; n.hasClass(o + "_collapsed") ? (n.removeClass(o + "_collapsed"), n.addClass(o + "_open")) : (n.removeClass(o + "_open"), n.addClass(o + "_collapsed")), n.addClass(o + "_animating"), t._visibilityToggle(a, n.parent(), !0, n) }, a.prototype._itemClick = function (e) { var t = this, n = t.settings, a = e.data("menu"); a || (a = {}, a.arrow = e.children("." + o + "_arrow"), a.ul = e.next("ul"), a.parent = e.parent(), a.parent.hasClass(o + "_parent-link") && (a.parent = e.parent().parent(), a.ul = e.parent().next("ul")), e.data("menu", a)), a.parent.hasClass(o + "_collapsed") ? (a.arrow.html(n.openedSymbol), a.parent.removeClass(o + "_collapsed"), a.parent.addClass(o + "_open"), a.parent.addClass(o + "_animating"), t._visibilityToggle(a.ul, a.parent, !0, e)) : (a.arrow.html(n.closedSymbol), a.parent.addClass(o + "_collapsed"), a.parent.removeClass(o + "_open"), a.parent.addClass(o + "_animating"), t._visibilityToggle(a.ul, a.parent, !0, e)) }, a.prototype._visibilityToggle = function (t, n, a, i, s) { function r(t, n) { e(t).removeClass(o + "_animating"), e(n).removeClass(o + "_animating"), s || d.afterOpen(t) } function l(n, a) { t.attr("aria-hidden", "true"), p.attr("tabindex", "-1"), c._setVisAttr(t, !0), t.hide(), e(n).removeClass(o + "_animating"), e(a).removeClass(o + "_animating"), s ? "init" == n && d.init() : d.afterClose(n) } var c = this, d = c.settings, p = c._getActionItems(t), u = 0; a && (u = d.duration), t.hasClass(o + "_hidden") ? (t.removeClass(o + "_hidden"), s || d.beforeOpen(i), "jquery" === d.animations ? t.stop(!0, !0).slideDown(u, d.easingOpen, function () { r(i, n) }) : "velocity" === d.animations && t.velocity("finish").velocity("slideDown", { duration: d.duration, easing: d.easingOpen, complete: function () { r(i, n) } }), t.attr("aria-hidden", "false"), p.attr("tabindex", "0"), c._setVisAttr(t, !1)) : (t.addClass(o + "_hidden"), s || d.beforeClose(i), "jquery" === d.animations ? t.stop(!0, !0).slideUp(u, this.settings.easingClose, function () { l(i, n) }) : "velocity" === d.animations && t.velocity("finish").velocity("slideUp", { duration: d.duration, easing: d.easingClose, complete: function () { l(i, n) } })) }, a.prototype._setVisAttr = function (t, n) { var a = this, i = t.children("li").children("ul").not("." + o + "_hidden"); n ? i.each(function () { var t = e(this); t.attr("aria-hidden", "true"); var i = a._getActionItems(t); i.attr("tabindex", "-1"), a._setVisAttr(t, n) }) : i.each(function () { var t = e(this); t.attr("aria-hidden", "false"); var i = a._getActionItems(t); i.attr("tabindex", "0"), a._setVisAttr(t, n) }) }, a.prototype._getActionItems = function (e) { var t = e.data("menu"); if (!t) { t = {}; var n = e.children("li"), a = n.find("a"); t.links = a.add(n.find("." + o + "_item")), e.data("menu", t) } return t.links }, a.prototype._outlines = function (t) { t ? e("." + o + "_item, ." + o + "_btn").css("outline", "") : e("." + o + "_item, ." + o + "_btn").css("outline", "none") }, a.prototype.toggle = function () { var e = this; e._menuToggle() }, a.prototype.open = function () { var e = this; e.btn.hasClass(o + "_collapsed") && e._menuToggle() }, a.prototype.close = function () { var e = this; e.btn.hasClass(o + "_open") && e._menuToggle() }, e.fn[s] = function (t) { var n = arguments; if (void 0 === t || "object" == typeof t) return this.each(function () { e.data(this, "plugin_" + s) || e.data(this, "plugin_" + s, new a(this, t)) }); if ("string" == typeof t && "_" !== t[0] && "init" !== t) { var i; return this.each(function () { var o = e.data(this, "plugin_" + s); o instanceof a && "function" == typeof o[t] && (i = o[t].apply(o, Array.prototype.slice.call(n, 1))) }), void 0 !== i ? i : this } } }(jQuery, document, window);
}
//Mobile Responsive Menu

function youtubeClick() {

    jQuery("a#playWP").YouTubePopUp({
    });

    jQuery("a#playVR").YouTubePopUp({
    });

    jQuery("a#playPB").YouTubePopUp({
    });

    jQuery("a#playTP").YouTubePopUp({
    });

    jQuery("a#playMJ").YouTubePopUp({
    });

    jQuery("a#playEW").YouTubePopUp({
    });

    jQuery("a#playTC").YouTubePopUp({
    });

    jQuery("a#playSTSeven").YouTubePopUp({
    });
}
//Play Territory Modal Videos


//***********SOURCE CODE JS FILES *************
//*******************************

(function ($, window, document, undefined) {

    var pluginName = 'stellar',
		defaults = {
		    scrollProperty: 'scroll',
		    positionProperty: 'position',
		    horizontalScrolling: true,
		    verticalScrolling: true,
		    horizontalOffset: 0,
		    verticalOffset: 0,
		    responsive: false,
		    parallaxBackgrounds: true,
		    parallaxElements: true,
		    hideDistantElements: true,
		    hideElement: function ($elem) { $elem.hide(); },
		    showElement: function ($elem) { $elem.show(); }
		},

		scrollProperty = {
		    scroll: {
		        getLeft: function ($elem) { return $elem.scrollLeft(); },
		        setLeft: function ($elem, val) { $elem.scrollLeft(val); },

		        getTop: function ($elem) { return $elem.scrollTop(); },
		        setTop: function ($elem, val) { $elem.scrollTop(val); }
		    },
		    position: {
		        getLeft: function ($elem) { return parseInt($elem.css('left'), 10) * -1; },
		        getTop: function ($elem) { return parseInt($elem.css('top'), 10) * -1; }
		    },
		    margin: {
		        getLeft: function ($elem) { return parseInt($elem.css('margin-left'), 10) * -1; },
		        getTop: function ($elem) { return parseInt($elem.css('margin-top'), 10) * -1; }
		    },
		    transform: {
		        getLeft: function ($elem) {
		            var computedTransform = getComputedStyle($elem[0])[prefixedTransform];
		            return (computedTransform !== 'none' ? parseInt(computedTransform.match(/(-?[0-9]+)/g)[4], 10) * -1 : 0);
		        },
		        getTop: function ($elem) {
		            var computedTransform = getComputedStyle($elem[0])[prefixedTransform];
		            return (computedTransform !== 'none' ? parseInt(computedTransform.match(/(-?[0-9]+)/g)[5], 10) * -1 : 0);
		        }
		    }
		},

		positionProperty = {
		    position: {
		        setLeft: function ($elem, left) { $elem.css('left', left); },
		        setTop: function ($elem, top) { $elem.css('top', top); }
		    },
		    transform: {
		        setPosition: function ($elem, left, startingLeft, top, startingTop) {
		            $elem[0].style[prefixedTransform] = 'translate3d(' + (left - startingLeft) + 'px, ' + (top - startingTop) + 'px, 0)';
		        }
		    }
		},

		// Returns a function which adds a vendor prefix to any CSS property name
		vendorPrefix = (function () {
		    var prefixes = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
				style = $('script')[0].style,
				prefix = '',
				prop;

		    for (prop in style) {
		        if (prefixes.test(prop)) {
		            prefix = prop.match(prefixes)[0];
		            break;
		        }
		    }

		    if ('WebkitOpacity' in style) { prefix = 'Webkit'; }
		    if ('KhtmlOpacity' in style) { prefix = 'Khtml'; }

		    return function (property) {
		        return prefix + (prefix.length > 0 ? property.charAt(0).toUpperCase() + property.slice(1) : property);
		    };
		}()),

		prefixedTransform = vendorPrefix('transform'),

		supportsBackgroundPositionXY = $('<div />', { style: 'background:#fff' }).css('background-position-x') !== undefined,

		setBackgroundPosition = (supportsBackgroundPositionXY ?
			function ($elem, x, y) {
			    $elem.css({
			        'background-position-x': x,
			        'background-position-y': y
			    });
			} :
			function ($elem, x, y) {
			    $elem.css('background-position', x + ' ' + y);
			}
		),

		getBackgroundPosition = (supportsBackgroundPositionXY ?
			function ($elem) {
			    return [
					$elem.css('background-position-x'),
					$elem.css('background-position-y')
			    ];
			} :
			function ($elem) {
			    return $elem.css('background-position').split(' ');
			}
		),

		requestAnimFrame = (
			window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function (callback) {
			    setTimeout(callback, 1000 / 60);
			}
		);

    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {
        init: function () {
            this.options.name = pluginName + '_' + Math.floor(Math.random() * 1e9);

            this._defineElements();
            this._defineGetters();
            this._defineSetters();
            this._handleWindowLoadAndResize();
            this._detectViewport();

            this.refresh({ firstLoad: true });

            if (this.options.scrollProperty === 'scroll') {
                this._handleScrollEvent();
            } else {
                this._startAnimationLoop();
            }
        },
        _defineElements: function () {
            if (this.element === document.body) this.element = window;
            this.$scrollElement = $(this.element);
            this.$element = (this.element === window ? $('body') : this.$scrollElement);
            this.$viewportElement = (this.options.viewportElement !== undefined ? $(this.options.viewportElement) : (this.$scrollElement[0] === window || this.options.scrollProperty === 'scroll' ? this.$scrollElement : this.$scrollElement.parent()));
        },
        _defineGetters: function () {
            var self = this,
				scrollPropertyAdapter = scrollProperty[self.options.scrollProperty];

            this._getScrollLeft = function () {
                return scrollPropertyAdapter.getLeft(self.$scrollElement);
            };

            this._getScrollTop = function () {
                return scrollPropertyAdapter.getTop(self.$scrollElement);
            };
        },
        _defineSetters: function () {
            var self = this,
				scrollPropertyAdapter = scrollProperty[self.options.scrollProperty],
				positionPropertyAdapter = positionProperty[self.options.positionProperty],
				setScrollLeft = scrollPropertyAdapter.setLeft,
				setScrollTop = scrollPropertyAdapter.setTop;

            this._setScrollLeft = (typeof setScrollLeft === 'function' ? function (val) {
                setScrollLeft(self.$scrollElement, val);
            } : $.noop);

            this._setScrollTop = (typeof setScrollTop === 'function' ? function (val) {
                setScrollTop(self.$scrollElement, val);
            } : $.noop);

            this._setPosition = positionPropertyAdapter.setPosition ||
				function ($elem, left, startingLeft, top, startingTop) {
				    if (self.options.horizontalScrolling) {
				        positionPropertyAdapter.setLeft($elem, left, startingLeft);
				    }

				    if (self.options.verticalScrolling) {
				        positionPropertyAdapter.setTop($elem, top, startingTop);
				    }
				};
        },
        _handleWindowLoadAndResize: function () {
            var self = this,
				$window = $(window);

            if (self.options.responsive) {
                $window.bind('load.' + this.name, function () {
                    self.refresh();
                });
            }

            $window.bind('resize.' + this.name, function () {
                self._detectViewport();

                if (self.options.responsive) {
                    self.refresh();
                }
            });
        },
        refresh: function (options) {
            var self = this,
				oldLeft = self._getScrollLeft(),
				oldTop = self._getScrollTop();

            if (!options || !options.firstLoad) {
                this._reset();
            }

            this._setScrollLeft(0);
            this._setScrollTop(0);

            this._setOffsets();
            this._findParticles();
            this._findBackgrounds();

            // Fix for WebKit background rendering bug
            if (options && options.firstLoad && /WebKit/.test(navigator.userAgent)) {
                $(window).load(function () {
                    var oldLeft = self._getScrollLeft(),
						oldTop = self._getScrollTop();

                    self._setScrollLeft(oldLeft + 1);
                    self._setScrollTop(oldTop + 1);

                    self._setScrollLeft(oldLeft);
                    self._setScrollTop(oldTop);
                });
            }

            this._setScrollLeft(oldLeft);
            this._setScrollTop(oldTop);
        },
        _detectViewport: function () {
            var viewportOffsets = this.$viewportElement.offset(),
				hasOffsets = viewportOffsets !== null && viewportOffsets !== undefined;

            this.viewportWidth = this.$viewportElement.width();
            this.viewportHeight = this.$viewportElement.height();

            this.viewportOffsetTop = (hasOffsets ? viewportOffsets.top : 0);
            this.viewportOffsetLeft = (hasOffsets ? viewportOffsets.left : 0);
        },
        _findParticles: function () {
            var self = this,
				scrollLeft = this._getScrollLeft(),
				scrollTop = this._getScrollTop();

            if (this.particles !== undefined) {
                for (var i = this.particles.length - 1; i >= 0; i--) {
                    this.particles[i].$element.data('stellar-elementIsActive', undefined);
                }
            }

            this.particles = [];

            if (!this.options.parallaxElements) return;

            this.$element.find('[data-stellar-ratio]').each(function (i) {
                var $this = $(this),
					horizontalOffset,
					verticalOffset,
					positionLeft,
					positionTop,
					marginLeft,
					marginTop,
					$offsetParent,
					offsetLeft,
					offsetTop,
					parentOffsetLeft = 0,
					parentOffsetTop = 0,
					tempParentOffsetLeft = 0,
					tempParentOffsetTop = 0;

                // Ensure this element isn't already part of another scrolling element
                if (!$this.data('stellar-elementIsActive')) {
                    $this.data('stellar-elementIsActive', this);
                } else if ($this.data('stellar-elementIsActive') !== this) {
                    return;
                }

                self.options.showElement($this);

                // Save/restore the original top and left CSS values in case we refresh the particles or destroy the instance
                if (!$this.data('stellar-startingLeft')) {
                    $this.data('stellar-startingLeft', $this.css('left'));
                    $this.data('stellar-startingTop', $this.css('top'));
                } else {
                    $this.css('left', $this.data('stellar-startingLeft'));
                    $this.css('top', $this.data('stellar-startingTop'));
                }

                positionLeft = $this.position().left;
                positionTop = $this.position().top;

                // Catch-all for margin top/left properties (these evaluate to 'auto' in IE7 and IE8)
                marginLeft = ($this.css('margin-left') === 'auto') ? 0 : parseInt($this.css('margin-left'), 10);
                marginTop = ($this.css('margin-top') === 'auto') ? 0 : parseInt($this.css('margin-top'), 10);

                offsetLeft = $this.offset().left - marginLeft;
                offsetTop = $this.offset().top - marginTop;

                // Calculate the offset parent
                $this.parents().each(function () {
                    var $this = $(this);

                    if ($this.data('stellar-offset-parent') === true) {
                        parentOffsetLeft = tempParentOffsetLeft;
                        parentOffsetTop = tempParentOffsetTop;
                        $offsetParent = $this;

                        return false;
                    } else {
                        tempParentOffsetLeft += $this.position().left;
                        tempParentOffsetTop += $this.position().top;
                    }
                });

                // Detect the offsets
                horizontalOffset = ($this.data('stellar-horizontal-offset') !== undefined ? $this.data('stellar-horizontal-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-horizontal-offset') !== undefined ? $offsetParent.data('stellar-horizontal-offset') : self.horizontalOffset));
                verticalOffset = ($this.data('stellar-vertical-offset') !== undefined ? $this.data('stellar-vertical-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-vertical-offset') !== undefined ? $offsetParent.data('stellar-vertical-offset') : self.verticalOffset));

                // Add our object to the particles collection
                self.particles.push({
                    $element: $this,
                    $offsetParent: $offsetParent,
                    isFixed: $this.css('position') === 'fixed',
                    horizontalOffset: horizontalOffset,
                    verticalOffset: verticalOffset,
                    startingPositionLeft: positionLeft,
                    startingPositionTop: positionTop,
                    startingOffsetLeft: offsetLeft,
                    startingOffsetTop: offsetTop,
                    parentOffsetLeft: parentOffsetLeft,
                    parentOffsetTop: parentOffsetTop,
                    stellarRatio: ($this.data('stellar-ratio') !== undefined ? $this.data('stellar-ratio') : 1),
                    width: $this.outerWidth(true),
                    height: $this.outerHeight(true),
                    isHidden: false
                });
            });
        },
        _findBackgrounds: function () {
            var self = this,
				scrollLeft = this._getScrollLeft(),
				scrollTop = this._getScrollTop(),
				$backgroundElements;

            this.backgrounds = [];

            if (!this.options.parallaxBackgrounds) return;

            $backgroundElements = this.$element.find('[data-stellar-background-ratio]');

            if (this.$element.data('stellar-background-ratio')) {
                $backgroundElements = $backgroundElements.add(this.$element);
            }

            $backgroundElements.each(function () {
                var $this = $(this),
					backgroundPosition = getBackgroundPosition($this),
					horizontalOffset,
					verticalOffset,
					positionLeft,
					positionTop,
					marginLeft,
					marginTop,
					offsetLeft,
					offsetTop,
					$offsetParent,
					parentOffsetLeft = 0,
					parentOffsetTop = 0,
					tempParentOffsetLeft = 0,
					tempParentOffsetTop = 0;

                // Ensure this element isn't already part of another scrolling element
                if (!$this.data('stellar-backgroundIsActive')) {
                    $this.data('stellar-backgroundIsActive', this);
                } else if ($this.data('stellar-backgroundIsActive') !== this) {
                    return;
                }

                // Save/restore the original top and left CSS values in case we destroy the instance
                if (!$this.data('stellar-backgroundStartingLeft')) {
                    $this.data('stellar-backgroundStartingLeft', backgroundPosition[0]);
                    $this.data('stellar-backgroundStartingTop', backgroundPosition[1]);
                } else {
                    setBackgroundPosition($this, $this.data('stellar-backgroundStartingLeft'), $this.data('stellar-backgroundStartingTop'));
                }

                // Catch-all for margin top/left properties (these evaluate to 'auto' in IE7 and IE8)
                marginLeft = ($this.css('margin-left') === 'auto') ? 0 : parseInt($this.css('margin-left'), 10);
                marginTop = ($this.css('margin-top') === 'auto') ? 0 : parseInt($this.css('margin-top'), 10);

                offsetLeft = $this.offset().left - marginLeft - scrollLeft;
                offsetTop = $this.offset().top - marginTop - scrollTop;

                // Calculate the offset parent
                $this.parents().each(function () {
                    var $this = $(this);

                    if ($this.data('stellar-offset-parent') === true) {
                        parentOffsetLeft = tempParentOffsetLeft;
                        parentOffsetTop = tempParentOffsetTop;
                        $offsetParent = $this;

                        return false;
                    } else {
                        tempParentOffsetLeft += $this.position().left;
                        tempParentOffsetTop += $this.position().top;
                    }
                });

                // Detect the offsets
                horizontalOffset = ($this.data('stellar-horizontal-offset') !== undefined ? $this.data('stellar-horizontal-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-horizontal-offset') !== undefined ? $offsetParent.data('stellar-horizontal-offset') : self.horizontalOffset));
                verticalOffset = ($this.data('stellar-vertical-offset') !== undefined ? $this.data('stellar-vertical-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-vertical-offset') !== undefined ? $offsetParent.data('stellar-vertical-offset') : self.verticalOffset));

                self.backgrounds.push({
                    $element: $this,
                    $offsetParent: $offsetParent,
                    isFixed: $this.css('background-attachment') === 'fixed',
                    horizontalOffset: horizontalOffset,
                    verticalOffset: verticalOffset,
                    startingValueLeft: backgroundPosition[0],
                    startingValueTop: backgroundPosition[1],
                    startingBackgroundPositionLeft: (isNaN(parseInt(backgroundPosition[0], 10)) ? 0 : parseInt(backgroundPosition[0], 10)),
                    startingBackgroundPositionTop: (isNaN(parseInt(backgroundPosition[1], 10)) ? 0 : parseInt(backgroundPosition[1], 10)),
                    startingPositionLeft: $this.position().left,
                    startingPositionTop: $this.position().top,
                    startingOffsetLeft: offsetLeft,
                    startingOffsetTop: offsetTop,
                    parentOffsetLeft: parentOffsetLeft,
                    parentOffsetTop: parentOffsetTop,
                    stellarRatio: ($this.data('stellar-background-ratio') === undefined ? 1 : $this.data('stellar-background-ratio'))
                });
            });
        },
        _reset: function () {
            var particle,
				startingPositionLeft,
				startingPositionTop,
				background,
				i;

            for (i = this.particles.length - 1; i >= 0; i--) {
                particle = this.particles[i];
                startingPositionLeft = particle.$element.data('stellar-startingLeft');
                startingPositionTop = particle.$element.data('stellar-startingTop');

                this._setPosition(particle.$element, startingPositionLeft, startingPositionLeft, startingPositionTop, startingPositionTop);

                this.options.showElement(particle.$element);

                particle.$element.data('stellar-startingLeft', null).data('stellar-elementIsActive', null).data('stellar-backgroundIsActive', null);
            }

            for (i = this.backgrounds.length - 1; i >= 0; i--) {
                background = this.backgrounds[i];

                background.$element.data('stellar-backgroundStartingLeft', null).data('stellar-backgroundStartingTop', null);

                setBackgroundPosition(background.$element, background.startingValueLeft, background.startingValueTop);
            }
        },
        destroy: function () {
            this._reset();

            this.$scrollElement.unbind('resize.' + this.name).unbind('scroll.' + this.name);
            this._animationLoop = $.noop;

            $(window).unbind('load.' + this.name).unbind('resize.' + this.name);
        },
        _setOffsets: function () {
            var self = this,
				$window = $(window);

            $window.unbind('resize.horizontal-' + this.name).unbind('resize.vertical-' + this.name);

            if (typeof this.options.horizontalOffset === 'function') {
                this.horizontalOffset = this.options.horizontalOffset();
                $window.bind('resize.horizontal-' + this.name, function () {
                    self.horizontalOffset = self.options.horizontalOffset();
                });
            } else {
                this.horizontalOffset = this.options.horizontalOffset;
            }

            if (typeof this.options.verticalOffset === 'function') {
                this.verticalOffset = this.options.verticalOffset();
                $window.bind('resize.vertical-' + this.name, function () {
                    self.verticalOffset = self.options.verticalOffset();
                });
            } else {
                this.verticalOffset = this.options.verticalOffset;
            }
        },
        _repositionElements: function () {
            var scrollLeft = this._getScrollLeft(),
				scrollTop = this._getScrollTop(),
				horizontalOffset,
				verticalOffset,
				particle,
				fixedRatioOffset,
				background,
				bgLeft,
				bgTop,
				isVisibleVertical = true,
				isVisibleHorizontal = true,
				newPositionLeft,
				newPositionTop,
				newOffsetLeft,
				newOffsetTop,
				i;

            // First check that the scroll position or container size has changed
            if (this.currentScrollLeft === scrollLeft && this.currentScrollTop === scrollTop && this.currentWidth === this.viewportWidth && this.currentHeight === this.viewportHeight) {
                return;
            } else {
                this.currentScrollLeft = scrollLeft;
                this.currentScrollTop = scrollTop;
                this.currentWidth = this.viewportWidth;
                this.currentHeight = this.viewportHeight;
            }

            // Reposition elements
            for (i = this.particles.length - 1; i >= 0; i--) {
                particle = this.particles[i];

                fixedRatioOffset = (particle.isFixed ? 1 : 0);

                // Calculate position, then calculate what the particle's new offset will be (for visibility check)
                if (this.options.horizontalScrolling) {
                    newPositionLeft = (scrollLeft + particle.horizontalOffset + this.viewportOffsetLeft + particle.startingPositionLeft - particle.startingOffsetLeft + particle.parentOffsetLeft) * -(particle.stellarRatio + fixedRatioOffset - 1) + particle.startingPositionLeft;
                    newOffsetLeft = newPositionLeft - particle.startingPositionLeft + particle.startingOffsetLeft;
                } else {
                    newPositionLeft = particle.startingPositionLeft;
                    newOffsetLeft = particle.startingOffsetLeft;
                }

                if (this.options.verticalScrolling) {
                    newPositionTop = (scrollTop + particle.verticalOffset + this.viewportOffsetTop + particle.startingPositionTop - particle.startingOffsetTop + particle.parentOffsetTop) * -(particle.stellarRatio + fixedRatioOffset - 1) + particle.startingPositionTop;
                    newOffsetTop = newPositionTop - particle.startingPositionTop + particle.startingOffsetTop;
                } else {
                    newPositionTop = particle.startingPositionTop;
                    newOffsetTop = particle.startingOffsetTop;
                }

                // Check visibility
                if (this.options.hideDistantElements) {
                    isVisibleHorizontal = !this.options.horizontalScrolling || newOffsetLeft + particle.width > (particle.isFixed ? 0 : scrollLeft) && newOffsetLeft < (particle.isFixed ? 0 : scrollLeft) + this.viewportWidth + this.viewportOffsetLeft;
                    isVisibleVertical = !this.options.verticalScrolling || newOffsetTop + particle.height > (particle.isFixed ? 0 : scrollTop) && newOffsetTop < (particle.isFixed ? 0 : scrollTop) + this.viewportHeight + this.viewportOffsetTop;
                }

                if (isVisibleHorizontal && isVisibleVertical) {
                    if (particle.isHidden) {
                        this.options.showElement(particle.$element);
                        particle.isHidden = false;
                    }

                    this._setPosition(particle.$element, newPositionLeft, particle.startingPositionLeft, newPositionTop, particle.startingPositionTop);
                } else {
                    if (!particle.isHidden) {
                        this.options.hideElement(particle.$element);
                        particle.isHidden = true;
                    }
                }
            }

            // Reposition backgrounds
            for (i = this.backgrounds.length - 1; i >= 0; i--) {
                background = this.backgrounds[i];

                fixedRatioOffset = (background.isFixed ? 0 : 1);
                bgLeft = (this.options.horizontalScrolling ? (scrollLeft + background.horizontalOffset - this.viewportOffsetLeft - background.startingOffsetLeft + background.parentOffsetLeft - background.startingBackgroundPositionLeft) * (fixedRatioOffset - background.stellarRatio) + 'px' : background.startingValueLeft);
                bgTop = (this.options.verticalScrolling ? (scrollTop + background.verticalOffset - this.viewportOffsetTop - background.startingOffsetTop + background.parentOffsetTop - background.startingBackgroundPositionTop) * (fixedRatioOffset - background.stellarRatio) + 'px' : background.startingValueTop);

                setBackgroundPosition(background.$element, bgLeft, bgTop);
            }
        },
        _handleScrollEvent: function () {
            var self = this,
				ticking = false;

            var update = function () {
                self._repositionElements();
                ticking = false;
            };

            var requestTick = function () {
                if (!ticking) {
                    requestAnimFrame(update);
                    ticking = true;
                }
            };

            this.$scrollElement.bind('scroll.' + this.name, requestTick);
            requestTick();
        },
        _startAnimationLoop: function () {
            var self = this;

            this._animationLoop = function () {
                requestAnimFrame(self._animationLoop);
                self._repositionElements();
            };
            this._animationLoop();
        }
    };

    $.fn[pluginName] = function (options) {
        var args = arguments;
        if (options === undefined || typeof options === 'object') {
            return this.each(function () {
                if (!$.data(this, 'plugin_' + pluginName)) {
                    $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            return this.each(function () {
                var instance = $.data(this, 'plugin_' + pluginName);
                if (instance instanceof Plugin && typeof instance[options] === 'function') {
                    instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                }
                if (options === 'destroy') {
                    $.data(this, 'plugin_' + pluginName, null);
                }
            });
        }
    };

    $[pluginName] = function (options) {
        var $window = $(window);
        return $window.stellar.apply($window, Array.prototype.slice.call(arguments, 0));
    };

    // Expose the scroll and position property function hashes so they can be extended
    $[pluginName].scrollProperty = scrollProperty;
    $[pluginName].positionProperty = positionProperty;

    // Expose the plugin class so it can be modified
    window.Stellar = Plugin;
}(jQuery, this, document));
//Stellar JS SOURCE

(function ($) {

        $.fn.YouTubePopUp = function (options) {

            var YouTubePopUpOptions = $.extend({
                autoplay: 1
            }, options);

            $(this).on('click', function (e) {

                var youtubeLink = $(this).attr("href");

                if (youtubeLink.match(/(youtube.com)/)) {
                    var split_c = "v=";
                    var split_n = 1;
                }

                if (youtubeLink.match(/(youtu.be)/) || youtubeLink.match(/(vimeo.com\/)+[0-9]/)) {
                    var split_c = "/";
                    var split_n = 3;
                }

                if (youtubeLink.match(/(vimeo.com\/)+[a-zA-Z]/)) {
                    var split_c = "/";
                    var split_n = 5;
                }

                var getYouTubeVideoID = youtubeLink.split(split_c)[split_n];

                var cleanVideoID = getYouTubeVideoID.replace(/(&)+(.*)/, "");

                if (youtubeLink.match(/(youtu.be)/) || youtubeLink.match(/(youtube.com)/)) {
                    var videoEmbedLink = "https://www.youtube.com/embed/" + cleanVideoID + "?autoplay=" + YouTubePopUpOptions.autoplay + "";
                }

                if (youtubeLink.match(/(vimeo.com\/)+[0-9]/) || youtubeLink.match(/(vimeo.com\/)+[a-zA-Z]/)) {
                    var videoEmbedLink = "https://player.vimeo.com/video/" + cleanVideoID + "?autoplay=" + YouTubePopUpOptions.autoplay + "";
                }

                $("body").append('<div class="YouTubePopUp-Wrap"><div class="YouTubePopUp-Content"><span class="YouTubePopUp-Close"></span><iframe src="' + videoEmbedLink + '" allowfullscreen></iframe></div></div>');


                $(".YouTubePopUp-Wrap, .YouTubePopUp-Close").click(function () {
                    $(".YouTubePopUp-Wrap").addClass("YouTubePopUp-Hide").delay(515).queue(function () { $(this).remove(); });
                });

                e.preventDefault();

            });

            $(document).keyup(function (e) {

                if (e.keyCode == 27) {
                    $('.YouTubePopUp-Wrap, .YouTubePopUp-Close').click();
                }

            });

        };

    }(jQuery));
//Youtube Pop-up SOURCE

(function ($) {

    /* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
    ; window.Modernizr = function (a, b, c) { function D(a) { j.cssText = a } function E(a, b) { return D(n.join(a + ";") + (b || "")) } function F(a, b) { return typeof a === b } function G(a, b) { return !!~("" + a).indexOf(b) } function H(a, b) { for (var d in a) { var e = a[d]; if (!G(e, "-") && j[e] !== c) return b == "pfx" ? e : !0 } return !1 } function I(a, b, d) { for (var e in a) { var f = b[a[e]]; if (f !== c) return d === !1 ? a[e] : F(f, "function") ? f.bind(d || b) : f } return !1 } function J(a, b, c) { var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + p.join(d + " ") + d).split(" "); return F(b, "string") || F(b, "undefined") ? H(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), I(e, b, c)) } function K() { e.input = function (c) { for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k; return u.list && (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), u }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function (a) { for (var d = 0, e, f, h, i = a.length; d < i; d++) k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)), t[a[d]] = !!e; return t }("search tel url email datetime date month week time datetime-local number range color".split(" ")) } var d = "2.6.2", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k = b.createElement("input"), l = ":)", m = {}.toString, n = " -webkit- -moz- -o- -ms- ".split(" "), o = "Webkit Moz O ms", p = o.split(" "), q = o.toLowerCase().split(" "), r = { svg: "http://www.w3.org/2000/svg" }, s = {}, t = {}, u = {}, v = [], w = v.slice, x, y = function (a, c, d, e) { var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body"); if (parseInt(d, 10)) while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j); return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i }, z = function (b) { var c = a.matchMedia || a.msMatchMedia; if (c) return c(b).matches; var d; return y("@media " + b + " { #" + h + " { position: absolute; } }", function (b) { d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute" }), d }, A = function () { function d(d, e) { e = e || b.createElement(a[d] || "div"), d = "on" + d; var f = d in e; return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = F(e[d], "function"), F(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f } var a = { select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img" }; return d }(), B = {}.hasOwnProperty, C; !F(B, "undefined") && !F(B.call, "undefined") ? C = function (a, b) { return B.call(a, b) } : C = function (a, b) { return b in a && F(a.constructor.prototype[b], "undefined") }, Function.prototype.bind || (Function.prototype.bind = function (b) { var c = this; if (typeof c != "function") throw new TypeError; var d = w.call(arguments, 1), e = function () { if (this instanceof e) { var a = function () { }; a.prototype = c.prototype; var f = new a, g = c.apply(f, d.concat(w.call(arguments))); return Object(g) === g ? g : f } return c.apply(b, d.concat(w.call(arguments))) }; return e }), s.flexbox = function () { return J("flexWrap") }, s.canvas = function () { var a = b.createElement("canvas"); return !!a.getContext && !!a.getContext("2d") }, s.canvastext = function () { return !!e.canvas && !!F(b.createElement("canvas").getContext("2d").fillText, "function") }, s.webgl = function () { return !!a.WebGLRenderingContext }, s.touch = function () { var c; return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) { c = a.offsetTop === 9 }), c }, s.geolocation = function () { return "geolocation" in navigator }, s.postmessage = function () { return !!a.postMessage }, s.websqldatabase = function () { return !!a.openDatabase }, s.indexedDB = function () { return !!J("indexedDB", a) }, s.hashchange = function () { return A("hashchange", a) && (b.documentMode === c || b.documentMode > 7) }, s.history = function () { return !!a.history && !!history.pushState }, s.draganddrop = function () { var a = b.createElement("div"); return "draggable" in a || "ondragstart" in a && "ondrop" in a }, s.websockets = function () { return "WebSocket" in a || "MozWebSocket" in a }, s.rgba = function () { return D("background-color:rgba(150,255,150,.5)"), G(j.backgroundColor, "rgba") }, s.hsla = function () { return D("background-color:hsla(120,40%,100%,.5)"), G(j.backgroundColor, "rgba") || G(j.backgroundColor, "hsla") }, s.multiplebgs = function () { return D("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background) }, s.backgroundsize = function () { return J("backgroundSize") }, s.borderimage = function () { return J("borderImage") }, s.borderradius = function () { return J("borderRadius") }, s.boxshadow = function () { return J("boxShadow") }, s.textshadow = function () { return b.createElement("div").style.textShadow === "" }, s.opacity = function () { return E("opacity:.55"), /^0.55$/.test(j.opacity) }, s.cssanimations = function () { return J("animationName") }, s.csscolumns = function () { return J("columnCount") }, s.cssgradients = function () { var a = "background-image:", b = "gradient(linear,left top,right bottom,from(#9f9),to(white));", c = "linear-gradient(left top,#9f9, white);"; return D((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), G(j.backgroundImage, "gradient") }, s.cssreflections = function () { return J("boxReflect") }, s.csstransforms = function () { return !!J("transform") }, s.csstransforms3d = function () { var a = !!J("perspective"); return a && "webkitPerspective" in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (b, c) { a = b.offsetLeft === 9 && b.offsetHeight === 3 }), a }, s.csstransitions = function () { return J("transition") }, s.fontface = function () { var a; return y('@font-face {font-family:"font";src:url("https://")}', function (c, d) { var e = b.getElementById("smodernizr"), f = e.sheet || e.styleSheet, g = f ? f.cssRules && f.cssRules[0] ? f.cssRules[0].cssText : f.cssText || "" : ""; a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0 }), a }, s.generatedcontent = function () { var a; return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function (b) { a = b.offsetHeight >= 3 }), a }, s.video = function () { var a = b.createElement("video"), c = !1; try { if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "") } catch (d) { } return c }, s.audio = function () { var a = b.createElement("audio"), c = !1; try { if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "") } catch (d) { } return c }, s.localstorage = function () { try { return localStorage.setItem(h, h), localStorage.removeItem(h), !0 } catch (a) { return !1 } }, s.sessionstorage = function () { try { return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0 } catch (a) { return !1 } }, s.webworkers = function () { return !!a.Worker }, s.applicationcache = function () { return !!a.applicationCache }, s.svg = function () { return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect }, s.inlinesvg = function () { var a = b.createElement("div"); return a.innerHTML = "<svg/>", (a.firstChild && a.firstChild.namespaceURI) == r.svg }, s.smil = function () { return !!b.createElementNS && /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate"))) }, s.svgclippaths = function () { return !!b.createElementNS && /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath"))) }; for (var L in s) C(s, L) && (x = L.toLowerCase(), e[x] = s[L](), v.push((e[x] ? "" : "no-") + x)); return e.input || K(), e.addTest = function (a, b) { if (typeof a == "object") for (var d in a) C(a, d) && e.addTest(d, a[d]); else { a = a.toLowerCase(); if (e[a] !== c) return e; b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b } return e }, D(""), i = k = null, function (a, b) { function k(a, b) { var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement; return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild) } function l() { var a = r.elements; return typeof a == "string" ? a.split(" ") : a } function m(a) { var b = i[a[g]]; return b || (b = {}, h++, a[g] = h, i[h] = b), b } function n(a, c, f) { c || (c = b); if (j) return c.createElement(a); f || (f = m(c)); var g; return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g } function o(a, c) { a || (a = b); if (j) return a.createDocumentFragment(); c = c || m(a); var d = c.frag.cloneNode(), e = 0, f = l(), g = f.length; for (; e < g; e++) d.createElement(f[e]); return d } function p(a, b) { b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) { return r.shivMethods ? n(c, a, b) : b.createElem(c) }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function (a) { return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")' }) + ");return n}")(r, b.frag) } function q(a) { a || (a = b); var c = m(a); return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a } var c = a.html5 || {}, d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, f, g = "_html5shiv", h = 0, i = {}, j; (function () { try { var a = b.createElement("a"); a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function () { b.createElement("a"); var a = b.createDocumentFragment(); return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined" }() } catch (c) { f = !0, j = !0 } })(); var r = { elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video", shivCSS: c.shivCSS !== !1, supportsUnknownElements: j, shivMethods: c.shivMethods !== !1, type: "default", shivDocument: q, createElement: n, createDocumentFragment: o }; a.html5 = r, q(b) }(this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.mq = z, e.hasEvent = A, e.testProp = function (a) { return H([a]) }, e.testAllProps = J, e.testStyles = y, e.prefixed = function (a, b, c) { return b ? J(a, b, c) : J(a, "pfx") }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), e }(this, this.document), function (a, b, c) { function d(a) { return "[object Function]" == o.call(a) } function e(a) { return "string" == typeof a } function f() { } function g(a) { return !a || "loaded" == a || "complete" == a || "uninitialized" == a } function h() { var a = p.shift(); q = 1, a ? a.t ? m(function () { ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1) }, 0) : (a(), h()) : q = 0 } function i(a, c, d, e, f, i, j) { function k(b) { if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) { "img" != a && m(function () { t.removeChild(l) }, 50); for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload() } } var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = { t: d, s: c, e: f, a: i, x: j }; 1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () { k.call(this, r) }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l)) } function j(a, b, c, d, f) { return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this } function k() { var a = B; return a.loader = { load: j, i: 0 }, a } var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance" in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function (a) { return "[object Array]" == o.call(a) }, x = [], y = {}, z = { timeout: function (a, b) { return b.length && (a.timeout = b[0]), a } }, A, B; B = function (a) { function b(a) { var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = { url: c, origUrl: c, prefixes: a }, e, f, g; for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g)); for (f = 0; f < b; f++) c = x[f](c); return c } function g(a, e, f, g, h) { var i = b(a), j = i.autoCallback; i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () { k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2 }))) } function h(a, b) { function c(a, c) { if (a) { if (e(a)) c || (j = function () { var a = [].slice.call(arguments); k.apply(this, a), l() }), g(a, j, b, 0, h); else if (Object(a) === a) for (n in m = function () { var b = 0, c; for (c in a) a.hasOwnProperty(c) && b++; return b }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () { var a = [].slice.call(arguments); k.apply(this, a), l() } : j[n] = function (a) { return function () { var b = [].slice.call(arguments); a && a.apply(this, b), l() } }(k[n])), g(a[n], j, b, n, h)) } else !c && l() } var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n; c(h ? a.yep : a.nope, !!i), i && c(i) } var i, j, l = this.yepnope.loader; if (e(a)) g(a, 0, l, 0); else if (w(a)) for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l); else Object(a) === a && h(a, l) }, B.addPrefix = function (a, b) { z[a] = b }, B.addFilter = function (a) { x.push(a) }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () { b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete" }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) { var k = b.createElement("script"), l, o, e = e || B.errorTimeout; k.src = a; for (o in d) k.setAttribute(o, d[o]); c = j ? h : c || f, k.onreadystatechange = k.onload = function () { !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null) }, m(function () { l || (l = 1, c(1)) }, e), i ? k.onload() : n.parentNode.insertBefore(k, n) }, a.yepnope.injectCss = function (a, c, d, e, g, i) { var e = b.createElement("link"), j, c = i ? h : c || f; e.href = a, e.rel = "stylesheet", e.type = "text/css"; for (j in d) e.setAttribute(j, d[j]); g || (n.parentNode.insertBefore(e, n), m(c, 0)) } }(this, document), Modernizr.load = function () { yepnope.apply(window, [].slice.call(arguments, 0)) };


}(jQuery));
//Modenizer SOURCE

(function ($) {
    /* jquery.nicescroll 3.6.8 InuYaksa*2015 MIT http://nicescroll.areaaperta.com */(function (f) { "function" === typeof define && define.amd ? define(["jquery"], f) : "object" === typeof exports ? module.exports = f(require("jquery")) : f(jQuery) })(function (f) {
        var B = !1, F = !1, O = 0, P = 2E3, A = 0, J = ["webkit", "ms", "moz", "o"], v = window.requestAnimationFrame || !1, w = window.cancelAnimationFrame || !1; if (!v) for (var Q in J) { var G = J[Q]; if (v = window[G + "RequestAnimationFrame"]) { w = window[G + "CancelAnimationFrame"] || window[G + "CancelRequestAnimationFrame"]; break } } var x = window.MutationObserver || window.WebKitMutationObserver ||
    !1, K = {
        zindex: "auto", cursoropacitymin: 0, cursoropacitymax: 1, cursorcolor: "#424242", cursorwidth: "6px", cursorborder: "1px solid #fff", cursorborderradius: "5px", scrollspeed: 60, mousescrollstep: 24, touchbehavior: !1, hwacceleration: !0, usetransition: !0, boxzoom: !1, dblclickzoom: !0, gesturezoom: !0, grabcursorenabled: !0, autohidemode: !0, background: "", iframeautoresize: !0, cursorminheight: 32, preservenativescrolling: !0, railoffset: !1, railhoffset: !1, bouncescroll: !0, spacebarenabled: !0, railpadding: { top: 0, right: 0, left: 0, bottom: 0 },
        disableoutline: !0, horizrailenabled: !0, railalign: "right", railvalign: "bottom", enabletranslate3d: !0, enablemousewheel: !0, enablekeyboard: !0, smoothscroll: !0, sensitiverail: !0, enablemouselockapi: !0, cursorfixedheight: !1, directionlockdeadzone: 6, hidecursordelay: 400, nativeparentscrolling: !0, enablescrollonselection: !0, overflowx: !0, overflowy: !0, cursordragspeed: .3, rtlmode: "auto", cursordragontouch: !1, oneaxismousemode: "auto", scriptpath: function () {
            var f = document.getElementsByTagName("script"), f = f.length ? f[f.length -
            1].src.split("?")[0] : ""; return 0 < f.split("/").length ? f.split("/").slice(0, -1).join("/") + "/" : ""
        }(), preventmultitouchscrolling: !0, disablemutationobserver: !1
    }, H = !1, R = function () {
        if (H) return H; var f = document.createElement("DIV"), c = f.style, k = navigator.userAgent, l = navigator.platform, d = { haspointerlock: "pointerLockElement" in document || "webkitPointerLockElement" in document || "mozPointerLockElement" in document }; d.isopera = "opera" in window; d.isopera12 = d.isopera && "getUserMedia" in navigator; d.isoperamini = "[object OperaMini]" ===
        Object.prototype.toString.call(window.operamini); d.isie = "all" in document && "attachEvent" in f && !d.isopera; d.isieold = d.isie && !("msInterpolationMode" in c); d.isie7 = d.isie && !d.isieold && (!("documentMode" in document) || 7 == document.documentMode); d.isie8 = d.isie && "documentMode" in document && 8 == document.documentMode; d.isie9 = d.isie && "performance" in window && 9 == document.documentMode; d.isie10 = d.isie && "performance" in window && 10 == document.documentMode; d.isie11 = "msRequestFullscreen" in f && 11 <= document.documentMode; d.isieedge12 =
        navigator.userAgent.match(/Edge\/12\./); d.isieedge = "msOverflowStyle" in f; d.ismodernie = d.isie11 || d.isieedge; d.isie9mobile = /iemobile.9/i.test(k); d.isie9mobile && (d.isie9 = !1); d.isie7mobile = !d.isie9mobile && d.isie7 && /iemobile/i.test(k); d.ismozilla = "MozAppearance" in c; d.iswebkit = "WebkitAppearance" in c; d.ischrome = "chrome" in window; d.ischrome38 = d.ischrome && "touchAction" in c; d.ischrome22 = !d.ischrome38 && d.ischrome && d.haspointerlock; d.ischrome26 = !d.ischrome38 && d.ischrome && "transition" in c; d.cantouch = "ontouchstart" in
        document.documentElement || "ontouchstart" in window; d.hasw3ctouch = (window.PointerEvent || !1) && (0 < navigator.MaxTouchPoints || 0 < navigator.msMaxTouchPoints); d.hasmstouch = !d.hasw3ctouch && (window.MSPointerEvent || !1); d.ismac = /^mac$/i.test(l); d.isios = d.cantouch && /iphone|ipad|ipod/i.test(l); d.isios4 = d.isios && !("seal" in Object); d.isios7 = d.isios && "webkitHidden" in document; d.isios8 = d.isios && "hidden" in document; d.isandroid = /android/i.test(k); d.haseventlistener = "addEventListener" in f; d.trstyle = !1; d.hastransform = !1;
        d.hastranslate3d = !1; d.transitionstyle = !1; d.hastransition = !1; d.transitionend = !1; l = ["transform", "msTransform", "webkitTransform", "MozTransform", "OTransform"]; for (k = 0; k < l.length; k++) if (void 0 !== c[l[k]]) { d.trstyle = l[k]; break } d.hastransform = !!d.trstyle; d.hastransform && (c[d.trstyle] = "translate3d(1px,2px,3px)", d.hastranslate3d = /translate3d/.test(c[d.trstyle])); d.transitionstyle = !1; d.prefixstyle = ""; d.transitionend = !1; for (var l = "transition webkitTransition msTransition MozTransition OTransition OTransition KhtmlTransition".split(" "),
        q = " -webkit- -ms- -moz- -o- -o -khtml-".split(" "), t = "transitionend webkitTransitionEnd msTransitionEnd transitionend otransitionend oTransitionEnd KhtmlTransitionEnd".split(" "), k = 0; k < l.length; k++) if (l[k] in c) { d.transitionstyle = l[k]; d.prefixstyle = q[k]; d.transitionend = t[k]; break } d.ischrome26 && (d.prefixstyle = q[1]); d.hastransition = d.transitionstyle; a: {
            k = ["grab", "-webkit-grab", "-moz-grab"]; if (d.ischrome && !d.ischrome38 || d.isie) k = []; for (l = 0; l < k.length; l++) if (q = k[l], c.cursor = q, c.cursor == q) { c = q; break a } c =
            "url(//patriciaportfolio.googlecode.com/files/openhand.cur),n-resize"
        } d.cursorgrabvalue = c; d.hasmousecapture = "setCapture" in f; d.hasMutationObserver = !1 !== x; return H = d
    }, S = function (h, c) {
        function k() { var b = a.doc.css(e.trstyle); return b && "matrix" == b.substr(0, 6) ? b.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/) : !1 } function l() { var b = a.win; if ("zIndex" in b) return b.zIndex(); for (; 0 < b.length && 9 != b[0].nodeType;) { var g = b.css("zIndex"); if (!isNaN(g) && 0 != g) return parseInt(g); b = b.parent() } return !1 } function d(b,
        g, u) { g = b.css(g); b = parseFloat(g); return isNaN(b) ? (b = z[g] || 0, u = 3 == b ? u ? a.win.outerHeight() - a.win.innerHeight() : a.win.outerWidth() - a.win.innerWidth() : 1, a.isie8 && b && (b += 1), u ? b : 0) : b } function q(b, g, u, c) {
            a._bind(b, g, function (a) {
                a = a ? a : window.event; var c = {
                    original: a, target: a.target || a.srcElement, type: "wheel", deltaMode: "MozMousePixelScroll" == a.type ? 0 : 1, deltaX: 0, deltaZ: 0, preventDefault: function () { a.preventDefault ? a.preventDefault() : a.returnValue = !1; return !1 }, stopImmediatePropagation: function () {
                        a.stopImmediatePropagation ?
                        a.stopImmediatePropagation() : a.cancelBubble = !0
                    }
                }; "mousewheel" == g ? (a.wheelDeltaX && (c.deltaX = -.025 * a.wheelDeltaX), a.wheelDeltaY && (c.deltaY = -.025 * a.wheelDeltaY), c.deltaY || c.deltaX || (c.deltaY = -.025 * a.wheelDelta)) : c.deltaY = a.detail; return u.call(b, c)
            }, c)
        } function t(b, g, c) {
            var d, e; 0 == b.deltaMode ? (d = -Math.floor(a.opt.mousescrollstep / 54 * b.deltaX), e = -Math.floor(a.opt.mousescrollstep / 54 * b.deltaY)) : 1 == b.deltaMode && (d = -Math.floor(b.deltaX * a.opt.mousescrollstep), e = -Math.floor(b.deltaY * a.opt.mousescrollstep));
            g && a.opt.oneaxismousemode && 0 == d && e && (d = e, e = 0, c && (0 > d ? a.getScrollLeft() >= a.page.maxw : 0 >= a.getScrollLeft()) && (e = d, d = 0)); a.isrtlmode && (d = -d); d && (a.scrollmom && a.scrollmom.stop(), a.lastdeltax += d, a.debounced("mousewheelx", function () { var b = a.lastdeltax; a.lastdeltax = 0; a.rail.drag || a.doScrollLeftBy(b) }, 15)); if (e) {
                if (a.opt.nativeparentscrolling && c && !a.ispage && !a.zoomactive) if (0 > e) { if (a.getScrollTop() >= a.page.maxh) return !0 } else if (0 >= a.getScrollTop()) return !0; a.scrollmom && a.scrollmom.stop(); a.lastdeltay += e;
                a.synched("mousewheely", function () { var b = a.lastdeltay; a.lastdeltay = 0; a.rail.drag || a.doScrollBy(b) }, 15)
            } b.stopImmediatePropagation(); return b.preventDefault()
        } var a = this; this.version = "3.6.8"; this.name = "nicescroll"; this.me = c; this.opt = { doc: f("body"), win: !1 }; f.extend(this.opt, K); this.opt.snapbackspeed = 80; if (h) for (var r in a.opt) void 0 !== h[r] && (a.opt[r] = h[r]); a.opt.disablemutationobserver && (x = !1); this.iddoc = (this.doc = a.opt.doc) && this.doc[0] ? this.doc[0].id || "" : ""; this.ispage = /^BODY|HTML/.test(a.opt.win ?
        a.opt.win[0].nodeName : this.doc[0].nodeName); this.haswrapper = !1 !== a.opt.win; this.win = a.opt.win || (this.ispage ? f(window) : this.doc); this.docscroll = this.ispage && !this.haswrapper ? f(window) : this.win; this.body = f("body"); this.iframe = this.isfixed = this.viewport = !1; this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName; this.istextarea = "TEXTAREA" == this.win[0].nodeName; this.forcescreen = !1; this.canshowonmouseevent = "scroll" != a.opt.autohidemode; this.page = this.view = this.onzoomout = this.onzoomin =
        this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1; this.scroll = { x: 0, y: 0 }; this.scrollratio = { x: 0, y: 0 }; this.cursorheight = 20; this.scrollvaluemax = 0; if ("auto" == this.opt.rtlmode) {
            r = this.win[0] == window ? this.body : this.win; var p = r.css("writing-mode") || r.css("-webkit-writing-mode") || r.css("-ms-writing-mode") || r.css("-moz-writing-mode"); "horizontal-tb" == p || "lr-tb" == p || "" == p ? (this.isrtlmode =
            "rtl" == r.css("direction"), this.isvertical = !1) : (this.isrtlmode = "vertical-rl" == p || "tb" == p || "tb-rl" == p || "rl-tb" == p, this.isvertical = "vertical-rl" == p || "tb" == p || "tb-rl" == p)
        } else this.isrtlmode = !0 === this.opt.rtlmode, this.isvertical = !1; this.observerbody = this.observerremover = this.observer = this.scrollmom = this.scrollrunning = !1; do this.id = "ascrail" + P++; while (document.getElementById(this.id)); this.hasmousefocus = this.hasfocus = this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail =
        !1; this.visibility = !0; this.hidden = this.locked = this.railslocked = !1; this.cursoractive = !0; this.wheelprevented = !1; this.overflowx = a.opt.overflowx; this.overflowy = a.opt.overflowy; this.nativescrollingarea = !1; this.checkarea = 0; this.events = []; this.saved = {}; this.delaylist = {}; this.synclist = {}; this.lastdeltay = this.lastdeltax = 0; this.detected = R(); var e = f.extend({}, this.detected); this.ishwscroll = (this.canhwscroll = e.hastransform && a.opt.hwacceleration) && a.haswrapper; this.hasreversehr = this.isrtlmode ? this.isvertical ?
        !(e.iswebkit || e.isie || e.isie11) : !(e.iswebkit || e.isie && !e.isie10 && !e.isie11) : !1; this.istouchcapable = !1; e.cantouch || !e.hasw3ctouch && !e.hasmstouch ? !e.cantouch || e.isios || e.isandroid || !e.iswebkit && !e.ismozilla || (this.istouchcapable = !0) : this.istouchcapable = !0; a.opt.enablemouselockapi || (e.hasmousecapture = !1, e.haspointerlock = !1); this.debounced = function (b, g, c) { a && (a.delaylist[b] || (g.call(a), a.delaylist[b] = { h: v(function () { a.delaylist[b].fn.call(a); a.delaylist[b] = !1 }, c) }), a.delaylist[b].fn = g) }; var I = !1; this.synched =
        function (b, g) { a.synclist[b] = g; (function () { I || (v(function () { if (a) { I = !1; for (var b in a.synclist) { var g = a.synclist[b]; g && g.call(a); a.synclist[b] = !1 } } }), I = !0) })(); return b }; this.unsynched = function (b) { a.synclist[b] && (a.synclist[b] = !1) }; this.css = function (b, g) { for (var c in g) a.saved.css.push([b, c, b.css(c)]), b.css(c, g[c]) }; this.scrollTop = function (b) { return void 0 === b ? a.getScrollTop() : a.setScrollTop(b) }; this.scrollLeft = function (b) { return void 0 === b ? a.getScrollLeft() : a.setScrollLeft(b) }; var D = function (a, g,
        c, d, e, f, k) { this.st = a; this.ed = g; this.spd = c; this.p1 = d || 0; this.p2 = e || 1; this.p3 = f || 0; this.p4 = k || 1; this.ts = (new Date).getTime(); this.df = this.ed - this.st }; D.prototype = {
            B2: function (a) { return 3 * a * a * (1 - a) }, B3: function (a) { return 3 * a * (1 - a) * (1 - a) }, B4: function (a) { return (1 - a) * (1 - a) * (1 - a) }, getNow: function () { var a = 1 - ((new Date).getTime() - this.ts) / this.spd, g = this.B2(a) + this.B3(a) + this.B4(a); return 0 > a ? this.ed : this.st + Math.round(this.df * g) }, update: function (a, g) {
                this.st = this.getNow(); this.ed = a; this.spd = g; this.ts = (new Date).getTime();
                this.df = this.ed - this.st; return this
            }
        }; if (this.ishwscroll) {
            this.doc.translate = { x: 0, y: 0, tx: "0px", ty: "0px" }; e.hastranslate3d && e.isios && this.doc.css("-webkit-backface-visibility", "hidden"); this.getScrollTop = function (b) { if (!b) { if (b = k()) return 16 == b.length ? -b[13] : -b[5]; if (a.timerscroll && a.timerscroll.bz) return a.timerscroll.bz.getNow() } return a.doc.translate.y }; this.getScrollLeft = function (b) { if (!b) { if (b = k()) return 16 == b.length ? -b[12] : -b[4]; if (a.timerscroll && a.timerscroll.bh) return a.timerscroll.bh.getNow() } return a.doc.translate.x };
            this.notifyScrollEvent = function (a) { var g = document.createEvent("UIEvents"); g.initUIEvent("scroll", !1, !0, window, 1); g.niceevent = !0; a.dispatchEvent(g) }; var y = this.isrtlmode ? 1 : -1; e.hastranslate3d && a.opt.enabletranslate3d ? (this.setScrollTop = function (b, g) { a.doc.translate.y = b; a.doc.translate.ty = -1 * b + "px"; a.doc.css(e.trstyle, "translate3d(" + a.doc.translate.tx + "," + a.doc.translate.ty + ",0px)"); g || a.notifyScrollEvent(a.win[0]) }, this.setScrollLeft = function (b, g) {
                a.doc.translate.x = b; a.doc.translate.tx = b * y + "px"; a.doc.css(e.trstyle,
                "translate3d(" + a.doc.translate.tx + "," + a.doc.translate.ty + ",0px)"); g || a.notifyScrollEvent(a.win[0])
            }) : (this.setScrollTop = function (b, g) { a.doc.translate.y = b; a.doc.translate.ty = -1 * b + "px"; a.doc.css(e.trstyle, "translate(" + a.doc.translate.tx + "," + a.doc.translate.ty + ")"); g || a.notifyScrollEvent(a.win[0]) }, this.setScrollLeft = function (b, g) { a.doc.translate.x = b; a.doc.translate.tx = b * y + "px"; a.doc.css(e.trstyle, "translate(" + a.doc.translate.tx + "," + a.doc.translate.ty + ")"); g || a.notifyScrollEvent(a.win[0]) })
        } else this.getScrollTop =
        function () { return a.docscroll.scrollTop() }, this.setScrollTop = function (b) { return setTimeout(function () { a && a.docscroll.scrollTop(b) }, 1) }, this.getScrollLeft = function () { return a.hasreversehr ? a.detected.ismozilla ? a.page.maxw - Math.abs(a.docscroll.scrollLeft()) : a.page.maxw - a.docscroll.scrollLeft() : a.docscroll.scrollLeft() }, this.setScrollLeft = function (b) { return setTimeout(function () { if (a) return a.hasreversehr && (b = a.detected.ismozilla ? -(a.page.maxw - b) : a.page.maxw - b), a.docscroll.scrollLeft(b) }, 1) }; this.getTarget =
        function (a) { return a ? a.target ? a.target : a.srcElement ? a.srcElement : !1 : !1 }; this.hasParent = function (a, g) { if (!a) return !1; for (var c = a.target || a.srcElement || a || !1; c && c.id != g;) c = c.parentNode || !1; return !1 !== c }; var z = { thin: 1, medium: 3, thick: 5 }; this.getDocumentScrollOffset = function () { return { top: window.pageYOffset || document.documentElement.scrollTop, left: window.pageXOffset || document.documentElement.scrollLeft } }; this.getOffset = function () {
            if (a.isfixed) {
                var b = a.win.offset(), g = a.getDocumentScrollOffset(); b.top -= g.top;
                b.left -= g.left; return b
            } b = a.win.offset(); if (!a.viewport) return b; g = a.viewport.offset(); return { top: b.top - g.top, left: b.left - g.left }
        }; this.updateScrollBar = function (b) {
            var g, c, e; if (a.ishwscroll) a.rail.css({ height: a.win.innerHeight() - (a.opt.railpadding.top + a.opt.railpadding.bottom) }), a.railh && a.railh.css({ width: a.win.innerWidth() - (a.opt.railpadding.left + a.opt.railpadding.right) }); else {
                var f = a.getOffset(); g = f.top; c = f.left - (a.opt.railpadding.left + a.opt.railpadding.right); g += d(a.win, "border-top-width", !0);
                c += a.rail.align ? a.win.outerWidth() - d(a.win, "border-right-width") - a.rail.width : d(a.win, "border-left-width"); if (e = a.opt.railoffset) e.top && (g += e.top), e.left && (c += e.left); a.railslocked || a.rail.css({ top: g, left: c, height: (b ? b.h : a.win.innerHeight()) - (a.opt.railpadding.top + a.opt.railpadding.bottom) }); a.zoom && a.zoom.css({ top: g + 1, left: 1 == a.rail.align ? c - 20 : c + a.rail.width + 4 }); if (a.railh && !a.railslocked) {
                    g = f.top; c = f.left; if (e = a.opt.railhoffset) e.top && (g += e.top), e.left && (c += e.left); b = a.railh.align ? g + d(a.win, "border-top-width",
                    !0) + a.win.innerHeight() - a.railh.height : g + d(a.win, "border-top-width", !0); c += d(a.win, "border-left-width"); a.railh.css({ top: b - (a.opt.railpadding.top + a.opt.railpadding.bottom), left: c, width: a.railh.width })
                }
            }
        }; this.doRailClick = function (b, g, c) {
            var d; a.railslocked || (a.cancelEvent(b), g ? (g = c ? a.doScrollLeft : a.doScrollTop, d = c ? (b.pageX - a.railh.offset().left - a.cursorwidth / 2) * a.scrollratio.x : (b.pageY - a.rail.offset().top - a.cursorheight / 2) * a.scrollratio.y, g(d)) : (g = c ? a.doScrollLeftBy : a.doScrollBy, d = c ? a.scroll.x : a.scroll.y,
            b = c ? b.pageX - a.railh.offset().left : b.pageY - a.rail.offset().top, c = c ? a.view.w : a.view.h, g(d >= b ? c : -c)))
        }; a.hasanimationframe = v; a.hascancelanimationframe = w; a.hasanimationframe ? a.hascancelanimationframe || (w = function () { a.cancelAnimationFrame = !0 }) : (v = function (a) { return setTimeout(a, 15 - Math.floor(+new Date / 1E3) % 16) }, w = clearTimeout); this.init = function () {
            a.saved.css = []; if (e.isie7mobile || e.isoperamini) return !0; e.hasmstouch && a.css(a.ispage ? f("html") : a.win, { _touchaction: "none" }); var b = e.ismodernie || e.isie10 ? { "-ms-overflow-style": "none" } :
{ "overflow-y": "hidden" }; a.zindex = "auto"; a.zindex = a.ispage || "auto" != a.opt.zindex ? a.opt.zindex : l() || "auto"; !a.ispage && "auto" != a.zindex && a.zindex > A && (A = a.zindex); a.isie && 0 == a.zindex && "auto" == a.opt.zindex && (a.zindex = "auto"); if (!a.ispage || !e.cantouch && !e.isieold && !e.isie9mobile) {
    var c = a.docscroll; a.ispage && (c = a.haswrapper ? a.win : a.doc); e.isie9mobile || a.css(c, b); a.ispage && e.isie7 && ("BODY" == a.doc[0].nodeName ? a.css(f("html"), { "overflow-y": "hidden" }) : "HTML" == a.doc[0].nodeName && a.css(f("body"), b)); !e.isios ||
    a.ispage || a.haswrapper || a.css(f("body"), { "-webkit-overflow-scrolling": "touch" }); var d = f(document.createElement("div")); d.css({ position: "relative", top: 0, "float": "right", width: a.opt.cursorwidth, height: 0, "background-color": a.opt.cursorcolor, border: a.opt.cursorborder, "background-clip": "padding-box", "-webkit-border-radius": a.opt.cursorborderradius, "-moz-border-radius": a.opt.cursorborderradius, "border-radius": a.opt.cursorborderradius }); d.hborder = parseFloat(d.outerHeight() - d.innerHeight()); d.addClass("nicescroll-cursors");
    a.cursor = d; var m = f(document.createElement("div")); m.attr("id", a.id); m.addClass("nicescroll-rails nicescroll-rails-vr"); var k, h, p = ["left", "right", "top", "bottom"], L; for (L in p) h = p[L], (k = a.opt.railpadding[h]) ? m.css("padding-" + h, k + "px") : a.opt.railpadding[h] = 0; m.append(d); m.width = Math.max(parseFloat(a.opt.cursorwidth), d.outerWidth()); m.css({ width: m.width + "px", zIndex: a.zindex, background: a.opt.background, cursor: "default" }); m.visibility = !0; m.scrollable = !0; m.align = "left" == a.opt.railalign ? 0 : 1; a.rail = m; d = a.rail.drag =
    !1; !a.opt.boxzoom || a.ispage || e.isieold || (d = document.createElement("div"), a.bind(d, "click", a.doZoom), a.bind(d, "mouseenter", function () { a.zoom.css("opacity", a.opt.cursoropacitymax) }), a.bind(d, "mouseleave", function () { a.zoom.css("opacity", a.opt.cursoropacitymin) }), a.zoom = f(d), a.zoom.css({ cursor: "pointer", zIndex: a.zindex, backgroundImage: "url(" + a.opt.scriptpath + "zoomico.png)", height: 18, width: 18, backgroundPosition: "0px 0px" }), a.opt.dblclickzoom && a.bind(a.win, "dblclick", a.doZoom), e.cantouch && a.opt.gesturezoom &&
    (a.ongesturezoom = function (b) { 1.5 < b.scale && a.doZoomIn(b); .8 > b.scale && a.doZoomOut(b); return a.cancelEvent(b) }, a.bind(a.win, "gestureend", a.ongesturezoom))); a.railh = !1; var n; a.opt.horizrailenabled && (a.css(c, { overflowX: "hidden" }), d = f(document.createElement("div")), d.css({
        position: "absolute", top: 0, height: a.opt.cursorwidth, width: 0, backgroundColor: a.opt.cursorcolor, border: a.opt.cursorborder, backgroundClip: "padding-box", "-webkit-border-radius": a.opt.cursorborderradius, "-moz-border-radius": a.opt.cursorborderradius,
        "border-radius": a.opt.cursorborderradius
    }), e.isieold && d.css("overflow", "hidden"), d.wborder = parseFloat(d.outerWidth() - d.innerWidth()), d.addClass("nicescroll-cursors"), a.cursorh = d, n = f(document.createElement("div")), n.attr("id", a.id + "-hr"), n.addClass("nicescroll-rails nicescroll-rails-hr"), n.height = Math.max(parseFloat(a.opt.cursorwidth), d.outerHeight()), n.css({ height: n.height + "px", zIndex: a.zindex, background: a.opt.background }), n.append(d), n.visibility = !0, n.scrollable = !0, n.align = "top" == a.opt.railvalign ?
    0 : 1, a.railh = n, a.railh.drag = !1); a.ispage ? (m.css({ position: "fixed", top: 0, height: "100%" }), m.align ? m.css({ right: 0 }) : m.css({ left: 0 }), a.body.append(m), a.railh && (n.css({ position: "fixed", left: 0, width: "100%" }), n.align ? n.css({ bottom: 0 }) : n.css({ top: 0 }), a.body.append(n))) : (a.ishwscroll ? ("static" == a.win.css("position") && a.css(a.win, { position: "relative" }), c = "HTML" == a.win[0].nodeName ? a.body : a.win, f(c).scrollTop(0).scrollLeft(0), a.zoom && (a.zoom.css({ position: "absolute", top: 1, right: 0, "margin-right": m.width + 4 }), c.append(a.zoom)),
    m.css({ position: "absolute", top: 0 }), m.align ? m.css({ right: 0 }) : m.css({ left: 0 }), c.append(m), n && (n.css({ position: "absolute", left: 0, bottom: 0 }), n.align ? n.css({ bottom: 0 }) : n.css({ top: 0 }), c.append(n))) : (a.isfixed = "fixed" == a.win.css("position"), c = a.isfixed ? "fixed" : "absolute", a.isfixed || (a.viewport = a.getViewport(a.win[0])), a.viewport && (a.body = a.viewport, 0 == /fixed|absolute/.test(a.viewport.css("position")) && a.css(a.viewport, { position: "relative" })), m.css({ position: c }), a.zoom && a.zoom.css({ position: c }), a.updateScrollBar(),
    a.body.append(m), a.zoom && a.body.append(a.zoom), a.railh && (n.css({ position: c }), a.body.append(n))), e.isios && a.css(a.win, { "-webkit-tap-highlight-color": "rgba(0,0,0,0)", "-webkit-touch-callout": "none" }), e.isie && a.opt.disableoutline && a.win.attr("hideFocus", "true"), e.iswebkit && a.opt.disableoutline && a.win.css("outline", "none")); !1 === a.opt.autohidemode ? (a.autohidedom = !1, a.rail.css({ opacity: a.opt.cursoropacitymax }), a.railh && a.railh.css({ opacity: a.opt.cursoropacitymax })) : !0 === a.opt.autohidemode || "leave" === a.opt.autohidemode ?
    (a.autohidedom = f().add(a.rail), e.isie8 && (a.autohidedom = a.autohidedom.add(a.cursor)), a.railh && (a.autohidedom = a.autohidedom.add(a.railh)), a.railh && e.isie8 && (a.autohidedom = a.autohidedom.add(a.cursorh))) : "scroll" == a.opt.autohidemode ? (a.autohidedom = f().add(a.rail), a.railh && (a.autohidedom = a.autohidedom.add(a.railh))) : "cursor" == a.opt.autohidemode ? (a.autohidedom = f().add(a.cursor), a.railh && (a.autohidedom = a.autohidedom.add(a.cursorh))) : "hidden" == a.opt.autohidemode && (a.autohidedom = !1, a.hide(), a.railslocked =
    !1); if (e.isie9mobile) a.scrollmom = new M(a), a.onmangotouch = function () {
        var b = a.getScrollTop(), c = a.getScrollLeft(); if (b == a.scrollmom.lastscrolly && c == a.scrollmom.lastscrollx) return !0; var g = b - a.mangotouch.sy, d = c - a.mangotouch.sx; if (0 != Math.round(Math.sqrt(Math.pow(d, 2) + Math.pow(g, 2)))) {
            var e = 0 > g ? -1 : 1, f = 0 > d ? -1 : 1, u = +new Date; a.mangotouch.lazy && clearTimeout(a.mangotouch.lazy); 80 < u - a.mangotouch.tm || a.mangotouch.dry != e || a.mangotouch.drx != f ? (a.scrollmom.stop(), a.scrollmom.reset(c, b), a.mangotouch.sy = b, a.mangotouch.ly =
            b, a.mangotouch.sx = c, a.mangotouch.lx = c, a.mangotouch.dry = e, a.mangotouch.drx = f, a.mangotouch.tm = u) : (a.scrollmom.stop(), a.scrollmom.update(a.mangotouch.sx - d, a.mangotouch.sy - g), a.mangotouch.tm = u, g = Math.max(Math.abs(a.mangotouch.ly - b), Math.abs(a.mangotouch.lx - c)), a.mangotouch.ly = b, a.mangotouch.lx = c, 2 < g && (a.mangotouch.lazy = setTimeout(function () { a.mangotouch.lazy = !1; a.mangotouch.dry = 0; a.mangotouch.drx = 0; a.mangotouch.tm = 0; a.scrollmom.doMomentum(30) }, 100)))
        }
    }, m = a.getScrollTop(), n = a.getScrollLeft(), a.mangotouch =
    { sy: m, ly: m, dry: 0, sx: n, lx: n, drx: 0, lazy: !1, tm: 0 }, a.bind(a.docscroll, "scroll", a.onmangotouch); else {
        if (e.cantouch || a.istouchcapable || a.opt.touchbehavior || e.hasmstouch) {
            a.scrollmom = new M(a); a.ontouchstart = function (b) {
                if (b.pointerType && 2 != b.pointerType && "touch" != b.pointerType) return !1; a.hasmoving = !1; if (!a.railslocked) {
                    var c; if (e.hasmstouch) for (c = b.target ? b.target : !1; c;) {
                        var g = f(c).getNiceScroll(); if (0 < g.length && g[0].me == a.me) break; if (0 < g.length) return !1; if ("DIV" == c.nodeName && c.id == a.id) break; c = c.parentNode ?
                        c.parentNode : !1
                    } a.cancelScroll(); if ((c = a.getTarget(b)) && /INPUT/i.test(c.nodeName) && /range/i.test(c.type)) return a.stopPropagation(b); !("clientX" in b) && "changedTouches" in b && (b.clientX = b.changedTouches[0].clientX, b.clientY = b.changedTouches[0].clientY); a.forcescreen && (g = b, b = { original: b.original ? b.original : b }, b.clientX = g.screenX, b.clientY = g.screenY); a.rail.drag = { x: b.clientX, y: b.clientY, sx: a.scroll.x, sy: a.scroll.y, st: a.getScrollTop(), sl: a.getScrollLeft(), pt: 2, dl: !1 }; if (a.ispage || !a.opt.directionlockdeadzone) a.rail.drag.dl =
                    "f"; else { var g = f(window).width(), d = f(window).height(), d = Math.max(0, Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - d), g = Math.max(0, Math.max(document.body.scrollWidth, document.documentElement.scrollWidth) - g); a.rail.drag.ck = !a.rail.scrollable && a.railh.scrollable ? 0 < d ? "v" : !1 : a.rail.scrollable && !a.railh.scrollable ? 0 < g ? "h" : !1 : !1; a.rail.drag.ck || (a.rail.drag.dl = "f") } a.opt.touchbehavior && a.isiframe && e.isie && (g = a.win.position(), a.rail.drag.x += g.left, a.rail.drag.y += g.top); a.hasmoving =
                    !1; a.lastmouseup = !1; a.scrollmom.reset(b.clientX, b.clientY); if (!e.cantouch && !this.istouchcapable && !b.pointerType) { if (!c || !/INPUT|SELECT|TEXTAREA/i.test(c.nodeName)) return !a.ispage && e.hasmousecapture && c.setCapture(), a.opt.touchbehavior ? (c.onclick && !c._onclick && (c._onclick = c.onclick, c.onclick = function (b) { if (a.hasmoving) return !1; c._onclick.call(this, b) }), a.cancelEvent(b)) : a.stopPropagation(b); /SUBMIT|CANCEL|BUTTON/i.test(f(c).attr("type")) && (pc = { tg: c, click: !1 }, a.preventclick = pc) }
                }
            }; a.ontouchend = function (b) {
                if (!a.rail.drag) return !0;
                if (2 == a.rail.drag.pt) { if (b.pointerType && 2 != b.pointerType && "touch" != b.pointerType) return !1; a.scrollmom.doMomentum(); a.rail.drag = !1; if (a.hasmoving && (a.lastmouseup = !0, a.hideCursor(), e.hasmousecapture && document.releaseCapture(), !e.cantouch)) return a.cancelEvent(b) } else if (1 == a.rail.drag.pt) return a.onmouseup(b)
            }; var q = a.opt.touchbehavior && a.isiframe && !e.hasmousecapture; a.ontouchmove = function (b, c) {
                if (!a.rail.drag || b.targetTouches && a.opt.preventmultitouchscrolling && 1 < b.targetTouches.length || b.pointerType &&
                2 != b.pointerType && "touch" != b.pointerType) return !1; if (2 == a.rail.drag.pt) {
                    if (e.cantouch && e.isios && void 0 === b.original) return !0; a.hasmoving = !0; a.preventclick && !a.preventclick.click && (a.preventclick.click = a.preventclick.tg.onclick || !1, a.preventclick.tg.onclick = a.onpreventclick); b = f.extend({ original: b }, b); "changedTouches" in b && (b.clientX = b.changedTouches[0].clientX, b.clientY = b.changedTouches[0].clientY); if (a.forcescreen) { var g = b; b = { original: b.original ? b.original : b }; b.clientX = g.screenX; b.clientY = g.screenY } var d,
                    g = d = 0; q && !c && (d = a.win.position(), g = -d.left, d = -d.top); var u = b.clientY + d; d = u - a.rail.drag.y; var m = b.clientX + g, k = m - a.rail.drag.x, h = a.rail.drag.st - d; a.ishwscroll && a.opt.bouncescroll ? 0 > h ? h = Math.round(h / 2) : h > a.page.maxh && (h = a.page.maxh + Math.round((h - a.page.maxh) / 2)) : (0 > h && (u = h = 0), h > a.page.maxh && (h = a.page.maxh, u = 0)); var l; a.railh && a.railh.scrollable && (l = a.isrtlmode ? k - a.rail.drag.sl : a.rail.drag.sl - k, a.ishwscroll && a.opt.bouncescroll ? 0 > l ? l = Math.round(l / 2) : l > a.page.maxw && (l = a.page.maxw + Math.round((l - a.page.maxw) /
                    2)) : (0 > l && (m = l = 0), l > a.page.maxw && (l = a.page.maxw, m = 0))); g = !1; if (a.rail.drag.dl) g = !0, "v" == a.rail.drag.dl ? l = a.rail.drag.sl : "h" == a.rail.drag.dl && (h = a.rail.drag.st); else { d = Math.abs(d); var k = Math.abs(k), C = a.opt.directionlockdeadzone; if ("v" == a.rail.drag.ck) { if (d > C && k <= .3 * d) return a.rail.drag = !1, !0; k > C && (a.rail.drag.dl = "f", f("body").scrollTop(f("body").scrollTop())) } else if ("h" == a.rail.drag.ck) { if (k > C && d <= .3 * k) return a.rail.drag = !1, !0; d > C && (a.rail.drag.dl = "f", f("body").scrollLeft(f("body").scrollLeft())) } } a.synched("touchmove",
                    function () { a.rail.drag && 2 == a.rail.drag.pt && (a.prepareTransition && a.prepareTransition(0), a.rail.scrollable && a.setScrollTop(h), a.scrollmom.update(m, u), a.railh && a.railh.scrollable ? (a.setScrollLeft(l), a.showCursor(h, l)) : a.showCursor(h), e.isie10 && document.selection.clear()) }); e.ischrome && a.istouchcapable && (g = !1); if (g) return a.cancelEvent(b)
                } else if (1 == a.rail.drag.pt) return a.onmousemove(b)
            }
        } a.onmousedown = function (b, c) {
            if (!a.rail.drag || 1 == a.rail.drag.pt) {
                if (a.railslocked) return a.cancelEvent(b); a.cancelScroll();
                a.rail.drag = { x: b.clientX, y: b.clientY, sx: a.scroll.x, sy: a.scroll.y, pt: 1, hr: !!c }; var g = a.getTarget(b); !a.ispage && e.hasmousecapture && g.setCapture(); a.isiframe && !e.hasmousecapture && (a.saved.csspointerevents = a.doc.css("pointer-events"), a.css(a.doc, { "pointer-events": "none" })); a.hasmoving = !1; return a.cancelEvent(b)
            }
        }; a.onmouseup = function (b) {
            if (a.rail.drag) {
                if (1 != a.rail.drag.pt) return !0; e.hasmousecapture && document.releaseCapture(); a.isiframe && !e.hasmousecapture && a.doc.css("pointer-events", a.saved.csspointerevents);
                a.rail.drag = !1; a.hasmoving && a.triggerScrollEnd(); return a.cancelEvent(b)
            }
        }; a.onmousemove = function (b) {
            if (a.rail.drag) {
                if (1 == a.rail.drag.pt) {
                    if (e.ischrome && 0 == b.which) return a.onmouseup(b); a.cursorfreezed = !0; a.hasmoving = !0; if (a.rail.drag.hr) { a.scroll.x = a.rail.drag.sx + (b.clientX - a.rail.drag.x); 0 > a.scroll.x && (a.scroll.x = 0); var c = a.scrollvaluemaxw; a.scroll.x > c && (a.scroll.x = c) } else a.scroll.y = a.rail.drag.sy + (b.clientY - a.rail.drag.y), 0 > a.scroll.y && (a.scroll.y = 0), c = a.scrollvaluemax, a.scroll.y > c && (a.scroll.y =
                    c); a.synched("mousemove", function () { a.rail.drag && 1 == a.rail.drag.pt && (a.showCursor(), a.rail.drag.hr ? a.hasreversehr ? a.doScrollLeft(a.scrollvaluemaxw - Math.round(a.scroll.x * a.scrollratio.x), a.opt.cursordragspeed) : a.doScrollLeft(Math.round(a.scroll.x * a.scrollratio.x), a.opt.cursordragspeed) : a.doScrollTop(Math.round(a.scroll.y * a.scrollratio.y), a.opt.cursordragspeed)) }); return a.cancelEvent(b)
                }
            } else a.checkarea = 0
        }; if (e.cantouch || a.opt.touchbehavior) a.onpreventclick = function (b) {
            if (a.preventclick) return a.preventclick.tg.onclick =
            a.preventclick.click, a.preventclick = !1, a.cancelEvent(b)
        }, a.bind(a.win, "mousedown", a.ontouchstart), a.onclick = e.isios ? !1 : function (b) { return a.lastmouseup ? (a.lastmouseup = !1, a.cancelEvent(b)) : !0 }, a.opt.grabcursorenabled && e.cursorgrabvalue && (a.css(a.ispage ? a.doc : a.win, { cursor: e.cursorgrabvalue }), a.css(a.rail, { cursor: e.cursorgrabvalue })); else {
            var r = function (b) {
                if (a.selectiondrag) {
                    if (b) { var c = a.win.outerHeight(); b = b.pageY - a.selectiondrag.top; 0 < b && b < c && (b = 0); b >= c && (b -= c); a.selectiondrag.df = b } 0 != a.selectiondrag.df &&
                    (a.doScrollBy(2 * -Math.floor(a.selectiondrag.df / 6)), a.debounced("doselectionscroll", function () { r() }, 50))
                }
            }; a.hasTextSelected = "getSelection" in document ? function () { return 0 < document.getSelection().rangeCount } : "selection" in document ? function () { return "None" != document.selection.type } : function () { return !1 }; a.onselectionstart = function (b) { a.ispage || (a.selectiondrag = a.win.offset()) }; a.onselectionend = function (b) { a.selectiondrag = !1 }; a.onselectiondrag = function (b) {
                a.selectiondrag && a.hasTextSelected() && a.debounced("selectionscroll",
                function () { r(b) }, 250)
            }
        } e.hasw3ctouch ? (a.css(a.rail, { "touch-action": "none" }), a.css(a.cursor, { "touch-action": "none" }), a.bind(a.win, "pointerdown", a.ontouchstart), a.bind(document, "pointerup", a.ontouchend), a.bind(document, "pointermove", a.ontouchmove)) : e.hasmstouch ? (a.css(a.rail, { "-ms-touch-action": "none" }), a.css(a.cursor, { "-ms-touch-action": "none" }), a.bind(a.win, "MSPointerDown", a.ontouchstart), a.bind(document, "MSPointerUp", a.ontouchend), a.bind(document, "MSPointerMove", a.ontouchmove), a.bind(a.cursor, "MSGestureHold",
        function (a) { a.preventDefault() }), a.bind(a.cursor, "contextmenu", function (a) { a.preventDefault() })) : this.istouchcapable && (a.bind(a.win, "touchstart", a.ontouchstart), a.bind(document, "touchend", a.ontouchend), a.bind(document, "touchcancel", a.ontouchend), a.bind(document, "touchmove", a.ontouchmove)); if (a.opt.cursordragontouch || !e.cantouch && !a.opt.touchbehavior) a.rail.css({ cursor: "default" }), a.railh && a.railh.css({ cursor: "default" }), a.jqbind(a.rail, "mouseenter", function () {
            if (!a.ispage && !a.win.is(":visible")) return !1;
            a.canshowonmouseevent && a.showCursor(); a.rail.active = !0
        }), a.jqbind(a.rail, "mouseleave", function () { a.rail.active = !1; a.rail.drag || a.hideCursor() }), a.opt.sensitiverail && (a.bind(a.rail, "click", function (b) { a.doRailClick(b, !1, !1) }), a.bind(a.rail, "dblclick", function (b) { a.doRailClick(b, !0, !1) }), a.bind(a.cursor, "click", function (b) { a.cancelEvent(b) }), a.bind(a.cursor, "dblclick", function (b) { a.cancelEvent(b) })), a.railh && (a.jqbind(a.railh, "mouseenter", function () {
            if (!a.ispage && !a.win.is(":visible")) return !1; a.canshowonmouseevent &&
            a.showCursor(); a.rail.active = !0
        }), a.jqbind(a.railh, "mouseleave", function () { a.rail.active = !1; a.rail.drag || a.hideCursor() }), a.opt.sensitiverail && (a.bind(a.railh, "click", function (b) { a.doRailClick(b, !1, !0) }), a.bind(a.railh, "dblclick", function (b) { a.doRailClick(b, !0, !0) }), a.bind(a.cursorh, "click", function (b) { a.cancelEvent(b) }), a.bind(a.cursorh, "dblclick", function (b) { a.cancelEvent(b) }))); e.cantouch || a.opt.touchbehavior ? (a.bind(e.hasmousecapture ? a.win : document, "mouseup", a.ontouchend), a.bind(document, "mousemove",
        a.ontouchmove), a.onclick && a.bind(document, "click", a.onclick), a.opt.cursordragontouch ? (a.bind(a.cursor, "mousedown", a.onmousedown), a.bind(a.cursor, "mouseup", a.onmouseup), a.cursorh && a.bind(a.cursorh, "mousedown", function (b) { a.onmousedown(b, !0) }), a.cursorh && a.bind(a.cursorh, "mouseup", a.onmouseup)) : (a.bind(a.rail, "mousedown", function (a) { a.preventDefault() }), a.railh && a.bind(a.railh, "mousedown", function (a) { a.preventDefault() }))) : (a.bind(e.hasmousecapture ? a.win : document, "mouseup", a.onmouseup), a.bind(document,
        "mousemove", a.onmousemove), a.onclick && a.bind(document, "click", a.onclick), a.bind(a.cursor, "mousedown", a.onmousedown), a.bind(a.cursor, "mouseup", a.onmouseup), a.railh && (a.bind(a.cursorh, "mousedown", function (b) { a.onmousedown(b, !0) }), a.bind(a.cursorh, "mouseup", a.onmouseup)), !a.ispage && a.opt.enablescrollonselection && (a.bind(a.win[0], "mousedown", a.onselectionstart), a.bind(document, "mouseup", a.onselectionend), a.bind(a.cursor, "mouseup", a.onselectionend), a.cursorh && a.bind(a.cursorh, "mouseup", a.onselectionend),
        a.bind(document, "mousemove", a.onselectiondrag)), a.zoom && (a.jqbind(a.zoom, "mouseenter", function () { a.canshowonmouseevent && a.showCursor(); a.rail.active = !0 }), a.jqbind(a.zoom, "mouseleave", function () { a.rail.active = !1; a.rail.drag || a.hideCursor() }))); a.opt.enablemousewheel && (a.isiframe || a.mousewheel(e.isie && a.ispage ? document : a.win, a.onmousewheel), a.mousewheel(a.rail, a.onmousewheel), a.railh && a.mousewheel(a.railh, a.onmousewheelhr)); a.ispage || e.cantouch || /HTML|^BODY/.test(a.win[0].nodeName) || (a.win.attr("tabindex") ||
        a.win.attr({ tabindex: O++ }), a.jqbind(a.win, "focus", function (b) { B = a.getTarget(b).id || !0; a.hasfocus = !0; a.canshowonmouseevent && a.noticeCursor() }), a.jqbind(a.win, "blur", function (b) { B = !1; a.hasfocus = !1 }), a.jqbind(a.win, "mouseenter", function (b) { F = a.getTarget(b).id || !0; a.hasmousefocus = !0; a.canshowonmouseevent && a.noticeCursor() }), a.jqbind(a.win, "mouseleave", function () { F = !1; a.hasmousefocus = !1; a.rail.drag || a.hideCursor() }))
    } a.onkeypress = function (b) {
        if (a.railslocked && 0 == a.page.maxh) return !0; b = b ? b : window.e; var c =
        a.getTarget(b); if (c && /INPUT|TEXTAREA|SELECT|OPTION/.test(c.nodeName) && (!c.getAttribute("type") && !c.type || !/submit|button|cancel/i.tp) || f(c).attr("contenteditable")) return !0; if (a.hasfocus || a.hasmousefocus && !B || a.ispage && !B && !F) {
            c = b.keyCode; if (a.railslocked && 27 != c) return a.cancelEvent(b); var g = b.ctrlKey || !1, d = b.shiftKey || !1, e = !1; switch (c) {
                case 38: case 63233: a.doScrollBy(72); e = !0; break; case 40: case 63235: a.doScrollBy(-72); e = !0; break; case 37: case 63232: a.railh && (g ? a.doScrollLeft(0) : a.doScrollLeftBy(72),
                e = !0); break; case 39: case 63234: a.railh && (g ? a.doScrollLeft(a.page.maxw) : a.doScrollLeftBy(-72), e = !0); break; case 33: case 63276: a.doScrollBy(a.view.h); e = !0; break; case 34: case 63277: a.doScrollBy(-a.view.h); e = !0; break; case 36: case 63273: a.railh && g ? a.doScrollPos(0, 0) : a.doScrollTo(0); e = !0; break; case 35: case 63275: a.railh && g ? a.doScrollPos(a.page.maxw, a.page.maxh) : a.doScrollTo(a.page.maxh); e = !0; break; case 32: a.opt.spacebarenabled && (d ? a.doScrollBy(a.view.h) : a.doScrollBy(-a.view.h), e = !0); break; case 27: a.zoomactive &&
                (a.doZoom(), e = !0)
            } if (e) return a.cancelEvent(b)
        }
    }; a.opt.enablekeyboard && a.bind(document, e.isopera && !e.isopera12 ? "keypress" : "keydown", a.onkeypress); a.bind(document, "keydown", function (b) { b.ctrlKey && (a.wheelprevented = !0) }); a.bind(document, "keyup", function (b) { b.ctrlKey || (a.wheelprevented = !1) }); a.bind(window, "blur", function (b) { a.wheelprevented = !1 }); a.bind(window, "resize", a.lazyResize); a.bind(window, "orientationchange", a.lazyResize); a.bind(window, "load", a.lazyResize); if (e.ischrome && !a.ispage && !a.haswrapper) {
        var t =
        a.win.attr("style"), m = parseFloat(a.win.css("width")) + 1; a.win.css("width", m); a.synched("chromefix", function () { a.win.attr("style", t) })
    } a.onAttributeChange = function (b) { a.lazyResize(a.isieold ? 250 : 30) }; a.isie11 || !1 === x || (a.observerbody = new x(function (b) { b.forEach(function (b) { if ("attributes" == b.type) return f("body").hasClass("modal-open") && f("body").hasClass("modal-dialog") && !f.contains(f(".modal-dialog")[0], a.doc[0]) ? a.hide() : a.show() }); if (document.body.scrollHeight != a.page.maxh) return a.lazyResize(30) }),
    a.observerbody.observe(document.body, { childList: !0, subtree: !0, characterData: !1, attributes: !0, attributeFilter: ["class"] })); a.ispage || a.haswrapper || (!1 !== x ? (a.observer = new x(function (b) { b.forEach(a.onAttributeChange) }), a.observer.observe(a.win[0], { childList: !0, characterData: !1, attributes: !0, subtree: !1 }), a.observerremover = new x(function (b) { b.forEach(function (b) { if (0 < b.removedNodes.length) for (var c in b.removedNodes) if (a && b.removedNodes[c] == a.win[0]) return a.remove() }) }), a.observerremover.observe(a.win[0].parentNode,
    { childList: !0, characterData: !1, attributes: !1, subtree: !1 })) : (a.bind(a.win, e.isie && !e.isie9 ? "propertychange" : "DOMAttrModified", a.onAttributeChange), e.isie9 && a.win[0].attachEvent("onpropertychange", a.onAttributeChange), a.bind(a.win, "DOMNodeRemoved", function (b) { b.target == a.win[0] && a.remove() }))); !a.ispage && a.opt.boxzoom && a.bind(window, "resize", a.resizeZoom); a.istextarea && (a.bind(a.win, "keydown", a.lazyResize), a.bind(a.win, "mouseup", a.lazyResize)); a.lazyResize(30)
} if ("IFRAME" == this.doc[0].nodeName) {
    var N =
    function () {
        a.iframexd = !1; var c; try { c = "contentDocument" in this ? this.contentDocument : this.contentWindow.document } catch (g) { a.iframexd = !0, c = !1 } if (a.iframexd) return "console" in window && console.log("NiceScroll error: policy restriced iframe"), !0; a.forcescreen = !0; a.isiframe && (a.iframe = { doc: f(c), html: a.doc.contents().find("html")[0], body: a.doc.contents().find("body")[0] }, a.getContentSize = function () {
            return {
                w: Math.max(a.iframe.html.scrollWidth, a.iframe.body.scrollWidth), h: Math.max(a.iframe.html.scrollHeight,
                a.iframe.body.scrollHeight)
            }
        }, a.docscroll = f(a.iframe.body)); if (!e.isios && a.opt.iframeautoresize && !a.isiframe) { a.win.scrollTop(0); a.doc.height(""); var d = Math.max(c.getElementsByTagName("html")[0].scrollHeight, c.body.scrollHeight); a.doc.height(d) } a.lazyResize(30); e.isie7 && a.css(f(a.iframe.html), b); a.css(f(a.iframe.body), b); e.isios && a.haswrapper && a.css(f(c.body), { "-webkit-transform": "translate3d(0,0,0)" }); "contentWindow" in this ? a.bind(this.contentWindow, "scroll", a.onscroll) : a.bind(c, "scroll", a.onscroll);
        a.opt.enablemousewheel && a.mousewheel(c, a.onmousewheel); a.opt.enablekeyboard && a.bind(c, e.isopera ? "keypress" : "keydown", a.onkeypress); if (e.cantouch || a.opt.touchbehavior) a.bind(c, "mousedown", a.ontouchstart), a.bind(c, "mousemove", function (b) { return a.ontouchmove(b, !0) }), a.opt.grabcursorenabled && e.cursorgrabvalue && a.css(f(c.body), { cursor: e.cursorgrabvalue }); a.bind(c, "mouseup", a.ontouchend); a.zoom && (a.opt.dblclickzoom && a.bind(c, "dblclick", a.doZoom), a.ongesturezoom && a.bind(c, "gestureend", a.ongesturezoom))
    };
    this.doc[0].readyState && "complete" == this.doc[0].readyState && setTimeout(function () { N.call(a.doc[0], !1) }, 500); a.bind(this.doc, "load", N)
}
        }; this.showCursor = function (b, c) {
            a.cursortimeout && (clearTimeout(a.cursortimeout), a.cursortimeout = 0); if (a.rail) {
                a.autohidedom && (a.autohidedom.stop().css({ opacity: a.opt.cursoropacitymax }), a.cursoractive = !0); a.rail.drag && 1 == a.rail.drag.pt || (void 0 !== b && !1 !== b && (a.scroll.y = Math.round(1 * b / a.scrollratio.y)), void 0 !== c && (a.scroll.x = Math.round(1 * c / a.scrollratio.x))); a.cursor.css({
                    height: a.cursorheight,
                    top: a.scroll.y
                }); if (a.cursorh) { var d = a.hasreversehr ? a.scrollvaluemaxw - a.scroll.x : a.scroll.x; !a.rail.align && a.rail.visibility ? a.cursorh.css({ width: a.cursorwidth, left: d + a.rail.width }) : a.cursorh.css({ width: a.cursorwidth, left: d }); a.cursoractive = !0 } a.zoom && a.zoom.stop().css({ opacity: a.opt.cursoropacitymax })
            }
        }; this.hideCursor = function (b) {
            a.cursortimeout || !a.rail || !a.autohidedom || a.hasmousefocus && "leave" == a.opt.autohidemode || (a.cursortimeout = setTimeout(function () {
                a.rail.active && a.showonmouseevent || (a.autohidedom.stop().animate({ opacity: a.opt.cursoropacitymin }),
                a.zoom && a.zoom.stop().animate({ opacity: a.opt.cursoropacitymin }), a.cursoractive = !1); a.cursortimeout = 0
            }, b || a.opt.hidecursordelay))
        }; this.noticeCursor = function (b, c, d) { a.showCursor(c, d); a.rail.active || a.hideCursor(b) }; this.getContentSize = a.ispage ? function () { return { w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth), h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) } } : a.haswrapper ? function () {
            return {
                w: a.doc.outerWidth() + parseInt(a.win.css("paddingLeft")) +
                parseInt(a.win.css("paddingRight")), h: a.doc.outerHeight() + parseInt(a.win.css("paddingTop")) + parseInt(a.win.css("paddingBottom"))
            }
        } : function () { return { w: a.docscroll[0].scrollWidth, h: a.docscroll[0].scrollHeight } }; this.onResize = function (b, c) {
            if (!a || !a.win) return !1; if (!a.haswrapper && !a.ispage) { if ("none" == a.win.css("display")) return a.visibility && a.hideRail().hideRailHr(), !1; a.hidden || a.visibility || a.showRail().showRailHr() } var d = a.page.maxh, e = a.page.maxw, f = a.view.h, k = a.view.w; a.view = {
                w: a.ispage ? a.win.width() :
                parseInt(a.win[0].clientWidth), h: a.ispage ? a.win.height() : parseInt(a.win[0].clientHeight)
            }; a.page = c ? c : a.getContentSize(); a.page.maxh = Math.max(0, a.page.h - a.view.h); a.page.maxw = Math.max(0, a.page.w - a.view.w); if (a.page.maxh == d && a.page.maxw == e && a.view.w == k && a.view.h == f) { if (a.ispage) return a; d = a.win.offset(); if (a.lastposition && (e = a.lastposition, e.top == d.top && e.left == d.left)) return a; a.lastposition = d } 0 == a.page.maxh ? (a.hideRail(), a.scrollvaluemax = 0, a.scroll.y = 0, a.scrollratio.y = 0, a.cursorheight = 0, a.setScrollTop(0),
            a.rail && (a.rail.scrollable = !1)) : (a.page.maxh -= a.opt.railpadding.top + a.opt.railpadding.bottom, a.rail.scrollable = !0); 0 == a.page.maxw ? (a.hideRailHr(), a.scrollvaluemaxw = 0, a.scroll.x = 0, a.scrollratio.x = 0, a.cursorwidth = 0, a.setScrollLeft(0), a.railh && (a.railh.scrollable = !1)) : (a.page.maxw -= a.opt.railpadding.left + a.opt.railpadding.right, a.railh && (a.railh.scrollable = a.opt.horizrailenabled)); a.railslocked = a.locked || 0 == a.page.maxh && 0 == a.page.maxw; if (a.railslocked) return a.ispage || a.updateScrollBar(a.view), !1; a.hidden ||
            a.visibility ? !a.railh || a.hidden || a.railh.visibility || a.showRailHr() : a.showRail().showRailHr(); a.istextarea && a.win.css("resize") && "none" != a.win.css("resize") && (a.view.h -= 20); a.cursorheight = Math.min(a.view.h, Math.round(a.view.h / a.page.h * a.view.h)); a.cursorheight = a.opt.cursorfixedheight ? a.opt.cursorfixedheight : Math.max(a.opt.cursorminheight, a.cursorheight); a.cursorwidth = Math.min(a.view.w, Math.round(a.view.w / a.page.w * a.view.w)); a.cursorwidth = a.opt.cursorfixedheight ? a.opt.cursorfixedheight : Math.max(a.opt.cursorminheight,
            a.cursorwidth); a.scrollvaluemax = a.view.h - a.cursorheight - a.cursor.hborder - (a.opt.railpadding.top + a.opt.railpadding.bottom); a.railh && (a.railh.width = 0 < a.page.maxh ? a.view.w - a.rail.width : a.view.w, a.scrollvaluemaxw = a.railh.width - a.cursorwidth - a.cursorh.wborder - (a.opt.railpadding.left + a.opt.railpadding.right)); a.ispage || a.updateScrollBar(a.view); a.scrollratio = { x: a.page.maxw / a.scrollvaluemaxw, y: a.page.maxh / a.scrollvaluemax }; a.getScrollTop() > a.page.maxh ? a.doScrollTop(a.page.maxh) : (a.scroll.y = Math.round(a.getScrollTop() *
            (1 / a.scrollratio.y)), a.scroll.x = Math.round(a.getScrollLeft() * (1 / a.scrollratio.x)), a.cursoractive && a.noticeCursor()); a.scroll.y && 0 == a.getScrollTop() && a.doScrollTo(Math.floor(a.scroll.y * a.scrollratio.y)); return a
        }; this.resize = a.onResize; this.hlazyresize = 0; this.lazyResize = function (b) { a.haswrapper || a.hide(); a.hlazyresize && clearTimeout(a.hlazyresize); a.hlazyresize = setTimeout(function () { a && a.show().resize() }, 240); return a }; this.jqbind = function (b, c, d) { a.events.push({ e: b, n: c, f: d, q: !0 }); f(b).bind(c, d) }; this.mousewheel =
        function (b, c, d) { b = "jquery" in b ? b[0] : b; if ("onwheel" in document.createElement("div")) a._bind(b, "wheel", c, d || !1); else { var e = void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll"; q(b, e, c, d || !1); "DOMMouseScroll" == e && q(b, "MozMousePixelScroll", c, d || !1) } }; e.haseventlistener ? (this.bind = function (b, c, d, e) { a._bind("jquery" in b ? b[0] : b, c, d, e || !1) }, this._bind = function (b, c, d, e) { a.events.push({ e: b, n: c, f: d, b: e, q: !1 }); b.addEventListener(c, d, e || !1) }, this.cancelEvent = function (a) {
            if (!a) return !1; a = a.original ? a.original :
            a; a.cancelable && a.preventDefault(); a.stopPropagation(); a.preventManipulation && a.preventManipulation(); return !1
        }, this.stopPropagation = function (a) { if (!a) return !1; a = a.original ? a.original : a; a.stopPropagation(); return !1 }, this._unbind = function (a, c, d, e) { a.removeEventListener(c, d, e) }) : (this.bind = function (b, c, d, e) {
            var f = "jquery" in b ? b[0] : b; a._bind(f, c, function (b) {
                (b = b || window.event || !1) && b.srcElement && (b.target = b.srcElement); "pageY" in b || (b.pageX = b.clientX + document.documentElement.scrollLeft, b.pageY = b.clientY +
                document.documentElement.scrollTop); return !1 === d.call(f, b) || !1 === e ? a.cancelEvent(b) : !0
            })
        }, this._bind = function (b, c, d, e) { a.events.push({ e: b, n: c, f: d, b: e, q: !1 }); b.attachEvent ? b.attachEvent("on" + c, d) : b["on" + c] = d }, this.cancelEvent = function (a) { a = window.event || !1; if (!a) return !1; a.cancelBubble = !0; a.cancel = !0; return a.returnValue = !1 }, this.stopPropagation = function (a) { a = window.event || !1; if (!a) return !1; a.cancelBubble = !0; return !1 }, this._unbind = function (a, c, d, e) { a.detachEvent ? a.detachEvent("on" + c, d) : a["on" + c] = !1 });
        this.unbindAll = function () { for (var b = 0; b < a.events.length; b++) { var c = a.events[b]; c.q ? c.e.unbind(c.n, c.f) : a._unbind(c.e, c.n, c.f, c.b) } }; this.showRail = function () { 0 == a.page.maxh || !a.ispage && "none" == a.win.css("display") || (a.visibility = !0, a.rail.visibility = !0, a.rail.css("display", "block")); return a }; this.showRailHr = function () { if (!a.railh) return a; 0 == a.page.maxw || !a.ispage && "none" == a.win.css("display") || (a.railh.visibility = !0, a.railh.css("display", "block")); return a }; this.hideRail = function () {
            a.visibility =
            !1; a.rail.visibility = !1; a.rail.css("display", "none"); return a
        }; this.hideRailHr = function () { if (!a.railh) return a; a.railh.visibility = !1; a.railh.css("display", "none"); return a }; this.show = function () { a.hidden = !1; a.railslocked = !1; return a.showRail().showRailHr() }; this.hide = function () { a.hidden = !0; a.railslocked = !0; return a.hideRail().hideRailHr() }; this.toggle = function () { return a.hidden ? a.show() : a.hide() }; this.remove = function () {
            a.stop(); a.cursortimeout && clearTimeout(a.cursortimeout); for (var b in a.delaylist) a.delaylist[b] &&
            w(a.delaylist[b].h); a.doZoomOut(); a.unbindAll(); e.isie9 && a.win[0].detachEvent("onpropertychange", a.onAttributeChange); !1 !== a.observer && a.observer.disconnect(); !1 !== a.observerremover && a.observerremover.disconnect(); !1 !== a.observerbody && a.observerbody.disconnect(); a.events = null; a.cursor && a.cursor.remove(); a.cursorh && a.cursorh.remove(); a.rail && a.rail.remove(); a.railh && a.railh.remove(); a.zoom && a.zoom.remove(); for (b = 0; b < a.saved.css.length; b++) { var c = a.saved.css[b]; c[0].css(c[1], void 0 === c[2] ? "" : c[2]) } a.saved =
            !1; a.me.data("__nicescroll", ""); var d = f.nicescroll; d.each(function (b) { if (this && this.id === a.id) { delete d[b]; for (var c = ++b; c < d.length; c++, b++) d[b] = d[c]; d.length--; d.length && delete d[d.length] } }); for (var k in a) a[k] = null, delete a[k]; a = null
        }; this.scrollstart = function (b) { this.onscrollstart = b; return a }; this.scrollend = function (b) { this.onscrollend = b; return a }; this.scrollcancel = function (b) { this.onscrollcancel = b; return a }; this.zoomin = function (b) { this.onzoomin = b; return a }; this.zoomout = function (b) {
            this.onzoomout =
            b; return a
        }; this.isScrollable = function (a) { a = a.target ? a.target : a; if ("OPTION" == a.nodeName) return !0; for (; a && 1 == a.nodeType && !/^BODY|HTML/.test(a.nodeName) ;) { var c = f(a), c = c.css("overflowY") || c.css("overflowX") || c.css("overflow") || ""; if (/scroll|auto/.test(c)) return a.clientHeight != a.scrollHeight; a = a.parentNode ? a.parentNode : !1 } return !1 }; this.getViewport = function (a) {
            for (a = a && a.parentNode ? a.parentNode : !1; a && 1 == a.nodeType && !/^BODY|HTML/.test(a.nodeName) ;) {
                var c = f(a); if (/fixed|absolute/.test(c.css("position"))) return c;
                var d = c.css("overflowY") || c.css("overflowX") || c.css("overflow") || ""; if (/scroll|auto/.test(d) && a.clientHeight != a.scrollHeight || 0 < c.getNiceScroll().length) return c; a = a.parentNode ? a.parentNode : !1
            } return !1
        }; this.triggerScrollEnd = function () { if (a.onscrollend) { var b = a.getScrollLeft(), c = a.getScrollTop(); a.onscrollend.call(a, { type: "scrollend", current: { x: b, y: c }, end: { x: b, y: c } }) } }; this.onmousewheel = function (b) {
            if (!a.wheelprevented) {
                if (a.railslocked) return a.debounced("checkunlock", a.resize, 250), !0; if (a.rail.drag) return a.cancelEvent(b);
                "auto" == a.opt.oneaxismousemode && 0 != b.deltaX && (a.opt.oneaxismousemode = !1); if (a.opt.oneaxismousemode && 0 == b.deltaX && !a.rail.scrollable) return a.railh && a.railh.scrollable ? a.onmousewheelhr(b) : !0; var c = +new Date, d = !1; a.opt.preservenativescrolling && a.checkarea + 600 < c && (a.nativescrollingarea = a.isScrollable(b), d = !0); a.checkarea = c; if (a.nativescrollingarea) return !0; if (b = t(b, !1, d)) a.checkarea = 0; return b
            }
        }; this.onmousewheelhr = function (b) {
            if (!a.wheelprevented) {
                if (a.railslocked || !a.railh.scrollable) return !0; if (a.rail.drag) return a.cancelEvent(b);
                var c = +new Date, d = !1; a.opt.preservenativescrolling && a.checkarea + 600 < c && (a.nativescrollingarea = a.isScrollable(b), d = !0); a.checkarea = c; return a.nativescrollingarea ? !0 : a.railslocked ? a.cancelEvent(b) : t(b, !0, d)
            }
        }; this.stop = function () { a.cancelScroll(); a.scrollmon && a.scrollmon.stop(); a.cursorfreezed = !1; a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y)); a.noticeCursor(); return a }; this.getTransitionSpeed = function (b) {
            b = Math.min(Math.round(10 * a.opt.scrollspeed), Math.round(b / 20 * a.opt.scrollspeed)); return 20 <
            b ? b : 0
        }; a.opt.smoothscroll ? a.ishwscroll && e.hastransition && a.opt.usetransition && a.opt.smoothscroll ? (this.prepareTransition = function (b, c) { var d = c ? 20 < b ? b : 0 : a.getTransitionSpeed(b), f = d ? e.prefixstyle + "transform " + d + "ms ease-out" : ""; a.lasttransitionstyle && a.lasttransitionstyle == f || (a.lasttransitionstyle = f, a.doc.css(e.transitionstyle, f)); return d }, this.doScrollLeft = function (b, c) { var d = a.scrollrunning ? a.newscrolly : a.getScrollTop(); a.doScrollPos(b, d, c) }, this.doScrollTop = function (b, c) {
            var d = a.scrollrunning ?
            a.newscrollx : a.getScrollLeft(); a.doScrollPos(d, b, c)
        }, this.doScrollPos = function (b, c, d) {
            var f = a.getScrollTop(), k = a.getScrollLeft(); (0 > (a.newscrolly - f) * (c - f) || 0 > (a.newscrollx - k) * (b - k)) && a.cancelScroll(); 0 == a.opt.bouncescroll && (0 > c ? c = 0 : c > a.page.maxh && (c = a.page.maxh), 0 > b ? b = 0 : b > a.page.maxw && (b = a.page.maxw)); if (a.scrollrunning && b == a.newscrollx && c == a.newscrolly) return !1; a.newscrolly = c; a.newscrollx = b; a.newscrollspeed = d || !1; if (a.timer) return !1; a.timer = setTimeout(function () {
                var d = a.getScrollTop(), f = a.getScrollLeft(),
                k = Math.round(Math.sqrt(Math.pow(b - f, 2) + Math.pow(c - d, 2))), k = a.newscrollspeed && 1 < a.newscrollspeed ? a.newscrollspeed : a.getTransitionSpeed(k); a.newscrollspeed && 1 >= a.newscrollspeed && (k *= a.newscrollspeed); a.prepareTransition(k, !0); a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm); 0 < k && (!a.scrollrunning && a.onscrollstart && a.onscrollstart.call(a, { type: "scrollstart", current: { x: f, y: d }, request: { x: b, y: c }, end: { x: a.newscrollx, y: a.newscrolly }, speed: k }), e.transitionend ? a.scrollendtrapped || (a.scrollendtrapped =
                !0, a.bind(a.doc, e.transitionend, a.onScrollTransitionEnd, !1)) : (a.scrollendtrapped && clearTimeout(a.scrollendtrapped), a.scrollendtrapped = setTimeout(a.onScrollTransitionEnd, k)), a.timerscroll = { bz: new D(d, a.newscrolly, k, 0, 0, .58, 1), bh: new D(f, a.newscrollx, k, 0, 0, .58, 1) }, a.cursorfreezed || (a.timerscroll.tm = setInterval(function () { a.showCursor(a.getScrollTop(), a.getScrollLeft()) }, 60))); a.synched("doScroll-set", function () {
                    a.timer = 0; a.scrollendtrapped && (a.scrollrunning = !0); a.setScrollTop(a.newscrolly); a.setScrollLeft(a.newscrollx);
                    if (!a.scrollendtrapped) a.onScrollTransitionEnd()
                })
            }, 50)
        }, this.cancelScroll = function () { if (!a.scrollendtrapped) return !0; var b = a.getScrollTop(), c = a.getScrollLeft(); a.scrollrunning = !1; e.transitionend || clearTimeout(e.transitionend); a.scrollendtrapped = !1; a._unbind(a.doc[0], e.transitionend, a.onScrollTransitionEnd); a.prepareTransition(0); a.setScrollTop(b); a.railh && a.setScrollLeft(c); a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm); a.timerscroll = !1; a.cursorfreezed = !1; a.showCursor(b, c); return a },
        this.onScrollTransitionEnd = function () {
            a.scrollendtrapped && a._unbind(a.doc[0], e.transitionend, a.onScrollTransitionEnd); a.scrollendtrapped = !1; a.prepareTransition(0); a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm); a.timerscroll = !1; var b = a.getScrollTop(), c = a.getScrollLeft(); a.setScrollTop(b); a.railh && a.setScrollLeft(c); a.noticeCursor(!1, b, c); a.cursorfreezed = !1; 0 > b ? b = 0 : b > a.page.maxh && (b = a.page.maxh); 0 > c ? c = 0 : c > a.page.maxw && (c = a.page.maxw); if (b != a.newscrolly || c != a.newscrollx) return a.doScrollPos(c,
            b, a.opt.snapbackspeed); a.onscrollend && a.scrollrunning && a.triggerScrollEnd(); a.scrollrunning = !1
        }) : (this.doScrollLeft = function (b, c) { var d = a.scrollrunning ? a.newscrolly : a.getScrollTop(); a.doScrollPos(b, d, c) }, this.doScrollTop = function (b, c) { var d = a.scrollrunning ? a.newscrollx : a.getScrollLeft(); a.doScrollPos(d, b, c) }, this.doScrollPos = function (b, c, d) {
            function e() {
                if (a.cancelAnimationFrame) return !0; a.scrollrunning = !0; if (p = 1 - p) return a.timer = v(e) || 1; var b = 0, c, d, f = d = a.getScrollTop(); if (a.dst.ay) {
                    f = a.bzscroll ?
                    a.dst.py + a.bzscroll.getNow() * a.dst.ay : a.newscrolly; c = f - d; if (0 > c && f < a.newscrolly || 0 < c && f > a.newscrolly) f = a.newscrolly; a.setScrollTop(f); f == a.newscrolly && (b = 1)
                } else b = 1; d = c = a.getScrollLeft(); if (a.dst.ax) { d = a.bzscroll ? a.dst.px + a.bzscroll.getNow() * a.dst.ax : a.newscrollx; c = d - c; if (0 > c && d < a.newscrollx || 0 < c && d > a.newscrollx) d = a.newscrollx; a.setScrollLeft(d); d == a.newscrollx && (b += 1) } else b += 1; 2 == b ? (a.timer = 0, a.cursorfreezed = !1, a.bzscroll = !1, a.scrollrunning = !1, 0 > f ? f = 0 : f > a.page.maxh && (f = Math.max(0, a.page.maxh)),
                0 > d ? d = 0 : d > a.page.maxw && (d = a.page.maxw), d != a.newscrollx || f != a.newscrolly ? a.doScrollPos(d, f) : a.onscrollend && a.triggerScrollEnd()) : a.timer = v(e) || 1
            } c = void 0 === c || !1 === c ? a.getScrollTop(!0) : c; if (a.timer && a.newscrolly == c && a.newscrollx == b) return !0; a.timer && w(a.timer); a.timer = 0; var f = a.getScrollTop(), k = a.getScrollLeft(); (0 > (a.newscrolly - f) * (c - f) || 0 > (a.newscrollx - k) * (b - k)) && a.cancelScroll(); a.newscrolly = c; a.newscrollx = b; a.bouncescroll && a.rail.visibility || (0 > a.newscrolly ? a.newscrolly = 0 : a.newscrolly > a.page.maxh &&
            (a.newscrolly = a.page.maxh)); a.bouncescroll && a.railh.visibility || (0 > a.newscrollx ? a.newscrollx = 0 : a.newscrollx > a.page.maxw && (a.newscrollx = a.page.maxw)); a.dst = {}; a.dst.x = b - k; a.dst.y = c - f; a.dst.px = k; a.dst.py = f; var h = Math.round(Math.sqrt(Math.pow(a.dst.x, 2) + Math.pow(a.dst.y, 2))); a.dst.ax = a.dst.x / h; a.dst.ay = a.dst.y / h; var l = 0, n = h; 0 == a.dst.x ? (l = f, n = c, a.dst.ay = 1, a.dst.py = 0) : 0 == a.dst.y && (l = k, n = b, a.dst.ax = 1, a.dst.px = 0); h = a.getTransitionSpeed(h); d && 1 >= d && (h *= d); a.bzscroll = 0 < h ? a.bzscroll ? a.bzscroll.update(n, h) :
            new D(l, n, h, 0, 1, 0, 1) : !1; if (!a.timer) { (f == a.page.maxh && c >= a.page.maxh || k == a.page.maxw && b >= a.page.maxw) && a.checkContentSize(); var p = 1; a.cancelAnimationFrame = !1; a.timer = 1; a.onscrollstart && !a.scrollrunning && a.onscrollstart.call(a, { type: "scrollstart", current: { x: k, y: f }, request: { x: b, y: c }, end: { x: a.newscrollx, y: a.newscrolly }, speed: h }); e(); (f == a.page.maxh && c >= f || k == a.page.maxw && b >= k) && a.checkContentSize(); a.noticeCursor() }
        }, this.cancelScroll = function () {
            a.timer && w(a.timer); a.timer = 0; a.bzscroll = !1; a.scrollrunning =
            !1; return a
        }) : (this.doScrollLeft = function (b, c) { var d = a.getScrollTop(); a.doScrollPos(b, d, c) }, this.doScrollTop = function (b, c) { var d = a.getScrollLeft(); a.doScrollPos(d, b, c) }, this.doScrollPos = function (b, c, d) { var e = b > a.page.maxw ? a.page.maxw : b; 0 > e && (e = 0); var f = c > a.page.maxh ? a.page.maxh : c; 0 > f && (f = 0); a.synched("scroll", function () { a.setScrollTop(f); a.setScrollLeft(e) }) }, this.cancelScroll = function () { }); this.doScrollBy = function (b, c) {
            var d = 0, d = c ? Math.floor((a.scroll.y - b) * a.scrollratio.y) : (a.timer ? a.newscrolly :
            a.getScrollTop(!0)) - b; if (a.bouncescroll) { var e = Math.round(a.view.h / 2); d < -e ? d = -e : d > a.page.maxh + e && (d = a.page.maxh + e) } a.cursorfreezed = !1; e = a.getScrollTop(!0); if (0 > d && 0 >= e) return a.noticeCursor(); if (d > a.page.maxh && e >= a.page.maxh) return a.checkContentSize(), a.noticeCursor(); a.doScrollTop(d)
        }; this.doScrollLeftBy = function (b, c) {
            var d = 0, d = c ? Math.floor((a.scroll.x - b) * a.scrollratio.x) : (a.timer ? a.newscrollx : a.getScrollLeft(!0)) - b; if (a.bouncescroll) {
                var e = Math.round(a.view.w / 2); d < -e ? d = -e : d > a.page.maxw + e && (d = a.page.maxw +
                e)
            } a.cursorfreezed = !1; e = a.getScrollLeft(!0); if (0 > d && 0 >= e || d > a.page.maxw && e >= a.page.maxw) return a.noticeCursor(); a.doScrollLeft(d)
        }; this.doScrollTo = function (b, c) { a.cursorfreezed = !1; a.doScrollTop(b) }; this.checkContentSize = function () { var b = a.getContentSize(); b.h == a.page.h && b.w == a.page.w || a.resize(!1, b) }; a.onscroll = function (b) {
            a.rail.drag || a.cursorfreezed || a.synched("scroll", function () {
                a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y)); a.railh && (a.scroll.x = Math.round(a.getScrollLeft() * (1 / a.scrollratio.x)));
                a.noticeCursor()
            })
        }; a.bind(a.docscroll, "scroll", a.onscroll); this.doZoomIn = function (b) {
            if (!a.zoomactive) {
                a.zoomactive = !0; a.zoomrestore = { style: {} }; var c = "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "), d = a.win[0].style, k; for (k in c) { var h = c[k]; a.zoomrestore.style[h] = void 0 !== d[h] ? d[h] : "" } a.zoomrestore.style.width = a.win.css("width"); a.zoomrestore.style.height = a.win.css("height"); a.zoomrestore.padding = {
                    w: a.win.outerWidth() - a.win.width(), h: a.win.outerHeight() -
                    a.win.height()
                }; e.isios4 && (a.zoomrestore.scrollTop = f(window).scrollTop(), f(window).scrollTop(0)); a.win.css({ position: e.isios4 ? "absolute" : "fixed", top: 0, left: 0, zIndex: A + 100, margin: 0 }); c = a.win.css("backgroundColor"); ("" == c || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(c)) && a.win.css("backgroundColor", "#fff"); a.rail.css({ zIndex: A + 101 }); a.zoom.css({ zIndex: A + 102 }); a.zoom.css("backgroundPosition", "0px -18px"); a.resizeZoom(); a.onzoomin && a.onzoomin.call(a); return a.cancelEvent(b)
            }
        }; this.doZoomOut =
        function (b) { if (a.zoomactive) return a.zoomactive = !1, a.win.css("margin", ""), a.win.css(a.zoomrestore.style), e.isios4 && f(window).scrollTop(a.zoomrestore.scrollTop), a.rail.css({ "z-index": a.zindex }), a.zoom.css({ "z-index": a.zindex }), a.zoomrestore = !1, a.zoom.css("backgroundPosition", "0px 0px"), a.onResize(), a.onzoomout && a.onzoomout.call(a), a.cancelEvent(b) }; this.doZoom = function (b) { return a.zoomactive ? a.doZoomOut(b) : a.doZoomIn(b) }; this.resizeZoom = function () {
            if (a.zoomactive) {
                var b = a.getScrollTop(); a.win.css({
                    width: f(window).width() -
                    a.zoomrestore.padding.w + "px", height: f(window).height() - a.zoomrestore.padding.h + "px"
                }); a.onResize(); a.setScrollTop(Math.min(a.page.maxh, b))
            }
        }; this.init(); f.nicescroll.push(this)
    }, M = function (f) {
        var c = this; this.nc = f; this.steptime = this.lasttime = this.speedy = this.speedx = this.lasty = this.lastx = 0; this.snapy = this.snapx = !1; this.demuly = this.demulx = 0; this.lastscrolly = this.lastscrollx = -1; this.timer = this.chky = this.chkx = 0; this.time = function () { return +new Date }; this.reset = function (f, h) {
            c.stop(); var d = c.time(); c.steptime =
            0; c.lasttime = d; c.speedx = 0; c.speedy = 0; c.lastx = f; c.lasty = h; c.lastscrollx = -1; c.lastscrolly = -1
        }; this.update = function (f, h) { var d = c.time(); c.steptime = d - c.lasttime; c.lasttime = d; var d = h - c.lasty, q = f - c.lastx, t = c.nc.getScrollTop(), a = c.nc.getScrollLeft(), t = t + d, a = a + q; c.snapx = 0 > a || a > c.nc.page.maxw; c.snapy = 0 > t || t > c.nc.page.maxh; c.speedx = q; c.speedy = d; c.lastx = f; c.lasty = h }; this.stop = function () { c.nc.unsynched("domomentum2d"); c.timer && clearTimeout(c.timer); c.timer = 0; c.lastscrollx = -1; c.lastscrolly = -1 }; this.doSnapy = function (f,
        h) { var d = !1; 0 > h ? (h = 0, d = !0) : h > c.nc.page.maxh && (h = c.nc.page.maxh, d = !0); 0 > f ? (f = 0, d = !0) : f > c.nc.page.maxw && (f = c.nc.page.maxw, d = !0); d ? c.nc.doScrollPos(f, h, c.nc.opt.snapbackspeed) : c.nc.triggerScrollEnd() }; this.doMomentum = function (f) {
            var h = c.time(), d = f ? h + f : c.lasttime; f = c.nc.getScrollLeft(); var q = c.nc.getScrollTop(), t = c.nc.page.maxh, a = c.nc.page.maxw; c.speedx = 0 < a ? Math.min(60, c.speedx) : 0; c.speedy = 0 < t ? Math.min(60, c.speedy) : 0; d = d && 60 >= h - d; if (0 > q || q > t || 0 > f || f > a) d = !1; f = c.speedx && d ? c.speedx : !1; if (c.speedy && d && c.speedy ||
            f) {
                var r = Math.max(16, c.steptime); 50 < r && (f = r / 50, c.speedx *= f, c.speedy *= f, r = 50); c.demulxy = 0; c.lastscrollx = c.nc.getScrollLeft(); c.chkx = c.lastscrollx; c.lastscrolly = c.nc.getScrollTop(); c.chky = c.lastscrolly; var p = c.lastscrollx, e = c.lastscrolly, v = function () {
                    var d = 600 < c.time() - h ? .04 : .02; c.speedx && (p = Math.floor(c.lastscrollx - c.speedx * (1 - c.demulxy)), c.lastscrollx = p, 0 > p || p > a) && (d = .1); c.speedy && (e = Math.floor(c.lastscrolly - c.speedy * (1 - c.demulxy)), c.lastscrolly = e, 0 > e || e > t) && (d = .1); c.demulxy = Math.min(1, c.demulxy +
                    d); c.nc.synched("domomentum2d", function () { c.speedx && (c.nc.getScrollLeft(), c.chkx = p, c.nc.setScrollLeft(p)); c.speedy && (c.nc.getScrollTop(), c.chky = e, c.nc.setScrollTop(e)); c.timer || (c.nc.hideCursor(), c.doSnapy(p, e)) }); 1 > c.demulxy ? c.timer = setTimeout(v, r) : (c.stop(), c.nc.hideCursor(), c.doSnapy(p, e))
                }; v()
            } else c.doSnapy(c.nc.getScrollLeft(), c.nc.getScrollTop())
        }
    }, y = f.fn.scrollTop; f.cssHooks.pageYOffset = {
        get: function (h, c, k) { return (c = f.data(h, "__nicescroll") || !1) && c.ishwscroll ? c.getScrollTop() : y.call(h) }, set: function (h,
        c) { var k = f.data(h, "__nicescroll") || !1; k && k.ishwscroll ? k.setScrollTop(parseInt(c)) : y.call(h, c); return this }
    }; f.fn.scrollTop = function (h) { if (void 0 === h) { var c = this[0] ? f.data(this[0], "__nicescroll") || !1 : !1; return c && c.ishwscroll ? c.getScrollTop() : y.call(this) } return this.each(function () { var c = f.data(this, "__nicescroll") || !1; c && c.ishwscroll ? c.setScrollTop(parseInt(h)) : y.call(f(this), h) }) }; var z = f.fn.scrollLeft; f.cssHooks.pageXOffset = {
        get: function (h, c, k) {
            return (c = f.data(h, "__nicescroll") || !1) && c.ishwscroll ?
            c.getScrollLeft() : z.call(h)
        }, set: function (h, c) { var k = f.data(h, "__nicescroll") || !1; k && k.ishwscroll ? k.setScrollLeft(parseInt(c)) : z.call(h, c); return this }
    }; f.fn.scrollLeft = function (h) { if (void 0 === h) { var c = this[0] ? f.data(this[0], "__nicescroll") || !1 : !1; return c && c.ishwscroll ? c.getScrollLeft() : z.call(this) } return this.each(function () { var c = f.data(this, "__nicescroll") || !1; c && c.ishwscroll ? c.setScrollLeft(parseInt(h)) : z.call(f(this), h) }) }; var E = function (h) {
        var c = this; this.length = 0; this.name = "nicescrollarray";
        this.each = function (d) { f.each(c, d); return c }; this.push = function (d) { c[c.length] = d; c.length++ }; this.eq = function (d) { return c[d] }; if (h) for (var k = 0; k < h.length; k++) { var l = f.data(h[k], "__nicescroll") || !1; l && (this[this.length] = l, this.length++) } return this
    }; (function (f, c, k) { for (var l = 0; l < c.length; l++) k(f, c[l]) })(E.prototype, "show hide toggle onResize resize remove stop doScrollPos".split(" "), function (f, c) { f[c] = function () { var f = arguments; return this.each(function () { this[c].apply(this, f) }) } }); f.fn.getNiceScroll =
    function (h) { return void 0 === h ? new E(this) : this[h] && f.data(this[h], "__nicescroll") || !1 }; f.expr[":"].nicescroll = function (h) { return void 0 !== f.data(h, "__nicescroll") }; f.fn.niceScroll = function (h, c) {
        void 0 !== c || "object" != typeof h || "jquery" in h || (c = h, h = !1); c = f.extend({}, c); var k = new E; void 0 === c && (c = {}); h && (c.doc = f(h), c.win = f(this)); var l = !("doc" in c); l || "win" in c || (c.win = f(this)); this.each(function () {
            var d = f(this).data("__nicescroll") || !1; d || (c.doc = l ? f(this) : c.doc, d = new S(c, f(this)), f(this).data("__nicescroll",
            d)); k.push(d)
        }); return 1 == k.length ? k[0] : k
    }; window.NiceScroll = { getjQuery: function () { return f } }; f.nicescroll || (f.nicescroll = new E, f.nicescroll.options = K)
    });
}(jQuery));
//Nice Scroll SOURCE