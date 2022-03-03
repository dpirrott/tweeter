$(() => {

  $(window).scroll(() => {
    const scrollPosition = $(this).scrollTop();
    const scrollUpBtn = $('#scrollUpBtn');
    if (scrollPosition !== 0) {
      // Show scroll button if still hidden
      if (scrollUpBtn.hasClass("scroll-up-hide")) {
        scrollUpBtn.removeClass();
        scrollUpBtn.addClass("scroll-up-show");
      }
      

    } else {
      scrollUpBtn.removeClass();
      scrollUpBtn.addClass("scroll-up-hide");
    }
  });


});