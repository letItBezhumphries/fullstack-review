import React from 'react';
import RepoListItemEntry from './RepoListItemEntry.jsx';

const RepoList = (props) => {
  return (
    <div>
      <h4> Repo List Component </h4>
      There are {props.repos.length} repos.
      {props.repos.map(function(repo, index) {
        return <RepoListItemEntry repo={repo} key={index} />
      })}
    </div>
  );
}

export default RepoList;