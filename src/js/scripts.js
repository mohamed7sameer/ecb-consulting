
function globalCarousel(){
    return {
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
    }
    
}


function index(){
    $('.carousel-header').slick({
        prevArrow: globalCarousel().prevArrow,
        nextArrow: globalCarousel().nextArrow,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear'
    });
    $('.carousel-mo-2').slick({
        // arrows: false,
        prevArrow: globalCarousel().prevArrow,
        nextArrow: globalCarousel().nextArrow,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
    });




    setTimeout(()=>{
        if ($('#hotspotImg').length > 0) {
            $('#hotspotImg').hotSpot({
                // bindselector: 'click'
                bindselector: 'hover'
            });
        }
    },1000)
    

}











function project(){
    $('.co-carousel-project').slick({
        prevArrow: globalCarousel().prevArrow,
        nextArrow: globalCarousel().nextArrow,
        autoplay: true,
        autoplaySpeed: 1000,
        dots: true,
    });
    
}






function sortPorfolio(){
        let $grid = $('.portfolio-co-cards .co-grid').isotope({
            itemSelector: '.filter-item',
        });      
    
        $('.nav-portfolio').on( 'click', 'button', function() {
            let filterValue = $( this ).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
}



$(function () {
    $.scrollUp({
        scrollName: 'scrollUp',      // Element ID
        scrollDistance: 300,         // Distance from top/bottom before showing element (px)
        scrollFrom: 'top',           // 'top' or 'bottom'
        scrollSpeed: 300,            // Speed back to top (ms)
        easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
        animation: 'fade',           // Fade, slide, none
        animationSpeed: 200,         // Animation speed (ms)
        scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
        scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
        scrollText: '<i class="fas fa-chevron-up"></i>', // Text for element, can contain HTML
        scrollTitle: false,          // Set a custom <a> title if required.
        scrollImg: false,            // Set true to use image
        activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 2147483647           // Z-Index for the overlay
    });
});


// new SimpleBar();

