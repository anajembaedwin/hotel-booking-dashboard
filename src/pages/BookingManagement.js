// src/pages/BookingManagement.js
import React, { useState } from 'react';
import BookingList from '../components/BookingList';
import BookingDetails from '../components/BookingDetails';
import AddBooking from '../components/AddBooking';

const BookingManagement = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      hotel_name: 'Hotel Sunshine',
      location: 'Springfield',
      customer_name: 'John Doe',
      room_type: 'Deluxe',
      check_in_date: '2024-08-20',
      check_out_date: '2024-08-25',
      status: 'Confirmed',
      total_amount: '$500',
    },
    {
      id: 2,
      hotel_name: 'Ocean View Resort',
      location: 'Miami',
      customer_name: 'Jane Smith',
      room_type: 'Suite',
      check_in_date: '2024-08-22',
      check_out_date: '2024-08-27',
      status: 'Pending',
      total_amount: '$1000',
    },
    // Add more booking data here...
  ]);

  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleSelectBooking = (booking) => {
    setSelectedBooking(booking);
  };

  const handleAddBooking = (newBooking) => {
    setBookings([...bookings, { ...newBooking, id: bookings.length + 1 }]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', padding: '20px' }}>
      <BookingList bookings={bookings} onSelectBooking={handleSelectBooking} />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <BookingDetails booking={selectedBooking} />
        <AddBooking onAddBooking={handleAddBooking} />
      </div>
    </div>
  );
};

export default BookingManagement;
