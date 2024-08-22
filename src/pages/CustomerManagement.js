// src/pages/CustomerManagement.js
import React, { useState } from 'react';
import CustomerList from '../components/CustomerList';
import CustomerProfile from '../components/CustomerProfile';
import SearchFilter from '../components/SearchFilter';

const CustomerManagement = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleCustomerSelect = (customer) => {
    setSelectedCustomer(customer);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Customer Management</h1>
      <SearchFilter />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
        <CustomerList onSelectCustomer={handleCustomerSelect} />
        {selectedCustomer && (
          <CustomerProfile customer={selectedCustomer} />
        )}
      </div>
    </div>
  );
};

export default CustomerManagement;
