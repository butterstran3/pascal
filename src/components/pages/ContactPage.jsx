import Contact from '../contact/Contact';
import Form from '../form/Form';
import { useEffect } from 'react';

const ContactPage = () => {
    useEffect(() => {
        document.body.classList.add('contact');
        return () => {
            document.body.classList.remove('contact');
        };
    }, []);

    return (
        <>
            <Contact />
            <Form />
        </>
    )
}

export default ContactPage;