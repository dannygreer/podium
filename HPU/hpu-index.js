<script>
$(document).ready(function () {
    if ($(window).width() > 620) {
        // Add below the Youtube video ID
        var videoID = "VD6kpl1ePLc";
 
        // Add below the number of your section on which you would want to have the video background
        var pageSection = 1;
 
        var $youtubevid = '<div class="video-background"><div class="video-foreground" id="video-foreground"></div></div>';
        pageSection = window.__page_generator ? pageSection : pageSection + 1;
 
        var $sectionID = window.__page_generator ? $('.section:nth-of-type(' + pageSection + ')').attr('id') : $('.page-block:nth-of-type(' + pageSection + ')').attr('id');
 
        $sectionID = '#' + $sectionID;
        $($sectionID).append($youtubevid);
        player.playVideo('video-foreground', videoID);
        $($sectionID).css({ "overflow": "hidden" });
        $($sectionID + ' .section-block').css({ "overflow": "hidden", "background": "none" });
        $($sectionID + ' .section-holder-overlay').css({ "z-index": "1" });
        $(function () {
            $('.video-foreground').css({ width: $(window).innerWidth() + 'px' });
            var dw = 1264;
            $(window).resize(function () {
                var cw = $(window).innerWidth();
                var xw = dw - cw;
                $('.video-foreground').css({ width: cw + xw + 'px' });
            });
        });
    }
});
 
var player = {
    playVideo: function (container, videoId) {
        if (typeof (YT) == 'undefined' || typeof (YT.Player) == 'undefined') {
            window.onYouTubeIframeAPIReady = function () { player.loadPlayer(container, videoId); };
            $.getScript('https://www.youtube.com/iframe_api');
        } else { player.loadPlayer(container, videoId); }
    },
    loadPlayer: function (container, videoId) {
        new YT.Player(container, {
            videoId: videoId,
            host: 'https://www.youtube.com',
            playerVars: {
                origin: window.location.href,
                autoplay: 1,
                mute: 1,
                controls: 0,
                showinfo: 0,
                modestbranding: 1,
                loop: 1,
                playlist: videoId,
                fs: 0,
                cc_load_policy: 0,
                iv_load_policy: 3,
                autohide: 1
            },
            events: {
                onReady: function (e) { e.target.mute(); }
            }
        });
    }
};

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("page-block-9wcac0qfsj").style.top = "0";
  } else {
    document.getElementById("page-block-9wcac0qfsj").style.top = "-70px";
  }
}

</script>