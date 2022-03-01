$(document).ready(function() {
  
  $('#tweet-text').on('input', function() {
    console.log(this.value.length);
    const remainingLength = 140 - this.value.length;
    $('.counter').text(remainingLength);
  })

});