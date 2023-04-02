import React from 'react';
import './form.css';
import { useRef } from 'react';
import emailjs, { send } from 'emailjs-com';

const Form = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_fvc0p4i', 'template_zhdp1bj', form.current, 'F0iz3W8UWvYMr4mjO')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      e.target.reset();
    };

    return (
        <div id='form' className='container contact_container'>
            <div className='form_title'>
                <h1>Get in touch</h1>
            </div>
            <form className='contact_form' ref={form} onSubmit={sendEmail}>
                <input className='name-input' type='text' name='name' placeholder='Your Name'/>
                <input className='email-input' type='text' name='email' placeholder='Your Email'/>
                <textarea name='message' rows='7' placeholder='Your Message'></textarea>
                <button type='submit' className='btn'>Submit</button>                    
            </form>
        </div>
    )
}

export default Form;