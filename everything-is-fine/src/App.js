import React, { Component } from 'react';
import './App.css';

// Components
import withSplashScreen from './Components/SplashScreen/withSplashScreen';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
        <h1>Page Image</h1>
        <h1>Introduction</h1>
        <h1>Technical Skills</h1>
        <h1>Blog Posts</h1>
        <h1>Projects List</h1>
        <h1>Project Pupil</h1>
        <h1>Footer</h1>
      </div>
    )
  }
}

export default withSplashScreen(App);
