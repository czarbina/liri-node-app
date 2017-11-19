var inquirer = require("inquirer");
var Twitter = require('twitter');
var twitterkeys = require("./keys.js")
var client = new Twitter(twitterkeys);

function getTweets() {
  var params = {screen_name: 'czarbina', count: 20};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
       // console.log(tweets);
      for (i=0; i< tweets.length;i++) {
      console.log("Created Date: " + tweets[i].created_at + " || This tweet :" + tweets[i].text);
    }}
  });
}

// function getSpotify() {
//
// }
//
// function getMovie() {
//
// }
//
// function doIt() {
//
// }

inquirer.prompt ([
  {
    type: "list",
    message: "What would you like to do?",
    choices: ["See my tweets", new inquirer.Separator(), "Spotify a song",
    new inquirer.Separator(), "Show me movie info", new inquirer.Separator(),
  "Do what liri says"],
    name: "command"
  }
]).then(function(response) {

// response.command because response is an object. We need the value IN the object.
  switch (response.command) {
    case "See my tweets":
      getTweets();
      break;

    case "Spotify a song":
    inquirer.prompt([
      {
        type: "input",
        message: "What's the song name?",
        name: "song"
      }
    ]).then(function(song) {
      console.log(song);
    });
      // getSpotify();
      break;
    //
    // case "movie-this":
    //   getMovie();
    //   break;
    //
    // case "do-what-it-says":
    //   doIt();
    //   break;
  }

});
