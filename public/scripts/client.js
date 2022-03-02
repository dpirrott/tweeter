/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {

  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
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
          <span>${tweetData.created_at}</span>
          <div>
            <i class="fa-solid fa-flag"></i> <i class="fa-solid fa-retweet"></i> <i class="fa-solid fa-heart"></i>
          </div>
        </footer>
      </article>
    `)
  };

  const $tweet = createTweetElement(tweetData);

  console.log($tweet);
  $('#tweets-container').append($tweet);
});

