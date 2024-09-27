import React from "react";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../../employeeSlice.js";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <Form
      className="d-flex flex-column flex-sm-row justify-content-sm-end justify-content-center"
      style={{ width: "100%", padding: "1rem" }}
    >
      <Form.Group controlId="searchInput">
        <Form.Control
          type="search"
          placeholder="Search..."
          onChange={handleSearchChange}
          className="mx-auto mx-sm-0"
          style={{ maxWidth: "300px" }} 
        />
      </Form.Group>
    </Form>
  );
};

export default SearchBar;
