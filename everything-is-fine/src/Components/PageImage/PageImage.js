import React from 'react';
import './PageImage.css';

// Semantic
import { Grid, Icon, Image } from 'semantic-ui-react';

// Animation
import Fade from 'react-reveal/Fade';

class PageImage extends React.Component {
    render() {
        return(
            <Grid>
                <Grid.Column className="image-column">
                    <Fade bottom>
                        <div className="image-div">
                            <Image src="../../Images/Yellowstone.JPG" fluid alt="That's Me!" className="profile-pic" />
                        </div>
                        <div className="social-icons" align="right">
                            <a href="https://github.com/carsoncurry" target="_blank" rel="noopener noreferrer"><Icon name="github" circular inverted link /></a>
                            <a href="https://www.linkedin.com/in/carson-curry-85824598/" target="_blank" rel="noopener noreferrer"><Icon name="linkedin" circular inverted link /></a>
                            <a href="https://www.instagram.com/carsoncurry52/" target="_blank" rel="noopener noreferrer"><Icon name="instagram" circular inverted link /></a>
                            <a href="https://twitter.com/CWCOriginals" target="_blank" rel="noopener noreferrer"><Icon name="twitter" circular inverted link /></a>
                        </div>
                    </Fade>
                </Grid.Column>
            </Grid>
        )
    }
}

export default PageImage;
