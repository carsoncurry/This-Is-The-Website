import React from 'react';
import './PageIntro.css';

// Semantic
import { Grid } from 'semantic-ui-react';

// Animation
import Fade from 'react-reveal/Fade';

class PageIntro extends React.Component {
    render() {
        return (
            <Grid>
                <Grid.Column align="center">
                    <Fade bottom>
                        <h2>Page Introduction</h2>
                        <h4>
                            Here's the introduction for my portfolio. 
                            Let's be honest, there isn't much here since I've only put this intro on at day two of the build. 
                            Obviously I'll get to it so just bear with me.
                        </h4>
                    </Fade>
                </Grid.Column>
            </Grid>
        );
    }
}

export default PageIntro;
