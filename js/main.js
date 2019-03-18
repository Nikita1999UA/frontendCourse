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
  $(".about__menu").on("click",".undo1, .undo2, .undo3, .undo4, .undo5" , function (event) {
      event.preventDefault();
      document.getElementById('mnr').checked=false;
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});
