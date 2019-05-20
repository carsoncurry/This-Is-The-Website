import React from 'react';
import './Contact.css';

// Semantic
import { Button, Form, Grid } from 'semantic-ui-react';

// Animation
import Fade from 'react-reveal/Fade';

class Contact extends React.Component {
    render() {
        return (
            <Grid columns={2}>
                <Grid.Column>
                    <h2>Help Me Help You (Help Me)</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dicta nostrum, reiciendis voluptatem tenetur deserunt, magnam maxime nihil harum impedit laboriosam provident nobis earum fugit temporibus quisquam maiores, ea veritatis.
                </Grid.Column>
                <Grid.Column width={6}>
                    <Fade bottom>
                        <h2>Contact</h2>
                        <Form>
                            <Form.Field>
                                <label>Your Name</label>
                                <input placeholder='Your Name' />
                            </Form.Field>
                            <Form.Field>
                                <label>Your Email</label>
                                <input placeholder='Your Email' />
                            </Form.Field>
                            <Form.TextArea label='Your Project' placeholder='Tell me about your project...' />
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Fade>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Contact;
