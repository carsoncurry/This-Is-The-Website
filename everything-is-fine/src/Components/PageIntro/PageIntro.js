import React from 'react';
import './PageIntro.css';

// Semantic
import { Grid } from 'semantic-ui-react';

// Animation
import Fade from 'react-reveal/Fade';

class PageIntro extends React.Component {
    render() {
        return (
            <Grid centered columns={1}>
                <Grid.Column width={10} textAlign="center">
                    <Fade bottom>
                        <h4>
                            Welcome to the professional development portfolio of Carson Curry, that devil-may-care fellow pictured above. 
                            After five years of working in content writing, graphic design and digital marketing I have decided to make the plunge and expand my skills as a professional web developer. 
                            Having created and managed several websites during my career I sought to develop my skills as a full-stack designer by earning a certification from the University of Kansas. 
                            I'm always looking to evolve my skills, which has led me to create this website as a living canvas upon which I can display some of my professional and personal projects and test any new technologies and techniques I come across in my web-surfing.
                            Feel free to take a look at my projects, blog articles posted on my WordPress website and send me a message if you find yourself in need of a developer. 
                            As you can see from the picture, I'm always at my desk looking for a new project to flex my coding muscles. 
                        </h4>
                    </Fade>
                </Grid.Column>
            </Grid>
        );
    }
}

export default PageIntro;
