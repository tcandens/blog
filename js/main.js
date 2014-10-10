$(function() {

  // document.removeClass('no-js').addClass('js-ready');

  // Toggle navigation Hamburger
  $('.nav-button').on('click', function() {
    $(this).toggleClass('active');
    $('.nav-list').toggleClass('closed');
  });

  // Position recent item cards
  var $recentItems = $('.recent-item-card');
  // Grab #bulletin dimensions
  var $bulletin = $('.bulletin');
  var bulletinWidth = $bulletin.innerWidth();
  var bulletinHeight = $bulletin.innerHeight();
  // console.log("x: " + width + " | y: " + height );
  // Iterate through each card
  var delay = 500
  $recentItems.each( function( index ) {
    var width = $( this ).outerWidth();
    var height = $( this ).outerHeight();
    var position = $( this ).position();
    var randX = Math.random();
    var randY = Math.random();
    var canvasWidth = bulletinWidth - width;
    var canvasHeight = bulletinHeight - height + 100;
    var newX = Math.floor( canvasWidth * randX );
    var newY = Math.floor( canvasHeight * randY );

    $( this ).delay(delay)
      .css("top", newY)
      .css("left", newX);

    delay += 500;
    console.log("width: " + width + " | height: " + height );
    console.log("x: " + newX + " | y: " + newY );
  });


});
