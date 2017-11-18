var Twitter = require('twitter');

var inquirer = require("inquirer");

var twitterkeys = require("./keys.js")
console.log(twitterkeys);

inquirer.prompt ([
  {
    type: "list",
    message: "What would you like to do?",
    choices: ["See my tweets", new inquirer.Separator(), "Spotify a song",
    new inquirer.Separator(), "Show me movie info", new inquirer.Separator(),
  "Do what liri says"],
    name: "todo"
  }
]).then(function(response) {
  console.log(response);
});


var client = new Twitter(twitterkeys);

// var params = {screen_name: 'czarbina', count: 1};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(response);
//   }
// });
//
//
//
// // Made variable for consumer key alone
// var consumerKey = twitterkeys.consumer_key;
// // console.log("This is the consumer key: " + consumerKey);
//
// // Made variable for consumer secret alone
// var consumerSecret = twitterkeys.consumer_secret
// // console.log("This is the consumer secret: " + consumerSecret)
//
// // Made variable for acccess token alone
// var tokenKey = twitterkeys.access_token_key
// // console.log("This is the access token: " + tokenKey);
//
// // Make variable for token secret alone
// var tokenSecret = twitterkeys.access_token_secret
// // console.log("This is the token secret: " + tokenSecret);
//
// // +++++++++++++++++++++++++++++++++++++++++++++ //
//
//
// var liriCommand = process.argv[2];
//
// switch (liriCommand) {
//   case "my-tweets":
//     tweets();
//     break;
//
//   case "spotify-this-song":
//     spotify();
//     break;
//
//   case "movie-this":
//     movie();
//     break;
//
//   case "do-what-it-says":
//     doIt();
//     break;
// }

//  +++++++++++++++++++++++++++++++++++++++++++ //
