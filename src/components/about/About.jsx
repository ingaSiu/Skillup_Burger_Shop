// Write all the code here

import { Link } from 'react-router-dom';
import { RiFindReplaceLine } from 'react-icons/ri';
import me from '../../assets/skj.jpg';

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About us</h1>

        <article>
          <h4>Burger shop</h4>
          <p>Our Burger shop will give you the best taste expierences in the world!</p>
          <p>We care about quality of our ingredients, so browse around and choose a PERFECT burger for your meal!</p>
          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>

        <div>
          <h2>About the founder of Burger shop</h2>

          <article>
            <div>
              <img src={me} alt=" Owner" />
              <h3>Nelson</h3>
            </div>
            <p>I am Nelson, the owner of Burger shop. Affilated with good taste.</p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
