// src/pages/Dashboard.js
import React from 'react';
import ChartComponent from '../components/Chart';

const Dashboard = () => {
  // Data for Bookings Overview (up to December)
  const bookingData = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'Bookings',
        data: [65, 59, 80, 81, 56, 55, 40, 75, 60, 85, 90, 100],
        fill: false,
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  // Data for Revenue Overview (up to December)
  const revenueData = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June', 
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'Revenue',
        data: [7500, 5900, 8000, 8100, 5600, 5500, 4000, 7000, 6500, 8500, 9000, 10000],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ChartComponent title="Bookings Overview" data={bookingData} />
        <ChartComponent title="Revenue Overview" data={revenueData} />
      </div>
    </div>
  );
};

export default Dashboard;
