const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const githubApi = require('../helpers/github')
const db = require('../database/index');
require('dotenv').config();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));

app.post('/repos', function (req, res) {
  console.log(req.body.username);
  
  githubApi.getReposByUsername(req.body.username, function(err, repos) {
    if(err) {
      console.log(err)
    } else {
      db.save(repos);
    }
  });
});

app.get('/repos', function (req, res) { 
  // This route should send back the top 25 repos
  db.fetchTop25(function(err, repos) {
    if(err) {
      console.log(err);
    } else {
      console.log('in the server fetch')
      res.send(JSON.stringify(repos));
    }
  })
});

const PORT = process.env.PORT;

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

