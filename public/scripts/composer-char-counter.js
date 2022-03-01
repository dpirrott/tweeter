$(document).ready(function() {
  
  $('#tweet-text').on('input', function() {
    const remainingLength = 140 - this.value.length;
    $('.counter').text(remainingLength);
    if (remainingLength < 0) {
      $('.counter').css('color', 'red');
      $('.counter').css('background-color', 'inherit');
    } else if (remainingLength < 6) {
      $('.counter').css('background-color', 'yellow');
      $('.counter').css('color', 'black');
    } else {
      $('.counter').css('background-color', 'inherit');
      $('.counter').css('color', 'black');
    }
  });

});