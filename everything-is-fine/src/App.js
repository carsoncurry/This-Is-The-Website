import React, { Component } from 'react';
import './App.css';

// Components
import BlogPosts from './Components/BlogPosts/BlogPosts';
import PageFooter from './Components/PageFooter/PageFooter';
import PageHeader from './Components/PageHeader/PageHeader';
import PageImage from './Components/PageImage/PageImage';
import PageIntro from './Components/PageIntro/PageIntro';
import ProjectPupil from './Components/ProjectPupil/ProjectPupil';
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
        <ProjectPupil />
        <PageFooter />
      </div>
    )
  }
}

export default SplashScreen(App);
