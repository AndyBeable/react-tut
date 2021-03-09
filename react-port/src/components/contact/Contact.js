import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <>
      <div className='wrapper copy'>
        <h3>Contact</h3>
        <h1>Say Hello.</h1>
        <p className='contact__copy'>
          If you need any further information on me, or my work, please get in
          touch below.
        </p>
        <form>
          <fieldset>
            <div>
              <input name='name' type='text' placeholder='Name'></input>
            </div>
            <div>
              <input name='email' type='text' placeholder='Email'></input>
            </div>
            <div>
              <input name='phone' type='text' placeholder='Phone'></input>
            </div>
            <div>
              <textarea
                name='message'
                placeholder='Message'
                rows='10'
                cols='50'
              ></textarea>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}

export default Contact;
