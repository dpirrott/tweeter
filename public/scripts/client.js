/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const renderTweets = tweets => {
    $('#tweets-container').empty();
    tweets.sort((a, b) => b.created_at - a.created_at);
    for (const tweet of tweets) {
      $('#tweets-container').append(createTweetElement(tweet));
    }
  };

  const createTweetElement = tweetData => (`
      <article>
        <header>
          <figure>
            <img src=${tweetData.user.avatars}>
            <h3>${tweetData.user.name}</h3>
          </figure>
          <h3>${tweetData.user.handle}</h3> 
        </header>
        <p>${escape(tweetData.content.text)}</p>
        <footer>
          <span>${timeago.format(tweetData.created_at)}</span>
          <div>
            <i class="fa-solid fa-flag"></i> <i class="fa-solid fa-retweet"></i> <i class="fa-solid fa-heart"></i>
          </div>
        </footer>
      </article>
    `);

  const loadTweets = () => {
    $.ajax({
      url: "http://localhost:8080/tweets",
      method: 'GET',
      dataType: "json"
    })
      .then((data) => {
        renderTweets(data);
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  // Chrome was complaining about using alert (violation error), so I created red error message
  const formErrorHandler = errorMsg => {
    const displayError = $('#tweet-form').find('p');
    if(displayError.is(":hidden") && errorMsg !== "") {
      displayError.html(`<i class="fa-solid fa-triangle-exclamation"></i> ${errorMsg} <i class="fa-solid fa-triangle-exclamation"></i>`);
      displayError.slideDown("slow");
    }else if (errorMsg !== ""){
      displayError.html(`<i class="fa-solid fa-triangle-exclamation"></i> ${errorMsg} <i class="fa-solid fa-triangle-exclamation"></i>`);
    } else {
      displayError.hide('slide');
    }
  }; 

  $('#tweet-form').submit(function(e) {
    e.preventDefault();
    const len = this.text.value.length;
    if (len > 140) {
      formErrorHandler("Too many characters! (140 max)");
    } else if (len === 0) {
      formErrorHandler("Cannot submit blank input field");
    } else {
      // Clear error msg since sucess
      formErrorHandler("");
      $(this).find('output').text('140');
      $(this).find('output').addClass('char-count')
      const formattedData = $(this).serialize();
      $.ajax ("http://localhost:8080/tweets", {method: 'POST', data: formattedData})
        .then(() => {
          // Clear the form input
          $(this)[0][0].value = "";
          loadTweets();
        })
        .catch((err) => {
          console.log("Error: ", err);
        });
    }
  });

  loadTweets();
});

