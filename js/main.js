$(document).ready(function(){
    $('.technologies--slider').slick({
        dots: true,
        slidesToShow: 6,
        centerMode: true,
        centerPadding: '-10px',
        prevArrow: '<img class="slick__prev" src="../img/left.png">',
        nextArrow: '<img class="slick__next" src="../img/right.png   ">',
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
  