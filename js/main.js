$(function() {
  // document.removeClass('no-js').addClass('js-ready');
  $('.nav-button').on('click', function() {
    $(this).toggleClass('active');
    $('.nav-list').toggleClass('closed');
  });
});
