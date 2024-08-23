// src/components/AddBooking.js
import React, { useState } from 'react';
import { Paper, TextField, Button } from '@mui/material';

const AddBooking = ({ onAddBooking }) => {
  const [booking, setBooking] = useState({
    id: '',
    hotel_name: '',
    location: '',
    customer_name: '',
    room_type: '',
    check_in_date: '',
    check_out_date: '',
    status: '',
    total_amount: '',
  });

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBooking(booking);
    setBooking({
      id: '',
      hotel_name: '',
      location: '',
      customer_name: '',
      room_type: '',
      check_in_date: '',
      check_out_date: '',
      status: '',
      total_amount: '',
    });
  };

  return (
    <Paper style={{ padding: '20px', marginTop: '20px' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Hotel Name"
          name="hotel_name"
          value={booking.hotel_name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Location"
          name="location"
          value={booking.location}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Customer Name"
          name="customer_name"
          value={booking.customer_name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Room Type"
          name="room_type"
          value={booking.room_type}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Check-in Date"
          name="check_in_date"
          type="date"
          value={booking.check_in_date}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Check-out Date"
          name="check_out_date"
          type="date"
          value={booking.check_out_date}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="Status"
          name="status"
          value={booking.status}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Total Amount"
          name="total_amount"
          type="number"
          value={booking.total_amount}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add Booking
        </Button>
      </form>
    </Paper>
  );
};

export default AddBooking;
