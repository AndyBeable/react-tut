import React from 'react';
import './Footer.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Footer() {
  return (
    <>
      <IconContext.Provider
        value={{ color: '#fff', size: '2.3rem', className: 'social__icons' }}
      >
        <div className='footer'>
          <div className='footer__container'>
            <div className='social__container'>
              <a href='https://github.com' target='_blank'>
                <FaGithub />
              </a>
              <a
                href='https://www.linkedin.com/in/andy-beable/'
                target='_blank'
              >
                <FaLinkedin />
              </a>
            </div>
            <div className='email'>
              <a href='mailto:andy.beable@gmail.com'>andy.beable@gmail.com</a>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Footer;
