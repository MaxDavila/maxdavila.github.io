$('document').ready(function(){
  bindDownArrow();
  bindWells();
  bindFullWell();
});

function bindDownArrow() {
  $('.fa-arrow-circle-down').on("click", {selector: $('#portfolio')}, scrollToSelector);
  $('#portfolio-link').on("click", {selector: $('#portfolio')}, scrollToSelector);
}

function scrollToSelector(event, selector) {
    $('body,html').animate({
      scrollTop: event.data.selector.offset().top
    }, 600);
}

function bindWells() {
  $('.well').hover(function(){
    $(this).nextAll('.well').stop().animate({ opacity: '0.5' }, 500);
    $(this).prevAll('.well').stop().animate({ opacity: '0.5' }, 500);

  }, function(){
    $(this).nextAll('.well').stop().animate({ opacity: '1' }, 500);
    $(this).prevAll('.well').stop().animate({ opacity: '1' }, 500);
  });
}

function bindFullWell(){
    $('.well').on('click', function() {
      var projectName = $(this).attr('data-id')
      $fullProject = $(this).nextAll(".full-project[data-id="+projectName+"]");
      $fullProject.prevAll('.full-project').hide()
      $fullProject.nextAll('.full-project').hide()

      $fullProject.toggle()
      $('body, html').animate({
        scrollTop: $fullProject.offset().top - 50
      }, 600)
    });
}

