$(() => {
  $('#tweet-text').on('input', function() {
    const remainingLength = 140 - this.value.length;
    const counter = $(this).siblings().find('output');
    counter.text(remainingLength);
    counter.removeClass();
    counter.addClass('char-count');
    if (remainingLength < 0) {
      counter.addClass('char-count-overflowed');
    } else if (remainingLength < 6) {
      counter.addClass('char-count-overflow-warning');
    }
  });
});