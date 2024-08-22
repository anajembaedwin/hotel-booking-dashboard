// src/components/Sidebar.js
import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: 250 }}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/customers">
          <ListItemText primary="Customers" />
        </ListItem>
        <ListItem button component={Link} to="/bookings">
          <ListItemText primary="Bookings" />
        </ListItem>
        <ListItem button component={Link} to="/payments">
          <ListItemText primary="Payments" />
        </ListItem>
        <ListItem button component={Link} to="/marketing">
          <ListItemText primary="Marketing" />
        </ListItem>
        <ListItem button component={Link} to="/data">
          <ListItemText primary="Data" />
        </ListItem>
        <ListItem button component={Link} to="/users">
          <ListItemText primary="Users" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
