// Write all the code here

import Popup from 'reactjs-popup';
import burger from '../../assets/burger2.png';

const Contact = () => {
  return (
    <section className="contact">
      <form>
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Your Email" required />

        <textarea placeholder="Your Message" cols={40} rows={10}></textarea>

        <Popup trigger={<button type="submit">Send</button>}>
          <div className="popupText">Thank you for contacting us! We will reach out to you shortly.</div>
        </Popup>
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
