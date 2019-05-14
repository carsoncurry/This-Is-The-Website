import React from 'react';
import './PageFooter.css';

// Semantic
import { Button, Embed, Grid, Modal, Segment } from 'semantic-ui-react';

class PageFooter extends React.Component {
    render() {
        return (
            <Segment className="footer-section">
                <Grid>
                    <Grid.Column align="center">
                        <h4>
                            © Carson Curry 2019
                        </h4>
                        <Modal trigger={<Button size="small" secondary>Post-Credits Scene</Button>}>
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
