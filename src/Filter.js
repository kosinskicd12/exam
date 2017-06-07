import React from 'react';
import ReactDOM from 'react-dom';

const Filter = () => {
    return (
        <div className="filter">
            <h3>Usernames Repositories</h3>
            <p>Filter repos by primary language</p>
            <div className="row">
                <div class="large-12 columns">
                    <label>Select Box</label>
                    <select>
                        <option value="husker">
                            All
                </option>
                        <option value="starbuck">
                            Javascript
                </option>
                        <option value="hotdog">
                            HTML
                </option>
                        <option value="apollo">
                            Ruby
                </option>
                    </select>
                </div>
            </div>
        </div>
    )
}


export default Filter;