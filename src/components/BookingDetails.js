// src/components/BookingDetails.js
import React from 'react';
import Table from './Table';
import { Paper, Typography } from '@mui/material';

const BookingDetails = ({ booking }) => {
  if (!booking) return <div style={{ padding: '20px' }}>Select a booking to see details</div>;

  const columns = ['Field', 'Value'];
  const data = [
    { field: 'ID', value: booking.id },
    { field: 'Hotel Name', value: booking.hotel_name },
    { field: 'Location', value: booking.location },
    { field: 'Customer Name', value: booking.customer_name },
    { field: 'Room Type', value: booking.room_type },
    { field: 'Check-in Date', value: booking.check_in_date },
    { field: 'Check-out Date', value: booking.check_out_date },
    { field: 'Status', value: booking.status },
    { field: 'Total Amount', value: booking.total_amount },
  ];

  return (
    <Paper style={{ padding: '20px', marginTop: '20px' }}>
      <Typography variant="h6">Booking Details</Typography>
      <Table title="" columns={columns} data={data} />
    </Paper>
  );
};

export default BookingDetails;



// src/components/BookingDetails.js
// import React from 'react';
// import { Paper, Typography } from '@mui/material';

// const BookingDetails = ({ booking }) => {
//   if (!booking) return <div style={{ padding: '20px' }}>Select a booking to see details</div>;

//   return (
//     <Paper style={{ padding: '20px', marginTop: '20px' }}>
//       <Typography variant="h6">Booking Details</Typography>
//       <Typography>ID: {booking.id}</Typography>
//       <Typography>Hotel Name: {booking.hotel_name}</Typography>
//       <Typography>Location: {booking.location}</Typography>
//       <Typography>Customer Name: {booking.customer_name}</Typography>
//       <Typography>Room Type: {booking.room_type}</Typography>
//       <Typography>Check-in Date: {booking.check_in_date}</Typography>
//       <Typography>Check-out Date: {booking.check_out_date}</Typography>
//       <Typography>Status: {booking.status}</Typography>
//       <Typography>Total Amount: {booking.total_amount}</Typography>
//     </Paper>
//   );
// };

// export default BookingDetails;
