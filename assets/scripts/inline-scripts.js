jQuery(function($) {
    //Moddalal transform start
    $("#modal-more").click(function() {
        $(".my-modal").fadeOut("slow");
        $(".my-expanded" ).fadeIn( "slow");
    });

    $("#footer-anch").click(function() {
        $(".my-expanded" ).fadeIn( "slow");
    });

    $("#modal-ok").click(function() {
        document.cookie = "rfsrv__cpam=1; expires=30";
        $(".my-modal").fadeOut("slow");
    });

    $("#expanded-ok").click(function() {
        document.cookie = "rfsrv__cpam=1; expires=30";
        $(".my-expanded").fadeOut("slow");
    });
    //Modal transform end
});

//Reify script start

//Page loader
jQuery(document).ready(function($) {
    $("#page").show();
});

//Menu dropdown animation
jQuery(function($) {
    $('.sub-menu').hide();
    $('.main-navigation .children').hide();
    $('.menu-item').hover(
        function() {
            $(this).children('.sub-menu').slideDown();
        },
        function() {
            $(this).children('.sub-menu').hide();
        }
    );
    $('.main-navigation li').hover(
        function() {
            $(this).children('.main-navigation .children').slideDown();
        },
        function() {
            $(this).children('.main-navigation .children').hide();
        }
    );
});

//Fit Vids
jQuery(function($) {

    $(document).ready(function(){
        $("body").fitVids();
    });

});

//Sets the header overlay height
jQuery(function($) {
    var height = $(window).height();
    $('.overlay').css('height', height);
    $(window).resize(function() {
        var height = $(window).height();
        $('.overlay').css('height', height);
    });
});

//Waypoints
jQuery(function($) {
    $('.facts-area').waypoint(function(down) {
            $('.fact').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.attr('id') }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
        },
        {
            offset: '50%',
            triggerOnce: true
        });
});

jQuery(function($) {
    new WOW().init();
});

//Better support for third party widgets
jQuery(function($) {
    $('.panel.widget, .so-panel.widget').addClass('container');
});

//Smooth scrolling
jQuery(function($) {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 800);
                return false;
            }
        }
    });
});
//reify script end

//scroll to top start

window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    var homeSection = document.documentElement.clientHeight -5;

    if (document.body.scrollTop > homeSection || document.documentElement.scrollTop > homeSection) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//scroll to top end

//slider init start
/**
 * Initialize the slider.
 */
( function() {
    jQuery(window).load(function() {
        jQuery('.flexslider').flexslider({
            slideshowSpeed: 3500,
            animationSpeed: 500,
            pauseOnHover: true,
            useCSS: true,
            touch: true,
            animation: "slide",
            smoothHeight: true,
            controlNav: false,
        });
    });
} )();
//slider init end

//slides init start


//Superslides init
jQuery(function($) {
    $('#slides').superslides({
        play: 5000,
        animation: 'fade',
        pagination: false
    });
});
//slides init end
