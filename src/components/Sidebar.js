import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, styled } from '@mui/material';
import { Home, People, Hotel, Payment, Email, BarChart, AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

// Styled components using @mui/material's styled API
const SidebarContainer = styled('div')({
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
});

const StyledListItem = styled(ListItem)({
  '&:hover': {
    backgroundColor: '#bcaaa4', // Slightly darker brown on hover
  },
});

const StyledListItemIcon = styled(ListItemIcon)({
  color: '#3e2723', // Dark brown color for icons
});

const Sidebar = () => {
  return (
    <SidebarContainer>
      <List>
        <StyledListItem button component={Link} to="/">
          <StyledListItemIcon>
            <Home />
          </StyledListItemIcon>
          <ListItemText primary="Dashboard" />
        </StyledListItem>
        <StyledListItem button component={Link} to="/customers">
          <StyledListItemIcon>
            <People />
          </StyledListItemIcon>
          <ListItemText primary="Customers" />
        </StyledListItem>
        <StyledListItem button component={Link} to="/bookings">
          <StyledListItemIcon>
            <Hotel />
          </StyledListItemIcon>
          <ListItemText primary="Bookings" />
        </StyledListItem>
        <StyledListItem button component={Link} to="/payments">
          <StyledListItemIcon>
            <Payment />
          </StyledListItemIcon>
          <ListItemText primary="Payments" />
        </StyledListItem>
        <StyledListItem button component={Link} to="/marketing">
          <StyledListItemIcon>
            <Email />
          </StyledListItemIcon>
          <ListItemText primary="Marketing" />
        </StyledListItem>
        <StyledListItem button component={Link} to="/data">
          <StyledListItemIcon>
            <BarChart />
          </StyledListItemIcon>
          <ListItemText primary="Data" />
        </StyledListItem>
        <StyledListItem button component={Link} to="/users">
          <StyledListItemIcon>
            <AccountCircle />
          </StyledListItemIcon>
          <ListItemText primary="Users" />
        </StyledListItem>
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
