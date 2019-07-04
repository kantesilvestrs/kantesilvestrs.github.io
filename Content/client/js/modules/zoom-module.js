/// <reference path="../lib/jquery-2.1.3.js" />
/// <reference path="../lib/lodash.js" />
/// <reference path="../lib/require.js" />
/// <reference path="../lib/TweenMax/TweenMax.js" />
/// <reference path="../lib/TweenMax/EasePack.js" />

var zoom_module = (function (window) {

    var _this = this;
    //var credits_module = require("credits_module");
    //var ourstory_module = require("ourstory_module");
    //var smartonclimate_module = require("smartonclimate_module");

	_this.map_props = {
		//width: 3824,
		//height: 2392
		width: 2560,
		height: 1601
	}

	_this.lastZoom = "";
	_this.animationActiveFlag = false;

	// Ration 0.6695
	_this.zones = {
	    modules : {
	        credits_module: {},
	        ourstory_module: {},
	        smartonclimate_module: {}
	    },
		general: {
			width: 1848,
			height: 1232,
			deltaX: function () {
				return -86;
			},
			deltaY: 236,
			paralelCallback: function () {
				var tl = new TimelineMax();

				tl
					.to($(".back-to-general"), 0.5, {
						css: {
							alpha: 0
						}
					}, 0)
					.set($("#center-title-panel-wrap"), {
						css: { display: 'block'}
					},0)
					.to($("#center-title-panel-wrap"), 0.3, {
						css: {
							alpha: 1
						}
					},0)
					.to($("#smartonclimate-sidepanel-wrap"), 1.5, {
						css: {
							left: -$(window).width() * 0.5
						},
						ease: Expo.easeOut
					}, 0)
					.to($("#ourstory-sidepanel-wrap"), 1.5, {
						css: {
							right: -$(window).width() * 0.45
						}
					}, 0)
					.to($("#credits-sidepanel-wrap"), 1.5, {
						css: {
							left: -$(window).width() * 0.45
						}
					}, 0)
					.to([
						$(".title-tag", "#smartonclimate-panel-wrap")
					], 1, { css: { left: 66 } }, 0)
					.set([
						$("#smartonclimate-sidepanel-wrap"),
						$("#smartonclimate-sidepanel-wrap"),
						$("#credits-sidepanel-wrap"),
						$(".back-to-general")
					], {
						css: {
							display: "none"
						}
					}, 1.5)
					.set($("#social-link-wrap"), { css: { left: 0, right: "auto", className: "-=social-link-opp" } });

				if ($("#social-link-wrap").position().left != 0) {
					tl
						.to($("#social-link-wrap"), 0.5, { css: { alpha: 0 } }, 0)
						.set($("#social-link-wrap"), { css: { left: 0, right: "auto", className: "-=social-link-opp" } }, 0.5)
						.to($("#social-link-wrap"), 1, { css: { alpha: 1 } }, 1.5);
				}

				tl.play();
			}
		},
		ourstory: {
			width: 1866,
			height: 771,
			deltaX: function (w_width) {
				return 442;
			},
			deltaY: -101,
			paralelCallback: function () {
				var tl = new TimelineMax();

				tl
					.set($("#ourstory-sidepanel-wrap"), {
						css: {
							right: -$(window).width() * 0.45,
							display: "block"
						}
					})
					.set($("#ourstory-sidepanel-back"), {
						css: {
							display: "block"
						}, onComplete: function () {
						    _this.zones.modules.ourstory_module.startAnimations();
						    _this.zones.modules.credits_module.pauseAnimations();
						    _this.zones.modules.smartonclimate_module.pauseAnimations();
						}
					})
					.to($("#center-title-panel-wrap"), 1, {
						css: {
							alpha: 0
						}
					}, 0)
					.set($("#center-title-panel-wrap"), {
						css: { display: 'none' }
					}, 1)
					.to($("#ourstory-sidepanel-back"), 0.5, {
						css: {
							alpha: 1
						}
					}, 0)
					.to($("#ourstory-sidepanel-wrap"), 1.5, {
						css: {
							right: 0
						},
						ease: Expo.easeOut
					});

				tl.play();
			}
		},
		smartonclimate: {
			width: 943,
			height: 725,
			deltaY: 1138,
			deltaX: function () {
				return -683;
			},
			paralelCallback: function () {
				var tl = new TimelineMax();

				tl
					.set($("#smartonclimate-sidepanel-wrap"), {
						css: {
							left: -$(window).width() * 0.5,
							display: "block"
						}
					})
					.set($("#smartonclimate-sidepanel-back"), {
						css: {
							display: "block"
						}, onComplete: function () {
						    _this.zones.modules.smartonclimate_module.startAnimations();
						    _this.zones.modules.ourstory_module.pauseAnimations();
						    _this.zones.modules.credits_module.pauseAnimations();
						}
					})
					.set($("#social-link-wrap"), { css: { left: "auto", right: 0, className: "+=social-link-opp" } })
					.to($("#center-title-panel-wrap"), 1, {
						css: {
							alpha: 0
						}
					}, 0)
					.set($("#center-title-panel-wrap"), {
						css: { display: 'none' }
					}, 1)
					.to($("#smartonclimate-sidepanel-back"), 0.5, {
						css: {
							alpha: 1
						}
					}, 0)
					.to($("#smartonclimate-sidepanel-wrap"), 1.5, {
						css: {
							left: 0
						},
						ease: Expo.easeOut
					}, 0)
					.to([
						$(".title-tag", "#smartonclimate-panel-wrap")
					], 1.5, { css: { left: 142 } }, 0)
					.addCallback(function () {
						$(".smartonclimate-sidepanel-container").perfectScrollbar();
					});

				tl.play();
			}
		},
		credits: {
			width: 1200,
			height: 828,
			deltaY: -670,
			deltaX: function () {
				return -937;
			},
			paralelCallback: function () {
				var tl = new TimelineMax();

				tl
					.set($("#credits-sidepanel-wrap"), {
						css: {
							left: -$(window).width() * 0.5,
							display: "block"
						}
					})
					.set($("#credits-sidepanel-back"), {
						css: {
							display: "block"
						}, onComplete: function () {
						    _this.zones.modules.credits_module.startAnimations();
						    _this.zones.modules.smartonclimate_module.pauseAnimations();
						    _this.zones.modules.ourstory_module.pauseAnimations();
						}
					})
					.set($("#social-link-wrap"), { css: { left: "auto", right: 0, className: "+=social-link-opp" } })
					.to($("#center-title-panel-wrap"), 1, {
						css: {
							alpha: 0
						}
					}, 0)
					.set($("#center-title-panel-wrap"), {
						css: { display: 'none' }
					}, 1)
					.to($("#credits-sidepanel-back"), 0.5, {
						css: {
							alpha: 1
						}
					}, 0)
					.to($("#credits-sidepanel-wrap"), 1.5, {
						css: {
							left: 0
						},
						ease: Expo.easeOut
					}, 0)
					.addCallback(function () {
						$(".credits-sidepanel-container").perfectScrollbar();
					});

				tl.play();
			}
		}
	}

	_this.calculate_position = function (zoneName, w_width, w_height) {
		var scale, x, y;

		scale = (w_height / (_this.zones[zoneName].height / _this.map_props.height)) / _this.map_props.height;
		x = scale * _this.zones[zoneName].deltaX(w_width) / 2;
		y = scale * _this.zones[zoneName].deltaY / 2;

		return {
			props: {
				scale: scale,
				x: x,
				y: y
			},
			paralelCallback: _this.zones[zoneName].paralelCallback
		}
	}

	_this.tl_zoomin = function (zoomProps) {
		var tl = new TimelineMax({
			paused: true,
			onStart: function () {
				_this.animationActiveFlag = true;
			},
			onComplete: function () {
				_this.animationActiveFlag = false;
			}
		});

		tl
			.addCallback(zoomProps.paralelCallback, 0)
			.to($("#map-base-panel-wrap"), 1.5, {
				css: zoomProps.props,
				ease: Power3.easeOut
			}, 0);

		return tl;
	}

	_this.zoom_custom = function (zoomName) {
		if (!_this.animationActiveFlag) {
			_this.lastZoom = zoomName;
			_this.tl_zoomin(_this.calculate_position(zoomName, $(window).width(), $(window).height())).play();
		}
	}

	_this.set_initial_state = function () {
		return $.Deferred(function (def) {
			var props = _this.calculate_position("general", $(window).width(), $(window).height());
			var tl = new TimelineMax({ paused: true, onComplete: def.resolve });
			tl
				.set($("#map-base-panel-wrap"), {
					css: $.extend({}, props.props, { display: "block", alpha: 0 })
				})
				.to($("#map-base-panel-wrap"), 1, {
					css: { alpha: 1 }
				});

			tl.play();
		}).promise();
	}

	_this.attachedEventHandler = function () {
		$(window).resize(function () {
			if (_this.lastZoom != "")
				_this.zoom_custom(_this.lastZoom);
		});

		$(document)
			.on('click', ".city-panel-hitbox", function () {
				if (_this.lastZoom == "general" || _this.lastZoom == "")
					_this.zoom_custom($(this).data("city-zoom"));
			})
			.on('click', '.back-to-general', function () {
			    _this.zoom_custom("general");

			    var credits_module = require("credits_module");
			    var ourstory_module = require("ourstory_module");
			    var smartonclimate_module = require("smartonclimate_module");

			    ourstory_module.pauseAnimations();
			    credits_module.pauseAnimations();
			    smartonclimate_module.pauseAnimations();
			});
	}

	_this.init = function () {
	    _this.zones.modules.ourstory_module = require("ourstory_module");
	    _this.zones.modules.credits_module = require("credits_module");
	    _this.zones.modules.smartonclimate_module = require("smartonclimate_module");

		return $.Deferred(function (def) {
			_this.attachedEventHandler();
			$.when(_this.set_initial_state()).always(def.resolve);
		}).promise();
	}

	return {
		general_zoom: _this.general_zoom,
		zoom: _this.zoom_custom,
		init: init
	}
})(window);


define("zoom_module", [], function () {
	return {
		init: zoom_module.init,
		zoom: zoom_module.zoom
	}
});