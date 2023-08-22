// Write all the code here

import Founder from './Founder';
import Menu from './Menu';

const Home = () => {
  return (
    <>
      <section className="home">
        <div>
          <h1>BURGER SHOP</h1>
          <p>Give yourself a tasty burger</p>
        </div>

        <a href="#menu">Explore Menu</a>
      </section>
      <Menu />
      <Founder />
    </>
  );
};
export default Home;
