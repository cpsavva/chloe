const Twitter = require("twitter");
const keys = require("./keys");

var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});

/* ========================================================
FUNCTIONS  */


function myTweet(){
	var params = {screen_name: 'cpsavva'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	  	for (i = 0; i< tweets.length; i++){
	  	console.log("")
	    console.log(tweets[i].text);
	    console.log("");
	    console.log("===========================================")
		}  	
	  }

	});
};


module.exports = {myTweet};
