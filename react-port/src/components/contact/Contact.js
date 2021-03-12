import React from 'react';
import { Button } from '../button/Button';
import './Contact.css';

function Contact({ buttonStyle, buttonLabel }) {
  return (
    <>
      <section className='wrapper copy'>
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
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--medium'
              buttonColor='primary'
            >
              Submit
            </Button>
          </fieldset>
        </form>
      </section>
    </>
  );
}

export default Contact;
