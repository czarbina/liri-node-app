var twitterkeys = require("./keys.js")

// console.log(twitterkeys);

var consumerKey = twitterkeys.consumer_key;
console.log("This is the consumer key: " + consumerKey);

var consumerSecret = twitterkeys.consumer_secret
console.log("This is the consumer secret: " + consumerSecret)

var tokenKey = twitterkeys.access_token_key
console.log("This is the access token: " + tokenKey);

var tokenSecret = twitterkeys.access_token_secret
console.log("This is the token secret: " + tokenSecret);
