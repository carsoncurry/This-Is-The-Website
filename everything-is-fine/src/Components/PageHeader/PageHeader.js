import React from 'react';
import './PageHeader.css';

import { Button, Grid } from 'semantic-ui-react';

class PageHeader extends React.Component {
    render() {
        return (
            <div>
                <Grid>
                    <Grid.Column align="right">
                        <Button secondary size="small" className="dark-button">Moonlight</Button>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default PageHeader;
