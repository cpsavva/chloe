
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
const request = require("request");

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

function NameThatTrack(){
	var track = process.argv.slice(2);
	
	track.forEach(function(e, i){
		track[i] = e.replace(/\s/,"+");
	});

	track = track.join('+');


	// var track = typeof track  !== 'undefined' ?  track  : "emotions";
/*PROBLEMS
1) NEED TO FIGURE OUT SLICE DEFAULT
2) HOW TO FIND ACE OF BASE SONG? 
*/

	spotify.search({ type: 'track', query: track }, function(err, data) {
	    if ( err ) {
	        console.log('Error occurred: ' + err);
	        return;
	    }
	 	console.log("Here is what I've found...");
	 	console.log("==============================================")
	 	console.log("");
	 	console.log("Artist: " + data.tracks.items[0].artists[0].name);
	 	console.log("");
	 	console.log("Track: " + data.tracks.items[0].name);
	 	console.log("");
	 	console.log("Preview: " + data.tracks.items[0].preview_url);
	 	console.log("");
	 	console.log("Album: " + data.tracks.items[0].album.name);
	 	console.log("")
	 	console.log("==============================================")

	});
};


// function movie(){}
/*PROBLEMS
1) NEED THE JSON RESPONSE TO PUNCH IT OUT
2) MAYBE NEED TO USE A DIFFERENT API 
*/
var movieName = process.argv.slice(2);
	
	movieName.forEach(function(e, i){
		movieName[i] = e.replace(/\s/,"+");
	});

	movieName = movieName.join('+');


	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";
request(queryUrl, function(error, response, body) {


if (!error && response.statusCode === 200) {
	console.log(queryUrl);
	console.log(JSON.parse(body));

}
});





