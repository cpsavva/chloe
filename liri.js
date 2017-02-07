
//pseudocoding
/*first i want to run liri.js and i question will pop up?
How can I help? with three options:
1) my tweets
2) spotify this song
3) movie info

when the person selects the my tweets run mytweets ();
when the person selects spotify this song, prompt them to enter song title 
	then run spotify();(might need to reverse this ie run spotify then prompt)
when the person selects movie info, prompt them to enter movie title
	then run movie title (might need to reverse this ie run movie then prompt)


what do i need?
spotify : https://api.spotify.com/v1/search?query=thriller&type=track&market=US&offset=0&limit=1


*/

const keys = require("./keys");
const spotify = require("spotify");
const Twitter = require("twitter");

var client = new Twitter({
  consumer_key: keys.twitterKeys.consumer_key,
  consumer_secret: keys.twitterKeys.consumer_secret,
  access_token_key: keys.twitterKeys.access_token_key,
  access_token_secret: keys.twitterKeys.access_token_secret
});


function myTweet(){
	var params = {screen_name: 'cpsavva'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	  	for (i = 0; i< tweets.length; i++){
	    console.log(tweets[i].text);
		}  	
	  }

	});
};




