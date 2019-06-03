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
                            <h2>My Skills</h2>
                            <h4>
                                I've picked up a few tricks that can be seen on this and other sites. 
                                Web developers are always learning, so the more I learn the more icons you'll see on this page. 
                            </h4>
                            <Icon name="html5" circular inverted size="large" className="skill-icon" />
                            <Icon name="css3" circular inverted size="large" className="skill-icon" />
                            <Icon name="js square" circular inverted size="large" className="skill-icon" />
                            <Icon name="node" circular inverted size="large" className="skill-icon" />
                            <Icon name="npm" circular inverted size="large" className="skill-icon" />
                            <Icon name="react" circular inverted size="large" className="skill-icon" />
                            <Icon name="vuejs" circular inverted size="large" className="skill-icon" />
                            <Icon name="wordpress" circular inverted size="large" className="skill-icon" />
                            <Icon name="git" circular inverted size="large" className="skill-icon" />
                        </div>
                    </Fade>
                </Grid.Column>
            </Grid>
        )
    }
}

export default TechnicalSkills;
