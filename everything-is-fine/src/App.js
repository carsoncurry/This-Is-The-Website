import React from 'react';
import './App.css';

// Components
import PageFooter from './Components/PageFooter/PageFooter';
import PageImage from './Components/PageImage/PageImage';
import ProjectsList from './Components/ProjectsList/ProjectsList';
import SplashScreen from './Components/SplashScreen/SplashScreen';
import TechnicalSkills from './Components/TechnicalSkills/TechnicalSkills';

// Semantic
import { Button, Form, Grid, Icon, Modal, Popup } from 'semantic-ui-react';

// Theming
import styled from '@emotion/styled';
import { useTheme } from './ThemeContext';

// Animations
import Fade from 'react-reveal/Fade';
import Flash from 'react-reveal/Flash';

const Wrapper = styled('div')`
  background: ${ props => props.theme.background};
  width: 100%;
  height: 100%;
  h1, h2, h4, h5, h6, p {
    color: ${props => props.theme.body};
  }
`;

const App = () => {
  const themeState = useTheme();
    return (
      <Wrapper>
        <Flash>
          <div className='left-icons'>
            <div className='dark-button side-icon' onClick={() => themeState.toggle()}>
              {themeState.dark ? <Icon inverted circular size="large" name="moon" /> : <Icon inverted circular size="large" name="sun" />}
            </div>
          </div>
          <div className='side-icons'>
            <div className='side-icon'>
              <Popup
                content='thiswebsiteisfine'
                position='left center'
                trigger={
                  <a href="https://thiswebsiteisfine.com" target="_blank" rel="noopener noreferrer"><Icon name="keyboard" size="large" circular inverted /></a>
                }
              />
            </div>
            <div className='side-icon'>
              <Modal
                trigger={
                  <Icon inverted circular size="large" name="envelope outline" className="modal-button" />
                }
              >
                <Modal.Content align="center">
                <Grid centered columns={1}>
                    <Grid.Column width={8}>
                        <Fade bottom>
                            <Grid.Row align="center">
                                <h2>Help Me Help You (Help Me)</h2>
                                <h4>
                                    Whether you're looking to update your current website, 
                                    want to start something new from scratch
                                    or even have some ideas about how I could improve this very website,
                                    send me a message and I'll get back to you!
                                </h4>
                            </Grid.Row>
                            <Grid.Row align="left">
                                <Form>
                                    <Form.Field>
                                        <input placeholder='Your Name' />
                                    </Form.Field>
                                    <Form.Field>
                                        <input placeholder='Your Email' />
                                    </Form.Field>
                                    <Form.TextArea placeholder='Tell me about your project...' />
                                    <Button secondary type='submit'>Submit</Button>
                                </Form>
                            </Grid.Row>
                        </Fade>
                    </Grid.Column>
                </Grid>
                </Modal.Content>
              </Modal>
            </div>
            <div className='side-icon'>
              <a href="https://github.com/carsoncurry" target="_blank" rel="noopener noreferrer"><Icon name="github" size="large" circular inverted /></a>
            </div>
            <div className='side-icon'>
              <a href="https://www.linkedin.com/in/carson-curry-85824598/" target="_blank" rel="noopener noreferrer"><Icon name="linkedin" size="large" circular inverted /></a>
            </div>
            <div className='side-icon'>
              <a href="https://www.instagram.com/carsoncurry52/" target="_blank" rel="noopener noreferrer"><Icon name="instagram" size="large" circular inverted /></a>
            </div>
            <div className='side-icon'>
              <a href="https://twitter.com/CWCOriginals" target="_blank" rel="noopener noreferrer"><Icon name="twitter" size="large" circular inverted /></a>
            </div>
          </div>
        </Flash>
        <PageImage />
        <TechnicalSkills />
        <ProjectsList />
        <PageFooter />
      </Wrapper>
    )
}

export default SplashScreen(App);
