import React from 'react';
import { useState } from 'react';
import './questions.css';

const Questions = ({faq, index, toggleFAQ}) => {
    return (
        <div className={"faq " + (faq.open ? 'open' : '')} id='faqs' key={index} onClick={() => toggleFAQ(index)}>
            <div className='faq_question'>
                {faq.question}
            </div>
            <div className='faq_answer'>
                {faq.answer}
            </div>
        </div>
    )
}

export default Questions;