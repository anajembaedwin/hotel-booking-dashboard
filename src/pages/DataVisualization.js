// src/pages/DataVisualization.js
import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement);

const DataVisualization = () => {
  // Sample data for the charts
  const bookingTrendsData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Bookings',
        data: [30, 45, 60, 50, 80, 90, 100, 95, 70, 60, 50, 80],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const revenueData = {
    labels: ['Hotel A', 'Hotel B', 'Hotel C', 'Hotel D'],
    datasets: [
      {
        label: 'Revenue',
        data: [10000, 15000, 7000, 12000],
        backgroundColor: ['rgba(255,99,132,0.2)', 'rgba(54,162,235,0.2)', 'rgba(255,206,86,0.2)', 'rgba(75,192,192,0.2)'],
        borderColor: ['rgba(255,99,132,1)', 'rgba(54,162,235,1)', 'rgba(255,206,86,1)', 'rgba(75,192,192,1)'],
        borderWidth: 1,
      },
    ],
  };

  const customerDemographicsData = {
    labels: ['18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
    datasets: [
      {
        label: 'Age Groups',
        data: [15, 30, 25, 20, 10, 5],
        backgroundColor: [
          'rgba(255,99,132,0.6)',
          'rgba(54,162,235,0.6)',
          'rgba(255,206,86,0.6)',
          'rgba(75,192,192,0.6)',
          'rgba(153,102,255,0.6)',
          'rgba(255,159,64,0.6)',
        ],
      },
    ],
  };

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Data Visualization</Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>Booking Trends</Typography>
            <Line data={bookingTrendsData} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>Revenue by Hotel</Typography>
            <Bar data={revenueData} />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper style={{ padding: '20px' }}>
            <Typography variant="h6" gutterBottom>Customer Demographics</Typography>
            <Pie data={customerDemographicsData} />
          </Paper>
        </Grid>

        {/* Add more charts or visualizations as needed */}
      </Grid>
    </div>
  );
};

export default DataVisualization;
