$(document).ready(function () {
    $('[data-fancybox]').fancybox({
        animationEffect: "slide",
        transitionEffect: "fade",
        loop: "true",
        buttons: [
            "zoom",
            "share",
            "slideShow",
            "thumbs",
            "close"
        ]
    });

    $(".mdi-magnify").click(function () {
        $(".togglesearch").toggle();
        $("input[type='text']").focus();
    });

    $(window).scroll(function () {
        if ($(document).scrollTop() > 50) {
            $("#navigation-bar").addClass('sticky');
        } else {
            $("#navigation-bar").removeClass('sticky');
        }
    });

    
    function increment(elem, finalVal) {
        var currVal = parseInt(document.getElementById(elem).innerHTML, 10) || 0;
        if (currVal < finalVal) {
            currVal++;
            document.getElementById(elem).innerHTML = currVal;
        
            setTimeout(function() {
            increment(elem, finalVal);
            }, 40)
        }
    };

    $('#web-projects').waypoint(function() {
        increment("web-projects", 42);
    }, {offset: '75%'});
    
    $('#client').waypoint(function() {
        increment("client", 123);
    }, {offset: '75%'});

    $('#winner').waypoint(function() {
        increment("winner", 15);
    }, {offset: '75%'});

    $('#coffee').waypoint(function() {
        increment("coffee", 99);
    }, {offset: '75%'});

    $('#members').waypoint(function() {
        increment("members", 24);
    }, {offset: '75%'});
});

$(window).on('load', function(){
    $portfolio = $('.portfolioItems');
    $portfolio.isotope({
        itemSelector : 'li',
        layoutMode : 'masonry'
    });
});

/* =============== PORTFOLIO HOVER EFFECT =============== */
$('.portfolioItems > li').each( function() { $(this).hoverdir(); } );
