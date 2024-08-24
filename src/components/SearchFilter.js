// src/components/SearchFilter.js
import React from 'react';
import { Box, TextField, MenuItem, Button, styled } from '@mui/material';

// Styled components for the search filter
const FilterContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '10px',
  marginBottom: '20px',
});

const SearchButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#4E3827', // Consistent with your button color
  color: '#e4e2dd', // Light color for text to ensure readability
  '&:hover': {
    backgroundColor: '#3f2a1d', // Slightly darker shade for hover effect
  },
}));

const SearchFilter = () => {
  return (
    <FilterContainer>
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search by name, email, or booking ID"
        style={{ width: '300px' }}
      />
      <TextField
        select
        variant="outlined"
        size="small"
        placeholder="Filter by status"
        defaultValue=""
        style={{ width: '150px' }}
      >
        <MenuItem value="">Filter by status</MenuItem>
        <MenuItem value="confirmed">Confirmed</MenuItem>
        <MenuItem value="pending">Pending</MenuItem>
        <MenuItem value="canceled">Canceled</MenuItem>
      </TextField>
      <SearchButton variant="contained">Search</SearchButton>
    </FilterContainer>
  );
};

export default SearchFilter;
