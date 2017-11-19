var inquirer = require("inquirer");
var Twitter = require('twitter');
var twitterkeys = require("./keys.js")
var client = new Twitter(twitterkeys);
var Spotify = require('node-spotify-api');

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

function getSpotify() {
  var spotify = new Spotify({
  id: "52bf7db2252d4c238eb54ed2ce9e4f89",
  secret: "33891b262db249a5bf289d4b89c94d1f"
});

spotify.search({ type: 'track', query: 'The Sign Ace of Base' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

console.log("Arist: " + JSON.stringify(data.tracks.items[0].album.artists[0].name, null, 2));
console.log("Album: " + JSON.stringify(data.tracks.items[0].album.name, null, 2));
console.log("Song name: " + JSON.stringify(data.tracks.items[0].name, null, 2));
console.log("Preview link: " + JSON.stringify(data.tracks.items[0].preview_url, null, 2));
});

}
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
    ]).then(function(response) {
      console.log(response.song);
      getSpotify();
    });
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
