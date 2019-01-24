const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const githubApi = require('../helpers/github')


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
  githubApi.getReposByUsername(req.body.username, function(err, res, repos) {
    if(err) throw err;
    console.log(res);
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

