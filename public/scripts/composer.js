$(() => {

  $(window).scroll(() => {
    const scrollPosition = $(this).scrollTop();
    const scrollUpBtn = $('#scrollUpBtn');
    const nav = $('nav');
    const header = $('body').children('header');
    if (scrollPosition !== 0) {
      // Show scroll button if still hidden
      if (scrollUpBtn.hasClass("scroll-up-hide")) {
        scrollUpBtn.removeClass();
        scrollUpBtn.addClass("scroll-up-show");
      }

      // Hide the nav, somehow make tweeter heading stay
      if (!nav.is(":hidden") || !header.is(":hidden")) {
        nav.hide("slide");
        header.hide("slide");
      }
      
    } else {
      scrollUpBtn.removeClass();
      scrollUpBtn.addClass("scroll-up-hide");

      nav.slideDown()
      header.slideDown()
    }
  });

  const textArea = $('#tweet-text');
  const form = $('.new-tweet')
  
  $('#scrollUpBtn').on('click', () => {
    // Scroll to top
    form.slideDown("slow");
    window.scrollTo(0, 0);
    textArea.focus();
  });


});