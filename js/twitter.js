/**************************************************************************
 * NEW: These first examples no longer need the Widget ID to work.
 *************************************************************************/


var configProfile = {
  "profile": {"screenName": 'ecoledesdonnees'},
  "domId": 'EDD-tweet',
  "maxTweets": 1,
  "enableLinks": true, 
  "showUser": true,
  "showTime": true,
  "showImages": false,
  "lang": 'en'
};
twitterFetcher.fetch(configProfile);




function populateTpl(tweets){
  var element = document.getElementById('EDD-tweet');
  var html = '<ul>';
  for (var i = 0, lgth = tweets.length; i < lgth ; i++) {
    var tweetObject = tweets[i];
    html += '<li>'
      + (tweetObject.image ? '<div class="tweet-img"><img src="'+tweetObject.image+'" /></div>' : '')
      + '<p class="tweet-content">' + tweetObject.tweet + '</p>'
      + '<p class="tweet-infos">Posted on the ' + tweetObject.time + ', by ' + tweetObject.author + '</p>'
      + '<p class="tweet-link"><a href="' + tweetObject.permalinkURL + '">Link</a></p>'
    + '</li>';
  }
  html += '</ul>';
  element.innerHTML = html;
}
