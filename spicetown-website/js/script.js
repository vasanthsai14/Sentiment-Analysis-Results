/*This code is written in JavaScript and uses the jQuery library. 
It contains several functions that are executed when the document is ready, 
which means when the DOM (Document Object Model) is fully loaded and parsed.
*/

$(document).ready(function(){

    // aos (animate on scroll)
    AOS.init();

    // navbar toggling
    /*The navbar-toggler click event handler toggles the visibility of the navbar collapse element. 
    When the toggle button with the id navbar-toggler is clicked, the navbar-collapse element slides up or down, 
    effectively showing or hiding the collapsed part of the navbar. */

    $('#navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle();
    });

    // navbar background change in scroll
    /*The scroll event handler is triggered when the user scrolls the page. Within this handler, the code checks the current scroll position (position) using $(window).scrollTop(). 
    If the position is greater than or equal to 80, it adds the class bg-navbar to the navbar element, which changes its background. 
    If the position is less than 80, the bg-navbar class is removed, reverting the background to its original state. */

    $(window).scroll(function(){
        let position = $(window).scrollTop();
        if(position >= 80){
            $('.navbar').addClass('bg-navbar');
        } else {
            $('.navbar').removeClass('bg-navbar');
        }
    });

    /* The $("#reserve").click() function is executed when an element with the id reserve is clicked.
     It opens a new browser tab using the window.open() function with a specified URL. 
     It also sets the title of the new tab to "Reserve Your Table".*/
    $("#reserve").click(function() {
        var newTab = window.open('https://www.google.com/maps/reserve/v/dine/c/pY4WgaWk0bQ?source=pa&hl=en-IN&gei=MGnOZOZW--Kx4w-46YqQCw&sourceurl=https://www.google.com/search?q%3Dthe%2Bspice%2Btown%2Bzomato%2Breserve%2Ba%2Btable%26rlz%3D1C1ZKTG_enIN911IN911%26oq%3Dthe%2Bspice%2Btown%2Bzomato%2Breserve%2Ba%2Btable%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigAdIBCTEzMDMxajBqN6gCALACAA%26sourceid%3Dchrome%26ie%3DUTF-8', "_blank");
        newTab.document.title = "Reserve Your Table";
      });

    // smooth scroll
    /*The smooth scroll functionality is implemented using the links.click() event handler. When a link with the class nav-link inside the navbar is clicked, 
    it prevents the default scrolling behavior. It then gets the target element's ID from the href attribute and uses the animate() function to smoothly scroll
    the page to the target element's position. */
    let links = $('.navbar-nav a.nav-link');
    links.click(function(e){
        e.preventDefault();
        let target = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        }, 700);
    });

    // popup gallery 
    /* The popup gallery functionality is implemented using the $('.popup-gallery').magnificPopup() function. 
    It applies the Magnific Popup plugin to elements with the class popup-gallery.
     This plugin creates a lightbox-like effect, allowing users to view images in a gallery format.*/
    $(document).ready(function() {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            }
        });
    });

     // slick slider
     /* The slick slider functionality is implemented using the $('.testimonial-slider').slick() function.
      It applies the Slick Slider plugin to elements with the class testimonial-slider. 
      This plugin creates a responsive and customizable slider with specified options, such as autoplay, speed, and slide behavior.*/ 
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

});