/// <reference path="lib/jquery-2.1.3.intellisense.js" />
/// <reference path="lib/lodash.js" />
/// <reference path="lib/require.js" />
/// <reference path="lib/TweenMax/TweenMax.js" />
/// <reference path="lib/lazyYT.js" />

(function () {
	var _root = this;

	thirPartyPlugs();

	loadThirdPartyModules();

	TweenLite.lagSmoothing(100, 16);

	boot();

	function thirPartyPlugs () {

		$('.js-lazyYT').lazyYT();

	};

	function loadThirdPartyModules() {
		define("jquery", [], function () { return _root.$; });
		define("lodash", [], function () { return _root._; });
		define("tweenmax", [], function () { return _root.TweenMax; });
		define("timeline", [], function () { return _root.TimelineMax; });
	};

	function boot() {
		require(["config"], function (config) {
			require(["bootstrapper"].concat(config.cityModules).concat(config.siteModules).concat(config.laodingScreenModules), function (boot) {
				boot.run();
			});
		});
	};
})();