// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import CustomerManagement from './pages/CustomerManagement';
import BookingManagement from './pages/BookingManagement';
import Payments from './pages/Payments';
import Marketing from './pages/Marketing';
import DataVisualization from './pages/DataVisualization';
import UserManagement from './pages/UserManagement';

const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          <Header />
          <div style={{ flexGrow: 1, overflow: 'auto', padding: '20px' }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/customers" element={<CustomerManagement />} />
              <Route path="/bookings" element={<BookingManagement />} />
              <Route path="/payments" element={<Payments />} />
              <Route path="/marketing" element={<Marketing />} />
              <Route path="/data" element={<DataVisualization />} />
              <Route path="/users" element={<UserManagement />} />
              {/* Add more routes for other pages as needed */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
