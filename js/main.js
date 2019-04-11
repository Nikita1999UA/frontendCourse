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
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});


$(document).ready(function(){
	$("a[href*=#]").on("click", function(e){
        event.preventDefault();
        document.getElementById('mnr').checked=false;
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
		return false;
	});
});
