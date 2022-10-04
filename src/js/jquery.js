var fixedTop = $(".contactbar");
var scroll_top_open = $(".scroll-top");
var largeNav = $(".largenav");
var logo = $("#logo");
var mainLogo = $(".mainlogo")
var facility1 = $(".spin1");
var facility2 = $(".spin2");

// scroll-up button and navbar position on scroll
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 5) {
    fixedTop.removeClass("contactshow")
    fixedTop.addClass("contacthide");
  } else {
    fixedTop.removeClass("contacthide");
    fixedTop.addClass("contactshow")
  }
  if ($(this).scrollTop() > 5) {
    largeNav.addClass('navfixed')
    largeNav.removeClass('relative')
    logo.addClass('bgchange')
    mainLogo.removeClass('logo')
    mainLogo.addClass('logoreduced')
  } else {
    largeNav.removeClass('navfixed')
    largeNav.addClass('relative')
    logo.removeClass('bgchange')
    mainLogo.addClass('logo')
    mainLogo.removeClass('logoreduced')
  }

  
  if ($(this).scrollTop() > 800) {
    scroll_top_open.addClass("open");
  } else {
    scroll_top_open.removeClass("open");
  }
});

