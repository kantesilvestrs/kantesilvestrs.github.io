/// <reference path="../lib/jquery-2.1.3.intellisense.js" />
/// <reference path="../lib/require.js" />
/// <reference path="../lib/TweenMax/TweenMax.js" />

var facesofclimate = (function () {

	var _self = this;

	var facesofclimate_wrap = $("#facesofclimate-panel-wrap");

	var FoC_Assets = {
		Icons: $(".asset", facesofclimate_wrap)
	};

	_self.initializeAssets = function () {
		var tl = new TimelineMax({paused: true});
		tl
			.set(FoC_Assets.Icons, {
				css: {
					transformOrigin: "center bottom",
					transformPerspective: 500,
					rotationX: 85,
					scaleY: 3
				}
			},0 )
			.set(facesofclimate_wrap, { css: { display: "block" } }, 0);

		tl.play();
	}

	_self.attachEventHandlers = function () {
		$(document)
			.on('mouseenter', '#facesofclimate-panel-wrap a, #social-link-wrap a.social-link-hover', function () {
				$(".info-baloon", this).stop().fadeIn({ speed: 200, queque: false });
			})
			.on('mouseleave', '#facesofclimate-panel-wrap a, #social-link-wrap a.social-link-hover', function () {
				$(".info-baloon", this).stop().fadeOut({ speed: 200, queque: false });
			});
	}

	_self.open = function () {
		var tl = new TimelineMax({ paused: true });

		tl
			.to(FoC_Assets.Icons, 0.7, {
				css: {
					scaleY: 1
				}
			}, 0)
			.to(FoC_Assets.Icons, 1, {
				css: {
					rotationX: 0
				}
			}, 0);

		return tl;
	};

	_self.run = function () {
		_self.attachEventHandlers();
		_self.initializeAssets();

		var open_foc = new _self.open();
		open_foc.play();
	}

	return {
		run: _self.run
	}
})();

define("facesofclimate_module", [], function () {
	return {
		run: facesofclimate.run
	}
});