/// <reference path="../lib/TweenMax/TweenMax.js" />
define("bootstrapper",
	[
		"config",
		"lodash",
		"jquery",
		"zoom_module",
		"resource_loader",
		"video_loader_module"], function (config, _, $, zoom, RL, VL) {

			var run = function () {



				$.when(RL.start()).always(function () {
					$.when(zoom.init()).always(function () {
						// Initialize youtube videos
						//debugger;
						
						// Initializer cities
						_.each(config.cityModules, function (city) {
							require([city], function (cityModule) {
								setTimeout(cityModule.run, 0);
								//cityModule.run();
							});
						});

					});
				});
			};

			return {
				run: run
			}
		});