import React from 'react';

const RepoListItemEntry = (props) => {
  return (
    <div className="repo-container">  
      <h3>Author Name: {props.repo.full_name}</h3>
      <br/>
      <h4>Repo Name: {props.repo.name}</h4> <br/><span>Link: <a href={props.repo.html_url}/> </span>
      <br/>
      <div>Stargazers Count: {props.repo.stargazers_count} </div>
      <br/>
      <div>Open Issues Count: {props.repo.open_issues_count} </div>
    </div>
  )
}

export default RepoListItemEntry;