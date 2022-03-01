$(document).ready(function() {
  
  $('#tweet-text').on('input', function() {
    const remainingLength = 140 - this.value.length;
    $('.counter').text(remainingLength);
    if (remainingLength < 0) {
      $('.counter').css({'color': 'red', 'background-color': 'inherit'});
    } else if (remainingLength < 6) {
      $('.counter').css({'color': 'black', 'background-color': 'yellow'});
    } else {
      $('.counter').css({'color': 'black', 'background-color': 'inherit'});
    }
  });

});