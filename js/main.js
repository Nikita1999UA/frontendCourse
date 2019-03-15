
$(document).ready(function(){
	$("a[href*=#]").on("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
		return false;
	});
});


$('.popup-modal').magnificPopup({
  type: 'inline',
  preloader: false,
  focus: 'username',
  modal: true
});
$(document).on('click', '.popup-modal-dismiss', function(e) {
  e.preventDefault();
  $.magnificPopup.close();
});

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 6,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


$('.menu-wrapper').on('click', function() {
  $('.hamburger-menu').toggleClass('animate');
  $('.about__menu').toggleClass('active');
});
