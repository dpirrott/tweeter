$(() => {

  $(window).scroll(() => {
    const scrollPosition = $(this).scrollTop();
    const scrollUpBtn = $('#scrollUpBtn');
    const nav = $('nav');
    const navBtn = nav.children('button');
    const header = $('body').children('header');
    const tweetContainer = $('#tweets-container');
    // do functionality on screens smaller than 768px
    if (window.matchMedia('(max-width: 1024px)').matches) {
      // Only hide navHeader when there's enough tweet content to fill the screen
      if (tweetContainer.height() > $(window).height()) {
        if (scrollPosition !== 0) {
          // Show scroll button if still hidden
          if (scrollUpBtn.hasClass("scroll-up-hide")) {
            scrollUpBtn.removeClass();
            scrollUpBtn.addClass("scroll-up-show");
          }
          // Hide the nav, somehow make tweeter heading stay
          if (!header.is(":hidden") || !navBtn.is(':hidden')) {
            header.slideUp(600);
            nav.addClass("transparentNav");
            navBtn.addClass('scroll-up-hide');
          }
          
        } else {
          scrollUpBtn.removeClass();
          scrollUpBtn.addClass("scroll-up-hide");
          header.slideDown(600);
          nav.removeClass();
          navBtn.removeClass();
        }
      }
    } else {
      // Only hide navHeader when there's enough tweet content to fill the screen
      if (tweetContainer.height() > $(window).height()) {
        if (scrollPosition !== 0) {
          // Show scroll button if still hidden
          if (scrollUpBtn.hasClass("scroll-up-hide")) {
            console.log("Check misfires")
            scrollUpBtn.removeClass();
            scrollUpBtn.addClass("scroll-up-show");
          }
          // Hide the nav
          if (!header.is(":hidden") || !navBtn.is(':hidden')) {
            nav.addClass("transparentNav");
            navBtn.addClass('scroll-up-hide');
          }
          
        } else {
          scrollUpBtn.removeClass();
          scrollUpBtn.addClass("scroll-up-hide");
          nav.removeClass();
          navBtn.removeClass();
        }
      }
    }
    
    
    
  });

  const textArea = $('#tweet-text');
  const form = $('.new-tweet')
  
  $('#scrollUpBtn').on('click', () => {
    // Scroll to top
    let currentPosition = $(window).scrollTop();
    const start = currentPosition;
    let timer = 0;
    for (let i = start; i >= 0; i -= 3) {
      if (i < 3) {
        i = 0;
      }
      setTimeout(() => {
        window.scrollTo(0, i);
      }, timer)
      timer += 1;
    }
    setTimeout(() => {
      form.slideDown("slow");
      setTimeout(() => {
        textArea.focus();
        $(this).removeClass();
      }, 400);      
    }, timer + 20);

  });

});