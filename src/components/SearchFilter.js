// src/components/SearchFilter.js
import React from 'react';

const SearchFilter = () => {
  return (
    <div style={{ marginBottom: 20 }}>
      <input type="text" placeholder="Search by name, email, or booking ID" />
      <select>
        <option value="">Filter by status</option>
        <option value="confirmed">Confirmed</option>
        <option value="pending">Pending</option>
        <option value="canceled">Canceled</option>
      </select>
      <button>Search</button>
    </div>
  );
};

export default SearchFilter;
