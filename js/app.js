var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 300);

    $('body').animate({
      left: "400px"
    }, 300);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-400px"
    }, 300);

    $('body').animate({
      left: "0px"
    }, 300);
  });
};


$(document).ready(main);
