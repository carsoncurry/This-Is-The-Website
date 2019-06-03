import React from 'react';
import './PageFooter.css';

// Semantic Styling
import { Grid, Embed, Icon, Modal, Segment } from 'semantic-ui-react';

class PageFooter extends React.Component {
    render() {
        return (
            <Segment className="footer-section">
                <Grid columns={3}>
                    <Grid.Column align="left">
                        <strong className="copyright">© Carson Curry 2019</strong>
                    </Grid.Column>
                    <Grid.Column align="middle">
                        <strong><a href="https://thiswebsiteisfine.com" target="_blank" rel="noopener noreferrer" className="web-link">thiswebsiteisfine</a></strong>
                    </Grid.Column>
                    <Grid.Column align="right">
                        <Modal 
                            trigger={
                                <Icon name="play circle" id="post-credits" />
                            }
                        >
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
