import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Home, People, Hotel, Payment, Email, BarChart, AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  sidebar: {
    width: 200,
    backgroundColor: '#e4e2dd', // Light brown/beige color for the sidebar
    color: '#3e2723', // Dark brown text and icons
    height: '100vh',
    paddingTop: '20px',
    position: 'fixed',
    top: '64px', // Adjust according to header height
    left: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  listItem: {
    '&:hover': {
      backgroundColor: '#bcaaa4', // Slightly darker brown on hover
    },
  },
  icon: {
    color: '#3e2723', // Dark brown color for icons
  },
});

const Sidebar = () => {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <List>
        <ListItem button component={Link} to="/" className={classes.listItem}>
          <ListItemIcon>
            <Home className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/customers" className={classes.listItem}>
          <ListItemIcon>
            <People className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItem>
        <ListItem button component={Link} to="/bookings" className={classes.listItem}>
          <ListItemIcon>
            <Hotel className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Bookings" />
        </ListItem>
        <ListItem button component={Link} to="/payments" className={classes.listItem}>
          <ListItemIcon>
            <Payment className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Payments" />
        </ListItem>
        <ListItem button component={Link} to="/marketing" className={classes.listItem}>
          <ListItemIcon>
            <Email className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Marketing" />
        </ListItem>
        <ListItem button component={Link} to="/data" className={classes.listItem}>
          <ListItemIcon>
            <BarChart className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Data" />
        </ListItem>
        <ListItem button component={Link} to="/users" className={classes.listItem}>
          <ListItemIcon>
            <AccountCircle className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
