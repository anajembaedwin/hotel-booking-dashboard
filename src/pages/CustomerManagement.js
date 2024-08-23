// src/pages/CustomerManagement.js
import React, { useState } from 'react';
import CustomerList from '../components/CustomerList';
import CustomerProfile from '../components/CustomerProfile';
import SearchFilter from '../components/SearchFilter';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const CustomerManagement = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const navigate = useNavigate();

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(customer);
    navigate(`/customers/${customer.id}`);
  };

  const handleBackToCustomers = () => {
    setSelectedCustomer(null);
    navigate('/customers');
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Customer Management</h1>
      {!selectedCustomer ? (
        <>
          <SearchFilter />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
            <CustomerList onSelectCustomer={handleCustomerSelect} />
          </div>
        </>
      ) : (
        <>
          <IconButton onClick={handleBackToCustomers} style={{ marginBottom: 20 }}>
            <ArrowBackIcon />
          </IconButton>
          <CustomerProfile customer={selectedCustomer} />
        </>
      )}
    </div>
  );
};

export default CustomerManagement;

