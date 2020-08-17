import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import './Contact.css';
import ContactImage from '../../../images/contact-page-img.jpg';

const Contact = () => {
    const [messageBody, setMessageBody] = useState({});

    const onFormChange = ev => {
        ev.preventDefault();
        setMessageBody({...messageBody, [ev.target.name]: ev.target.value});
    }

    const templateParams = {
        "name": messageBody.name,
        "from_email": messageBody.email,
        "message_html": messageBody.message,
    }

    function sendEmail() {
        emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, templateParams, process.env.REACT_APP_EMAILJS_USER_ID)
            .then((result) => {

                setMessageBody({});
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div className="contact-page">
            <img className="contact-image" src={ContactImage} alt="Contact Me"/>

            <Form className="contact-form" onSubmit={sendEmail}>
                <p className="form-title">Drop me a line:</p>

                <FormGroup>
                    <Input type="text" bsSize="md" name="name" id="contactName" placeholder="Your name" onChange={onFormChange} value={messageBody.name || ''} />
                </FormGroup>

                <FormGroup>
                    <Input type="email" bsSize="md" name="email" id="contactEmail" placeholder="Your contact email" onChange={onFormChange} value={messageBody.email || ''} />
                </FormGroup>

                <FormGroup>
                    <Input type="textarea" bsSize="md" name="message" id="message" placeholder="Message" onChange={onFormChange} value={messageBody.message || ''} />
                </FormGroup>

                <Button type="submit">Send</Button>
            </Form>

        </div>
    );
}

export default Contact;
