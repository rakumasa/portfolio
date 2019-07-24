$(document).ready(function() {

  $('#slides').superslides({
    animation: 'fade',
    play: 5000,
    pagination: false,
  });

  var typed = new Typed(".typed", {
    strings: ["Software Engineer."],
    typeSpeed: 30,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

});
