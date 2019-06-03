import React from 'react';
import './PageImage.css';

// Semantic
import { Grid, Header, Icon, Image, Segment } from 'semantic-ui-react';

// Animation
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';

const square = { width: 450, height: 450 };

class PageImage extends React.Component {
    render() {
        return(
            <Grid columns={2} centered>
                <Fade>
                    <Grid.Column className="image-column">
                        <Rotate top left>
                            <div className="image-div">
                                <div className="front-face">
                                    <Image size="large" circular src="../../Images/ProfileSquare.jpg" alt="That's Me!" className="profile-pic" />
                                </div>
                                <div className="back-face">
                                    <Segment circular style={square}>
                                        <Header as='h2' className="rainbow">
                                            A Splash of Color.
                                        </Header>
                                        <Header.Subheader as='h3'>
                                            <br />
                                            That's me, on the other side of this circle, at Yellowstone National Park in 2017. 
                                            I take a lot of inspiration from natural spaces and incorporate their shapes, colors and sounds into digital landscapes. 
                                            It's my goal to start with this mechanical, aesthetically pleasing design and transform it into a living, breathing space full of life as I update and alter it over time. 
                                            <br />
                                            <br />
                                            <Icon name="sync alternate" circular inverted className="flip-icon" />
                                        </Header.Subheader>
                                    </Segment> 
                                </div>
                            </div>
                        </Rotate>
                    </Grid.Column>
                    <Grid.Column className="text-column">
                        <Rotate top right>
                            <Segment circular style={square} className="intro-segment">
                                <Header as='h2'>
                                        CARSON CURRY <br />
                                    <span className='dev-intro'>
                                        developer
                                    </span>
                                    <span className='write-intro'>
                                        writer
                                    </span>
                                </Header>
                                <Header.Subheader as='h3' className='intro-text'>
                                    <span className='dev-intro'>
                                        I am a Kansas City-based full-stack web developer always looking for new projects to test my abilities.
                                        Think of this page as an ever-evolving entity that's updated as I gather new tricks and skills as a developer. 
                                        Feel free to take a look at my past projects and send me a message if you think I'm the type of designer best suited to working on your shiny new website.
                                        <br />
                                        <br />
                                        <Icon name="sync alternate" circular inverted className="flip-icon" />
                                    </span>
                                    <span className='write-intro'>
                                        In addition to web development I am a writer who loves spilling digital ink on whatever weird subject pops into my head. 
                                        I love expressing myself as a writer on writing web content, but also in prose, essays and scripts as well. 
                                        Take a look at my blog, <a href="https://thiswebsiteisfine.com" target="_blank" rel="noopener noreferrer" className="web-link">thiswebsiteisfine</a> for the latest articles I've written and share my stuff if you think it's something people would enjoy!
                                        <br />
                                        <br />
                                        <Icon name="sync alternate" circular inverted className="flip-icon" />
                                    </span>
                                </Header.Subheader>
                            </Segment>
                        </Rotate>
                    </Grid.Column>
                </Fade>
            </Grid>
        )
    }
}

export default PageImage;
