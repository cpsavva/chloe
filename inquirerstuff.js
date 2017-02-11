const inquirer = require("inquirer");

inquirer.prompt([
	{
		type: "checkbox",
		message: "Hello, How can I help you today?",
		choices: ["check my tweets", "spotify track info", "movie info", "do what it says"],
		name: "services"
	}
]).then(function(user){
	var options = user.services
	switch (options){
		case "check my tweets":
			myTweet();

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

		case "do what it says":
			doWhatever();
	}

});