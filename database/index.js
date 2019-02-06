const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

let repoSchema = mongoose.Schema({   
  name: String,
  full_name: {type: String, required: true, unique: true , dropDups: true},
  html_url: String,
  stargazers_count: Number,
  open_issues_count: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos, callback) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  //we will be adding a list of repos from the githubApi search for the username we entered
  //we need to add each item in the list to our database as long as its not a duplicate 
  repos.forEach(function(repo, index) {
    repo = new Repo({
      name: repo.name,
      full_name: repo.full_name,
      html_url: repo.html_url,
      stargazers_count: repo.stargazers_count,
      open_issues_count: repo.open_issues_count
    })
    repo.save(function(err, repos) {
      if(err) {
        console.log('error saving to the dbase', err);
      } else {
        callback(null, repos);
      }
    });
  })
}

let fetchTop25 = (callback) => {  
  Repo.find(function(err, repos) {
    if(err) {
      console.log('there was an error in the query', err);
    } else {
      console.log('should be getting repos here');
      callback(null, repos);
    }
  })
  .sort({stargazers_count: -1, open_issues_count: -1 })
  .limit(25)
};

module.exports = {
  save,
  fetchTop25
}