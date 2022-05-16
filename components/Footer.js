import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <p>All right reserved &copy; Mostafa Abbas</p>
      <div>
        <a href="https://github.com/mostafaabbas98" target="_blank">
          <AiFillGithub size="1.5rem" />
        </a>
        <a href="https://www.linkedin.com/in/mostafa-abbas98/" target="_blank">
          <AiFillLinkedin size="1.5rem" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
