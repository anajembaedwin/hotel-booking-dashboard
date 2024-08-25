import React, { useState } from 'react';
import { Container, Button, Typography, Box, Paper, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import logo from '../assets/buzlogo-brown-removebg.png';

// Custom styled TextField component
const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#e4e2dd', // Default border color
    },
    '&:hover fieldset': {
      borderColor: '#d1cfc9', // Slightly darker shade on hover
    },
    '&.Mui-focused fieldset': {
      borderColor: '#d1cfc9', // Slightly darker shade when focused
    },
  },
  '& .MuiInputLabel-root': {
    color: '#e4e2dd', // Label color
    '&.Mui-focused': {
      color: '#e4e2dd', // Keep label color consistent on focus
    },
    '&.Mui-required::before': {
    //   content: '"*"', // Adding asterisk before the label
      color: '#e4e2dd', // Asterisk color
      marginRight: '4px',
    },
  },
  '& .MuiInputBase-input': {
    color: '#e4e2dd', // Input text color
  },
  '& .MuiInputBase-input::placeholder': {
    color: '#e4e2dd', // Placeholder color
  },
  '& .MuiInputBase-input::-webkit-input-placeholder': {
    color: '#e4e2dd', // Placeholder color for WebKit browsers
  },
  '& .MuiInputBase-input::-moz-placeholder': {
    color: '#e4e2dd', // Placeholder color for Mozilla browsers
  },
  '& .MuiInputBase-input:-ms-input-placeholder': {
    color: '#e4e2dd', // Placeholder color for Internet Explorer
  },
}));

const SignIn = ({ onSignIn }) => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSignIn = () => {
    // Clear previous errors
    setEmailError('');
    setPasswordError('');

    // Hardcoded sign-in logic
    if (emailOrUsername === 'user@example.com' && password === 'password123') {
      console.log('Sign-In successful:', { emailOrUsername, password });
      localStorage.setItem('isAuthenticated', 'true'); // Set authentication flag
      onSignIn(); // Simulate redirection to the dashboard
    } else {
      if (emailOrUsername !== 'user@example.com') {
        setEmailError('Invalid email or username');
      }
      if (password !== 'password123') {
        setPasswordError('Invalid password');
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'emailOrUsername') {
      setEmailOrUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#e4e2dd',
      }}
    >
      <Container maxWidth="sm">
          {/* Logo Section */}
          <Box sx={{ textAlign: 'center', marginBottom: '20px' }}>
            <img src={logo} alt="Buz and Socials Brown Logo" style={{ maxWidth: '200px' }} />
          </Box>
        <Paper elevation={3} sx={{ padding: '40px', backgroundColor: '#4E3827', color: '#e4e2dd' }}>
          <Typography variant="h4" gutterBottom>
            Sign In
          </Typography>
          <form noValidate autoComplete="off">
            <CustomTextField
              label="Email or Username"
              name="emailOrUsername"
              value={emailOrUsername}
              onChange={handleInputChange}
              fullWidth
              required
              variant="outlined"
              margin="normal"
              error={!!emailError}
              helperText={emailError}
              placeholder="Enter email or username"
            />
            <CustomTextField
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={handleInputChange}
              fullWidth
              required
              variant="outlined"
              margin="normal"
              error={!!passwordError}
              helperText={passwordError}
              placeholder="Enter password"
            />
            <Button
              variant="contained"
              onClick={handleSignIn}
              fullWidth
              sx={{
                marginTop: '20px',
                backgroundColor: '#e4e2dd',
                color: '#4E3827',
                '&:hover': {
                  backgroundColor: '#d1cfc9',
                },
              }}
            >
              Sign In
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignIn;
