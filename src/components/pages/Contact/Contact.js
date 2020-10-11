import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Button, Form, FormGroup, Input} from 'reactstrap';
import ContactImage from '../../../images/contact-page-img.jpg';

export default function Contact() {
    const formRef = useRef();

    const onFormSend = ev => {
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, ev.target, process.env.REACT_APP_EMAILJS_USER_ID)
            .then(() => {
                formRef.current.reset();
            }, (error) => {
                console.log(error);
            });
    }

    return (
        <div className="contact-page">
            <img className="contact-image" src={ContactImage} alt="Contact Me"/>

            <Form className="contact-form" innerRef={formRef}  onSubmit={onFormSend}>
                <p className="form-title">Drop me a line:</p>

                <FormGroup>
                    <Input type="text" bsSize="md" name="name" id="contactName" placeholder="Your name" />
                </FormGroup>

                <FormGroup>
                    <Input type="email" bsSize="md" name="email" id="contactEmail" placeholder="Your contact email" />
                </FormGroup>

                <FormGroup>
                    <Input type="textarea" bsSize="md" name="message" id="message" placeholder="Message" />
                </FormGroup>

                <Button type="submit">Send</Button>
            </Form>

        </div>
    );
}

