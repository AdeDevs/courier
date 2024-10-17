// src/components/OrderTracking.js
import React, { useState } from 'react';

const OrderTracking = ({ orders }) => {
  const [trackingId, setTrackingId] = useState('');
  const [order, setOrder] = useState(null);

  const handleTrack = () => {
    const foundOrder = orders[trackingId];
    setOrder(foundOrder || 'Order not found.');
  };

  return (
    <div>
      <h2>Track Your Order</h2>
      <input
        type="text"
        placeholder="Enter Order ID"
        value={trackingId}
        onChange={(e) => setTrackingId(e.target.value)}
      />
      <button onClick={handleTrack}>Track Order</button>
      {order && (
        <div>
          {typeof order === 'string' ? (
            <p>{order}</p>
          ) : (
            <div>
              <p><strong>Sender:</strong> {order.senderName}</p>
              <p><strong>Receiver:</strong> {order.receiverName}</p>
              <p><strong>Status:</strong> {order.status}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default OrderTracking;
