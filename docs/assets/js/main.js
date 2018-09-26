var typed = new Typed('.element', {
  strings: ["Galería", "Blog", "Catálogo"],
  typeSpeed: 100,
  showCursor: false,
  loop: true,
  backSpeed: 100,
  backDelay: 500
});

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  centerMode: true,
  centerPadding: 0
});

jQuery(function(){
  createSticky(jQuery(".sticky-custom"));
});

function createSticky(sticky) {
  if (typeof sticky != "undefined") {

    var pos = sticky.offset().top + 150,
        win = jQuery(window);

    win.on("scroll", function() {
        if( win.scrollTop() > pos ) {
            sticky.addClass("stickyhead");
        } else {
            sticky.removeClass("stickyhead");
        }           
    });         
  }
}