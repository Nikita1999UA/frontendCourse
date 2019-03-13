$(document).ready(function(){
    $('.technologies--slider').slick({
        dots: false,
        slidesToShow: 6,
        centerMode: true,
        centerPadding: '-10px',
        
    });
  });


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
  