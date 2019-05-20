import React from 'react';
import './ProjectsList.css';

// Semantic
import { Button, Grid, Image, List } from 'semantic-ui-react';

// Animation
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

class ProjectsList extends React.Component {
    render() {
        return (
            <div className="projects-div">
            <Grid centered columns={1}>
                <Grid.Column width={10} textAlign="center">
                    <Fade bottom>
                        <h2>Projects List</h2>
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatem magnam. Reiciendis ipsam quas officiis dolorem, tempore beatae sint. Ipsa nostrum quam porro earum quae ab eius dolorum dignissimos minima.</h4>
                    </Fade>
                </Grid.Column>
            </Grid>
            <Grid columns={3}>
                <Grid.Row>
                    <Grid.Column>
                        <Roll left>
                            <Image className="project-image" verticalAlign="middle" src="../../Images/AmericanSafariSS.png" alt="American Safari" />
                        </Roll>
                    </Grid.Column>
                    <Grid.Column align="center">
                        <Fade>
                            <h2>American Safari</h2>
                            <List relaxed>
                                <List.Header>
                                    <strong>Technologies</strong>
                                </List.Header>
                                <List.Item>
                                    <List.Content>
                                        Item 1
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        Item 2
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        Item 3
                                    </List.Content>
                                </List.Item>
                            </List>
                        </Fade>
                    </Grid.Column>
                    <Grid.Column align="center">
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quae similique asperiores vero, aliquam facilis? Ad id ratione illum, quia quod ducimus, molestias dolor quos, deleniti eum aspernatur voluptate fugit.</h4>
                        <Button secondary><a href="https://carsoncurry.github.io/American-Safari/" target="_blank" rel="noopener noreferrer">Check It Out</a></Button>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column align="center">
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quae similique asperiores vero, aliquam facilis? Ad id ratione illum, quia quod ducimus, molestias dolor quos, deleniti eum aspernatur voluptate fugit.</h4>
                        <Button secondary><a href="https://www.creeltrucking.com/" target="_blank" rel="noopener noreferrer">Check It Out</a></Button>
                    </Grid.Column>
                    <Grid.Column align="center">
                        <Fade>
                            <h2>Creel Trucking, Inc.</h2>
                            <List relaxed>
                                <List.Header>
                                    <strong>Technologies</strong>
                                </List.Header>
                                <List.Item>
                                    <List.Content>
                                        Item 1
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        Item 2
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        Item 3
                                    </List.Content>
                                </List.Item>
                            </List>
                        </Fade>
                    </Grid.Column>
                    <Grid.Column align="right">
                        <Roll right>
                            <Image className="project-image" src="../../Images/CreelTruckingSS.png" alt="Creel Trucking, Inc." />
                        </Roll>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Roll left>
                            <Image className="project-image" src="../../Images/DreamStreamSS.png" alt="DreamStream" />
                        </Roll>
                    </Grid.Column>
                    <Grid.Column align="center">
                        <Fade>
                            <h2>DreamStream</h2>
                            <List relaxed>
                                <List.Header>
                                    <strong>Technologies</strong>
                                </List.Header>
                                <List.Item>
                                    <List.Content>
                                        Item 1
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        Item 2
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        Item 3
                                    </List.Content>
                                </List.Item>
                            </List>
                        </Fade>
                    </Grid.Column>
                    <Grid.Column align="center">
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quae similique asperiores vero, aliquam facilis? Ad id ratione illum, quia quod ducimus, molestias dolor quos, deleniti eum aspernatur voluptate fugit.</h4>
                        <Button secondary><a href="https://fast-hollows-53838.herokuapp.com/" target="_blank" rel="noopener noreferrer">Check It Out</a></Button>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column align="center">
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quae similique asperiores vero, aliquam facilis? Ad id ratione illum, quia quod ducimus, molestias dolor quos, deleniti eum aspernatur voluptate fugit.</h4>
                        <Button secondary><a href="https://fathomless-eyrie-21415.herokuapp.com/" target="_blank" rel="noopener noreferrer">Check It Out</a></Button>
                    </Grid.Column>
                    <Grid.Column align="center">
                        <Fade>
                            <h2>Virtual Elephant</h2>
                            <List relaxed>
                                <List.Header>
                                    <strong>Technologies</strong>
                                </List.Header>
                                <List.Item>
                                    <List.Content>
                                        Item 1
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        Item 2
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content>
                                        Item 3
                                    </List.Content>
                                </List.Item>
                            </List>
                        </Fade>
                    </Grid.Column>
                    <Grid.Column align="right">
                        <Roll right>
                            <Image className="project-image" src="../../Images/VirtualElephantSS.png" alt="Virtual Elephant" />
                        </Roll>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default ProjectsList;
