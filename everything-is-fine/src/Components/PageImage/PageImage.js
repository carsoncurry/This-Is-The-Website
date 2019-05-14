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
                <Grid.Column>
                    <Fade bottom>
                        <div className="image-div">
                            <Image src="../../Images/Yellowstone.JPG" fluid alt="That's Me!" className="profile-pic" />
                        </div>
                        <div className="social-icons" align="right">
                            <Icon name="github" circular inverted />
                            <Icon name="linkedin" circular inverted />
                            <Icon name="instagram" circular inverted />
                            <Icon name="twitter" circular inverted />
                        </div>
                    </Fade>
                </Grid.Column>
            </Grid>
        )
    }
}

export default PageImage;
