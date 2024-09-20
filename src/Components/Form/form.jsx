import React, { useState } from "react";
import { Form, Col, FloatingLabel } from "react-bootstrap";
import {
  StyledRow,
  StyledFormGroup,
  StyledLabel,
  FormContainer,
  SubTitle,
  FormGrid,
  Label,
  Input,
  Select,
  AddressSection,
  Button,
} from "./form.styles";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../employeeSlice";

function Formulaire({setShowModal, handleCloseModal}) {
  const dispatch = useDispatch();

  // Local state for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [department, setDepartment] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      firstName,
      lastName,
      birthDate,
      startDate,
      department,
      street,
      city,
      state,
      zipCode,
    };

    dispatch(addEmployee(newEmployee));

    setFirstName("");
    setLastName("");
    setBirthDate("");
    setStartDate("");
    setDepartment("");
    setStreet("");
    setCity("");
    setZipCode("");

    setShowModal(true);
  };

  return (
    <FormContainer style={{border:'2px solid black'}}>
      <Form
        onSubmit={handleSubmit}
        className="pb-3 pt-3"
        style={{
          backgroundColor: "white",
          padding: "1rem 0",
          borderRadius: "20px",
        }}
      >

        <StyledRow className="mb-3">
          <Form.Group
            as={Col}
            controlId="formFirstName"
            className="d-flex justify-content-start p-0"
          >
            <FloatingLabel
              controlId="floatingFirstName"
              label="First Name"
              className="mb-3"
              style={{ width: "80%", fontWeight: "bold" }}
            >
              <Form.Control
                type="text"
                placeholder="Enter the first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formLastName"
            className="d-flex justify-content-end p-0 "
          >
            <FloatingLabel
              controlId="floatingLastName"
              label="Last Name"
              className="mb-3"
              style={{ width: "80%", fontWeight: "bold" }}
            >
              <Form.Control
                type="text"
                placeholder="Enter the last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)} // Update state
              />
            </FloatingLabel>
          </Form.Group>
        </StyledRow>

        <StyledRow className="mb-3">
          <Form.Group
            as={Col}
            controlId="formBirthDate"
            className="d-flex justify-content-start flex-column p-0"
          >
            <StyledLabel className="d-flex  fw-bold" style={{ width: "80%" }}>
              Date of birth
            </StyledLabel>
            <Form.Control
              className="d-flex"
              style={{ width: "80%", padding: "1rem 0.75rem" }}
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formStartDate"
            className="d-flex  align-items-end flex-column p-0"
          >
            <StyledLabel className="d-flex fw-bold" style={{ width: "80%" }}>
              Start Date
            </StyledLabel>
            <Form.Control
              className="d-flex"
              style={{ width: "80%", padding: "1rem 0.75rem" }}
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </Form.Group>
        </StyledRow>

        <StyledFormGroup
          className=" d-flex flex-column align-items-center"
          controlId="formDepartment"
        >
          <Form.Label style={{ fontWeight: "bold" }}>Départment</Form.Label>
          <Form.Select
            style={{
              padding: "1rem 0.75rem",
              width: "100%",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </Form.Select>
        </StyledFormGroup>

        {/* //  ADRESS   //*/}
        {/* //  ADRESS   //*/}

        <StyledRow className="mb-3">
          <Form.Label style={{ fontWeight: "bold" }}>Address</Form.Label>
          <Form.Group
            as={Col}
            className="d-flex justify-content-start p-0"
            controlId="formStreet"
          >
            <FloatingLabel
              controlId="floatingStreet"
              label="Street"
              className="mb-3"
              style={{ width: "80%", fontWeight: "bold" }}
            >
              <Form.Control
                placeholder="Enter the name of street"
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>

          <Form.Group
            as={Col}
            className="d-flex justify-content-end p-0 "
            controlId="formCity"
          >
            <FloatingLabel
              controlId="floatingCity"
              label="City"
              className="mb-3"
              style={{ width: "80%", fontWeight: "bold" }}
            >
              <Form.Control
                placeholder="Enter the name of city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
        </StyledRow>

        <StyledRow className="mb-3">
          <Form.Group
            as={Col}
            controlId="formDepartment"
            className="d-flex justify-content-start p-0"
          >
            <Form.Select
              style={{
                padding: "1rem 0.75rem",
                width: "80%",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
              className="d-flex justify-content-start p-0"
              value={state}
              onChange={(e) => setState(e.target.value)} 
            >
              <option>Choose the department...</option>
              <option>Yvelines</option>
              <option>Seine-et-Marne</option>
              <option>Essonne</option>
              <option>Hauts-de-Seine</option>
            </Form.Select>
          </Form.Group>

          <Form.Group
            as={Col}
            controlId="formLastName"
            className="d-flex justify-content-end p-0 "
          >
            <FloatingLabel
              controlId="floatingZipCode"
              label="ZipCode"
              className="mb-3"
              style={{ width: "80%", fontWeight: "bold" }}
            >
              <Form.Control
                placeholder="Enter the name of ZipCode"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </FloatingLabel>
          </Form.Group>
        </StyledRow>

        <Button variant="primary" type="submit">
          Soumettre
        </Button>
      </Form>
    </FormContainer>
  );
}
export default Formulaire;
