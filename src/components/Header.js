import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, styled } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
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

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    console.log('User signed out');
    handleMenuClose();
  };

  const handleSignIn = () => {
    console.log('User signed in');
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
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleSignIn}>Sign In</MenuItem>
            <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
          </Menu>
        </div>
      </ToolbarContainer>
    </StyledAppBar>
  );
};

export default Header;
