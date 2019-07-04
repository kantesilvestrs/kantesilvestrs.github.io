/// <reference path="../lib/jquery-2.1.3.intellisense.js" />
/// <reference path="../lib/require.js" />
/// <reference path="../lib/TweenMax/TweenMax.js" />

var credits = (function () {

    var credits_wrap = $("#credits-panel-wrap");

    var Credits_Assets = {
        Buildings: {},
        Houses: {},
        TreesAndPoles: {},
        Poeple: {},
        Streetcars: {},
        TitleTag: $(".title-tag", credits_wrap),
        all_buildings: $(".building_asset", credits_wrap),
        all_houses: $(".house_asset", credits_wrap),
        all_treesandpoles: $(".trees_asset", credits_wrap),
        all_people: $(".people_asset", credits_wrap),
        all_streetcars: $(".streetcar_asset", credits_wrap),
        small_objects: {
            skater1: {
                ele: $('.skater-with-purple-jemper'),
                tl: new TimelineMax({ paused: true, repeat: -1 })
            },
            skater2: {
                ele: $('.skater-with-red-jemper'),
                tl: new TimelineMax({ paused: true, repeat: -1 })
            },
            top_streetcar: {
                ele: $('.mid-left-group-streetcars-ttc-1'),
                tl: new TimelineMax({ paused: true, repeat: -1 })
            },
            bottom_streetcar: {
                ele: $('.bot-right-group-streetcar-ttc-2'),
                tl: new TimelineMax({ paused: true, repeat: -1 })
            },
            snow_layer1: {
                ele: $('.credits-snow-layer-1'),
                tl: new TimelineMax({ paused: true, repeat: -1 })
            },
            snow_layer2: {
                ele: $('.credits-snow-layer-2'),
                tl: new TimelineMax({ paused: true, repeat: -1 })
            },
            snow_layer3: {
                ele: $('.credits-snow-layer-3'),
                tl: new TimelineMax({ paused: true, repeat: -1 })
            }
        }
    };

    //#region Tween props
    var tween_props = {
        general: {
            init: {
                transformOrigin: "center bottom",
                transformPerspective: 500
            },
            closed: {
                rotationX: 85,
                scaleY: 3
            },
            open: {
                rotationX: 0,
                scaleY: 1
            }
        },
        open_time: 1
    };
    //#endregion

    function init_SkatersAnimation() {
        var skater1 = Credits_Assets.small_objects.skater1.ele;
        var skater2 = Credits_Assets.small_objects.skater2.ele;

        //skater1(purple) tween
        Credits_Assets.small_objects.skater1.tl
        .add(TweenLite.to(skater1, 3, {
            delay: 2,
            css: {
                x: "+=10",
                rotationX: 30,
            }, onComplete: function () {
                skater1.addClass('purple-facing-left');
                skater1.removeClass('purple-facing-right');
            },
            ease: Power1.easeOut
        }))
        .add(TweenLite.to(skater1, 3, {
            delay: 1,
            css: {
                x: "-=10",
                rotationX: -30,
            }, onComplete: function () {
                skater1.addClass('purple-facing-right');
                skater1.removeClass('purple-facing-left');
            },
            ease: Power1.easeOut
        }));

        //skater2 tween
        Credits_Assets.small_objects.skater2.tl
        .add(TweenLite.to(skater2, 5, {
            delay: 0.5,
            css: {
                x: "+=20",
                rotationX: 30,
            }, onComplete: function () {
                skater2.addClass('red-facing-left');
                skater2.removeClass('red-facing-right');
            },
            ease: Power1.easeOut
        }))
        .add(TweenLite.to(skater2, 5, {
            delay: 0.5,
            css: {
                x: "-=20",
                rotationX: -30,
            }, onComplete: function () {
                skater2.addClass('red-facing-right');
                skater2.removeClass('red-facing-left');
            },
            ease: Power1.easeOut
        }));
    };
    function pause_skatersAnimation() {
        Credits_Assets.small_objects.skater1.tl.pause();
        Credits_Assets.small_objects.skater2.tl.pause();
    };
    function resume_skatersAnimation() {
        Credits_Assets.small_objects.skater1.tl.resume();
        Credits_Assets.small_objects.skater2.tl.resume();
    };

    function init_TopCarriageAnimation() {
        var topScreetcar = Credits_Assets.small_objects.top_streetcar.ele;
        var bottomStreetCar = Credits_Assets.small_objects.bottom_streetcar.ele;

        //#region top streetcar tween
        Credits_Assets.small_objects.top_streetcar.tl
        .add(TweenMax.to(topScreetcar, 5, {
            delay: 4,
            css: { x: "+=15", y: "+=4" },
            ease: Power1.easeInOut
        }))
        .add(TweenLite.to(topScreetcar, 1, {
            css: { autoAlpha: 0 },
            onComplete: function () {
                topScreetcar.addClass('streetcar-bottom-left');
                topScreetcar.removeClass('streetcar-mid-right');
            }
        }))
        .add(TweenMax.to(topScreetcar, 0.1, {
            css: { x: "+=20", y: "+=10", }, ease: Power1.easeInOut
        }))
        .add(TweenLite.to(topScreetcar, 1, { css: { autoAlpha: 1 } }))
        .add(TweenMax.to(topScreetcar, 7, {
            css: { x: "-=65", y: "+=90" }, ease: Power1.easeInOut
        }))
        .add(TweenMax.to(topScreetcar, 7, {
            css: { x: "-=45", y: "+=60" }, ease: Power1.easeOut, delay: 4
        }))
        .add(TweenLite.to(topScreetcar, 1, {
            css: { autoAlpha: 0 },
            onComplete: function () {
                topScreetcar.addClass('streetcar-mid-left');
                topScreetcar.removeClass('streetcar-bottom-left');
            }
        }))
        .add(TweenMax.to(topScreetcar, 0.1, {
            css: { x: "-=50", y: "+=60", rotation: "+=5" }
        }))
        .add(TweenLite.to(topScreetcar, 1, { css: { autoAlpha: 1 } }))
        .add(TweenMax.to(topScreetcar, 4, {
            css: { x: "-=55", y: "-=20" }, ease: Power1.easeInOut
        }))
        .add(TweenLite.to(topScreetcar, 1, {
            css: { autoAlpha: 0 },
            onComplete: function () {
                topScreetcar.addClass('streetcar-top-right');
                topScreetcar.removeClass('streetcar-mid-left');
            }
        }))
        .add(TweenMax.to(topScreetcar, 0.1, {
            css: { x: "-=15", y: "-=20", rotation: "-=5" }, ease: Power1.easeInOut
        }))
        .add(TweenLite.to(topScreetcar, 1, { css: { autoAlpha: 1 } }))
        .add(TweenMax.to(topScreetcar, 12, {
            css: { x: "+=115", y: "-=185" }, ease: Power1.easeInOut
        }))
         .add(TweenLite.to(topScreetcar, 1, {
             css: { autoAlpha: 0 },
             onComplete: function () {
                 topScreetcar.addClass('streetcar-mid-right');
                 topScreetcar.removeClass('streetcar-top-right');
             }
         }))
        .add(TweenMax.to(topScreetcar, 0.1, {
            css: { x: 0, y: 0, rotation: 0 }, ease: Power1.easeInOut
        }))
        .add(TweenLite.to(topScreetcar, 1, { css: { autoAlpha: 1, delay: 2 } }))
        //#endregion

        //#region bottom streetcar tween
        Credits_Assets.small_objects.bottom_streetcar.tl
        .add(TweenLite.to(bottomStreetCar, 7, {
            css: { delay: 4, x: "-=30", y: "+=40" }, ease: Power1.easeOut
        }))
        .add(TweenLite.to(bottomStreetCar, 1, {
            css: { autoAlpha: 0 },
            onComplete: function () {
                bottomStreetCar.addClass('streetcar-mid-right');
                bottomStreetCar.removeClass('streetcar-bottom-left');
            }
        }))
        .add(TweenLite.to(bottomStreetCar, 0.1, {
            css: { x: "+=10", y: "+=56" }
        }))
        .add(TweenLite.to(bottomStreetCar, 1, { autoAlpha: 1 }))
        .add(TweenLite.to(bottomStreetCar, 7, {
            css: { x: "+=140", y: "+=50" }, ease: Power1.easeInOut
        }))
        .add(TweenLite.to(bottomStreetCar, 1, {
            css: { autoAlpha: 0 },
            onComplete: function () {
                bottomStreetCar.addClass('streetcar-top-right');
                bottomStreetCar.removeClass('streetcar-mid-right');
            }
        }))
        .add(TweenLite.to(bottomStreetCar, 0.1, {
            css: { x: "+=52", y: "-=5" }
        }))
        .add(TweenLite.to(bottomStreetCar, 1, { autoAlpha: 1 }))
        .add(TweenLite.to(bottomStreetCar, 7, {
            css: { x: "+=54", y: "-=70", rotation: "-=5" }
        }))
        .add(TweenLite.to(bottomStreetCar, 1, {
            css: { autoAlpha: 0 },
            onComplete: function () {
                bottomStreetCar.addClass('streetcar-mid-left');
                bottomStreetCar.removeClass('streetcar-top-right');
            }
        }))
        .add(TweenLite.to(bottomStreetCar, 0.1, {
            css: { x: "-=25", y: "-=22", rotation: "+=10" }
        }))
        .add(TweenLite.to(bottomStreetCar, 1, { autoAlpha: 1 }))
        .add(TweenLite.to(bottomStreetCar, 7, {
            css: { x: "-=125", y: "-=52" }, ease: Power1.easeInOut
        }))
        .add(TweenLite.to(bottomStreetCar, 1, {
            css: { autoAlpha: 0 },
            onComplete: function () {
                bottomStreetCar.addClass('streetcar-bottom-left');
                bottomStreetCar.removeClass('streetcar-mid-left');
            }
        }))
        .add(TweenLite.to(bottomStreetCar, 0.1, {
            css: { x: 0, y: 0, rotation: 0 }
        }))
        .add(TweenLite.to(bottomStreetCar, 1, { autoAlpha: 1, delay: 2 }))

        //#endregion
    };
    function pause_TopCarriageAnimation() {
        Credits_Assets.small_objects.top_streetcar.tl.pause();
        Credits_Assets.small_objects.bottom_streetcar.tl.pause();
    };
    function resume_TopCarriageAnimation() {
        Credits_Assets.small_objects.top_streetcar.tl.resume();
        Credits_Assets.small_objects.bottom_streetcar.tl.resume();
    };

    function init_creditsSnowAnimation() {
        var snow1 = Credits_Assets.small_objects.snow_layer1.ele;
        var snow2 = Credits_Assets.small_objects.snow_layer2.ele;
        var snow3 = Credits_Assets.small_objects.snow_layer3.ele;

        //layer 1
    	Credits_Assets.small_objects.snow_layer1.tl
		.insert(TweenLite.to(snow1, 0.5, {
			css: {
				alpha: 1
			}
		}),0)
        .insert(TweenLite.to(snow1, 6, {
            css: { y: "+=150" }, ease: Power1.easeOut
        }),0)
        .insert(TweenLite.to(snow1, 0.2, {
            css: { alpha: 0 }
        }),5.8)
        .add(TweenLite.set(snow1, {
            css: { y: 0 }, ease: Linear.easeNone
        }),6)

        //layer 2
    	Credits_Assets.small_objects.snow_layer2.tl
		.insert(TweenLite.to(snow2, 0.5, {
			css: {
				alpha: 1
			}
		}),0)
        .insert(TweenLite.to(snow2, 4, {
            css: { y: "+=200" }, ease: Linear.easeNone
        }),0)
        .insert(TweenLite.to(snow2, 0.2, {
            css: { alpha: 0 }
        }),3.8)
        .insert(TweenLite.set(snow2, {
            css: { y: 0 }, ease: Linear.easeNone
        }),4)

        //layer 3
    	Credits_Assets.small_objects.snow_layer3.tl
		.insert(TweenLite.to(snow3, 0.5, {
			css: {alpha: 1}
		}),0)
        .insert(TweenLite.to(snow3, 5, {
            css: {alpha: 1, y: "+=100" }, ease: Linear.easeNone
        }),0)
        .insert(TweenLite.to(snow3,0.2, {
            css: { alpha: 0 }
        }),4.8)
        .add(TweenLite.set(snow3, {
            css: { y: 0 }, ease: Linear.easeNone
        }),5)
    };
    function pause_creditsSnowAnimation() {
        Credits_Assets.small_objects.snow_layer1.tl.pause();
        Credits_Assets.small_objects.snow_layer2.tl.pause();
        Credits_Assets.small_objects.snow_layer3.tl.pause();
    };
    function resume_creditsSnowAnimation() {
    	Credits_Assets.small_objects.snow_layer1.tl.resume();
    	Credits_Assets.small_objects.snow_layer2.tl.resume();
        Credits_Assets.small_objects.snow_layer3.tl.resume();
    };

    var run = function () {
    	var init_city = new initialize_city();
    	init_city.play();
    	init_SkatersAnimation();
    	init_TopCarriageAnimation();
    	init_creditsSnowAnimation();
    	fadeInTitleTag();
    };

    var pauseAnimations = function () {
        pause_skatersAnimation();
        pause_TopCarriageAnimation();
        pause_creditsSnowAnimation();
    };

    var startAnimations = function () {
        resume_skatersAnimation();
        resume_TopCarriageAnimation();
        resume_creditsSnowAnimation();
    };

    var pop = function () {
        var pop_city = new open_city();
        pop_city.play();
    }

    var initialize_city = function () {
        var tl_init = new TimelineMax({ paused: true });

        tl_init
			.set([
				Credits_Assets.all_buildings,
				Credits_Assets.all_houses,
				Credits_Assets.all_people,
				Credits_Assets.all_streetcars,
				Credits_Assets.all_treesandpoles
			], {
			    css: $.extend({}, tween_props.general.init, tween_props.general.closed)
			}, 0);

        return tl_init;
    };

    var open_city = function () {
        var tl_open_city = new TimelineMax({ paused: true });

        tl_open_city
			.to([
				Credits_Assets.all_buildings,
				Credits_Assets.all_houses,
				Credits_Assets.all_people,
				Credits_Assets.all_streetcars,
				Credits_Assets.all_treesandpoles
			], tween_props.open_time, {
			    css: {
			        rotationX: tween_props.general.open.rotationX
			    }
			}, 0)
			.to([
				Credits_Assets.all_buildings,
				Credits_Assets.all_houses,
				Credits_Assets.all_people,
				Credits_Assets.all_streetcars,
				Credits_Assets.all_treesandpoles
			], tween_props.open_time * 0.7, {
			    css: {
			        scaleY: tween_props.general.open.scaleY
			    }
			}, 0);

        return tl_open_city;
    }

    function fadeInTitleTag() {
        var tl_fadeIn = new TimelineMax({
        	paused: true
        });

        tl_fadeIn
			.fromTo(credits_wrap, 1.3, {
			    alpha: 0,
			    display: 'block'
			}, {
			    alpha: 1
			}, 0)
			.fromTo(Credits_Assets.TitleTag, 1.3,
            {
                alpha: 0,
                scaleY: 0.1,
                scaleX: 0.2,
                display: 'block'
            },
            {
                alpha: 1,
                scaleX: 1,
                scaleY: 1
            }, 0)
			.addCallback(function () {
				pop();
			},0);

        tl_fadeIn.play();
    };

    return {
        run: run,
        pop: pop,
        startAnimations: startAnimations,
        pauseAnimations: pauseAnimations
    }
})();


define("credits_module", ["jquery", "tweenmax", "timeline", "lodash"], function ($, tm, tl, _) {
    return {
        run: credits.run,
        pop: credits.pop,
        startAnimations: credits.startAnimations,
        pauseAnimations: credits.pauseAnimations
    }
});