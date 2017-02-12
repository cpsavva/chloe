"use strict"


const keys = require("./keys");
const request = require("request");

const npmKey = keys.movieKeys.tmdb

//OMDB API
function movie(movieName){

	
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

//TMDB API 
function otherMovie(movieName){
	if (movieName === ""){
		movieName = "mr nobody"
	};
		var queryUrl = "https://api.themoviedb.org/3/search/movie?api_key="+ npmKey + "&language=en-US&query=" + 
						movieName + "&page=1&include_adult=false";
	request(queryUrl, function(error, response, body) {


		if (!error && response.statusCode === 200) {
			// console.log(queryUrl);
			// console.log(JSON.parse(body));
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


module.exports = {otherMovie};