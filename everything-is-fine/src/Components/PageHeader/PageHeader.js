import React from 'react';
import './PageHeader.css';

// Semantic Styling
import { Button, Grid, Segment } from 'semantic-ui-react';

// Animations
import GlitchEffect from 'react-glitch-effect';

class PageHeader extends React.Component {
    render() {
        return (
            <Segment className="header-segment">
                <Grid>
                    <Grid.Column align="right">
                        <GlitchEffect onHover={true}>
                            <Button secondary size="small" className="dark-button">Moonlight</Button>
                        </GlitchEffect>
                    </Grid.Column>
                </Grid>
            </Segment>
        );
    }
}

export default PageHeader;
