/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {

  // Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      $('#tweets-container').append(createTweetElement(tweet));
    }
  }

  const createTweetElement = function(tweetData) {
    return (`
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
    `)
  };

  const loadTweets = function() {
    $.ajax ({
      url: "http://localhost:8080/tweets",
      method: 'GET',
      dataType: "json",
      success: function(data) {
        renderTweets(data);
      }
    });
  };

  loadTweets();

  $('#tweet-form').submit(function(e) {
    e.preventDefault();
    console.log(e.target[0].value)
    const formattedData = $(this).serialize();
    console.log(formattedData);
    $.ajax (
      "http://localhost:8080/tweets",
      {
        method: 'POST',
        data: formattedData
      }
    )
    .then((res) => {
      console.log(res);
    })
  });

  renderTweets(data);
});

