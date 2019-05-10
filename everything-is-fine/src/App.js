import React, { Component } from 'react';

// Components
import withSplashScreen from './Components/SplashScreen/withSplashScreen';

class App extends Component {
  render() {
    return (
      <div>
        <h1>
          This is the website.
        </h1>
        {/* Header */}
        {/* Author Image */}
        {/* Introduction */}
        {/* Technical Skills */}
        {/* Blog Posts */}
        {/* Projects List */}
        {/* Project Pupil */}
        {/* Footer */}
      </div>
    )
  }
}

export default withSplashScreen(App);
