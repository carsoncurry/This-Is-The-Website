import React from 'react';
import './ProjectsList.css';

// Semantic
import { Grid } from 'semantic-ui-react';

// Animation
import Fade from 'react-reveal/Fade';

class ProjectsList extends React.Component {
    render() {
        return (
            <Grid>
                <Grid.Column align="center">
                    <Fade bottom>
                        <h2>Projects List</h2>
                        <h4>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat magni molestiae unde laboriosam ea nobis cum amet consectetur animi dolor dolores, saepe et vero excepturi deserunt officiis. Maxime, ipsam vero!
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum fuga officia minus atque quidem fugiat numquam? Quam magnam eveniet repellat neque sequi voluptatibus, quia porro sed doloremque facere facilis error!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corrupti laborum totam doloribus et quas voluptates sequi iste quasi praesentium, magnam voluptate ducimus sed, illum nesciunt sit natus. Ut, laborum!
                        </h4>
                    </Fade>
                </Grid.Column>
            </Grid>
        );
    }
}

export default ProjectsList;
