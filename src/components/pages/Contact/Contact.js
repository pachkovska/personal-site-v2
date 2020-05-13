import React from 'react';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import './Contact.css';
import ContactImage from '../../../images/contact-page-img.jpg';

const Contact = () => {
    return (
        <div className="contact-page">
            <img className="contact-image" src={ContactImage} alt="Contact Me"/>

            <Form className="contact-form">
                <p className="form-title">Drop me a line:</p>
                <FormGroup>
                    <Input type="text" bsSize="md" name="name" id="contactName" placeholder="Your name" />
                </FormGroup>
                <FormGroup>
                    <Input type="email" bsSize="md" name="email" id="contactEmail" placeholder="Your contact email" />
                </FormGroup>
                <FormGroup>
                    <Input type="textarea" bsSize="md" name="text" id="message" placeholder="Message"/>
                </FormGroup>
                <Button>Send</Button>
            </Form>
        </div>
    );
}

// var DOMAIN = 'htto://localhost:3000';
// var mailgun = require('mailgun-js')({ apiKey: "3e51f8d2-9cbf39aa", domain: DOMAIN });
//
// mailgun.post('/routes', {"priority": 0, "description": 'Sample route', "action": 'forward("pachkovsk@gmail.com")', "action": 'stop()'}, function (error, body) {
//     console.log(body);
// });


export default Contact;
