import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import ContactImage from '../../../images/contact-page-img.jpg';

export default function Contact() {

    const formRef = useRef();

    const onFormSend = ev => {
        ev.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,
                         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                         ev.target,
                         process.env.REACT_APP_EMAILJS_USER_ID)
            .then(() => {
                formRef.current.reset();
            }, (error) => {
                console.log(error);
            });
    }

    return (
        <div className="contact-page grid-left">
            <img className="contact-image" src={ContactImage} alt="Contact Me"/>

            <Form className="contact-form" innerRef={formRef}  onSubmit={onFormSend}>
                <p className="form-title">Drop me a line:</p>

                <FormGroup className="contact-form--item">
                    <Input type="text" bsSize="md" name="name" placeholder="Your name" />
                </FormGroup>

                <FormGroup className="contact-form--item">
                    <Input type="email" bsSize="md" name="email" placeholder="Your contact email" />
                </FormGroup>

                <FormGroup className="contact-form--item">
                    <Input type="textarea" bsSize="md" name="message" id="message" placeholder="Message" />
                </FormGroup>

                <Button className="btn-send" type="submit">Send</Button>
            </Form>

        </div>
    );
}

