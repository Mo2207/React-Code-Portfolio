
import React from 'react';
import '../contact/contact.css';

const Contact = (props) => {
  return (
    <div className='contact'>
      <div className='desc'>
        If you have any questions or would like to reach out, I am available via cellphone or email.
      </div>
      <div className='info'>
        <p>(506)-663-5103</p>
        <a className='email' href="mailto:gabemorris1042@gmail.com">Email Me</a>
      </div>
      
    </div>
  );
}

export default Contact;