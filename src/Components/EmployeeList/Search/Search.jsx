import React from 'react';
import Form from 'react-bootstrap/Form';

const SearchBar = () => {
  return (
    <Form className='d-flex justify-content-end' style={{width:"100%"}}>
    <Form.Group controlId="searchInput">
      <Form.Control type="search" placeholder="Search..." />
    </Form.Group>
  </Form>
  );
};

export default SearchBar;