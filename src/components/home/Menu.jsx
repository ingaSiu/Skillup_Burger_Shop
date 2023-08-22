// Write all the code here

import MenuCard from './MenuCard';
import burger1 from '../../assets/burger1.png';
import burger2 from '../../assets/burger2.png';
import burger3 from '../../assets/burger3.png';

const Menu = () => {
  const addToCartHandler = (itemNum) => {};

  return (
    <section id="menu">
      <h1>OUR MENU</h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={250}
          title={'Burger with cheese'}
          handler={addToCartHandler}
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={400}
          title={'Vegeterian cheese burger'}
          handler={addToCartHandler}
          delay={0.4}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          price={550}
          title={'Cheese burger with crispy fries'}
          handler={addToCartHandler}
          delay={0.8}
        />
      </div>
    </section>
  );
};

export default Menu;
