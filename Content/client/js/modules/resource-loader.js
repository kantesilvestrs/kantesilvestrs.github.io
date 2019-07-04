/// <reference path="../lib/PxLoader.js" />
/// <reference path="../lib/lodash.js" />
/// <reference path="../lib/PxLoaderImage.js" />
/// <reference path="../lib/jquery-2.1.3.js" />

var resource_loader = (function (window) {

	var _this = this;

	var elements = {
		earth: $('#loading-screen-earth'),
		sun: $('#loading-screen-sun'),
		wrap: $('#loading-screen-wrap'),
		container: $('#loading-screen-container'),
		canvas: document.getElementById("loading-screen-earth").getContext("2d"),
		earthImgObj: {},
		loadedImgObj: {}
	};
	var props = {
		canvasX: 140,
		canvasY: 140,
		radius: 140,
		pst: 0,
		angle: 0.0
	};

	_this.animateSun = new function () {
		var tl = new TimelineMax({ paused: true });

		tl
			.to(elements.sun, 6, {
				css: {
					rotation: "-=360",
					transformOrigin: "left 350%"
				},
				repeat: -1,
				ease: Linear.easeNone
			});

		return tl;
	}

	//init image objects
	elements.earthImgObj = new Image;
	elements.loadedImgObj = new Image;

	function showLoadingScreen(showScreen, time, callback) {
		var callbackFunction = callback || function () { };
		var tl = new TimelineMax({
			paused: true,
			onComplete: callbackFunction
		});

		if (showScreen) {
			tl
				.fromTo(elements.wrap, time, {
					css: {
						opacity: 0,
						display: 'block'
					}
				}, {
					css: {
						opacity: 1
					}
				}, 0);
		}
		else {

			tl
				.fromTo(elements.wrap, time, {
					css: {
						opacity: 1
					}
				}, {
					css: {
						opacity: 0,
					}
				}, 0)
				.set(elements.wrap, {
					css: {
						display: 'none'
					}
				}, time)
				.addCallback(_this.animateSun.pause);
		}

		tl.play();
	};
	function setLoadingScreenImageParams() {
		TweenMax.set(elements.wrap, { backgroundColor: "rgba(250, 246, 217,0.4); " });

		TweenMax.to([elements.earth, elements.sun], 0, {
			scaleX: ($(window).height() + $(window).width()) / 2 * 0.08 / 100,
			scaleY: ($(window).height() + $(window).width()) / 2 * 0.08 / 100,
		});
		TweenMax.to([elements.container], 0, {
			left: (($(window).width()) - elements.container.width()) / 2,
			top: (($(window).height()) - elements.container.height()) / 2
		});
		TweenMax.set(elements.sun, {
			left: 140,
			top: -125
		});
	};
	function drawCanvas() {
		_this.animateSun.play();
		setLoadingScreenImageParams();

		$(window).resize(function () {
			setLoadingScreenImageParams();
		});

		elements.earthImgObj = document.createElement("img");
		elements.earthImgObj.src = "/Content/map/assets/loadingScreen/img/loadingScreen_earth.png";
	};

	_this.resourceList = [
		// Our Story
		"/Content/map/assets/ourstory/sprites/ourstory.png",
		// Smart On Climate
		"/Content/map/assets/smartonclimate/sprites/smartonclimate.png",
		// Credits
		"/Content/map/assets/credits/sprites/credits.png",
		// Base
		"/Content/map/assets/base/img/Map_baseBG.jpg",
		"/Content/map/assets/base/sprites/centertitle.png",
		// Side Panels
		"/Content/map/assets/facesofclimate/sprites/facesofclimate_sprites.png",
		"/Content/map/assets/facesofclimate/img/baloon_bg.png",
		"/Content/map/assets/facesofclimate/img/baloon_tail.png"
	];

	_this.mainLaoder = function () {
		return $.Deferred(function (def) {

			var loader = new PxLoader();
			showLoadingScreen(true, 0.2);
			drawCanvas();

			_.each(_this.resourceList, function (resource, i) {
				var pxImage = new PxLoaderImage(resource);
				// we can add our own properties for later use 
				pxImage.imageNumber = i + 1;
				loader.add(pxImage);
			});

			// callback that runs every time an image loads 
			loader.addProgressListener(function (e) {

				elements.canvas.drawImage(elements.earthImgObj, 0, 0, 280, 280);
				elements.canvas.beginPath();
				elements.canvas.moveTo(props.canvasX, props.canvasY);
				elements.canvas.arc(props.canvasX, props.canvasY, props.radius, 0, props.angle);
				elements.canvas.fillStyle = "rgba(250, 246, 217,0.33)";
				elements.canvas.fill();

				props.angle -= (1 / _this.resourceList.length) * 2 * Math.PI;

			});

			//resolve promise
			loader.addCompletionListener(function () {

				elements.canvas.drawImage(elements.earthImgObj, 0, 0, 280, 280);
				elements.canvas.beginPath();
				elements.canvas.moveTo(props.canvasX, props.canvasY);

				props.angle -= props.angle + Math.round(1 / _this.resourceList.length) * 2 * Math.Pi;

				elements.canvas.arc(props.canvasX, props.canvasY, props.radius, 0, props.angle);
				elements.canvas.fill();
				setTimeout(function () {
					showLoadingScreen(false, 1, def.resolve);
				}, 1000);
			});

			loader.start();
		}).promise();
	}

	_this.start = function () {
		return $.Deferred(function (def) {

			var initialResources = [
				"/Content/map/assets/loadingScreen/img/loadingScreen_sun.png",
				"/Content/map/assets/loadingScreen/img/loadingScreen_earth.png"
			];

			var loader = new PxLoader();

			// Load video elements



			_.each(initialResources, function (resource, i) {
				var pxImage = new PxLoaderImage(resource);
				// we can add our own properties for later use 
				pxImage.imageNumber = i + 1;
				loader.add(pxImage);
			});

			loader.addCompletionListener(function () {
				$("#loading-screen-wrap").css({ display: "block" });
				$.when(_this.mainLaoder()).always(def.resolve);
			});

			var VT = require("video_loader_module");
			$.when(VT.init())
			.done(function () {
				loader.start();
			});
		}).promise();
	};

	return {
		start: _this.start
	}
})(window);

define("resource_loader", [], function () {
	return {
		start: resource_loader.start
	}
});

