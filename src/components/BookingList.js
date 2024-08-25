// src/components/BookingList.js
import React from 'react';
import Table from './Table';

const BookingList = ({ bookings, onSelectBooking }) => {
  const columns = [
    'ID',
    'Hotel Name',
    'Hotel Location',
    'Customer Name',
    'Room Type',
    'Check-in Date',
    'Check-out Date',
    'Payment Status',
    'Total Amount'
  ];

  const columnMappings = {
    'ID': '_id',
    'Hotel Name': 'hotelName',
    'Hotel Location': 'hotelLocation',
    'Customer Name': 'customerName',
    'Room Type': 'roomType',
    'Check-in Date': 'checkInDate',
    'Check-out Date': 'checkOutDate',
    'Payment Status': 'paymentStatus',
    'Total Amount': 'totalAmount'
  };

  const data = bookings.map(booking => ({
    _id: booking._id,
    hotelName: booking.hotelName,
    hotelLocation: booking.hotelLocation,
    customerName: booking.customerName || 'Unknown', // Access directly from customerName
    roomType: booking.roomType,
    checkInDate: new Date(booking.checkInDate).toLocaleDateString(),
    checkOutDate: new Date(booking.checkOutDate).toLocaleDateString(),
    paymentStatus: booking.paymentStatus,
    totalAmount: `$${Number(booking.totalAmount).toFixed(2)}`
  }));
  

  // const data = bookings.map(booking => ({
  //   _id: booking._id,
  //   hotelName: booking.hotelName,
  //   hotelLocation: booking.hotelLocation,
  //   customerName: booking.customer?.name || 'Unknown',
  //   roomType: booking.roomType,
  //   checkInDate: new Date(booking.checkInDate).toLocaleDateString(),
  //   checkOutDate: new Date(booking.checkOutDate).toLocaleDateString(),
  //   paymentStatus: booking.paymentStatus,
  //   totalAmount: `$${Number(booking.totalAmount).toFixed(2)}`
  // }));

  return (
    <div style={{ flex: 1, padding: '20px', boxSizing: 'border-box' }}>
      <Table
        title="Bookings"
        columns={columns}
        columnMappings={columnMappings}
        data={data}
        onSelectRow={onSelectBooking}
      />
    </div>
  );
};

export default BookingList;




// import React from 'react';
// import Table from './Table';

// const BookingList = ({ bookings, onSelectBooking }) => {
//   const columns = [
//     'ID',
//     'Hotel Name',
//     'Hotel Location',
//     'Customer Name',
//     'Room Type',
//     'Check-in Date',
//     'Check-out Date',
//     'Payment Status',
//     'Total Amount'
//   ];

//   // Ensure the booking data matches this structure
//   const data = bookings.map(booking => ({
//     id: booking._id, // Ensure this matches the key from `useState`
//     hotelName: booking.hotelName,
//     hotelLocation: booking.hotelLocation,
//     customerName: booking.customer?.name || 'Unknown',
//     roomType: booking.roomType,
//     checkInDate: new Date(booking.checkInDate).toLocaleDateString(),
//     checkOutDate: new Date(booking.checkOutDate).toLocaleDateString(),
//     paymentStatus: booking.paymentStatus,
//     totalAmount: `$${Number(booking.totalAmount).toFixed(2)}` // Ensure totalAmount is a number
//   }));

//   return (
//     <div style={{ flex: 1, padding: '20px', boxSizing: 'border-box' }}>
//       <Table
//         title="Bookings"
//         columns={columns}
//         data={data}
//         onSelectRow={onSelectBooking}
//       />
//     </div>
//   );
// };

// export default BookingList;






// import React from 'react';
// import Table from './Table';

// const BookingList = ({ bookings, onSelectBooking }) => {
//   const columns = [
//     'ID', 
//     'Hotel Name', 
//     'Location', 
//     'Customer Name', 
//     'Room Type', 
//     'Check-in Date', 
//     'Check-out Date', 
//     'Status', 
//     'Total Amount'
//   ];

//   return (
//     <div style={{ flex: 1, padding: '20px', boxSizing: 'border-box' }}>
//       <Table
//         title="Bookings"
//         columns={columns}
//         data={bookings}
//         onSelectRow={onSelectBooking}
//       />
//     </div>
//   );
// };

// export default BookingList;
