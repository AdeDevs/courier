import React, { useState, useEffect } from 'react';
import './style.css'; // Ensure your CSS file for styling is imported

const AdminDashboard = ({ orders, onDeleteOrder, onEditOrder, onCreateOrder }) => {
  const [orderDetails, setOrderDetails] = useState({ name: '', address: '', date: '' });
  const [editingOrderId, setEditingOrderId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleCreateOrder = (e) => {
    e.preventDefault();
    onCreateOrder(orderDetails);
    setOrderDetails({ name: '', address: '', date: '' }); // Reset form after submission
  };

  const handleEditOrder = (order) => {
    setOrderDetails(order);
    setEditingOrderId(order.id); // Set the ID of the order being edited
  };

  const handleUpdateOrder = (e) => {
    e.preventDefault();
    if (editingOrderId) {
      onEditOrder({ ...orderDetails, id: editingOrderId }); // Pass the updated order with the correct ID
      setOrderDetails({ name: '', address: '', date: '' }); // Reset form after updating
      setEditingOrderId(null); // Clear editing state
    }
  };

  useEffect(() => {
    if (editingOrderId) {
      const currentOrder = orders.find((order) => order.id === editingOrderId);
      if (currentOrder) {
        setOrderDetails(currentOrder);
      }
    }
  }, [editingOrderId, orders]); // Update order details when editing an order

  return (
    <div className="admin-dashboard">
      <h2>Order Dashboard</h2>
      <form onSubmit={editingOrderId ? handleUpdateOrder : handleCreateOrder}>
        <div className="form-group">
          <input type="text" name="name" placeholder="Name" value={orderDetails.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input type="text" name="address" placeholder="Address" value={orderDetails.address} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <input type="date" name="date" value={orderDetails.date} onChange={handleChange} required />
        </div>
        <button id='submit' type="submit">{editingOrderId ? 'Update Order' : 'Create Order'}</button>
      </form>
      
      <h3>List Of Orders</h3>

      <ul className="order-list">
        {orders.map((order) => (
          <li key={order.id} className="order-item">
            <div className="order-details">
              <p><span id='info'>Name:</span> {order.name} </p>
              <p><span id='info'>Address:</span> {order.address} </p>
              <p><span id='info'>Date:</span> {order.date} </p>
            </div>
            <div className="order-actions">
              <button className="edit-button" onClick={() => handleEditOrder(order)}>Edit</button>
              <button className="delete-button" onClick={() => onDeleteOrder(order.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
