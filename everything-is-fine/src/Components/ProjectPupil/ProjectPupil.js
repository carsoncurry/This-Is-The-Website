import React from 'react';
import './ProjectPupil.css';

// Semantic
import { Grid } from 'semantic-ui-react';

// Animation
import Fade from 'react-reveal/Fade';

class ProjectPupil extends React.Component {
    render() {
        return (
            <Grid>
                <Grid.Column align="center">
                    <Fade bottom>
                        <h2>Project Pupil</h2>
                        <h4>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem pariatur reprehenderit odit suscipit, eveniet saepe adipisci, quam dignissimos maxime veritatis excepturi! Minus similique voluptate explicabo saepe voluptatem esse amet commodi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolores distinctio consectetur quis nisi porro ullam laborum fuga. Nobis corporis delectus ipsum sed dicta provident error pariatur illum quae vero?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae molestiae fuga nisi fugit voluptas libero excepturi quam corrupti enim inventore, eligendi expedita qui consequuntur, illo eaque ducimus maiores, ratione suscipit!
                        </h4>
                    </Fade>
                </Grid.Column>
            </Grid>
        );
    }
}

export default ProjectPupil;
