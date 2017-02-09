
//pseudocoding
/*first i want to run liri.js and 1st question will pop up?
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
const fs = require("fs");
const inquirer = require("inquirer");


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
var track;
function nameThatTrack(track){
	// // var track = process.argv.slice(2);
	// console.log(track)
	// track.forEach(function(e, i){
	// 	track[i] = e.replace(/\s/,"+");
	// });
	// console.log(track)
	// track = track.join('+');
	// console.log(track)
	// if (track.length == 0){
	// 	track= "the+sign"
	// }

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


function movie(movieName){

	// var movieName = process.argv.slice(2);
	
	// movieName.forEach(function(e, i){
	// 	movieName[i] = e.replace(/\s/,"+");
	// });

	// movieName = movieName.join('+');
	// if (movieName.length == 0){
	// 	movieNAme = "mr nobody"
	// };


	var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&r=json";
	request(queryUrl, function(error, response, body) {


		if (!error && response.statusCode === 200) {
			// console.log(queryUrl);
			console.log(JSON.parse(body));
			console.log("Here is what I've found...");
			console.log("==============================================")
			console.log("");
			console.log("Title: " + JSON.parse(body).Title);
			console.log("");
			console.log("Year: "+ JSON.parse(body).Year);
			console.log("");
			console.log("IMDb Rating: "+ JSON.parse(body).imdbRating);
			console.log("");
			console.log("Country: " + JSON.parse(body).Country);
			console.log("");
			console.log("Language: " + JSON.parse(body).Language);
			console.log("");
			console.log("Actors: " + JSON.parse(body).Actors); 
			console.log("");
			console.log("Plot: " + JSON.parse(body).Plot);
			console.log("");
			console.log("==============================================")

			}

		});
};

function doWhatever(){


}
/* =================================================================
main process */


inquirer.prompt([
	{
		type: "checkbox",
		message: "Hello, How can I help you today?",
		choices: ["check my tweets", "spotify track info", "movie info", "do what it says"],
		name: "services"
	}
]).then(function(user){
	console.log(JSON.stringify(user));
	console.log(user.services)
//use switch maybe
	if (user.services == "check my tweets"){
		myTweet();
	}//if
	if (user.services == "spotify track info"){
		inquirer.prompt([
			{
		type: "input",
		message: "Please type in your track",
		name: "song"
		}]).then(function(trackName){
			console.log(JSON.stringify(trackName, null, 2));
			console.log(trackName.song);
			var song = trackName.song;
			nameThatTrack(song);
		});
	}//if
	if(user.services == "movie info"){
		inquirer.prompt([
			{
		type: "input",
		message: "Please type in movie title",
		name: "film"
		}]).then(function(movieInfo){
			console.log(JSON.stringify(movieInfo, null, 2));
			console.log(movieInfo.film);
			var film = movieInfo.film;
			movie(film);
		});
	};//if
});



