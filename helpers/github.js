const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API
  //we want to search the githubApi for a particular user by searching  
  //for a particular username, this takes a username that has been typed in
  //and inserts that usernmame into the username portion of the githubApi address
  //form and along with our request for repos
  //we then send our request along with the address and an access token to allow
  // the githubApi to grant our request for repos for that particular username 
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, function(err, res, dataRepos) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, JSON.parse(dataRepos));
    }
  })
}

module.exports.getReposByUsername = getReposByUsername;