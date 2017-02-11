/*problems/things left to do:
2) do what it says   
3) update ReadMe
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
	if (track === ""){
		track = "the sign ace of base"
	};
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
	if (movieName === " "){
		movieName = "mr nobody"
	};
	

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
function otherMovie(movieName){
	if (movieName === ""){
		movieName = "mr nobody"
	};
		var queryUrl = "https://api.themoviedb.org/3/search/movie?api_key=f8e3a097cdcfbc790948cc7efc43982f&language=en-US&query=" + 
						movieName + "&page=1&include_adult=false";
	request(queryUrl, function(error, response, body) {


		if (!error && response.statusCode === 200) {
			console.log(queryUrl);
			console.log(JSON.parse(body));
			console.log("Here is what I've found...");
			console.log("==============================================")
			console.log("");
			console.log("Title: " + JSON.parse(body).results[0].title);
			console.log("");
			console.log("release Date: "+ JSON.parse(body).results[0].release_date);
			console.log("");
			console.log("Language: " + JSON.parse(body).results[0].original_language);
			console.log("");
			console.log("Plot: " + JSON.parse(body).results[0].overview);
			console.log("");
			console.log("==============================================")

			}

		});
}

function doWhatever(){
	fs.readFile("random.txt", "utf8", function(error, data) {

  
  console.log(data);

  var data_array = data.split(",");
  console.log(data_array);
  var songName = data_array[1];

  if(data_array[0] === "spotify track info"){
  	nameThatTrack(songName)
  }	

  });

}
/* =================================================================
main process */


// inquirer.prompt([
// 	{
// 		type: "checkbox",
// 		message: "Hello, How can I help you today?",
// 		choices: ["check my tweets", "spotify track info", "movie info", "do what it says"],
// 		name: "services"
// 	}
// ]).then(function(user){
// 	// console.log(JSON.stringify(user));
// 	// console.log(user.services)
// 	if (user.services == "check my tweets"){
// 		myTweet();
// 	}//if
// 	if (user.services == "spotify track info"){
// 		inquirer.prompt([
// 			{
// 		type: "input",
// 		message: "Please type in your track",
// 		name: "song"
// 		}]).then(function(trackName){
// 			console.log(JSON.stringify(trackName, null, 2));
// 			console.log(trackName.song);
// 			var song = trackName.song;
// 			nameThatTrack(song);
// 		});
// 	}//if
// 	if(user.services == "movie info"){
// 		inquirer.prompt([
// 			{
// 		type: "input",
// 		message: "Please type in movie title",
// 		name: "film"
// 		}]).then(function(movieInfo){
// 			console.log(JSON.stringify(movieInfo, null, 2));
// 			console.log(movieInfo.film);
// 			var film = movieInfo.film;
// 			otherMovie(film);
// 		});
// 	};//if
// 	if (user.services == "do what it says"){
// 		doWhatever();
// 	}//if
// });

inquirer.prompt([
	{
		type: "checkbox",
		message: "Hello, How can I help you today?",
		choices: ["check my tweets", "spotify track info", "movie info", "do what it says"],
		name: "services"
	}
]).then(function(user){
//if I do options = user.services[0] and case user.services[0]
// need to find a way to extract the choice out of its array  is this even possible?

	var options = user.services;
	console.log(options);//return ['whichever choice got picked']


	switch (options[0]){

		case "check my tweets":
			myTweet();
			break;

		case "spotify track info":
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
			break;

		case "movie info":
			inquirer.prompt([
				{
					type: "input",
					message: "Please type in movie title",
					name: "film"
				}]).then(function(movieInfo){
					console.log(JSON.stringify(movieInfo, null, 2));
					console.log(movieInfo.film);
					var film = movieInfo.film;
					otherMovie(film);
				});
			break;

		case "do what it says":
			doWhatever();
			break;

		default: 
			console.log("I'm sorry. Please try again.");
	}

});



