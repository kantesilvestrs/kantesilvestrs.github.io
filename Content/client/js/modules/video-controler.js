/// <reference path="../lib/jquery-2.1.3.js" />
/// <reference path="../lib/YT_iframe_api.js" />
/// <reference path="../lib/require.js" />
/// <reference path="../lib/lodash.js" />


var video_loader = (function (window, $) {

    var _this = new Object();

    _this.Player1 = null;
    _this.Player2 = null;
    _this.Player3 = null;
    _this.Player4 = null;

    _this.attachEventHandelers = function () {
        $(document).on('click', '#video-strip-wrap .close-button', function () {
            var tl = new TimelineMax({ paused: true });

            tl
				.addCallback(function () {
				    setTimeout(function () {
				        $("#yt-walking-our-faith-video-long-thumb").html('<div class="js-lazyYT video-container" data-youtube-id="ie51PuIikYc" data-width="100%" data-height="100%">Walking Our Faith</div>');
				        $("#yt-crowd-fund-video-long-thumb").html('<div class="js-lazyYT video-container" data-youtube-id="WarlclpLhyo" data-width="100%" data-height="100%">In-depth pitch video</div>');
                        // Took down per request - 20151022
				        //$("#yt-teaser-video-long-thumb").html('<div class="js-lazyYT video-container" data-youtube-id="0f_jxA6uJAs" data-width="100%" data-height="100%">Early film teaser</div>');
				        $("#yt-the-burning-age-video-long-thumb").html('<div class="js-lazyYT video-container" data-youtube-id="9Riwxd47aG4" data-width="100%" data-height="100%">The Burning Age</div>');
				        $("#yt-act-on-climate-video-long-thumb").html('<div class="js-lazyYT video-container" data-youtube-id="nYewLuB6FAI" data-width="100%" data-height="100%">Act On Climate March</div>');
				        $("#yt-new-movement-video-long-thumb").html('<div class="js-lazyYT video-container" data-youtube-id="QjRmzfKZWgU" data-width="100%" data-height="100%">Jobs, Justice, Climate March</div>');
				        $("#yt-new-movement-wrapup-video-long-thumb").html('<div class="js-lazyYT video-container" data-youtube-id="Y315RYYT-K4" data-width="100%" data-height="100%">Jobs, Justice, Climate Wrap-Up</div>');

				        $('.js-lazyYT').lazyYT();
				    }, 0);
				})
				.to([
					$(".video-background-overlay"),
					$("#video-strip-wrap")
				], 0.5, {
				    css: {
				        alpha: 0
				    }
				})
				.set([
					$(".video-background-overlay"),
					$("#video-strip-wrap")
				], {
				    css: {
				        display: "none"
				    }
				})



            tl.play();
        });

        $(document).on('click', '.tv-trailers', function (e) {
            e.preventDefault();
            var tl = new TimelineMax({ paused: true });

            tl
				.set([
					$(".video-background-overlay"),
					$("#video-strip-wrap")
				], {
				    css: {
				        alpha: 0,
				        display: "block"
				    }
				})
				.add(function () {
				    $(".video-strip-scroll").perfectScrollbar({
				        useBothWheelAxes: true,
				        suppressScrollY: true
				    });
				    $(".video-strip-scroll").scrollLeft($(".video-strip-container").width() / 4);
				    $(".video-strip-scroll").perfectScrollbar("update");
				})
				.to([
					$(".video-background-overlay"),
					$("#video-strip-wrap")
				], 0.5, {
				    css: {
				        alpha: 1
				    }
				})

            tl.play();
            return false;
        });
    };

    _this.init = function () {
        $.Deferred(function (def) {
            //$("#yt-crowd-fund-video-long-thumb").html('<iframe width="100%" height="100%" style="border: none;" class="video-container" id="yt-crowd-fund-video-long" allowfullscreen src="https://www.youtube.com/embed/WarlclpLhyo?&controls=2&showinfo=0&enablejsapi=1"></iframe>');
            //$("#yt-teaser-video-long-thumb").html('<iframe width="100%" height="100%" style="border: none;" class="video-container" id="yt-teaser-video-long" allowfullscreen src="https://www.youtube.com/embed/0f_jxA6uJAs?&controls=2&showinfo=0&enablejsapi=1"></iframe>');
            //$("#yt-act-on-climate-video-long-thumb").html('<iframe width="100%" height="100%" style="border: none;" class="video-container" id="yt-act-on-climate-video-long" allowfullscreen src="https://www.youtube.com/embed/nYewLuB6FAI?&controls=2&showinfo=0&enablejsapi=1"></iframe>');
            //$("#yt-new-movement-video-long-thumb").html('<iframe width="100%" height="100%" style="border: none;" class="video-container" id="yt-new-movement-video-long" allowfullscreen src="https://www.youtube.com/embed/QjRmzfKZWgU?&controls=2&showinfo=0&enablejsapi=1"></iframe>');


            //yt-new-movement-video-long-thumb
            //var videoSetup = setInterval(function () {
            //	if (typeof (YT) != "undefined") {
            //		clearInterval(videoSetup);
            //		//_this.Player1 = new YT.Player('yt-crowd-fund-video-long');
            //		//_this.Player2 = new YT.Player('yt-teaser-video-long');
            //		//_this.Player3 = new YT.Player('yt-act-on-climate-video-long');
            //		//_this.Player4 = new YT.Player('yt-new-movement-video-long');


            //	}
            //}, 50);

            _this.attachEventHandelers();
            def.resolve();

        }).promise();
    };

    return {
        init: function () {
            //throwing errors
            _this.init();
        }
    }
})(window, jQuery);

define("video_loader_module", [], function () {
    return {
        init: video_loader.init
    }
});