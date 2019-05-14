import React from 'react';
import './BlogPosts.css';

// Semantic
import { Button, Grid, Popup } from 'semantic-ui-react';

// Animation
import Fade from 'react-reveal/Fade';

class BlogPosts extends React.Component {
    render() {
        return(
            <Grid>
                <Grid.Column align="center">
                    <Fade bottom>
                        <h2>Blog Posts</h2>
                        <div>
                            <Popup 
                                content='Blog Posts Coming Soon!'
                                position='right center'
                                trigger={ <Button secondary>Blog Posts</Button> } 
                            />
                        </div>
                    </Fade>
                </Grid.Column>
            </Grid>
        );
    }
}

export default BlogPosts;
