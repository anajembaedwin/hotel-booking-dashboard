// src/components/BookingList.js
import React from 'react';
import Table from './Table';

const BookingList = ({ bookings, onSelectBooking }) => {
  const columns = [
    'ID', 
    'Hotel Name', 
    'Location', 
    'Customer Name', 
    'Room Type', 
    'Check-in Date', 
    'Check-out Date', 
    'Status', 
    'Total Amount'
  ];

  return (
    <div style={{ flex: 1, padding: '20px', boxSizing: 'border-box' }}>
      <Table
        title="Bookings"
        columns={columns}
        data={bookings}
        onSelectRow={onSelectBooking}
      />
    </div>
  );
};

export default BookingList;
