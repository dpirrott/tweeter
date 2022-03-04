$(() => {
  const formToggle = $('nav').find('button');
  const swayingPointer = formToggle.find('.fa-angles-down');
  const form = $('.new-tweet');

  formToggle.on('click', () => {
    if (form.is(':hidden')) {
      form.slideDown("slow");
    } else {
      form.hide('slide');
    }
  });

  formToggle.hover(() => {
    swayingPointer.addClass('fa-angles-down-hover');
  }, () => {
    swayingPointer.removeClass('fa-angles-down-hover');
  });
});