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
      console.log("This tweet :" + tweets[i].text + "Created Date: " + tweets[i].created_at);
    }}
  });
}

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

  switch (response.command) {
    case "See my tweets":
      getTweets();
      break;

    // case "spotify-this-song":
    //   spotify();
    //   break;
    //
    // case "movie-this":
    //   movie();
    //   break;
    //
    // case "do-what-it-says":
    //   doIt();
    //   break;
  }

});



// +++++++++++++++++++++++++++++++++++++++++++++ //


// var command = ;
//

//
//  // +++++++++++++++++++++++++++++++++++++++++++ //
