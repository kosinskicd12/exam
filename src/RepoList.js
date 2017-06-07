import React from 'react';
import ReactDOM from 'react-dom';

const RepoList = () => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th width="500">Name</th>
                </tr>
            </thead>
            <tbody>
                <tr className="repolist">
                    <td><a>Example Repo1</a></td>
                </tr>
                <tr className="repolist">
                    <td><a>Example Repo2</a></td>
                </tr>
                <tr className="repolist">
                    <td><a>Example Repo3</a></td>
                </tr>
            </tbody>
        </table>
    )
}


export default RepoList;