import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Hotel Dashboard
      </Typography>
      <Button color="inherit" component={Link} to="/">Dashboard</Button>
      <Button color="inherit" component={Link} to="/customers">Customers</Button>
      <Button color="inherit" component={Link} to="/bookings">Bookings</Button>
      <Button color="inherit" component={Link} to="/payments">Payments</Button>
      <Button color="inherit" component={Link} to="/marketing">Marketing</Button>
      <Button color="inherit" component={Link} to="/data">Data</Button>
      <Button color="inherit" component={Link} to="/users">Users</Button>
    </Toolbar>
  </AppBar>
);

export default Header;
