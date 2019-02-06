import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    // this.onInputChange = this.onInputChange.bind(this);
  }

  // onInputChange (e) {
  //   console.log('onInputChange search.jsx', this.state.term);
  //   this.setState({
  //     term: e.target.value
  //   });
  // }

  handleSearchSubmit(event) {
    console.log(this.props)
    // console.log("i am in the search in search.jsx", props)    
    this.props.searchGitHub(this.state.term);
    this.setState({ term: ""});
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username:  
      <form onSubmit={() => this.handleSearchSubmit()}>
        <input value={this.state.term} onChange={e => this.setState({ term: e.target.value })}/>       
        <button onClick={this.handleSearchSubmit}> Add Repos </button>
      </form>  
    </div>) 
  }
}

export default Search;