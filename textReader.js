"use strict"

const chloeTwitter = require("./twitter.js");
const chloeSpotify = require("./spotify.js");
const chloeMovie = require("./movie.js");
const fs = require("fs");




function doWhatever(){
	fs.readFile("random.txt", "utf8", function(error, data) {

  
	  // console.log(data);
	  var data_array = data.split(",");
	  // console.log(data_array);
	  var option = data_array[0];
	  var action = data_array[1];

	  switch (option){

	  	case "check my tweets":
	  		chloeTwitter.myTweet();
	  	break;

	  	case "spotify track info":
	  		chloeSpotify.nameThatTrack(action);
	  	break;

	  	case "movie info":
	  		chloeMovie.otherMovie(action);
	  	break;

	  	default: 
	  		console.log("Please update random.txt to proceed. Thank you.")
	  }

  	

  });

}

module.exports = {doWhatever};