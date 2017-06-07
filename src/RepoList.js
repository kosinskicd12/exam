import React from 'react';
import ReactDOM from 'react-dom';
import { array, func } from 'prop-types';
import { Link } from 'react-router-dom';



const RepoList = (props) => {
    const tableRows = props.repos.map((repoObj) => {
        return(
             <tr className="repolist" key={repoObj.id}>
                    <td>{repoObj.name}</td>
                </tr>
        )
    })
    return (
        <table className="table">
            <thead>
                <tr>
                    <th width="500">Name</th>
                </tr>
            </thead>
            <tbody>
              {tableRows}
            </tbody>
        </table>
    )
}

RepoList.proppTypes = {
    repos: array.isRequired,
    details: func.isRequired
}

export default RepoList;