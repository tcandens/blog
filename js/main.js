$(function() {

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
  $recentItems.each( function( index ) {
    var width = $( this ).outerWidth();
    var height = $( this ).outerHeight();
    var position = $( this ).position();
    var randX = Math.random();
    var randY = Math.random();
    var canvasWidth = bulletinWidth - width;
    var canvasHeight = bulletinHeight - height;
    var newX = Math.floor( canvasWidth * randX );
    var newY = Math.floor( canvasHeight * randY ) + 50;

    $( this ).css("top", newY)
      .css("left", newX);

  });

  // Draggabilly
  // var cards = document.querySelector(".recent-item-card");
  // var drags = new Draggabilly( cards, { handle: ".card-handle" })

  // jQuery UI Draggable
  $('#doodle').draggable();
  $('.recent-item-card').draggable({ handle: ".card-handle"});

});
