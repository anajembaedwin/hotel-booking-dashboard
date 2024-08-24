// src/components/CustomerProfile.js
import React from 'react';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

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
    <Box sx={{ width: '100%', padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Customer Profile: {customer.name}
      </Typography>
      
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          <strong>Email:</strong> {customer.email}
        </Typography>
        <Typography variant="h6" gutterBottom>
          <strong>Phone:</strong> {customer.phone}
        </Typography>
        <Typography variant="h6" gutterBottom>
          <strong>Address:</strong> {customer.address}
        </Typography>
        <Typography variant="h6" gutterBottom>
          <strong>Membership Status:</strong> {customer.membershipStatus}
        </Typography>
        <Typography variant="h6" gutterBottom>
          <strong>Last Contacted:</strong> {customer.lastContacted}
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          Booking History
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Room</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookingHistory.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell>{booking.date}</TableCell>
                  <TableCell>{booking.room}</TableCell>
                  <TableCell>{booking.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          Payment Records
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Method</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paymentRecords.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell>${payment.amount}</TableCell>
                  <TableCell>{payment.method}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          Communication Logs
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Note</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {communicationLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>{log.date}</TableCell>
                  <TableCell>{log.type}</TableCell>
                  <TableCell>{log.note}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default CustomerProfile;
