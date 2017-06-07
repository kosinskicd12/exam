import React from 'react';
import ReactDOM from 'react-dom';

const RepoDetails = () => {
    return (
        <div>
            <h3>Username details</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th width="100">Stars</th>
                        <th width="100" class="text-right">Forks</th>
                        <th width="200">Primary Language</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="repodetails">
                        <td>32</td>
                        <td class="text-right">6</td>
                        <td>Javascript</td>
                    </tr>
                    
                </tbody>
            </table>
            </div>
            )
}








export default RepoDetails;