/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {

  const renderTweets = tweets => {
    for (const tweet of tweets) {
      $('#tweets-container').append(createTweetElement(tweet));
    }
  }

  const createTweetElement = tweetData => (`
      <article>
        <header>
          <figure>
            <img src=${tweetData.user.avatars}>
            <h3>${tweetData.user.name}</h3>
          </figure>
          <h3>${tweetData.user.handle}</h3> 
        </header>
        <p>${tweetData.content.text}</p>
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
      dataType: "json",
      success: function (data) {
        renderTweets(data);
      }
    });
  };

  // Chrome was complaining about using alert (violation error), so I created red error message
  const formErrorHandler = errorMsg => {
    const displayError = $('#tweet-form').find('p');
    displayError.text(errorMsg);
  }; 

  $('#tweet-form').submit(function(e) {
    e.preventDefault();
    const len = e.target[0].value.length;
    if (len > 140) {
      formErrorHandler("Message exceeded maximum number of characters! (140 chars)");
    } else if (len === 0) {
      formErrorHandler("Cannot submit empty tweet!");
    } else {
      // Clear error msg
      formErrorHandler("");
      const formattedData = $(this).serialize();
      $.ajax (
        "http://localhost:8080/tweets",
        {
          method: 'POST',
          data: formattedData
        }
      );
    }
  });

  loadTweets();
});

