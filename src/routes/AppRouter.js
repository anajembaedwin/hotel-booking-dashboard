import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import CustomerManagement from '../pages/CustomerManagement';
import BookingManagement from '../pages/BookingManagement';
import Payments from '../pages/Payments';
import Sales from '../pages/Sales';
import DataVisualization from '../pages/DataVisualization';
import UserManagement from '../pages/UserManagement';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/customers" element={<CustomerManagement />} />
      <Route path="/bookings" element={<BookingManagement />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/marketing" element={<Sales />} />
      <Route path="/data" element={<DataVisualization />} />
      <Route path="/users" element={<UserManagement />} />
    </Routes>
  </Router>
);

export default AppRouter;
