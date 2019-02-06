import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit(event) {
    console.log(this.props)   
    this.props.searchGitHub(this.state.term);
    this.setState({ term: ""});
  }

  render() {
    return (<div className="ui container" style={{marginTop: '10px'}}>
      <h4>Add more repos!</h4>
      Enter a github username:
      <br/>  
      <form onSubmit={() => this.handleSearchSubmit()}>
        <input value={this.state.term} onChange={e => this.setState({ term: e.target.value })}/>       
        <button onClick={this.handleSearchSubmit}> Add Repos </button>
      </form>  
    </div>) 
  }
}

export default Search;