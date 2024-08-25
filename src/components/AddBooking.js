// src/components/AddBooking.js
import React, { useState } from 'react';
import { Paper, TextField, Button } from '@mui/material';

const AddBooking = ({ onAddBooking }) => {
  const [formData, setFormData] = useState({
    hotelName: '',
    hotelLocation: '',  // Added to match updated model
    customerName: '',   // Added to match updated model
    customerId: '',     // Assuming you need to include this for reference, but not used in the model
    roomType: '',
    checkInDate: '',
    checkOutDate: '',
    paymentStatus: '',
    totalAmount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // const handleChange = (e) => {
  //   setBooking({ ...booking, [e.target.name]: e.target.value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      ...formData,
      _id: (Date.now()).toString(),
      totalAmount: parseFloat(formData.totalAmount) || 0 // Safeguard to avoid NaN
    };
    onAddBooking(newBooking);
  };
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Create a temporary ID or handle ID assignment in the backend
  //   const newBooking = {
  //     ...formData,
  //     _id: (Date.now()).toString(), // Temporary ID using timestamp
  //     totalAmount: parseFloat(formData.totalAmount)
  //   };
  //   onAddBooking(newBooking);
  //   // setBooking({
  //   //   hotelName: '',
  //   //   hotelLocation: '',  // Reset added field
  //   //   customerName: '',   // Reset added field
  //   //   customerId: '',
  //   //   roomType: '',
  //   //   checkInDate: '',
  //   //   checkOutDate: '',
  //   //   paymentStatus: '',
  //   //   totalAmount: '',
  //   // });
  // };

  return (
    <Paper style={{ padding: '20px', marginTop: '20px' }}>
      <h2>Add New Booking</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Hotel Name"
          name="hotelName"
          value={formData.hotelName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Hotel Location"
          name="hotelLocation"
          value={formData.hotelLocation}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Customer Name"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Room Type"
          name="roomType"
          value={formData.roomType}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Check-In Date"
          type="date"
          name="checkInDate"
          value={formData.checkInDate}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          required
        />
        <TextField
          label="Check-Out Date"
          type="date"
          name="checkOutDate"
          value={formData.checkOutDate}
          onChange={handleChange}
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          required
        />
        <TextField
          label="Payment Status"
          name="paymentStatus"
          value={formData.paymentStatus}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Total Amount"
          name="totalAmount"
          type="number"
          value={formData.totalAmount}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <Button 
          type="submit" 
          variant="contained" 
          style={{ backgroundColor: '#4E3827', color: '#fff' }} 
          fullWidth
        >
          Add Booking
        </Button>
      </form>
    </Paper>
  );
};

export default AddBooking;





// import React, { useState } from 'react';
// import { Paper, TextField, Button } from '@mui/material';

// const AddBooking = ({ onAddBooking }) => {
//   const [booking, setBooking] = useState({
//     id: '',
//     hotel_name: '',
//     location: '',
//     customer_name: '',
//     room_type: '',
//     check_in_date: '',
//     check_out_date: '',
//     status: '',
//     total_amount: '',
//   });

//   const handleChange = (e) => {
//     setBooking({ ...booking, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddBooking(booking);
//     setBooking({
//       id: '',
//       hotel_name: '',
//       location: '',
//       customer_name: '',
//       room_type: '',
//       check_in_date: '',
//       check_out_date: '',
//       status: '',
//       total_amount: '',
//     });
//   };

//   return (
//     <Paper style={{ padding: '20px', marginTop: '20px' }}>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           label="Hotel Name"
//           name="hotel_name"
//           value={booking.hotel_name}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Location"
//           name="location"
//           value={booking.location}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Customer Name"
//           name="customer_name"
//           value={booking.customer_name}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Room Type"
//           name="room_type"
//           value={booking.room_type}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Check-in Date"
//           name="check_in_date"
//           type="date"
//           value={booking.check_in_date}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//           InputLabelProps={{
//             shrink: true,
//           }}
//         />
//         <TextField
//           label="Check-out Date"
//           name="check_out_date"
//           type="date"
//           value={booking.check_out_date}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//           InputLabelProps={{
//             shrink: true,
//           }}
//         />
//         <TextField
//           label="Status"
//           name="status"
//           value={booking.status}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <TextField
//           label="Total Amount"
//           name="total_amount"
//           type="number"
//           value={booking.total_amount}
//           onChange={handleChange}
//           fullWidth
//           margin="normal"
//         />
//         <Button 
//         type="submit" 
//         variant="contained" 
//         style={{ backgroundColor: '#4E3827', color: '#fff' }} 
//         fullWidth
//         >
//         Add Booking
//         </Button>
//       </form>
//     </Paper>
//   );
// };

// export default AddBooking;
