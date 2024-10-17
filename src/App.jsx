// src/App.jsx
import React, { useState } from 'react';
import AdminDashboard from './components/AdminDashboard';

const App = () => {
  const [orders, setOrders] = useState([]);

  const createOrderHandler = (newOrder) => {
    setOrders((prevOrders) => [
      ...prevOrders,
      { id: Date.now(), ...newOrder }, // Assign a unique ID using timestamp
    ]);
  };

  const deleteOrderHandler = (orderId) => {
    setOrders((prevOrders) => prevOrders.filter(order => order.id !== orderId));
  };

  const editOrderHandler = (order) => {
    // Implement the edit functionality here (this can involve setting the selected order in state)
  };

  const handleEditOrder = (updatedOrder) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === updatedOrder.id ? updatedOrder : order
      )
    );
  };
  
  return (
    <div>
      <h1>Online Courier Service</h1>
      <AdminDashboard 
        orders={orders} 
        onDeleteOrder={deleteOrderHandler} 
        onEditOrder={handleEditOrder} 
        onCreateOrder={createOrderHandler} // Ensure this is correctly passed
      />
    </div>
  );
};

export default App;
