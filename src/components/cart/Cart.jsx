import { Link } from 'react-router-dom';
import React from 'react';
import burger1 from '../../assets/burger1.png';
import burger2 from '../../assets/burger2.png';
import burger3 from '../../assets/burger2.png';
import { useState } from 'react';

const items = [
  { title: 'Cheese Burger', img: burger1, price: 250 },
  { title: 'Veg Cheese Burger', img: burger2, price: 400 },
  { title: 'Cheese Burger with crispy fries', img: burger3, price: 550 },
];

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input value={value} readOnly />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const [itemCounts, setItemCounts] = useState([0, 0, 0]);

  const increment = (index) => {
    const newCounts = [...itemCounts];
    newCounts[index]++;
    setItemCounts(newCounts);
  };

  const decrement = (index) => {
    const newCounts = [...itemCounts];
    if (newCounts[index] > 0) {
      newCounts[index]--;
      setItemCounts(newCounts);
    }
  };

  const totalPrice = itemCounts.reduce((total, count, index) => {
    return total + count * items[index].price;
  }, 0);

  return (
    <section className="cart">
      <main>
        {items.map((item, index) => (
          <CartItem
            key={index}
            title={item.title}
            img={item.img}
            value={itemCounts[index]}
            increment={() => increment(index)}
            decrement={() => decrement(index)}
          />
        ))}
        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{totalPrice}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{totalPrice * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>₹{totalPrice + totalPrice * 0.18 + 200}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
