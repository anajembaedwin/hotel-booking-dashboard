import React, { useState } from 'react';
import BookingList from '../components/BookingList';
import BookingDetails from '../components/BookingDetails';
import AddBooking from '../components/AddBooking';
import { IconButton, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const BookingManagement = () => {
  const [bookings, setBookings] = useState([
    {
      _id: '1',
      hotelName: 'Hotel Sunshine',
      hotelLocation: 'Springfield',
      customerName: 'John Doe', // Updated to include customer object
      roomType: 'Deluxe',
      checkInDate: '2024-08-20',
      checkOutDate: '2024-08-25',
      paymentStatus: 'Confirmed',
      totalAmount: 500,
    },
    {
      _id: '2',
      hotelName: 'Ocean View Resort',
      hotelLocation: 'Miami',
      customerName: 'Jane Smith', // Updated to include customer object
      roomType: 'Suite',
      checkInDate: '2024-08-22',
      checkOutDate: '2024-08-27',
      paymentStatus: 'Pending',
      totalAmount: 1000,
    },
    // Add more booking data here...
  ]);

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isAddingBooking, setIsAddingBooking] = useState(false);
  const navigate = useNavigate();

  const handleSelectBooking = (booking) => {
    setSelectedBooking(booking);
    setIsAddingBooking(false);
    navigate(`/bookings/${booking._id}`);
  };

  const handleAddBooking = (newBooking) => {
    setBookings([...bookings, { ...newBooking, _id: (bookings.length + 1).toString() }]);
    setSelectedBooking(null);
    setIsAddingBooking(false);
    navigate('/bookings');
  };

  const handleBackToBookings = () => {
    setSelectedBooking(null);
    setIsAddingBooking(false);
    navigate('/bookings');
  };

  const handleAddNewBookingClick = () => {
    setSelectedBooking(null);
    setIsAddingBooking(true);
    navigate('/bookings/add');
  };

  const customColor = '#4E3827';

  return (
    <div style={{ padding: '20px' }}>
      <h1>Booking Management</h1>
      {!selectedBooking && !isAddingBooking && (
        <>
          <Button
            variant="contained"
            style={{ backgroundColor: customColor, color: '#fff' }} // Custom button color
            onClick={handleAddNewBookingClick}
          >
            Add New Booking
          </Button>
          <BookingList bookings={bookings} onSelectBooking={handleSelectBooking} />
        </>
      )}
      {selectedBooking && (
        <>
          <IconButton onClick={handleBackToBookings} style={{ marginBottom: 20 }}>
            <ArrowBackIcon />
          </IconButton>
          <BookingDetails booking={selectedBooking} />
        </>
      )}
      {isAddingBooking && (
        <>
          <IconButton onClick={handleBackToBookings} style={{ marginBottom: 20 }}>
            <ArrowBackIcon />
          </IconButton>
          <AddBooking onAddBooking={handleAddBooking} />
        </>
      )}
    </div>
  );
};

export default BookingManagement;



// import React, { useState } from 'react';
// import BookingList from '../components/BookingList';
// import BookingDetails from '../components/BookingDetails';
// import AddBooking from '../components/AddBooking';
// import { IconButton, Button } from '@mui/material';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { useNavigate } from 'react-router-dom';

// const BookingManagement = () => {
//   const [bookings, setBookings] = useState([
//     {
//       id: 1,
//       hotel_name: 'Hotel Sunshine',
//       location: 'Springfield',
//       customer: { name: 'John Doe' }, // Updated to include customer object
//       room_type: 'Deluxe',
//       check_in_date: '2024-08-20',
//       check_out_date: '2024-08-25',
//       paymentStatus: 'Confirmed',
//       totalAmount: '$500',
//     },
//     {
//       id: 2,
//       hotel_name: 'Ocean View Resort',
//       location: 'Miami',
//       customer: { name: 'Jane Smith' }, // Updated to include customer object
//       room_type: 'Suite',
//       check_in_date: '2024-08-22',
//       check_out_date: '2024-08-27',
//       paymentStatus: 'Pending',
//       totalAmount: '$1000',
//     },
//     // Add more booking data here...
//   ]);

//   const [selectedBooking, setSelectedBooking] = useState(null);
//   const [isAddingBooking, setIsAddingBooking] = useState(false);
//   const navigate = useNavigate();

//   const handleSelectBooking = (booking) => {
//     setSelectedBooking(booking);
//     setIsAddingBooking(false);
//     navigate(`/bookings/${booking.id}`);
//   };

//   const handleAddBooking = (newBooking) => {
//     setBookings([...bookings, { ...newBooking, id: bookings.length + 1 }]);
//     setSelectedBooking(null);
//     setIsAddingBooking(false);
//     navigate('/bookings');
//   };

//   const handleBackToBookings = () => {
//     setSelectedBooking(null);
//     setIsAddingBooking(false);
//     navigate('/bookings');
//   };

//   const handleAddNewBookingClick = () => {
//     setSelectedBooking(null);
//     setIsAddingBooking(true);
//     navigate('/bookings/add');
//   };

//   const customColor = '#4E3827';

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Booking Management</h1>
//       {!selectedBooking && !isAddingBooking && (
//         <>
//           {/* <Button variant="contained" color="primary" onClick={handleAddNewBookingClick}> */}
//           <Button
//             variant="contained"
//             style={{ backgroundColor: customColor, color: '#fff' }} // Custom button color
//             onClick={handleAddNewBookingClick}
//           >
//             Add New Booking
//           </Button>
//           <BookingList bookings={bookings} onSelectBooking={handleSelectBooking} />
//         </>
//       )}
//       {selectedBooking && (
//         <>
//           <IconButton onClick={handleBackToBookings} style={{ marginBottom: 20 }}>
//             <ArrowBackIcon />
//           </IconButton>
//           <BookingDetails booking={selectedBooking} />
//         </>
//       )}
//       {isAddingBooking && (
//         <>
//           <IconButton onClick={handleBackToBookings} style={{ marginBottom: 20 }}>
//             <ArrowBackIcon />
//           </IconButton>
//           <AddBooking onAddBooking={handleAddBooking} />
//         </>
//       )}
//     </div>
//   );
// };

// export default BookingManagement;
