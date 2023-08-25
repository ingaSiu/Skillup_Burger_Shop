import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import React from 'react';

const MyOrders = () => {
  const dataArray = [
    {
      orderId: '123',
      status: 'Processing',
      itemQty: 3,
      amount: 150.0,
      paymentMethod: 'Credit Card',
      action: 'View',
    },
    {
      orderId: '678',
      status: 'Shipped',
      itemQty: 2,
      amount: 75.5,
      paymentMethod: 'PayPal',
      action: 'View',
    },
    {
      orderId: '543',
      status: 'Delivered',
      itemQty: 5,
      amount: 220.25,
      paymentMethod: 'Cash on Delivery',
      action: 'View',
    },
    {
      orderId: '981',
      status: 'Pending',
      itemQty: 1,
      amount: 30.0,
      paymentMethod: 'Bank Transfer',
      action: 'View',
    },
  ];
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {/* //     Add the code for the table body */}
            {dataArray.map((item) => (
              <tr key={item}>
                <td>{item.orderId}</td>
                <td>{item.status}</td>
                <td>{item.itemQty}</td>
                <td>{item.amount}</td>
                <td>{item.paymentMethod}</td>
                <td>
                  <Link to={`/order/${'asdsds'}`}>
                    <AiOutlineEye />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};

export default MyOrders;
