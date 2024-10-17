// src/components/OrderForm.jsx
import React, { useState, useEffect } from 'react';

const OrderForm = ({ onSubmit, currentOrder }) => {
  const [sender, setSender] = useState('');
  const [recipient, setRecipient] = useState('');

  useEffect(() => {
    if (currentOrder) {
      setSender(currentOrder.sender);
      setRecipient(currentOrder.recipient);
    }
  }, [currentOrder]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      id: currentOrder ? currentOrder.id : Date.now(), // Simple ID generation
      sender,
      recipient,
    };
    onSubmit(newOrder);
    setSender('');
    setRecipient('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Sender"
        value={sender}
        onChange={(e) => setSender(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Recipient"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        required
      />
      <button type="submit">{currentOrder ? 'Update Order' : 'Create Order'}</button>
    </form>
  );
};

export default OrderForm;
