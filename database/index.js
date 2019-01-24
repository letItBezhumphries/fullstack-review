const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator')

mongoose.connect('mongodb://localhost/fetcher3', {useNewUrlParser: true});

let repoSchema = mongoose.Schema({
  node_id: {type: String, required: true, unique: true , dropDups: true},   
  name: String,
  full_name: String,
  html_url: String,
  stargazers_count: Number,
  open_issues_count: Number
});
repoSchema.plugin(uniqueValidator);

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos, callback) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  //we will be adding a list of repos from the githubApi search for the username we entered
  //we need to add each item in the list to our database as long as its not a duplicate 
  repos.forEach(function(repo, index) {
    repo = new Repo({
      node_id: repo.node_id,
      name: repo.name,
      full_name: repo.full_name,
      html_url: repo.html_url,
      stargazers_count: repo.stargazers_count,
      open_issues_count: repo.open_issues_count
    })
    repo.save(function(err) {
      if(err) {
        console.log('error saving to the dbase', err);
      } else {
        console.log('Success saving repo to database', repo);
      }
    });
  })

}

module.exports.save = save;