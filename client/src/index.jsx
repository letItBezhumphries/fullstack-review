import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
    this.getTopRepos = this.getTopRepos.bind(this);
    this.searchGitHub = this.searchGitHub.bind(this);
  }

  getTopRepos() {
    console.log('I am in the getTopRepos line 33:index.jsx', this.state)
    var app = this;
    $.get('/repos', function(response) {
      var repos = JSON.parse(response);
      app.setState({
        repos: repos
      })
    })
  }

  searchGitHub(term) {
    console.log(`${term} was searched`);
    // TODO use the Search component to post the username to the server
    //use $post
    let app = this;
    $.post('/repos', { username: term }, function(response) {
      app.getTopRepos();
    });
  }

  componentDidMount() {
    this.getTopRepos();
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.searchGitHub}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app')); 