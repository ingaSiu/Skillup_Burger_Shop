// Write all the code here

import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

import React from 'react';

const Footer = () => {
  const getYear = () => new Date().getFullYear();
  return (
    <footer>
      <div>
        <h2>The best burger shop in the world!</h2>
        <p>We strive for quality and best expierences</p>
        <br />
        <em>Feedback is taken seriously here</em>

        <strong> &#9400; All rights reserved by @burgershop {getYear()}</strong>
      </div>

      <aside>
        <h3>Follow us</h3>
        <div>
          <a href="https://youtube.com/xyz">
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com/xyz">
            <AiFillInstagram />
          </a>
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
