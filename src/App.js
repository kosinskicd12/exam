import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Form from './Form.js';
import RepoList from './RepoList.js';
import RepoDetails from './RepoDetails.js';
import Filter from './Filter.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Github viewer </h1>
        <button>Home</button>
        <Form />
        <Filter />
        <RepoList />
        <RepoDetails />
      </div>
    );
  }
}

export default App;
