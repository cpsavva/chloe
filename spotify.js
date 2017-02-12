"use strict"

const spotify = require("spotify");
var track;


function nameThatTrack(track){
	
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


module.exports = {nameThatTrack};