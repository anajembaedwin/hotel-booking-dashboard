// src/components/CustomerProfile.js
import React from 'react';

const CustomerProfile = ({ customer }) => {
  const bookingHistory = [
    { id: 1, date: '2024-01-10', room: 'Deluxe', status: 'Confirmed' },
    // More booking records...
  ];

  const paymentRecords = [
    { id: 1, date: '2024-01-01', amount: 200, method: 'Credit Card' },
    // More payment records...
  ];

  const communicationLogs = [
    { id: 1, date: '2024-01-05', type: 'Email', note: 'Sent booking confirmation' },
    // More communication records...
  ];

  return (
    <div style={{ width: '50%' }}>
      <h2>Customer Profile: {customer.name}</h2>
      <p><strong>Email:</strong> {customer.email}</p>
      <p><strong>Phone:</strong> {customer.phone}</p>
      <p><strong>Address:</strong> {customer.address}</p>
      <p><strong>Membership Status:</strong> {customer.membershipStatus}</p>
      <p><strong>Last Contacted:</strong> {customer.lastContacted}</p>
      
      <h3>Booking History</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Date</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Room</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookingHistory.map((booking) => (
            <tr key={booking.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{booking.date}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{booking.room}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{booking.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Payment Records</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Date</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Amount</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Method</th>
          </tr>
        </thead>
        <tbody>
          {paymentRecords.map((payment) => (
            <tr key={payment.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{payment.date}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>${payment.amount}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{payment.method}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Communication Logs</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Date</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Type</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Note</th>
          </tr>
        </thead>
        <tbody>
          {communicationLogs.map((log) => (
            <tr key={log.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{log.date}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{log.type}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{log.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerProfile;
