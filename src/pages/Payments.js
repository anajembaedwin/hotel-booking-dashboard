// src/pages/Payments.js
import React from 'react';
import { Grid, Paper, Typography, Table, TableBody, TableCell, TableHead, TableRow, TableContainer } from '@mui/material';

const Payments = () => {
  const paymentSummary = {
    totalPayments: '$25,000',
    outstandingBalance: '$5,000',
    lastPaymentDate: '2024-08-20',
  };

  const transactions = [
    {
      id: 1,
      customer: 'John Doe',
      hotel: 'Hotel Sunshine',
      amount: '$500',
      date: '2024-08-20',
      status: 'Completed',
    },
    {
      id: 2,
      customer: 'Jane Smith',
      hotel: 'Ocean View Resort',
      amount: '$1000',
      date: '2024-08-19',
      status: 'Pending',
    },
    // Add more transactions here...
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Payments Overview</Typography>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Total Payments</Typography>
            <Typography variant="h4">{paymentSummary.totalPayments}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Outstanding Balance</Typography>
            <Typography variant="h4">{paymentSummary.outstandingBalance}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper style={{ padding: '20px', textAlign: 'center' }}>
            <Typography variant="h6">Last Payment Date</Typography>
            <Typography variant="h4">{paymentSummary.lastPaymentDate}</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Typography variant="h4" style={{ marginTop: '40px', marginBottom: '20px' }}>Payment Transactions</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Hotel</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.id}</TableCell>
                <TableCell>{transaction.customer}</TableCell>
                <TableCell>{transaction.hotel}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Payments;
