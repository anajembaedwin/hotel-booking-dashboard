import React from 'react';
import ChartComponent from '../components/Chart';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const customColor = '#4E3827';

const Dashboard = () => {
  const navigate = useNavigate();


  // Data for Bookings Overview
  const bookingData = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'Bookings',
        data: [65, 59, 80, 81, 56, 55, 40, 75, 60, 85, 90, 100],
        backgroundColor: 'rgb(75, 192, 192)',
        borderColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  // Data for Revenue Overview
  const revenueData = {
    labels: [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ],
    datasets: [
      {
        label: 'Revenue',
        data: [7500, 5900, 8000, 8100, 5600, 5500, 4000, 7000, 6500, 8500, 9000, 10000],
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

      <div style={{ marginTop: 40 }}>
        <Card style={{ marginBottom: 20 }}>
          <CardContent>
            <Typography variant="h6">Bookings</Typography>
            <Typography variant="body2">You have 120 active bookings this month.</Typography>
            <Button 
              variant="contained" 
              style={{ backgroundColor: customColor, color: '#fff', marginTop: 10 }}
              onClick={() => navigate('/bookings')}  // Link to Bookings Page
            >
              View All Bookings
            </Button>
          </CardContent>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <CardContent>
            <Typography variant="h6">Customers</Typography>
            <Typography variant="body2">You have 450 active customers.</Typography>
            <Button 
              variant="contained" 
              style={{ backgroundColor: customColor, color: '#fff', marginTop: 10 }}
              onClick={() => navigate('/customers')}  // Link to Customers Page
            >
              View Customer List
            </Button>
          </CardContent>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <CardContent>
            <Typography variant="h6">Payments</Typography>
            <Typography variant="body2">Total payments received this month: ₦25,000.</Typography>
            <Button 
              variant="contained" 
              style={{ backgroundColor: customColor, color: '#fff', marginTop: 10 }}
              onClick={() => navigate('/payments')}  // Link to Payments Page
            >
              View Payment History
            </Button>
          </CardContent>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <CardContent>
            <Typography variant="h6">Marketing</Typography>
            <Typography variant="body2">New email campaign launched: Summer Deals.</Typography>
            <Button 
              variant="contained" 
              style={{ backgroundColor: customColor, color: '#fff', marginTop: 10 }}
              onClick={() => navigate('/marketing')}  // Link to Marketing Page
            >
              View Campaigns
            </Button>
          </CardContent>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <CardContent>
            <Typography variant="h6">Data</Typography>
            <Typography variant="body2">Revenue up by 15% compared to last month.</Typography>
            <Button 
              variant="contained" 
              style={{ backgroundColor: customColor, color: '#fff', marginTop: 10 }}
              onClick={() => navigate('/data')}  // Link to Data Insights Page
            >
              View Data Insights
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
