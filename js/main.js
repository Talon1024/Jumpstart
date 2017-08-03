$(document).ready(function () {
  $(".carousel").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: false,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    adaptiveHeight: false
  });

  var scrollPrevPos = 0;
  var navbar = $(".navbar");
  var navbarHeight = navbar.height();

  $(this).scroll(function (e) {
    var scrollCurPos = $(this).scrollTop();
    if (scrollCurPos - scrollPrevPos >= 50) {
      navbar.animate({
        top: -navbarHeight
      }, 150, "swing", function () {
        scrollPrevPos = scrollCurPos;
      });
    } else if (scrollPrevPos - scrollCurPos >= 50) {
      navbar.animate({
        top: 0
      }, 150, "swing", function () {
        scrollPrevPos = scrollCurPos;
      });
    }
  });
});
