import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Form from './Form.js';
import RepoList from './RepoList.js';
import RepoDetails from './RepoDetails.js';
import Filter from './Filter.js';
import axios from 'axios';
import { BrowserRouter as Router, Route, Redirect, } from 'react-router-dom'

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      userNotFound: "",
      stars: [],
      forks: [],
      favoriteLanguage: []
    }
  }
  getStateFromForm = (username) => {
    axios.get(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        if (response.data) {
          this.setState({
            repos: response.data,
            userNotFound: "",
            
          })
        } else {
          this.setState({
            userNotFound: 'Unknown Username!'
          })
        }
      })
      .catch((err) => {
        this.setState({
          userNotFound: 'There was an error processing this request'
        })
      })
  }
  handleUserClick = (user) => {

        
    
  }
  render() {
    return (
      <div className="App">
        <h1> Github viewer </h1>
        <button>Home</button>
        <Form passStateToApp={this.getStateFromForm} error={this.state.userNotFound}/>
        <Filter />
        <RepoList repos={this.state.repos} onClick={this.handleUserClick}/>
        <RepoDetails />
      </div>
    );
  }

}

export default App;
