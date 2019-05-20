import React, { Component } from 'react';
import './App.css';

// Components
import BlogPosts from './Components/BlogPosts/BlogPosts';
import PageFooter from './Components/PageFooter/PageFooter';
import PageHeader from './Components/PageHeader/PageHeader';
import PageImage from './Components/PageImage/PageImage';
import PageIntro from './Components/PageIntro/PageIntro';
import Contact from './Components/Contact/Contact';
import ProjectsList from './Components/ProjectsList/ProjectsList';
import SplashScreen from './Components/SplashScreen/SplashScreen';
import TechnicalSkills from './Components/TechnicalSkills/TechnicalSkills';

class App extends Component {
  render() {
    return (
      <div>
        <PageHeader />
        <PageImage />
        <PageIntro />
        <TechnicalSkills />
        <BlogPosts />
        <ProjectsList />
        <Contact />
        <PageFooter />
      </div>
    )
  }
}

export default SplashScreen(App);
