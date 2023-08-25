// Write all the code here

import MenuCard from './MenuCard';
import burger1 from '../../assets/burger1.png';
import burger2 from '../../assets/burger2.png';
import burger3 from '../../assets/burger3.png';

const Menu = () => {
  const addToCartHandler = (itemNum) => {};

  const menuData = [
    {
      itemNum: 1,
      burgerSrc: burger1,
      price: 250,
      title: 'Burger with cheese',
      handler: addToCartHandler,
      delay: 0.1,
    },
    {
      itemNum: 2,
      burgerSrc: burger2,
      price: 400,
      title: 'Vegeterian cheese burger',
      handler: addToCartHandler,
      delay: 0.4,
    },
    {
      itemNum: 3,
      burgerSrc: burger3,
      price: 550,
      title: 'Cheese burger with crispy fries',
      handler: addToCartHandler,
      delay: 0.8,
    },
  ];
  return (
    <section id="menu">
      <h1>OUR MENU</h1>
      <div>
        {menuData.map((item) => (
          <MenuCard
            itemNum={item.itemNum}
            burgerSrc={item.burgerSrc}
            price={item.price}
            title={item.title}
            handler={item.handler}
            delay={item.delay}
          />
        ))}
      </div>
    </section>
  );
};

export default Menu;
