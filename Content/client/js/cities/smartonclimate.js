/// <reference path="../lib/require.js" />
/// <reference path="../lib/jquery-2.1.3.intellisense.js" />
/// <reference path="../lib/TweenMax/TweenMax.js" />


define("smartonclimate_module", ["jquery", "tweenmax", "timeline", "config"], function ($, tm, tl, config) {

    var som_wrap = $("#smartonclimate-panel-wrap");
    var soc_panelContainer = $('.smartonclimate-panel-container');

    //#region Elements

    var SoC_Assets = {
        trees: {
            tree_0: $(".middle-bottom-group-trees-0", som_wrap),
            tree_1: $(".middle-bottom-group-tree-1", som_wrap),
            tree_2: $(".middle-right-group-tree-2", som_wrap),
            tree_3: $(".middle-bottom-group-trees-3", som_wrap),
            tree_4: $(".middle-middle-group-tree-4", som_wrap),
            tree_5: $(".middle-middle-group-trees-5", som_wrap),
            tree_6: $(".middle-middle-group-tree-6", som_wrap),
            tree_7: $(".middle-middle-group-trees-7", som_wrap),
            tree_8: $(".left-top-group-trees-8", som_wrap)
        },
        all_trees: $(".tree_asset", som_wrap),
        all_buildings: $(".building_asset", som_wrap),
        // TODO: Add specific buildings
        buildings: {
            left_three_buildings: $(".left-three-buildings", som_wrap)
        },
        train: $(".upper-middle-train", som_wrap),
        sun: $(".sun-ball", som_wrap),
        electric_wires: $(".electric-wires", som_wrap),
        all_windmills: $(".windimill_asset", som_wrap),
        // TODO: Adde specific windmills
        windmills: {},
        all_solarpanels: $(".solarpanel_asset", som_wrap),
        // TODO: Added specific solar panels
        solarpanels: {},
        moving_assets: {
            cyclist_1: $(".right-top-upper-middle-group-cyclist-3", som_wrap),
            cyclist_2: $(".middle-bottom-group-cyclist-4", som_wrap),
            car_1: $(".right-top-upper-middle-group-car-17", som_wrap)
        },
        TitelTag: $(".title-tag", som_wrap),

        small_objects: {
            train: {
                ele: $('.upper-middle-train'),
                tl: new TimelineMax({ paused: true, repeat: -1 }),
                train_carriage: {
                    first: $('.train-carriage-1'),
                    second: $('.train-carriage-2'),
                    third: $('.train-carriage-3'),
                    fourth: $('.train-carriage-4')
                },
                pplGroups: [
					$("#soc-ppl-group-to-train-1"),
					$("#soc-ppl-group-from-train-1"),
					$("#soc-ppl-group-to-train-"),
					$("#soc-ppl-group-from-train-2")
                ],
                tl_to: new TimelineMax({ paused: true }),
                tl_from: new TimelineMax({ paused: true })
            },
            lakeWaves: {
                ele_1: $('#soc-lake-waves-1'),
                ele_2: $('#soc-lake-waves-2'),
                tl: new TimelineMax({ paused: true, repeat: -1 })
            },
            bottom_cyclist: {
                ele: $('.middle-bottom-group-cyclist-4'),
                tl: new TimelineMax({ paused: true, repeat: -1 })
            },
            sun: {
                x: 0.0,
                y: 0.0,
                rotate_RightMidSolarPanel: 0,
                rotate_FatBuildingSolarPanels: 37,
                rotate_rightSideSolarPanels: 30,
                ele: $('.sun-ball'),
                tl: new TimelineMax({ paused: true, repeat: -1 })
            },
            right_middle_solar_panels: {
                panel1: $('.right-middle-panel1'),
                panel2: $('.right-middle-panel2'),
                panel3: $('.right-middle-panel3'),
                panel4: $('.right-middle-panel4')
            },
            fat_building_solar_panels: {
                panel1: $('.fat-building-panel1'),
                panel2: $('.fat-building-panel2'),
                panel3: $('.fat-building-panel3')
            },
            right_side_solar_panels: {
                panel1: $('.right-side-panel1'),
                panel2: $('.right-side-panel2'),
                panel3: $('.right-side-panel3')
            },
            blueCarAndCyclist: {
                car: $('.right-top-upper-middle-group-car-17'),
                cyclist: $('.right-top-upper-middle-group-cyclist-3'),
                tl: new TimelineMax({ paused: true })
            }
        }
    };

    //#endregion

    //#region Tween_props
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
        open_time: 1,
        solarpanels: {
            init: {
                transformOrigin: "-120px bottom",
                transformPerspective: 500
            },
            closed: {
                skewX: 40,
                x: -23,
                y: 11,
                scaleX: 1.15,
                rotationZ: -3.5
            },
            open: {
                skewX: 0,
                x: 0,
                y: 0,
                scaleX: 1,
                rotationZ: 0
            }
        }
    };
    //#endregion

    function rand(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    function fadeInTitleTag() {
        var tl_fadeIn = new TimelineMax({
            paused: true
        });

        tl_fadeIn
			.fromTo(som_wrap, 1.3, {
			    alpha: 0,
			    display: 'block'
			}, {
			    alpha: 1
			}, 0)
			.fromTo(SoC_Assets.TitelTag, 1.3,
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
			.addCallback(pop, 0);

        tl_fadeIn.play();
    };

    function init_TrainAnimation() {

        //function initTrainPeopleGroups() {
        //    var radius = 2;
        //    var randomColors = ["red", "green", "blue", "gray"];

        //    //append child elements to people groups
        //    function createPeople(parentId, groupIndex, pplMaxCount) {
        //        var people = [];
        //        var parentElement = $('#' + parentId);
        //        var tempParent = $("<div/>");

        //        for (var i = 0; i < pplMaxCount; i++) {
        //        	var tempObj = $("<div/>", {
        //        		id: parentId + '-person-' + (i + 1),
        //        		'class': 'human-ball'
        //        	});
        //        	tempObj.addClass(randomColors[rand(0, randomColors.length - 1)]);
        //        	tempParent.append(tempObj);
        //            people.push(tempObj);
        //        }

        //        parentElement.html(tempParent.children());

        //        return people;
        //    };
        //    function createGroups() {
        //        var tempCounter = 0;
        //        var groupType = 'to';
        //        var groupCount = 4;
        //        var maxPeopleInGroup = 5;

        //        for (var i = 0; i < groupCount; i++) {
        //            var tempObj = { id: '', ele: {}, people: [] };

        //            if (tempCounter === groupCount / 2) { //set the group type (going to/from train)
        //                groupType = 'from';
        //                tempCounter = 0;
        //            }

        //            tempObj.id = 'soc-ppl-group-' + groupType + '-train-' + (tempCounter + 1); //for example: soc-ppl-group-to-train-1
        //            soc_panelContainer.append("<div id='" + tempObj.id + "'></div>"); //append to html
        //            tempObj.ele = document.getElementById(tempObj.id);

        //            tempObj.people.push(createPeople(tempObj.id, i, rand(3, maxPeopleInGroup)));

        //            //creating ppl inside the group
        //            SoC_Assets.small_objects.train.pplGroups.push(tempObj);
        //            tempCounter++;
        //        }
        //    };

        //   // createGroups();
        //};
        function init_TrainPeopleGroupAnimation() {
            //soc-ppl-group-to-train-1
            var firstGroup_to = SoC_Assets.small_objects.train.pplGroups[0];
            //soc-ppl-group-from-train-1
            var firstGroup_from = SoC_Assets.small_objects.train.pplGroups[1];

            //soc-ppl-group-to-train-2
            var secondGroup_to = SoC_Assets.small_objects.train.pplGroups[2];
            //soc-ppl-group-from-train-2
            var secondGroup_from = SoC_Assets.small_objects.train.pplGroups[3];

            SoC_Assets.small_objects.train.tl_to = new TimelineMax({ paused: true });
            SoC_Assets.small_objects.train.tl_from = new TimelineMax({ paused: true });

            SoC_Assets.small_objects.train.tl_to
                .add([
                    TweenMax.set(firstGroup_to, {
                        css: { x: 0, y: 0, rotation: 30 }, delay: 1,
                        onComplete: function () {
                            TweenLite.to(firstGroup_to, 2, { css: { autoAlpha: 1 } });
                        }
                    }), TweenMax.set(secondGroup_to, {
                        css: { x: 0, y: 0, rotation: 35 }, delay: 1,
                        onComplete: function () {
                            TweenLite.to(secondGroup_to, 2, { css: { autoAlpha: 1 } });
                        }
                    })])
                .add([
                    TweenMax.to(firstGroup_to, 5, {
                        css: { x: "-=45", y: "-=29", rotation: "+=10" }, delay: 2,
                        onComplete: function () {
                            TweenLite.to(firstGroup_to, 2, { css: { autoAlpha: 0 } });
                        }
                    }), TweenMax.to(secondGroup_to, 7, {
                        css: { x: "-=60", y: "-=58", rotation: "+=14" }, delay: 1,
                        onComplete: function () {
                            TweenLite.to(secondGroup_to, 2, { css: { autoAlpha: 0 } });
                        }
                    })]);

            SoC_Assets.small_objects.train.tl_from
            .add([
                TweenMax.set(firstGroup_from, {
                    css: { x: 0, y: 0, rotation: 35 }, delay: 1,
                    onComplete: function () {
                        TweenLite.to(firstGroup_from, 2, { css: { autoAlpha: 1 } });
                    }
                }), TweenMax.set(secondGroup_from, {
                    css: { x: 0, y: 0, rotation: 40 }, delay: 1,
                    onComplete: function () {
                        TweenLite.to(secondGroup_from, 2, { css: { autoAlpha: 1 } });
                    }
                })])
            .add(TweenMax.to(firstGroup_from, 2, {
                css: { autoAlpha: 1 },
            }))
            .add([
                TweenMax.to(firstGroup_from, 12, {
                    css: { x: "+=50", y: "+=33", rotation: "-=10" },
                    onComplete: function () {
                        TweenLite.to(firstGroup_from, 2, { css: { autoAlpha: 0 } });
                    }
                }),
                TweenMax.to(secondGroup_from, 6, {
                    css: { x: "+=50", y: "+=53", rotation: "-=10" },
                    onComplete: function () {
                        TweenLite.to(secondGroup_from, 2, { css: { autoAlpha: 0 } });
                    }
                })]);
        };

        var train = SoC_Assets.small_objects.train;

        SoC_Assets.small_objects.train.tl.add(TweenMax.set([
            train.train_carriage.first,
            train.train_carriage.second,
            train.train_carriage.third,
            train.train_carriage.fourth], {
                css: { autoAlpha: 1, display: 'block' }, delay: 11
            }))
        .add(TweenMax.to(train.ele, 10, {
            css: { x: "-=220", y: "+=120" }, onComplete: function () {
                //hide first carriage
                TweenMax.to(train.train_carriage.first, 0.5, { css: { autoAlpha: 0 } });
            }, ease: Power1.easeIn
        }))
        .add(TweenMax.to(train.ele, 1, {
            css: { x: "-=45", y: "+=25" }, onComplete: function () {
                //hide second carriage
                TweenMax.to(train.train_carriage.second, 0.5, { css: { autoAlpha: 0 } });
            }, ease: Linear.easeNone
        }))
        .add(TweenMax.to(train.ele, 1, {
            css: { x: "-=45", y: "+=25" }, onComplete: function () {
                //hide third carriage
                TweenMax.to(train.train_carriage.third, 0.5, { css: { autoAlpha: 0 } });
            }, ease: Linear.easeNone
        }))
        .add(TweenMax.to(train.ele, 1, {
            css: { x: "-=45", y: "+=25" }, onComplete: function () {
                //hide third carriage
                TweenMax.to(train.train_carriage.fourth, 0.5, { css: { autoAlpha: 0 } });
            }, ease: Linear.easeNone
        }))
        //going from top tunnel-bottom
        .add(TweenMax.set(train.ele, {
            css: { x: 0, y: 0, display: 'none' }
        }))
        .add(TweenMax.to(train.ele, 0.1, {
            css: { x: 210, y: -125 }, delay: 10
        }))
        .add(TweenMax.set(train.ele, {
            css: { display: 'block' }
        }))
        .add([
            TweenMax.to(train.train_carriage.first, 1, { css: { autoAlpha: 1 } }),
            TweenMax.to(train.ele, 1, {
                css: { x: "-=40", y: "+=25" }, ease: Linear.easeNone
            })
        ])
        .add([
            TweenMax.to(train.train_carriage.second, 1, { css: { autoAlpha: 1 } }),
            TweenMax.to(train.ele, 1, {
                css: { x: "-=40", y: "+=25" }, ease: Linear.easeNone
            })
        ])
        .add([
            TweenMax.to(train.train_carriage.third, 1, { css: { autoAlpha: 1 } }),
            TweenMax.to(train.ele, 1, {
                css: { x: "-=40", y: "+=25" }, ease: Linear.easeNone
            })
        ])
        .add([
            TweenMax.to(train.train_carriage.fourth, 1, { css: { autoAlpha: 1 } }),
            TweenMax.to(train.ele, 3, {
                css: { x: 0, y: 0 }, ease: Power1.easeOut, onComplete: function () {

                    //people animation starts
                    init_TrainPeopleGroupAnimation();
                    init_topCyclistAndBlueCarAnimation();
                    SoC_Assets.small_objects.train.tl_from.play();
                    SoC_Assets.small_objects.train.tl_to.play();
                    SoC_Assets.small_objects.blueCarAndCyclist.tl.play();
                }
            })
        ]);

        //initTrainPeopleGroups();
        init_TrainPeopleGroupAnimation();
        init_topCyclistAndBlueCarAnimation();
    };
    function pause_TrainAnimation() {
        //train animation
        SoC_Assets.small_objects.train.tl.pause();
        //first lets ppl out of train
        SoC_Assets.small_objects.train.tl_from.pause();
        //then go in
        SoC_Assets.small_objects.train.tl_to.pause();
    };
    function resume_TrainAnimation() {
        //train animation
        SoC_Assets.small_objects.train.tl.resume();
        //first lets ppl out of train
        SoC_Assets.small_objects.train.tl_from.resume();
        //then go in
        SoC_Assets.small_objects.train.tl_to.resume();
    };

    function init_LakeWavesAnimation() {
        var waves1 = SoC_Assets.small_objects.lakeWaves.ele_1;
        var waves2 = SoC_Assets.small_objects.lakeWaves.ele_2;

        SoC_Assets.small_objects.lakeWaves.tl = new TimelineMax({ paused: true, repeat: -1 });

        SoC_Assets.small_objects.lakeWaves.tl.add([
            TweenMax.to(waves1, 5, {
                css: { x: "+=5" }, ease: Linear.easeNone
            }),
            TweenMax.to(waves2, 5, {
                css: { x: "-=5" }, ease: Linear.easeNone
            })
        ])
        .add([
            TweenMax.to(waves1, 10, {
                css: { x: "-=10" }, ease: Linear.easeNone
            }),
            TweenMax.to(waves2, 10, {
                css: { x: "+=10" }, ease: Linear.easeNone
            })
        ])
        .add(TweenMax.to([waves1, waves2], 5, {
            css: { x: 0 }, ease: Linear.easeNone
        }));
    };
    function pause_LakeWavesAnimation() {
        SoC_Assets.small_objects.lakeWaves.tl.pause();
    };
    function resume_LakeWavesAnimation() {
        SoC_Assets.small_objects.lakeWaves.tl.resume();
    };

    function init_bottomCyclistAnimation() {
        var ele = SoC_Assets.small_objects.bottom_cyclist.ele;
        SoC_Assets.small_objects.bottom_cyclist.tl = new TimelineMax({ paused: true, repeat: -1 });

        SoC_Assets.small_objects.bottom_cyclist.tl
        .add(TweenMax.to(ele, 18, { css: { x: "-=182", y: "+=130", rotation: 5 } }))
        .add(TweenMax.to(ele, 0.5, { css: { autoAlpha: 0 }, ease: Linear.easeNone }))
        .add(TweenMax.to(ele, 0.1, { css: { x: "+=400", y: "-=275" }, ease: Linear.easeNone, delay: 10 }))
        .add(TweenMax.to(ele, 0.5, { css: { autoAlpha: 1 }, ease: Linear.easeNone }))
        .add(TweenMax.to(ele, 10, { css: { x: "-=75", y: "+=105" }, ease: Linear.easeNone }))
        .add(TweenMax.to(ele, 0.5, { css: { rotation: "+=35", x: "-=2", y: "+=10" }, ease: Linear.easeNone }))
        .add(TweenMax.to(ele, 8, { css: { rotation: "+=20", x: "-=90", y: "-=1" }, ease: Linear.easeNone }))
        .add(TweenMax.to(ele, 2, { css: { rotation: "-=20", y: "+=20" }, ease: Linear.easeNone }))
        .add(TweenMax.to(ele, 2, { css: { rotation: "+=10", x: "-=24", y: "+=10" }, ease: Linear.easeNone }))
        .add(TweenMax.to(ele, 3, { css: { rotation: "-=15", x: "-=20", y: "+=2" }, ease: Linear.easeNone }))
        .add(TweenMax.to(ele, 3, { css: { x: "-=17", y: "+=5" }, ease: Linear.easeNone }))
        .add(TweenMax.to(ele, 0.5, { css: { rotation: 5, x: 0, y: 0 }, ease: Linear.easeNone }));
    };
    function pause_bottomCyclistAnimation() {
        SoC_Assets.small_objects.bottom_cyclist.tl.pause();
    };
    function resume_bottomCyclistAnimation() {
        SoC_Assets.small_objects.bottom_cyclist.tl.resume();
    };

    function init_sunAndSunBatteriesAnimation() {
        var tl_showPanels = new TimelineLite({ paused: true });
        var sun = SoC_Assets.small_objects.sun.ele;
        var speed = 20;
        var radius = 140;

        function moveSun(tween, rotate_RightMidSolarPanel, rotate_FatBuildingSolarPanels) {
            TweenMax.to(SoC_Assets.small_objects.sun.ele, 0, {
                css: {
                    x: radius * Math.cos(tween.target.x + 4),
                    y: radius * Math.sin(tween.target.y + 4)
                }
            });
            //animate main solar panels on the ground
            TweenLite.to([
                SoC_Assets.small_objects.right_middle_solar_panels.panel1,
                SoC_Assets.small_objects.right_middle_solar_panels.panel2,
                SoC_Assets.small_objects.right_middle_solar_panels.panel3,
                SoC_Assets.small_objects.right_middle_solar_panels.panel4
            ], 10, {
                css: {
                    rotationX: tween.target.rotate_RightMidSolarPanel
                }
            });
            //animate fat building solar panels
            TweenLite.to([
                SoC_Assets.small_objects.fat_building_solar_panels.panel1,
                SoC_Assets.small_objects.fat_building_solar_panels.panel2,
                SoC_Assets.small_objects.fat_building_solar_panels.panel3
            ], 4, {
                css: {
                    rotationX: tween.target.rotate_FatBuildingSolarPanels
                }
            });
            //animate right side building's solar panels
            TweenLite.to([
                SoC_Assets.small_objects.right_side_solar_panels.panel1,
                SoC_Assets.small_objects.right_side_solar_panels.panel2,
                SoC_Assets.small_objects.right_side_solar_panels.panel3
            ], 5, {
                css: {
                    rotationX: tween.target.rotate_rightSideSolarPanels
                }
            });
        };

        TweenMax.set(sun, {
            css: { x: radius * Math.cos(4), y: radius * Math.sin(4) }
        });

        tl_showPanels.add(TweenMax.set([
            $('.rightcorner-building-solar-panel-group'),
            $('.fat-building-solar-panel-group')
        ], {
            css: { autoAlpha: 0, display: 'block' }, delay: 2
        }))
        .add(TweenMax.to([
            $('.rightcorner-building-solar-panel-group'),
            $('.fat-building-solar-panel-group')
        ], 3, {
            css: { autoAlpha: 1 }
        }));

        SoC_Assets.small_objects.sun.tl.add(TweenLite.to(SoC_Assets.small_objects.sun, speed, {
            x: 2.3,
            y: 2.3,
            rotate_RightMidSolarPanel: -70,
            rotate_FatBuildingSolarPanels: -67,
            rotate_rightSideSolarPanels: -60,
            onUpdate: moveSun,
            onUpdateParams: [
                "{self}",
                'rotate_RightMidSolarPanel',
                'rotate_FatBuildingSolarPanels',
                'rotate_rightSideSolarPanels'
            ],
            ease: Power1.easeInOut,
            delay: 5
        }))
        .add(
            TweenLite.to(SoC_Assets.small_objects.sun, speed, {
                x: 0,
                y: 0,
                rotate_RightMidSolarPanel: 0,
                rotate_FatBuildingSolarPanels: 17,
                rotate_rightSideSolarPanels: 10,
                onUpdate: moveSun,
                onUpdateParams: [
                    "{self}",
                    'rotate_RightMidSolarPanel',
                    'rotate_FatBuildingSolarPanels',
                    'rotate_rightSideSolarPanels'
                ],
                ease: Power1.easeInOut,
                delay: 5
            })
        );
        tl_showPanels.play();
    };
    function pause_sunAndSunBatteriesAnimation() {
        SoC_Assets.small_objects.sun.tl.pause();
    };
    function resume_sunAndSunBatteriesAnimation() {
        SoC_Assets.small_objects.sun.tl.resume();
    };

    function init_topCyclistAndBlueCarAnimation() {
        var cyclist = SoC_Assets.small_objects.blueCarAndCyclist.cyclist;
        var blueCar = SoC_Assets.small_objects.blueCarAndCyclist.car;

        SoC_Assets.small_objects.blueCarAndCyclist.tl = new TimelineMax({ paused: true });
        SoC_Assets.small_objects.blueCarAndCyclist.tl
        .add([
            TweenLite.to(cyclist, 8, {
                css: { x: "+=50", y: "+=40", rotation: "-=10" }, ease: Power1.easeInOut,
                onComplete: function () {
                    TweenLite.to(cyclist, 0.1, { css: { zIndex: 5 } });
                }
            }),
            TweenLite.to(blueCar, 7, {
                css: { x: "+=40", y: "+=20" }, ease: Power1.easeInOut
            })
        ])
        .add(TweenLite.to(cyclist, 1, { ease: Power1.easeInOut, delay: 2 }))
        .add(TweenLite.to(cyclist, 4, {
            css: { x: "+=15", y: "+=20", rotation: "+=5" }, ease: Power1.easeOut
        }))
        .add([
            TweenLite.to(cyclist, 7, {
                delay: 2, css: { x: "+=50", y: "+=27" }, ease: Power1.easeIn
            }),
            TweenLite.to(blueCar, 7, {
                delay: 2, css: { x: "+=40", y: "+=35", rotation: "+=10" }, ease: Power1.easeIn
            })
        ])
        .add(TweenLite.to(cyclist, 0.1, {
            css: { zIndex: 20 }, ease: Power1.easeInOut
        }))
        .add([
            TweenLite.to(cyclist, 7, {
                css: { x: "+=50", y: "+=30", rotation: "-=15" }, ease: Linear.easeNone
            }),
            TweenLite.to(blueCar, 7, {
                css: { x: "+=50", y: "+=57", rotation: "+=10" }, ease: Linear.easeNone
            })
        ])
        .add([
            TweenLite.to(cyclist, 2, {
                css: { autoAlpha: 0 }, ease: Linear.easeNone
            }),
            TweenLite.to(blueCar, 3, {
                css: { autoAlpha: 0 }, ease: Linear.easeNone
            })
        ])
        .add([
            TweenLite.to([cyclist, blueCar], 0.1, {
                css: { x: 0, y: 0, rotation: 0, }, ease: Linear.easeNone
            })
        ])
        .add(TweenLite.to([blueCar, cyclist], 2, {
            css: { autoAlpha: 1 }
        }));
    };
    function pause_topCyclistAndBlueCarAnimation() {
        SoC_Assets.small_objects.blueCarAndCyclist.tl.pause();
    };
    function resume_topCyclistAndBlueCarAnimation() {
        SoC_Assets.small_objects.blueCarAndCyclist.tl.resume();
    };

    var run = function () {
        var init_city = new initialize_city();
        init_city.play();
        
        //init animations
        init_TrainAnimation();
        init_LakeWavesAnimation();
        init_bottomCyclistAnimation();
        init_sunAndSunBatteriesAnimation();
        init_topCyclistAndBlueCarAnimation();
        fadeInTitleTag();
    };

    var startAnimations = function () {
        resume_TrainAnimation();
        resume_LakeWavesAnimation();
        resume_bottomCyclistAnimation();
        resume_sunAndSunBatteriesAnimation();
        resume_topCyclistAndBlueCarAnimation();
    };

    var pauseAnimations = function () {
        pause_TrainAnimation();
        pause_LakeWavesAnimation();
        pause_bottomCyclistAnimation();
        pause_sunAndSunBatteriesAnimation();
        pause_topCyclistAndBlueCarAnimation();
    };

    var pop = function () {
        var pop_city = new open_city();
        pop_city.play();
    };
    var initialize_city = function () {
        var tl_init = new tl({ paused: true });

        tl_init
            .set([
                SoC_Assets.all_buildings,
                SoC_Assets.all_trees,
                SoC_Assets.all_windmills,
                SoC_Assets.electric_wires,
                SoC_Assets.train
            ], {
                css: config.merge_options(tween_props.general.init, tween_props.general.closed)
            }, 0)
            .set([
                SoC_Assets.all_solarpanels
            ], {
                css: config.merge_options(tween_props.solarpanels.init, tween_props.solarpanels.closed)
            }, 0)
            .set(SoC_Assets.train, { css: { rotation: -29 } })

        return tl_init;
    };
    var open_city = function () {
        var tl_open_city = new tl({ paused: true });

        tl_open_city
            .to([
                SoC_Assets.all_buildings,
                SoC_Assets.all_trees,
                SoC_Assets.all_windmills,
                SoC_Assets.electric_wires,
                SoC_Assets.train
            ], tween_props.open_time, {
            	css: {
            		rotationX: tween_props.general.open.rotationX
            	}
            }, 0)
            .to([
                SoC_Assets.all_buildings,
                SoC_Assets.all_trees,
                SoC_Assets.all_windmills,
                SoC_Assets.electric_wires,
                SoC_Assets.train
            ], tween_props.open_time * 0.7, {
            	css: {
            		scaleY: tween_props.general.open.scaleY
            	}
            }, 0)
            .to([
                SoC_Assets.all_solarpanels
            ], tween_props.open_time, { css: tween_props.solarpanels.open }, 0);
			

        return tl_open_city;
    };

    return {
    	run: run,
        startAnimations: startAnimations,
        pauseAnimations: pauseAnimations,
        pop: pop,
    }
})