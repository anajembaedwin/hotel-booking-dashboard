import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import CustomerManagement from './pages/CustomerManagement';
import BookingManagement from './pages/BookingManagement';
import Payments from './pages/Payments';
import Marketing from './pages/Marketing';
import DataVisualization from './pages/DataVisualization';
import UserManagement from './pages/UserManagement';
import SignIn from './pages/SignIn';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);
  const lastActivityRef = useRef(Date.now());
  const INACTIVITY_LIMIT = 15 * 60 * 1000; // 15 minutes inactivity limit

  useEffect(() => {
    const checkAuth = async () => {
      const auth = localStorage.getItem('isAuthenticated');
      setIsAuthenticated(auth === 'true');
      setLoading(false);
    };

    checkAuth();
  }, []);

  useEffect(() => {
    const handleUserActivity = () => {
      lastActivityRef.current = Date.now();
    };

    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keypress', handleUserActivity);

    const checkInactivity = () => {
      if (Date.now() - lastActivityRef.current > INACTIVITY_LIMIT) {
        handleSignOut();
      }
    };

    const inactivityCheckInterval = setInterval(checkInactivity, 60000); // Check every minute

    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keypress', handleUserActivity);
      clearInterval(inactivityCheckInterval);
    };
  }, []);

  const handleSignIn = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#e4e2dd',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Router>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route
              path="/*"
              element={
                <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                  <Header onSignOut={handleSignOut} />
                  <div style={{ display: 'flex', flexGrow: 1, marginTop: '64px' }}>
                    <Sidebar />
                    <div style={{ flexGrow: 1, marginLeft: '200px', padding: '20px', overflowY: 'auto' }}>
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/customers" element={<CustomerManagement />} />
                        <Route path="/customers/:id" element={<CustomerManagement />} />
                        <Route path="/bookings" element={<BookingManagement />} />
                        <Route path="/bookings/:id" element={<BookingManagement />} />
                        <Route path="/bookings/add" element={<BookingManagement />} />
                        <Route path="/payments" element={<Payments />} />
                        <Route path="/marketing" element={<Marketing />} />
                        <Route path="/data" element={<DataVisualization />} />
                        <Route path="/users" element={<UserManagement />} />
                      </Routes>
                    </div>
                  </div>
                </div>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <Route path="*" element={<SignIn onSignIn={handleSignIn} />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
