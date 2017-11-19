var inquirer = require("inquirer");
var Twitter = require('twitter');
var keys = require("./keys.js")
var client = new Twitter(keys)
var Spotify = require('node-spotify-api');
var yoursong;
var request = require("request");
var yourmovie;
var fs = require("fs");

function getTweets() {
  var params = {screen_name: 'czarbina', count: 20};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
       // console.log(tweets);
      for (i=0; i< tweets.length;i++) {
      console.log("Created Date: " + tweets[i].created_at + "\n" + "Tweet: " + tweets[i].text + "\n");

    }}
  });
}

function getSpotify() {
  var spotify = new Spotify({
  id: "52bf7db2252d4c238eb54ed2ce9e4f89",
  secret: "33891b262db249a5bf289d4b89c94d1f"
});

spotify.search({ type: 'track', query: yoursong }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
  console.log("Arist: " + JSON.stringify(data.tracks.items[0].album.artists[0].name, null, 2)
  + "\n" + "Album: " + JSON.stringify(data.tracks.items[0].album.name, null, 2)
  + "\n" + "Song name: " + JSON.stringify(data.tracks.items[0].name, null, 2)
  + "\n" + "Preview link: " + JSON.stringify(data.tracks.items[0].preview_url, null, 2));
});

}

function getTheSign() {
  var spotify = new Spotify({
  id: "52bf7db2252d4c238eb54ed2ce9e4f89",
  secret: "33891b262db249a5bf289d4b89c94d1f"
});

spotify.search({ type: 'track', query: "The Sign Ace of Base" }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
  console.log("Arist: " + JSON.stringify(data.tracks.items[0].album.artists[0].name, null, 2)
  + "\n" + "Album: " + JSON.stringify(data.tracks.items[0].album.name, null, 2)
  + "\n" + "Song name: " + JSON.stringify(data.tracks.items[0].name, null, 2)
  + "\n" + "Preview link: " + JSON.stringify(data.tracks.items[0].preview_url, null, 2));
});
}

function getMovie() {
  var queryUrl = "http://www.omdbapi.com/?t=" + yourmovie + "&y=&plot=short&apikey=trilogy";
  request(queryUrl, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      console.log(
        "Title: " + JSON.parse(body).Title + "\n" +
        "Year: " + JSON.parse(body).Year + "\n" +
        "IMDB Rating: " + JSON.parse(body).imdbRating + "\n" +
        "Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value + "\n" +
        "Country: " + JSON.parse(body).Country + "\n" +
        "Language: " + JSON.parse(body).Language + "\n" +
        "Plot: " + JSON.parse(body).Plot + "\n" +
        "Actors: " + JSON.parse(body).Actors);
      }
    });
  }

  function getMrNobody() {
    var queryUrl = "http://www.omdbapi.com/?t=" + "Mr+Nobody" + "&y=&plot=short&apikey=trilogy";
    request(queryUrl, function(error, response, body) {
      if (!error && response.statusCode === 200) {
        console.log(
          "Title: " + JSON.parse(body).Title + "\n" +
          "Year: " + JSON.parse(body).Year + "\n" +
          "IMDB Rating: " + JSON.parse(body).imdbRating + "\n" +
          "Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value + "\n" +
          "Country: " + JSON.parse(body).Country + "\n" +
          "Language: " + JSON.parse(body).Language + "\n" +
          "Plot: " + JSON.parse(body).Plot + "\n" +
          "Actors: " + JSON.parse(body).Actors);
        }
      });
    }

function iWantItThatWay() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
      }
    console.log(data);
    });
  }

inquirer.prompt ([
  {
    type: "list",
    message: "What would you like to do?",
    choices: ["See my tweets", new inquirer.Separator(), "Spotify a song",
    new inquirer.Separator(), "Show me movie info", new inquirer.Separator(),
  "Yes I know it's too late, but..."],
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
      if (response.song) {
        yoursong = response.song;
        // console.log(yoursong);
        getSpotify();
      }
      else {
        getTheSign();
      }
    });
      break;

    case "Show me movie info":
      inquirer.prompt([
        {
          type: "input",
          message: "What movie intrigues you?",
          name: "movie"
        }
      ]).then(function(response) {
        if (response.movie) {
          yourmovie = response.movie;
          // console.log(yoursong);
          getMovie();
        }
        else {
          getMrNobody();
        }
      });
        break;

    case "Yes I know it's too late, but...":
      iWantItThatWay();
      break;
    }
  });
