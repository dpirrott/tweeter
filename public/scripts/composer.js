$(() => {

  $(window).scroll(() => {
    const scrollPosition = $(this).scrollTop()
    if (scrollPosition !== 0) {
      console.log("I'm not at top!")

      // Add new button and collapse nav

      // Add new button
      

    } else {
      console.log("I'm at top!")
    }
  });


});