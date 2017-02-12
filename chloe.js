"use strict"

const chloeTwitter = require("./twitter.js");
const chloeSpotify = require("./spotify.js");
const chloeMovie = require("./movie.js");
const chloeTextReader = require("./textReader.js");
const fs = require("fs");
const inquirer = require("inquirer");

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


	var options = user.services[0];
	console.log(options);


	switch (options){

		case "check my tweets":
			chloeTwitter.myTweet();
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
					chloeSpotify.nameThatTrack(song);
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
					chloeMovie.otherMovie(film);
				});
			break;

		case "do what it says":
			chloeTextReader.doWhatever();
			break;

		default: 
			console.log("I'm sorry. Please try again.");
	}

});



