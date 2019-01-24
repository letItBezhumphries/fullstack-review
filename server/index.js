const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const githubApi = require('../helpers/github')
const db = require('../database/index');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  console.log(req.body.username);
  //user the getRepos from helpers and add the username and a 
  githubApi.getReposByUsername(req.body.username, function(err, repos) {
    if(err) throw err;
    console.log(Array.isArray(repos));
    //receiving a list/array of the repos
    //use the save function passing in the repos
    db.save(repos);
  })

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

