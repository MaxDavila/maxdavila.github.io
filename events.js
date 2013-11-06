$('document').ready(function(){
  bindDownArrow();
});

function bindDownArrow() {
  $('.fa-arrow-circle-down').on("click", function(){
    $('body,html').animate({
      scrollTop: $('#portfolio').offset().top
    }, 600);
    });
};