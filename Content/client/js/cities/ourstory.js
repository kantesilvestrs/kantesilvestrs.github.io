/// <reference path="../lib/require.js" />
/// <reference path="../lib/jquery-2.1.3.intellisense.js" />
/// <reference path="../lib/TweenMax/TweenMax.js" />

var ourStory = (function () {

    //#region all elements
    var elements = {
        buildings: {
            building_2: $('.pcm-building-2'),
            building_4: $('.pcm-building-4'),
            building_6: $('.pcm-building-6'),
            building_6: $('.pcm-building-6'),
            greenBuilding_7: $('.pcm-green-building-7'),
            all_buildings: $('.all-buildings')
        },
        buildingGroups: {
            group_1: $('.pcm-buildings-1'),
            group_2: $('.pcm-buildings-2'),
            group_3: $('.pcm-buildings-3'),
            buildings5_layer_1: $('.pcm-buildings-5-layer-1'),
            buildings5_layer_2: $('.pcm-buildings-5-layer-2'),
            group_7: $('.pcm-buildings-7'),
            all_building_groups: $('.all-buildings-groups')
        },
        towers: {
            chrysler: $('.pcm-chrysler'),
            empireState: $('.pcm-empire-state'),
            all_towers: $('.all-towers')
        },
        houses: {
            //displayed in a line at the top
            houses1_layer_1: $('.pcm-houses-1-layer-1'),
            houses1_layer_2: $('.pcm-houses-1-layer-2'),
            houses2_layer_1: $('.pcm-houses-2-layer-1'),
            houses2_layer_2: $('.pcm-houses-2-layer-2'),
            //other houses
            houses_0: $('.pcm-houses-0'),
            houses_1: $('.pcm-houses-1'),
            houses_2: $('.pcm-houses-2'),
            houses_3: $('.pcm-houses-3'),
            all_houses: $('.all-houses')
        },
        lamps: {
            lampPost_1: $('.pcm-lamp-post-1'),
            lampPost_2: $('.pcm-lamp-post-2'),
            lampPost_3: $('.pcm-lamp-post-3'),
            allLampPosts: $('.all-lamp-posts')
        },
        trees: {
            trees0_layer_1: $('.pcm-trees-0-layer-1'),
            trees1_layer_1: $('.pcm-trees-1-layer-1'),
            trees1_layer_2: $('.pcm-trees-1-layer-2'),
            trees2_layer_2: $('.pcm-trees-2-layer-2'),
            trees2_layer_3: $('.pcm-trees-2-layer-3'),

            trees2_layer_4: $('.pcm-trees-2-layer-4'),
            trees3_layer_1: $('.pcm-trees-3-layer-1'),
            trees3_layer_2: $('.pcm-trees-3-layer-2'),

            trees4_layer_1: $('.pcm-trees-4-layer-1'),
            trees4_layer_2: $('.pcm-trees-4-layer-2'),
            trees5_layer_1: $('.pcm-trees-5-layer-1'),
            trees5_layer_2: $('.pcm-trees-5-layer-2'),
            trees5: $('.pcm-trees-5'),

            all_trees: $('.all-trees')
        },
        march: {
            lampMarchMain_1: $('.pcm-lamp-march-main-1'),
            lampMarchMain_2: $('.pcm-lamp-march-main-2'),
            lampMarchMain_3: $('.pcm-lamp-march-main-3'),
            lampMarchMain_4: $('.pcm-lamp-march-main-4'),
            lampMarchTopline_1: $('.pcm-lamp-march-topline-1'),
            lampMarchTopline_2: $('.pcm-lamp-march-topline-2'),
            lampMarchTopline_3: $('.pcm-lamp-march-topline-3'),
            all_march: $('.all-march')
        },
        other: {
            shop: $('.pcm-shop'),
            statueOfLiberty: $('.pcm-statue-of-liberty'),
            titleTag: $('.pcm-title-tag'),
            panelWrap: $('#ourstory-panel-wrap'),
            all_other: $('.all-other')
        },
        small_objects: {
            bird1: {
                nr: 1,
                x: 0.0,
                y: 0.0,
                counter: 0.0,
                ele: $('.bird1-move'),
                moveSpeed: rand(1.5, 3.2),
                wings: 0.3,
                wingsOpenDelay: 0.1,
                tl: new TimelineMax({ paused: true, repeat: -1 })
            },
            bird2: {
                nr: 2,
                x: 0.0,
                y: 0.0,
                counter: 0.0,
                ele: $('.bird2-move'),
                moveSpeed: rand(2.5, 3.2),
                wings: 0.8,
                wingsOpenDelay: 0.3,
                tl: new TimelineMax({ paused: true, repeat: -1 })
            },
            bird3: {
                nr: 3,
                x: 0.0,
                y: 0.0,
                counter: 0.0,
                ele: $('.bird3-move'),
                moveSpeed: rand(1.5, 3.2),
                wings: 0.6,
                wingsOpenDelay: 0.3,
                tl: new TimelineMax({ paused: true, repeat: -1 })
            },
            ship: {
                ele: $('.pcm__0000_ship'),
                tl: new TimelineMax({ paused: true })
            },
            boat1: {
                ele: $('.pcm__0002_boat1'),
                tl: new TimelineMax({ paused: true, delay: 4, repeat: -1 })
            },
            boat2: {
                ele: $('.pcm__0001_boat2'),
                tl: new TimelineMax({ paused: true, repeat: -1 })
            },
            taxi1: {
                ele: $('.pcm_taxi1'),
                //bg image classes that change the facing direction
                imgClass_topLeft: '',
                imgClass_topRight: '',
                imgClass_bottomLeft: '',
                imgClass_bottomRight: '',
                tl: new TimelineMax({ paused: true }),
                tl2: new TimelineMax({ paused: true, repeat: -1 })
            },
            taxi2: {
                ele: $('.pcm_taxi2'),
                tl: new TimelineMax({ paused: true, repeat: -1 })
            },
            taxi1_ppl: {
                allPeople: [],
                container: $('#ourstory-taxi1-person-container'),
                tl: new TimelineMax({ paused: true })
            },
            balloon: {
                ele: $('.pcm__0005_balloon'),
                tl: new TimelineMax({ paused: true, repeat: -1 })
            },
            riverWaves1: {
                ele: $('.map-base-waves-0000-layer2'),
                tl: new TimelineMax({ paused: true, repeat: -1 })
            },
            riverWaves2: {
                ele: $('.map-base-waves-mid-river'),
                tl: new TimelineMax({ paused: true, repeat: -1 })
            },
            riverWaves3: {
                ele: $('.map-base-waves-0001-layer3'),
                tl: new TimelineMax({ paused: true, repeat: -1 })
            },
            riverWaves4: {
                ele: $('.map-base-waves-0002-layer4'),
                tl: new TimelineMax({ paused: true, repeat: -1 })
            },
            fish1: {
                ele: $('.map-base-fish-layer1'),
                tl: new TimelineMax({ paused: true, repeat: -1 })
            },
            fish2: {
                ele: $('.map-base-fish-layer2'),
                tl: new TimelineMax({ paused: true, repeat: -1 })
            }
        }
    };
    //#endregion

    //#region timeline vars
    var tl_MainMarch1 = new TimelineMax({ paused: true, repeat: -1, delay: .7 });
    var tl_MainMarch2 = new TimelineMax({ paused: true, repeat: -1, delay: 0.5 });
    var tl_MainMarch3 = new TimelineMax({ paused: true, repeat: -1, delay: 1 });
    var tl_MainMarch4 = new TimelineMax({ paused: true, repeat: -1, delay: 0.2 });

    var tl_topLine1 = new TimelineMax({ paused: true, repeat: -1, delay: 0.9 });
    var tl_topLine2 = new TimelineMax({ paused: true, repeat: -1, delay: 0.2 });
    var tl_topLine3 = new TimelineMax({ paused: true, repeat: -1, delay: 0.6 });
    //#endregion

    //#region properties
    var tweenProps = {
        time: 1,
        setTrans: {
            transformOrigin: "center bottom 0",
            transformPerspective: 500
        },
        setInitialState: {
            rotationX: 80,
            scaleY: 3
        }
    };

    //#endregion

    //#region private functions

    //#region Helper functions

    //generate random decimal number
    function rand(min, max) {
        var result = 0.0;
        result = Math.random() * (max - min) + min;
        return result;
    };
    function fadeInTitleTag() {
        var tl_fadeIn = new TimelineMax({
            paused: true
        });

        tl_fadeIn
            .fromTo(elements.other.panelWrap, 1.3, {
                alpha: 0,
                display: 'block'
            }, {
                alpha: 1
            }, 0)
            .fromTo(elements.other.titleTag, 1.3,
            {
                alpha: 0,
                scaleY: 0.1,
                scaleX: 0.2,
                display: 'block'
            },
            {
                alpha: 1,
                scaleX: 1,
                scaleY: 1,
            }, 0)
            .addCallback(showCity, 0);

        tl_fadeIn.play();
    };
    function hoverCityEventHandler() {
        elements.other.panelWrap.mouseenter(function () {
            showCity();
            resume_LampMarchMain();
            resume_TopMarchLine();
        });
        elements.other.panelWrap.mouseleave(function () {
            collapseCity(0.3);
            pause_LampMarchMain();
            pause_TopMarchLine();
        });
    };

    //#endregion

    //#region Animation tweens

    function showCity() {
        TweenMax.to([
            elements.buildingGroups.all_building_groups,
            elements.buildings.all_buildings,
            elements.houses.all_houses,
            elements.lamps.allLampPosts,
            elements.march.all_march,
            elements.other.all_other,
            elements.towers.all_towers,
            elements.trees.all_trees

        ], tweenProps.time, {
            rotationX: 0
        });

        TweenMax.to([
            elements.buildingGroups.all_building_groups,
            elements.buildings.all_buildings,
            elements.houses.all_houses,
            elements.lamps.allLampPosts,
            elements.march.all_march,
            elements.other.all_other,
            elements.towers.all_towers,
            elements.trees.all_trees

        ], tweenProps.time * 0.74, {
            css: { scaleY: 1 },
        });
    };

    function collapseCity(speed) {
        TweenMax.to(
            [
                elements.buildingGroups.all_building_groups,
                elements.buildings.all_buildings,
                elements.houses.all_houses,
                elements.lamps.allLampPosts,
                elements.march.all_march,
                elements.other.all_other,
                elements.towers.all_towers,
                elements.trees.all_trees
            ], speed, {
                css: {
                    scaleY: tweenProps.setInitialState.scaleY, rotationX: 80,
                    transformPerspective: 200,
                    transformOrigin: "center bottom 0"
                }
            });
    };

    function init_LampMarchs() {
        function init_LampMarchMain() {
            //first line
            tl_MainMarch1.add(TweenMax.to(elements.march.lampMarchMain_1, 3, { css: { x: 5, y: -3 }, ease: Power1.easeInOut }));
            tl_MainMarch1.add(TweenMax.to(elements.march.lampMarchMain_1, 3, { css: { x: 0, y: 0 }, repat: -1, ease: Power1.easeInOut }));
            //second line
            tl_MainMarch2.add(TweenMax.to(elements.march.lampMarchMain_2, 3, { css: { x: -5, y: 3 }, ease: Power1.easeInOut }));
            tl_MainMarch2.add(TweenMax.to(elements.march.lampMarchMain_2, 3, { css: { x: 0, y: 0 }, repat: -1, ease: Power1.easeInOut }));
            //third line
            tl_MainMarch3.add(TweenMax.to(elements.march.lampMarchMain_3, 3, { css: { x: 5, y: -1 }, ease: Power1.easeInOut }));
            tl_MainMarch3.add(TweenMax.to(elements.march.lampMarchMain_3, 3, { css: { x: -7, y: 4 }, ease: Power1.easeInOut }));
            tl_MainMarch3.add(TweenMax.to(elements.march.lampMarchMain_3, 3, { css: { x: 0, y: 0 }, repat: -1, ease: Power1.easeInOut }));
            //fourth line
            tl_MainMarch4.add(TweenMax.to(elements.march.lampMarchMain_4, 3, { css: { x: -5, y: 1 }, ease: Power1.easeInOut }));
            tl_MainMarch4.add(TweenMax.to(elements.march.lampMarchMain_4, 3, { css: { x: 0, y: 0 }, repat: -1, ease: Power1.easeInOut }));
        };

        function init_TopMarchLine() {
            tl_topLine1.add(TweenMax.to(elements.march.lampMarchTopline_1, 5, { css: { x: -3, y: -1 }, easeOut: Power1 }));
            tl_topLine1.add(TweenMax.to(elements.march.lampMarchTopline_1, 3, { css: { x: 0, y: 0 }, repat: -1, easeOut: Power1 }));
            //second line
            tl_topLine2.add(TweenMax.to(elements.march.lampMarchTopline_2, 3, { css: { x: 3, y: 1 }, easeOut: Power2 }));
            tl_topLine2.add(TweenMax.to(elements.march.lampMarchTopline_2, 4, { css: { x: 0, y: 0 }, repat: -1, easeOut: Power2 }));
            //third line
            tl_topLine3.add(TweenMax.to(elements.march.lampMarchTopline_3, 3, { css: { x: -3, y: -1 }, easeOut: Power2 }));
            tl_topLine3.add(TweenMax.to(elements.march.lampMarchTopline_3, 5, { css: { x: 5, y: 2 }, easeOut: Power2 }));
            tl_topLine3.add(TweenMax.to(elements.march.lampMarchTopline_3, 2, { css: { x: 0, y: 0 }, repat: -1, easeOut: Power2 }));
        };

        init_LampMarchMain();
        init_TopMarchLine();
    };
    function pause_LampMarchs() {
        tl_MainMarch1.pause();
        tl_MainMarch2.pause();
        tl_MainMarch3.pause();
        tl_MainMarch4.pause();
        tl_topLine1.pause();
        tl_topLine2.pause();
        tl_topLine3.pause();
    };
    function resume_LampMarchs() {
        tl_MainMarch1.resume();
        tl_MainMarch2.resume();
        tl_MainMarch3.resume();
        tl_MainMarch4.resume();
        tl_topLine1.resume();
        tl_topLine2.resume();
        tl_topLine3.resume();
    };

    function init_Birds() {
        //generic bird animation inicializing
        function init_BirdAnimation(bird, moveFunction) {
            var tl = new TimelineMax({ paused: true, repeat: -1 });

            tl.insert(TweenMax.to(bird.ele, bird.wings, {
                onComplete: function () {
                    bird.ele.removeClass('pcm_b_' + bird.nr + '_open_wings');
                    bird.ele.addClass('pcm_b_' + bird.nr + '_close_wings');
                }
            }))
            .insert(TweenMax.to(bird.ele, bird.wings, {
                delay: bird.wingsOpenDelay,
                onComplete: function () {
                    bird.ele.removeClass('pcm_b_' + bird.nr + '_close_wings');
                    bird.ele.addClass('pcm_b_' + bird.nr + '_open_wings');
                }
            }))
            .insert(TweenMax.to(bird.ele, 0.1, {
                onComplete: moveFunction,
                ease: Linear.easeNone
            }));
            return tl;
        };
        //animate bird object around circle
        function moveAroundCircle(bird, radius, step) {
            bird.counter = bird.counter + step;
            bird.x = radius * Math.cos(bird.counter);
            bird.y = radius * Math.sin(bird.counter);
            TweenMax.to(bird.ele, bird.moveSpeed, { css: { x: bird.x, y: bird.y }, ease: Linear.easeNone });
        };

        function bird1Move() {
            moveAroundCircle(elements.small_objects.bird1, 180, 0.1);
        };
        function bird2Move() {
            moveAroundCircle(elements.small_objects.bird2, 90, 0.1);
        };
        function bird3Move() {
            moveAroundCircle(elements.small_objects.bird3, 220, 0.1);
        };

        elements.small_objects.bird1.ele.addClass('pcm_b_1_open_wings');
        elements.small_objects.bird2.ele.addClass('pcm_b_2_open_wings');
        elements.small_objects.bird3.ele.addClass('pcm_b_3_open_wings');

        //bird 1 animation
        elements.small_objects.bird1.tl = init_BirdAnimation(
            elements.small_objects.bird1,
            bird1Move
            );
        //bird 2 animation
        elements.small_objects.bird2.tl = init_BirdAnimation(
            elements.small_objects.bird2,
            bird2Move
            );
        //bird 3 animation
        elements.small_objects.bird3.tl = init_BirdAnimation(
            elements.small_objects.bird3,
            bird3Move
            );
    };
    function pause_BirdAnimation() {
        elements.small_objects.bird1.tl.pause();
        elements.small_objects.bird2.tl.pause();
        elements.small_objects.bird3.tl.pause();
    };
    function resume_BirdAnimation() {
        elements.small_objects.bird1.tl.resume();
        elements.small_objects.bird2.tl.resume();
        elements.small_objects.bird3.tl.resume();
    };

    function init_ShipBoatAnimations() {

        function init_Boat1Animation() {
            //do animation
            elements.small_objects.boat1.tl
                .add(TweenMax.to(elements.small_objects.boat2.ele, 6, { css: { rotation: "+=10", x: "-=30", y: "+=10" } }))
                .add(TweenMax.to(elements.small_objects.boat1.ele, 15, { css: { rotation: "-=10", x: "-=20", y: "+=10" } }))
                .add(TweenMax.to(elements.small_objects.boat1.ele, 18, { css: { rotation: "-=10", x: "-=20", y: "+=10" } }))
                .add(TweenMax.to(elements.small_objects.boat1.ele, 20, { css: { rotation: "+=10", x: "+=20", y: "-=10" } }))
                .add(TweenMax.to(elements.small_objects.boat1.ele, 12, { css: { rotation: "+=10", x: "+=20", y: "-=10" } }))
                .add(TweenMax.to(elements.small_objects.boat1.ele, 19, { css: { rotation: "+=10", x: "-=40", y: "+=5" } }))
                .add(TweenMax.to(elements.small_objects.boat1.ele, 15, { css: { rotation: "+=10", x: "-=40", y: "+=5" } }))
                .add(TweenMax.to(elements.small_objects.boat1.ele, 15, { css: { rotation: "-=10", x: "+=40", y: "-=5" } }))
                .add(TweenMax.to(elements.small_objects.boat1.ele, 18, { css: { rotation: "-=10", x: "+=40", y: "-=5" } }));
        };

        function init_Boat2Animation() {
            //do animation
            elements.small_objects.boat2.tl
                .add(TweenMax.to(elements.small_objects.boat2.ele, 6, { css: { rotation: "+=10", x: "-=30", y: "+=10" } }))
                .add(TweenMax.to(elements.small_objects.boat2.ele, 15, { css: { rotation: "-=20", x: "-=30", y: "+=20" } }))
                .add(TweenMax.to(elements.small_objects.boat2.ele, 18, { css: { rotation: "-=20", x: "-=30", y: "+=20" } }))
                .add(TweenMax.to(elements.small_objects.boat2.ele, 20, { css: { rotation: "+=20", x: "+=30", y: "-=20" } }))
                .add(TweenMax.to(elements.small_objects.boat2.ele, 12, { css: { rotation: "+=20", x: "+=30", y: "-=20" } }))
                .add(TweenMax.to(elements.small_objects.boat2.ele, 19, { css: { rotation: "+=20", x: "-=60", y: "+=5" } }))
                .add(TweenMax.to(elements.small_objects.boat2.ele, 15, { css: { rotation: "+=20", x: "-=60", y: "+=5" } }))
                .add(TweenMax.to(elements.small_objects.boat2.ele, 15, { css: { rotation: "-=20", x: "+=60", y: "-=5" } }))
                .add(TweenMax.to(elements.small_objects.boat2.ele, 18, { css: { rotation: "-=20", x: "+=60", y: "-=5" } }));
        };

        //#region Ship animation
        elements.small_objects.ship.tl.add(TweenMax.fromTo(elements.small_objects.ship.ele, 5, {
            css: { rotation: 0, x: 0, y: 0 }
        }, {
            css: { rotation: "+=10", x: "-=40", y: "+=2" }, ease: Linear.easeNone,
            onComplete: function () {
                //start the boat2 animation
                TweenMax.to(elements.small_objects.boat2.ele, 6, { css: { x: "+=30", y: "-=10" } });
            }
        }))
        .add(TweenMax.to(elements.small_objects.ship.ele, 6, {
            css: { rotation: "+=10", x: "-=50", y: "+=1" }, ease: Linear.easeNone,
            onComplete: function () {
                //start the boat1 animation
                TweenMax.to(elements.small_objects.boat1.ele, 6, { css: { x: "+=30", y: "-=10" } });
            }
        }))
        .add(TweenMax.to(elements.small_objects.ship.ele, 6, { css: { rotation: "+=15", x: "-=50", y: "-=17" }, ease: Linear.easeNone }))
        .add(TweenMax.to(elements.small_objects.ship.ele, 4, { css: { rotation: "+=22", x: "-=32", y: "-=25" }, ease: Linear.easeNone }))
        .add(TweenMax.to(elements.small_objects.ship.ele, 5, {
            css: { rotation: "+=13", x: "-=20", y: "-=20" }, ease: Linear.easeNone,
            onComplete: function () {
                //change ship's background img/change class
                elements.small_objects.ship.ele.removeClass('pcm__0000_ship');
                elements.small_objects.ship.ele.addClass('pcm__0000_ship_flip_horizontaly');
                //after changing the bg img, set rotation again
                TweenMax.set(elements.small_objects.ship.ele, { css: { rotation: -120 } });
                //animate both boats
                elements.small_objects.boat1.tl.resume();
                elements.small_objects.boat2.tl.resume();
            }
        }))
        .add(TweenMax.to(elements.small_objects.ship.ele, 5, { css: { rotation: "+=12", x: "-=2", y: "-=50" }, ease: Linear.easeNone }))
        .add(TweenMax.to(elements.small_objects.ship.ele, 5, { css: { rotation: "+=33", y: "-=50" }, ease: Linear.easeNone }))
        .add(TweenMax.to(elements.small_objects.ship.ele, 4, { css: { rotation: "+=10", x: "+=21", y: "-=60" }, ease: Linear.easeNone }))
        .add(TweenMax.to(elements.small_objects.ship.ele, 4, { css: { rotation: "+=5", x: "+=30", y: "-=60" }, ease: Linear.easeNone }))
        .add(TweenMax.to(elements.small_objects.ship.ele, 4, { css: { rotation: "-=10", x: "+=30", y: "-=60" }, ease: Linear.easeNone }))
        .add(TweenMax.to(elements.small_objects.ship.ele, 6, { css: { rotation: "+=5", x: "+=30", y: "-=80" }, ease: Linear.easeNone }))
        .add(TweenMax.to(elements.small_objects.ship.ele, 6, { css: { rotation: "+=15", x: "+=30", y: "-=40" }, ease: Linear.easeNone }))
        .add(TweenMax.to(elements.small_objects.ship.ele, 5, { css: { rotation: "+=25", x: "+=40", y: "-=30" }, ease: Linear.easeNone }))
        .add(TweenMax.to(elements.small_objects.ship.ele, 8, { css: { rotation: "+=10", x: "+=160", y: "-=30" }, ease: Linear.easeNone }))
        .add(TweenMax.to(elements.small_objects.ship.ele, 7, { css: { rotation: "-=5", x: "+=140", y: "-=40" }, ease: Linear.easeNone }))
        .add(TweenMax.to(elements.small_objects.ship.ele, 7, { css: { rotation: "-=15", x: "+=70", y: "-=50" }, ease: Linear.easeNone }))
        .add(TweenMax.to(elements.small_objects.ship.ele, 7, { css: { rotation: "-=15", x: "+=100", y: "-=90" }, ease: Linear.easeNone }))
        .add(TweenMax.to(elements.small_objects.ship.ele, 7, { css: { x: "+=100", y: "-=90" }, ease: Linear.easeNone }))
        .add(TweenMax.to(elements.small_objects.ship.ele, 7, { css: { x: "+=100", y: "-=90" }, ease: Linear.easeNone }))
        .add(TweenMax.to(elements.small_objects.ship.ele, 7, { css: { rotation: "+=5", x: "+=110", y: "-=90" }, ease: Linear.easeNone }))
        .add(TweenMax.to(elements.small_objects.ship.ele, 7, { css: { rotation: "+=10", x: "+=200", y: "-=90" }, ease: Linear.easeNone }))
        .add(TweenMax.to(elements.small_objects.ship.ele, 7, { css: { rotation: "-=20", x: "+=150", y: "-=90" }, ease: Linear.easeNone }))
        .add(TweenMax.fromTo(elements.small_objects.ship.ele, 7, { css: { autoAlpha: 1 }, ease: Linear.easeNone }, {
            css: {
                scaleX: 0.5, scaleY: 0.5,
                rotation: "-=10", x: "-=10", y: "-=10", autoAlpha: 0
            }, ease: Linear.easeNone
        }))
        .add(TweenMax.to(elements.small_objects.ship.ele, 0.1, { css: { display: 'none' } }));
        //#endregion


        init_Boat1Animation();
        init_Boat2Animation();

        return elements.small_objects.ship.tl;
    };
    function pause_ShipBoatAnimations() {
        elements.small_objects.ship.tl.pause();
        elements.small_objects.boat1.tl.pause();
        elements.small_objects.boat2.tl.pause();
    };
    function resume_ShipBoatAnimations() {
        elements.small_objects.ship.tl.resume();
        //elements.small_objects.boat1.tl.resume();
        //elements.small_objects.boat2.tl.resume();
    };

    function init_taxiAnimations() {
        function init_taxi1Animation() {

            function start_taxi1PeopleOnWay() {
                elements.small_objects.taxi1_ppl.container.addClass('on-way');
                elements.small_objects.taxi1_ppl.container.removeClass('arrived');

                //set to begining position in case if called again.
                elements.small_objects.taxi1_ppl.tl = new TimelineMax({ paused: true });
                //set the opacity back to visible
                elements.small_objects.taxi1_ppl.tl.set(elements.small_objects.taxi1_ppl.container, { css: { autoAlpha: 1 } });
                //clear the ppl list 
                elements.small_objects.taxi1_ppl.allPeople = [];

                var radius = 2;
                var randomColors = ["red", "green", "blue", "gray"];
                var pplCount = rand(1, randomColors.length);

                function rand(min, max) {
                    return Math.floor((Math.random() * max) + min);
                };

                function initList() {
                    for (var i = 0; i < 4; i++) {
                        var ele = document.getElementById('ourstory-taxi1-person-' + (i + 1));
                        var tl = new TimelineMax({ paused: true, repeat: -1 });
                        //add element to array
                        elements.small_objects.taxi1_ppl.allPeople.push({ ele: ele, tl: tl });
                    }
                };

                function moveToTaxi() {
                    elements.small_objects.taxi1_ppl.tl.to(elements.small_objects.taxi1_ppl.container, 5, {
                        css: {}, ease: Power0.easeOut,
                        onComplete: function () {
                            TweenLite.to(elements.small_objects.taxi1_ppl.container, 1, { css: { autoAlpha: 0 } });
                        }
                    });
                    elements.small_objects.taxi1_ppl.tl.play();
                }

                function drawAndAnimatePeople() {

                    for (var i = 0; i < pplCount; i++) {
                        var context = elements.small_objects.taxi1_ppl.allPeople[i].ele.getContext('2d');
                        var centerX = elements.small_objects.taxi1_ppl.allPeople[i].ele.width / 2;
                        var centerY = elements.small_objects.taxi1_ppl.allPeople[i].ele.height / 2;
                        var randColor = randomColors[rand(0, randomColors.length - 1)];
                        var delay = rand(1, 3);

                        context.beginPath();
                        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
                        context.fillStyle = randColor;
                        context.fill();
                        context.lineWidth = 1;
                        context.strokeStyle = randColor;
                        context.stroke();

                        elements.small_objects.taxi1_ppl.allPeople[i].tl
                          .add(TweenMax.to(elements.small_objects.taxi1_ppl.allPeople[i].ele, 0.2, { css: { y: 7 }, ease: Power0.easeOut }))
                          .add(TweenMax.to(elements.small_objects.taxi1_ppl.allPeople[i].ele, 0.2, { css: { y: 0 }, delay: delay, ease: Power0.easeIn }));

                        elements.small_objects.taxi1_ppl.allPeople[i].tl.play();
                    }
                }

                initList();
                drawAndAnimatePeople();
                moveToTaxi();
            };

            function start_taxi1PeopleArrive() {
                var tl = new TimelineMax({ paused: true });
                elements.small_objects.taxi1_ppl.container.addClass('arrived');
                elements.small_objects.taxi1_ppl.container.removeClass('on-way');

                tl.add(TweenMax.to(elements.small_objects.taxi1_ppl.container, 2, {
                    css: {
                        autoAlpha: 1
                    }
                }))
                .add(TweenMax.to(elements.small_objects.taxi1_ppl.container, 3, { css: { x: -20, y: -10 }, delay: 3 }))
                .add(TweenMax.to(elements.small_objects.taxi1_ppl.container, 1, { css: { autoAlpha: 0 } }));
                //used private timeline, because the animation is really short and there
                //is no need to pause on zoomin
                tl.play();
            };

            function init_animateSecondPart() {
                elements.small_objects.taxi1.tl2.add(
                    TweenMax.to(elements.small_objects.taxi1.ele, 8, {
                        css: { x: "+=90", y: "+=35" }, delay: 3, ease: Power2.easeInOut
                    }))
                .add(TweenMax.to(elements.small_objects.taxi1.ele, 8, {
                    css: { x: "+=80", y: "+=30" }, delay: 3, ease: Power2.easeInOut, onComplete: function () {
                        start_taxi1PeopleOnWay();
                    }
                }))
                .add(TweenMax.to(elements.small_objects.taxi1.ele, 8, { delay: 4 }))
                .add(TweenMax.to(elements.small_objects.taxi1.ele, 8, {
                    css: { x: "+=70", y: "+=28" }, ease: Linear.easeNone,
                    onComplete: function () {
                        elements.small_objects.taxi1.ele.addClass('pcm__taxi-top-right');
                        elements.small_objects.taxi1.ele.removeClass('pcm__0004_taxi1');
                    }
                }))
                .add(TweenMax.to(elements.small_objects.taxi1.ele, 7, {
                    css: { x: "+=180", y: "-=120" }, ease: Linear.easeNone,
                    onComplete: function () {
                        elements.small_objects.taxi1.ele.removeClass('pcm__taxi-top-right');
                        elements.small_objects.taxi1.ele.addClass('pcm__taxi-top-left');
                    }
                }))
                .add(TweenMax.to(elements.small_objects.taxi1.ele, 7, { css: { x: "-=170", y: "-=80" }, ease: Linear.easeNone }))
                .add(TweenMax.to(elements.small_objects.taxi1.ele, 10, { css: { x: "-=150", y: "-=120" }, ease: Power0.easeIn }))
                //starts the repeating animation
                .add(TweenMax.to(elements.small_objects.taxi1.ele, 8, {
                    css: { x: "-=5", y: "-=5" },
                    onComplete: function () {
                        elements.small_objects.taxi1.ele.addClass('pcm__0003_taxi2');
                        elements.small_objects.taxi1.ele.removeClass('pcm__taxi-top-left');
                    }
                }))
                .add(TweenMax.to(elements.small_objects.taxi1.ele, 10, {
                    css: { x: "-=12", y: "+=10" }, ease: Linear.easeNone
                }))
                //lets out the ppl at the march
                .add(TweenMax.to(elements.small_objects.taxi1.ele, 4, {
                    css: { x: "-=5", y: "+=10" }, ease: Power2.easeInOut, onComplete: function () {
                        start_taxi1PeopleArrive();
                    },
                    delay: 4
                }))
                .add(TweenMax.to(elements.small_objects.taxi1.ele, 2, {
                    css: { x: "-=10", y: "+=20" }, ease: Linear.easeNone,
                    delay: 2
                }))
                .add(TweenMax.to(elements.small_objects.taxi1.ele, 2, {
                    ease: Linear.easeNone,
                    onComplete: function () {
                        elements.small_objects.taxi1.ele.removeClass('pcm__0003_taxi2');
                        elements.small_objects.taxi1.ele.addClass('pcm__0004_taxi1');
                    }
                }))
                .add(TweenMax.to(elements.small_objects.taxi1.ele, 10, {
                    css: { x: "+=127", y: "+=80" }, ease: Power1.easeIn,
                    onComplete: function () {
                        elements.small_objects.taxi1.ele.addClass('pcm__0003_taxi2');
                        elements.small_objects.taxi1.ele.removeClass('pcm__0004_taxi1');
                    }
                }))
                .add(TweenMax.to(elements.small_objects.taxi1.ele, 8, {
                    css: { rotation: 0, x: "-=170", y: "+=110" },
                    onComplete: function () {
                        elements.small_objects.taxi1.ele.removeClass('pcm__0003_taxi2');
                        elements.small_objects.taxi1.ele.addClass('pcm__0004_taxi1');
                    }
                }));
            };

            TweenMax.set(elements.small_objects.taxi1.ele, { css: { x: 0, y: 0 } });

            //starts the non repeating animation
            elements.small_objects.taxi1.tl.add(TweenMax.to(elements.small_objects.taxi1.ele, 12, {
                css: { x: "+=105", y: "+=85" },
                onComplete: function () {
                    elements.small_objects.taxi1.ele.addClass('pcm__taxi-top-right');
                    elements.small_objects.taxi1.ele.removeClass('pcm__0004_taxi1');
                }
            }))
            //turn right
            .add(TweenMax.to(elements.small_objects.taxi1.ele, 7, {
                css: { x: "+=130", y: "-=82" }, ease: Linear.easeNone,
                onComplete: function () {
                    elements.small_objects.taxi1.ele.removeClass('pcm__taxi-top-right');
                    elements.small_objects.taxi1.ele.addClass('pcm__0004_taxi1');
                    elements.small_objects.taxi1.tl2.resume();
                }
            }));

            init_animateSecondPart();
        };
        function init_taxi2Animation() {
            var taxi2 = elements.small_objects.taxi2.ele;

            elements.small_objects.taxi2.tl
            .add(TweenLite.to(taxi2, 7, {
                css: { x: "-=70", y: "+=55" },
                onComplete: function () {
                    taxi2.addClass('pcm__0004_taxi1');
                    taxi2.removeClass('pcm__0003_taxi2');
                }, ease: Power1.easeIn
            }))
            .add(TweenLite.to(taxi2, 7, {
                css: { x: "+=90", y: "+=52", rotation: "-=10" }, ease: Linear.easeNone
            }))
            .add(TweenLite.to(taxi2, 8, {
                css: { x: "+=100", y: "+=32", rotation: "-=5" }, ease: Linear.easeNone
            }))
            .add(TweenLite.to(taxi2, 1, {
                css: { autoAlpha: 0 }, ease: Power1.easeOut,
                onComplete: function () {
                    taxi2.addClass('pcm__0003_taxi2');
                    taxi2.removeClass('pcm__0004_taxi1');
                }
            }))
            .add(TweenLite.to(taxi2, 0.1, {
                css: { x: 0, y: 0, rotation: 0 }
            }))
            .add(TweenLite.to(taxi2, 1, {
                css: { autoAlpha: 1 }, delay: 4
            }));
        };

        init_taxi1Animation();
        init_taxi2Animation();
    };
    function pause_taxiAnimations() {
        elements.small_objects.taxi1.tl.pause();
        elements.small_objects.taxi2.tl.pause();
    };
    function resume_taxiAnimations() {
        elements.small_objects.taxi1.tl.resume();
        elements.small_objects.taxi2.tl.resume();
    };

    function init_ballonAnimation() {
        elements.small_objects.balloon.tl.add(TweenMax.to(elements.small_objects.balloon.ele, 30, {
            css: { x: "-=70", y: "-=30" }, ease: Power0.easeInOut, delay: 3
        }))
        .add(TweenMax.to(elements.small_objects.balloon.ele, 30, {
            css: { x: "+=70", y: "+=30" }, ease: Power0.easeInOut, delay: 3
        }));
    };
    function pause_ballonAnimation() {
        elements.small_objects.balloon.tl.pause();
    };
    function resume_ballonAnimation() {
        elements.small_objects.balloon.tl.resume();
    };

    function init_RiverWavesAnimation() {
        var waves1 = elements.small_objects.riverWaves1.ele;
        var waves2 = elements.small_objects.riverWaves2.ele;
        var waves3 = elements.small_objects.riverWaves3.ele;
        var waves4 = elements.small_objects.riverWaves4.ele;

        var fish1 = elements.small_objects.fish1.ele;
        var fish2 = elements.small_objects.fish2.ele;

        //fish one tween
        elements.small_objects.fish1.tl.add(TweenLite.to(fish1, 9, {
            css: { x: "-=120", y: "+=90" }
        }))
        .add(TweenLite.to(fish1, 12, {
            css: { x: "+=20", y: "+=10" }, delay: 3
        }))
        .add(TweenLite.to(fish1, 12, {
            css: { x: "-=190", y: "+=60", rotation: "-=20" }
        }))
        .add(TweenLite.to(fish1, 12, {
            css: { autoAlpha: 0 }
        }))
        .add(TweenLite.to(fish1, 0.1, {
            css: { x: 0, y: 0, rotation: 0 }, delay: 10
        }))
        .add(TweenLite.to(fish1, 2, {
            css: { autoAlpha: 1 }
        }));
        //second fish tween
        elements.small_objects.fish2.tl.add(TweenLite.to(fish2, 9, {
            css: { x: "-=30", rotation: "+=20" }, ease: Power2.easeOut
        }))
        .add(TweenLite.to(fish2, 9, {
            css: { x: "+=30", rotation: "-=20" }, ease: Power2.easeOut
        }));
        //waves1 tween
        elements.small_objects.riverWaves1.tl.add(
            TweenLite.to(waves1, 10, {
                css: { x: "+=20", rotationX: "+=5" }, ease: Power1.easeInOut
            }))
        .add(TweenLite.to(waves1, 10, {
            css: { x: "-=20", rotationX: "-=5" }, ease: Power1.easeInOut
        }));
        //waves2 tween
        elements.small_objects.riverWaves2.tl.add(
            TweenLite.to(waves2, 10, {
                css: { x: "-=40" }, ease: Power1.easeInOut
            }))
        .add(TweenLite.to(waves2, 12, {
            css: { x: "+=40" }, ease: Power1.easeInOut
        }));
        //waves3 tween
        elements.small_objects.riverWaves3.tl.add(
            TweenLite.to(waves3, 10, {
                css: { x: "-=10" }
            }))
        .add(TweenLite.to(waves3, 12, {
            css: { x: "+=10" }
        }));
        //waves4 tween
        elements.small_objects.riverWaves4.tl.add(
            TweenLite.to(waves4, 12, {
                css: { y: "+=20", x: "-=25" }
            }))
        .add(TweenLite.to(waves4, 13, {
            css: { y: "-=20", x: "+=25" }
        }));
    };
    function pause_RiverWavesAnimation() {
        elements.small_objects.riverWaves1.tl.pause();
        elements.small_objects.riverWaves2.tl.pause();
        elements.small_objects.riverWaves3.tl.pause();
        elements.small_objects.riverWaves4.tl.pause();
        elements.small_objects.fish2.tl.pause();
        elements.small_objects.fish1.tl.pause();
    };
    function resume_RiverWavesAnimation() {
        elements.small_objects.riverWaves1.tl.resume();
        elements.small_objects.riverWaves2.tl.resume();
        elements.small_objects.riverWaves3.tl.resume();
        elements.small_objects.riverWaves4.tl.resume();
        elements.small_objects.fish2.tl.resume();
        elements.small_objects.fish1.tl.resume();
    };

    //#endregion

    //#endregion

    return {
        pauseAnimations: function () {
            //pause all animations in this city
            pause_LampMarchs();
            pause_BirdAnimation();
            pause_ShipBoatAnimations();
            pause_taxiAnimations();
            pause_ballonAnimation();
            pause_RiverWavesAnimation();
        },
        initAnimations: function () {
            //initialize all tweens
            init_LampMarchs();
            init_Birds();
            init_ShipBoatAnimations();
            init_taxiAnimations();
            init_ballonAnimation();
            init_RiverWavesAnimation();
        },
        startAnimations: function () {
            //resume() is basically the same as play()
            resume_LampMarchs();
            resume_BirdAnimation();
            resume_ShipBoatAnimations();
            resume_taxiAnimations();
            resume_ballonAnimation();
            resume_RiverWavesAnimation();
        },
        init: function () {
            collapseCity(0);
            this.initAnimations();
            fadeInTitleTag();
        },
        pop: showCity,
        addEventHandlers: function () {
            //I guess this can be removed
            //hoverCityEventHandler();
        }
    };
})();

define("ourstory_module", ["jquery", "tweenmax", "timeline"], function ($, tm, tl) {
    var run = function () {
        ourStory.init();
        ourStory.addEventHandlers();
    };
    var startAnimations = function () {
        ourStory.startAnimations();
    }
    var pauseAnimations = function () {
        ourStory.pauseAnimations();
    }
    return {
        run: run,
        pop: ourStory.pop,
        startAnimations: startAnimations,
        pauseAnimations: pauseAnimations
    }
})