// Write all the code here

import axios from 'axios';
import burger from '../../assets/burger2.png';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

const CONTACT_API_URL = 'https://testapi.io/api/otakuneko/resource/ibmform';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const emailRegex = /^([a-zA-Z0-9._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;

  const sendEmail = async () => {
    try {
      await axios
        .post(
          CONTACT_API_URL,
          { Name: name, Email: email, Message: message },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )
        .then(() => {
          setStatus('success');
        });
    } catch (err) {
      console.log('error');
      setStatus('error');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length === 0) {
      setStatus('empty');
    } else if (!email.match(emailRegex)) {
      setStatus('invalid');
    } else {
      sendEmail();
      setStatus('');
      setEmail('');
      setMessage('');
      setName('');
    }
  };

  return (
    <section className="contact">
      {status === 'error' && toast.error('Request failed. Please try again')}

      {status === 'empty' && toast.error('Please enter your email.')}

      {status === 'invalid' && toast.error('Invalid email. Please enter a valid email, e.g. sample@mail.com')}

      {status === 'success' && toast.success('Thank you for contacting us! We will reach out to you shortly.')}

      <form onSubmit={handleSubmit}>
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Your Message"
          cols={40}
          rows={10}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button>Send</button>
      </form>

      <div className="formBorder">
        <div>
          <img src={burger} alt="Burger" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
