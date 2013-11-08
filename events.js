$('document').ready(function(){
  bindDownArrow();
  bindWells();
});

function bindDownArrow() {
  $('.fa-arrow-circle-down').on("click", scrollToPortfolio);
  $('#portfolio-link').on("click", scrollToPortfolio);
}

function scrollToPortfolio() {
    $('body,html').animate({
      scrollTop: $('#portfolio').offset().top
    }, 600);
}

function bindWells() {
$('.well').hover(function(){
  $(this).nextAll('.well').stop().animate({ opacity: '0.5' }, 500)
  $(this).prevAll('.well').stop().animate({ opacity: '0.5' }, 500)

}, function(){
  $(this).nextAll('.well').stop().animate({ opacity: '1' }, 500)
  $(this).prevAll('.well').stop().animate({ opacity: '1' }, 500)

})
}