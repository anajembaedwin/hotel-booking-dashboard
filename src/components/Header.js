import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, styled } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import Logo from '../assets/buzlogo2-rm-bg.png'; // Path to your logo

// Styled components using @mui/material's styled API
const StyledAppBar = styled(AppBar)({
  backgroundColor: '#4E3827', // Dark brown color for the header
  height: '64px',
});

const LogoImage = styled('img')({
  height: '100px',
  marginRight: '20px',
});

const ToolbarContainer = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Header = ({ onSignOut }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const navigate = useNavigate(); // Initialize navigate for programmatic navigation

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    onSignOut(); // Call the onSignOut function passed as a prop
    navigate('/'); // Redirect to the Sign In page
    handleMenuClose();
  };

  const handleProfileClick = () => {
    navigate('/users'); // Redirect to the Users page
    handleMenuClose();
  };

  return (
    <StyledAppBar position="fixed">
      <ToolbarContainer>
        <LogoImage src={Logo} alt="Logo" />
        <div>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls="profile-menu"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="profile-menu"
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
            <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
          </Menu>
        </div>
      </ToolbarContainer>
    </StyledAppBar>
  );
};

export default Header;
