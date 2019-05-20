import React from 'react';
import './PageFooter.css';

// Semantic Styling
import { Button, Grid, Embed, Icon, Modal, Segment } from 'semantic-ui-react';

// Animations
import GlitchEffect from 'react-glitch-effect';

class PageFooter extends React.Component {
    render() {
        return (
            <Segment className="footer-section">
                <Grid columns={2}>
                    <Grid.Column>
                        <strong className="copyright">© Carson Curry 2019</strong>
                        <a href="https://github.com/carsoncurry" target="_blank" rel="noopener noreferrer"><Icon name="github" circular inverted link /></a>
                        <a href="https://www.linkedin.com/in/carson-curry-85824598/" target="_blank" rel="noopener noreferrer"><Icon name="linkedin" circular inverted link /></a>
                        <a href="https://www.instagram.com/carsoncurry52/" target="_blank" rel="noopener noreferrer"><Icon name="instagram" circular inverted link /></a>
                        <a href="https://twitter.com/CWCOriginals" target="_blank" rel="noopener noreferrer"><Icon name="twitter" circular inverted link /></a>
                    </Grid.Column>
                    <Grid.Column align="right">
                        <Modal 
                            trigger={
                                <GlitchEffect onHover={true}>
                                    <Button size="small" secondary>Post-Credits Scene</Button>
                                </GlitchEffect>
                            }>
                            <Modal.Content align="center">
                                <Embed 
                                    id="QRJ38y4Jn6k?start=6" 
                                    source="youtube"
                                />
                            </Modal.Content>
                        </Modal>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}

export default PageFooter;
