var typed = new Typed('.element', {
  strings: ['Galería', 'Blog', 'Catálogo'],
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
  centerPadding: 0,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
});

$('.products-slick').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: 0,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

// TABS CLICK ADD CLASS ACTIVE
$('#myTab .products-card').on('click' , function(){
  $('.products-slick .products-card').removeClass('active');
  // TABS CLICK ADD CLASS ACTIVE ON DOT RELATED
  var id = $(this).attr('data-id')
  $('.slick-dots').find('li').removeClass('slick-active')
  $(`#slick-slide-control1${id}`).parent().addClass('slick-active')
});

// TABS CHANGE WHEN SLICK CHANGE
$('.products-slick').on('afterChange', function(event, slick, currentSlide, nextSlide) {
  $('.products-slick .products-card').removeClass('active');

  $(`.products-slick .products-card[data-slick-current=${currentSlide}]`).tab('show')
});

// Menu fixed
$(window).scroll(function () {
  if ($(document).scrollTop() > 70 && ($(window).width() >= 768)) {
    $('.sticky-custom').addClass('stickyhead');
  }
  else {
    $('.sticky-custom').removeClass('stickyhead');
  }
});

// Active links underline
$(document).on('scroll', function () {
  var array = [];
  $('section').each(function () {
    array.push(this.id);
  });
  $(window).scroll(function () {
    $.each(array, function (x, v) {
      if ($(window).scrollTop() >= ($('#' + v).position().top - 100) && $(window).scrollTop() <= ($('#' + v).position().top - 100) + $('#' + v).outerHeight(true)) {
        $('.nav-link[href=\'#' + v + '\']').addClass('active');
      }
      else {
        $('.nav-link[href=\'#' + v + '\']').removeClass('active');
      }
    })
  })
});

$('#modalGallery').on('shown.bs.modal', function () {
  $('.single-item').slick();
})

$(document).ready(function(){
	$('.icon, .navigation_item').click(function(){
		$('.icon').toggleClass('active');
		$('#menu').toggleClass('hide');
  });
	$(".toggle_menu, .navigation_item").click(function(){
		$(".sidebar_menu").toggleClass("hide_menu");
	});
});