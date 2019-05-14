import React from 'react';
import './TechnicalSkills.css';

// Semantic
import { Grid, Icon } from 'semantic-ui-react';

// Animation
import Fade from 'react-reveal/Fade';

class TechnicalSkills extends React.Component {
    render() {
        return (
            <Grid>
                <Grid.Column textAlign="center">
                    <Fade bottom>
                        <div>
                            <h2>Technical Skills</h2>
                            <h4>Here's the list of technical skills I have. There's gonna be more. Come on, dude.</h4>
                            <Icon name="css3" circular inverted size="large" />
                            <Icon name="github" circular inverted size="large" />
                            <Icon name="html5" circular inverted size="large" />
                            <Icon name="node" circular inverted size="large" />
                            <Icon name="npm" circular inverted size="large" />
                            <Icon name="react" circular inverted size="large" />
                            <Icon name="wordpress" circular inverted size="large" />
                        </div>
                    </Fade>
                </Grid.Column>
            </Grid>
        )
    }
}

export default TechnicalSkills;
