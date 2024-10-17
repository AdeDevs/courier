// src/components/OrderList.jsx
import React from 'react';

const OrderList = ({ orders, onEdit }) => {
  return (
    <div>
      <h2>All Orders</h2>
      <ul>
        {orders.length > 0 ? (
          orders.map((order) => (
            <li key={order.id}>
              <strong>Sender:</strong> {order.sender}, <strong>Recipient:</strong> {order.recipient}, 
              <strong>Package:</strong> {order.packageDetails}, <strong>Address:</strong> {order.deliveryAddress}
              <button onClick={() => onEdit(order)}>Edit</button>
            </li>
          ))
        ) : (
          <p>No orders created yet.</p>
        )}
      </ul>
    </div>
  );
};

export default OrderList;
