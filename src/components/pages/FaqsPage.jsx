import Faqs from '../faqs/Faqs';
import Questions from '../questions/Questions';
import { useEffect, useState } from 'react';

const FaqsPage = () => {
    useEffect(() => {
        document.body.classList.add('faqs');
        return () => {
            document.body.classList.remove('faqs');
        };
    }, []);

    const [faqs, setFaqs] = useState([
        {
            question: "How cute is Jackson Zhang?",
            answer: "11/10",
            open: false
        },
        {
            question: "How do I get rich?",
            answer: "By purchasing Pascal Research products.",
            open: false
        },
        {
            question: "Who is the most beautiful person in the world?",
            answer: "You... little cutie.",
            open: false
        },
        {
            question: "Do you want to play Valorant?",
            answer: "Yes",
            open: false
        }
    ]);

    const toggleFAQ = index => {
        setFaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }
            return faq;
        }))
    }

    return (
        <>
            <Faqs />
            <div className='faqs'>
                {faqs.map((faq, index) => (
                    <Questions faq={faq} index={index} toggleFAQ={toggleFAQ}/>
                ))}
            </div>
        </>
    )
}

export default FaqsPage;