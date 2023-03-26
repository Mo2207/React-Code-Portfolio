
import React from 'react';
import { useState } from 'react';
import '../contact/contact.css';

const Contact = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = (event) => {
    event.preventDefault();

  }

  return (
    <div className='contact'>
      <form className='contactForm' onSubmit={submitForm}>

        <label>
          Name:
          <input type="text" value={name}/>
        </label>
        <label>
          Email:
          <input type="text" value={email}/>
        </label>
        <label>
          Message:
          <input type="text" value={message}/>
        </label>
        <button className='submitBtn' type='submit'>Submit</button>

      </form>
    </div>
  );
}

export default Contact;