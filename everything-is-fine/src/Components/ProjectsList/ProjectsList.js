import React from 'react';
import './ProjectsList.css';

// Semantic
import { Button, Grid, Icon, Image, List } from 'semantic-ui-react';

// Animation
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';

class ProjectsList extends React.Component {
    render() {
        return (
            <div className="projects-div">
            <Grid centered columns={1}>
                <Grid.Column width={8} textAlign="center">
                    <Bounce bottom>
                        <h2>My Projects</h2>
                        <Icon name="arrow down" circular inverted size="large" className="down-arrow" />
                        <br />
                    </Bounce>
                </Grid.Column>
            </Grid>
            <Grid columns={2}>
                <Grid.Row className="project-row">
                    <Grid.Column>
                        <Roll left>
                            <div className="project-block">
                                <Image className="project-image" verticalAlign="middle" src="../../Images/AmericanSafariSS.png" alt="American Safari" id="project-image" />
                                <Image className="project-image" verticalAlign="middle" src="../../Images/AmericanSafari.gif" alt="American Safari" id="project-gif" />
                            </div>
                        </Roll>
                    </Grid.Column>
                    <Grid.Column align="center">
                        <Fade>
                            <h2>American Safari</h2>
                            <h4 className="project-description">
                                App designed to allow park visitors to track animal habitat patterns throughout the year while planning out multiple trips.
                            </h4>
                            <List animated verticalAlign="middle">
                                <List.Item>
                                    <List.Content className="project-list">
                                        <List.Header>
                                            <h5>
                                                Languages / Tools
                                            </h5>
                                        </List.Header>
                                        <List.Description>
                                            <p>
                                                HTML, CSS (Bootstrap, daterangepicker.css), JavaScript (Moment.js, Leaflet.js, jQuery), iNaturalist API, Google Places API, CORS Anywhere API, Firebase Database
                                            </p>
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content className="project-list">
                                        <List.Header>
                                            <h5>
                                                Project Role
                                            </h5>
                                        </List.Header>
                                        <List.Description>
                                            <p>
                                                User Interface (HTML, CSS, (Bootstrap, daterangepicker.css))
                                            </p>
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                            </List>
                            <Button.Group>
                                <Button secondary><a href="https://carsoncurry.github.io/American-Safari/" target="_blank" rel="noopener noreferrer">The Site</a></Button>
                                <Button.Or />
                                <Button secondary><a href="https://github.com/carsoncurry/American-Safari" target="_blank" rel="noopener noreferrer">The Repo</a></Button>
                            </Button.Group>
                        </Fade>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row className="project-row">
                    <Grid.Column align="center">
                        <Fade>
                            <h2>Virtual Elephant</h2>
                            <h4 className="project-description">
                                App designed to allow multiple users to participate in a gift giving party, give each other gifts, comment on a dynamic chat and more. 
                            </h4>
                            <List animated verticalAlign="middle">
                                <List.Item>
                                    <List.Content className="project-list">
                                        <List.Header>
                                            <h5>
                                                Languages / Tools
                                            </h5>
                                        </List.Header>
                                        <List.Description>
                                            <p>
                                                HTML, CSS (Bootstrap), JavaScript, Node.js, MySQL, Sequelize, Express, Express-Handlebars, SendGrid API, Socket.io, Heroku (deployment), GitHub (project management)
                                            </p>
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content className="project-list">
                                        <List.Header>
                                            <h5>
                                                Project Role
                                            </h5>
                                        </List.Header>
                                        <List.Description>
                                            <p>
                                                User Interface (HTML, CSS (Bootstrap), chat functionality (Socket.io))
                                            </p>
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                            </List>
                            <Button.Group>
                                <Button secondary><a href="https://fathomless-eyrie-21415.herokuapp.com/" target="_blank" rel="noopener noreferrer">The Site</a></Button>
                                <Button.Or />
                                <Button secondary><a href="https://github.com/carsoncurry/Virtual-Elephant" target="_blank" rel="noopener noreferrer">The Repo</a></Button>
                            </Button.Group>
                        </Fade>
                    </Grid.Column>
                    <Grid.Column align="right">
                        <Roll right>
                            <div className="project-block">
                                <Image className="project-image" src="../../Images/VirtualElephantSS.png" alt="Virtual Elephant" id="project-image" />
                                <Image className="project-image" src="../../Images/VirtualElephant.gif" alt="Virtual Elephant" id="project-gif" />
                            </div>
                        </Roll>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row className="project-row">
                    <Grid.Column>
                        <Roll left>
                            <div className="project-block">
                                <Image className="project-image" src="../../Images/DreamStreamSS.png" alt="DreamStream" id="project-image" />
                                <Image className="project-image" src="../../Images/DreamStream.gif" alt="DreamStream" id="project-gif" />
                            </div>
                        </Roll>
                    </Grid.Column>
                    <Grid.Column align="center">
                        <Fade>
                            <h2>DreamStream</h2>
                            <h4 className="project-description">
                                App designed to allow users to create profiles that allow them to search for various films and television series across multiple streaming services, save their searches and create a monthly budget based on the number of services to which they are subscribed to cut costs. 
                            </h4>
                            <List animated verticalAlign="middle">
                                <List.Item>
                                    <List.Content className="project-list">
                                        <List.Header>
                                            <h5>
                                                Languages / Tools
                                            </h5>
                                        </List.Header>
                                        <List.Description>
                                            <p>
                                                HTML, CSS (React Materialize), JavaScript, Node.js, Express, Mongoose, React, React-Router, Auth0, Heroku (deployment), GitHub (project management)
                                            </p>
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Content className="project-list">
                                        <List.Header>
                                            <h5>
                                                Project Role
                                            </h5>
                                        </List.Header>
                                        <List.Description>
                                            <p>
                                                Page structure, user interface and navigation (React, React Materialize), user authentication (Auth0), user metadata storage (Mongoose)
                                            </p>
                                        </List.Description>
                                    </List.Content>
                                </List.Item>
                            </List>
                            <Button.Group>
                                <Button secondary><a href="https://fast-hollows-53838.herokuapp.com/" target="_blank" rel="noopener noreferrer">The Site</a></Button>
                                <Button.Or />
                                <Button secondary><a href="https://github.com/carsoncurry/Dream-Stream" target="_blank" rel="noopener noreferrer">The Repo</a></Button>
                            </Button.Group>
                        </Fade>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row className="project-row">
                    <Grid.Column align="center">
                        <Fade>
                            <h2>Creel Trucking, Inc.</h2>
                            <h4 className="project-description">
                                Professional website built for Select Fleet Transportation (previously Creel Trucking, Inc.) using Wix. Though it's not a full-stack design it was the first website I built professionally before obtaining my full-stack certification. 
                            </h4>
                            <Button secondary><a href="https://www.creeltrucking.com/" target="_blank" rel="noopener noreferrer">See The Site</a></Button>
                        </Fade>
                    </Grid.Column>
                    <Grid.Column align="right">
                        <Roll right>
                            <div className="project-block">
                                <Image className="project-image" src="../../Images/CreelTruckingSS.png" alt="Creel Trucking, Inc." id="project-image" />
                                <Image className="project-image" src="../../Images/CreelTrucking.gif" alt="Creel Tucking, Inc." id="project-gif" />
                            </div>
                        </Roll>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </div>
        );
    }
}

export default ProjectsList;
