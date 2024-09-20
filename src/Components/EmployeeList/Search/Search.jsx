import React from 'react';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../../../employeeSlice.js';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value)); 
  };

  return (
    <Form className='d-flex justify-content-end' style={{width:"100%", padding:'1rem'}}>
    <Form.Group controlId="searchInput">
      <Form.Control 
      type="search"
      placeholder="Search..."
      onChange={handleSearchChange} 
      />
    </Form.Group>
  </Form>
  );
};

export default SearchBar;