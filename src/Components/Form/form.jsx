import React, { useState } from "react";
import { Form, Col, FloatingLabel, Row } from "react-bootstrap";
import {
  StyledRow,
  StyledLabel,
  FormContainer,
  Button,
  StyledSelect,
} from "./form.styles";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../employeeSlice";

function Formulaire({ setShowModal, handleCloseModal, showModal }) {
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
    <FormContainer style={{ border: "2px solid black" }}>
      <Form onSubmit={handleSubmit} className="pb-3 pt-3 bg-white rounded">
        <StyledRow >
          <Col xs={12} md={6}>
            <Form.Group
              as={Col}
              controlId="formFirstName"
            >
              <FloatingLabel
                controlId="floatingFirstName"
                label="First Name"
                className="mb-3"
                style={{ fontWeight: "bold" }}
              >
                <Form.Control
                  type="text"
                  placeholder="Enter the first name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>

          <Col xs={12} md={6}>
            <Form.Group
              as={Col}
              controlId="formLastName"
            >
              <FloatingLabel
                controlId="floatingLastName"
                label="Last Name"
                className="mb-3"
                style={{ fontWeight: "bold" }}
              >
                <Form.Control
                  type="text"
                  placeholder="Enter the last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
        </StyledRow>

        {/* // date fields  // */}
        <StyledRow >
          <Col xs={12} md={6} style={{ padding: "1rem 0.75rem" }}>
            <Form.Group controlId="formBirthDate">
              <Form.Label className=" fw-bold">
                Date of birth
              </Form.Label>
              <Form.Control
                style={{ padding: "1rem 0.75rem" }}
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={6} style={{ padding: "1rem 0.75rem" }}>
            <Form.Group as={Col} controlId="formStartDate">
              <Form.Label className=" fw-bold">Start Date</Form.Label>
              <Form.Control
                style={{ padding: "1rem 0.75rem" }}
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </Form.Group>
          </Col>
        </StyledRow>

        {/* DEPARTMENT */}
        <StyledRow >
          <Col xs={12} style={{ padding: "1rem 0.75rem" }}>
            <Form.Group controlId="formDepartment">
              <Form.Label style={{ fontWeight: "bold" }}>Départment</Form.Label>
              <Form.Select
                style={{
                  fontWeight: "bold",
                  padding: "1rem 0.75rem",
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
            </Form.Group>
          </Col>
        </StyledRow>

        {/* //  ADRESS   //*/}
        {/* //  ADRESS   //*/}

        <Row >
          <Col xs={12} style={{ padding: "1rem 0.75rem" }}>
            <Form.Label style={{ fontWeight: "bold" }}>Address</Form.Label>
          </Col>
        </Row>

        <StyledRow className="mb-3">
          <Col xs={12} md={6}>
            <Form.Group controlId="formStreet">
              <FloatingLabel
                controlId="floatingStreet"
                label="Street"
                className="mb-3"
                style={{ fontWeight: "bold" }}
              >
                <Form.Control
                  placeholder="Enter the name of street"
                  type="text"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>

          <Col xs={12} md={6}>
            <Form.Group controlId="formCity">
              <FloatingLabel
                controlId="floatingCity"
                label="City"
                className="mb-3"
                style={{ fontWeight: "bold" }}
              >
                <Form.Control
                  placeholder="Enter the name of city"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>

          {/* Departement et Code Postal */}
          <Col xs={12} md={6}>
            <Form.Group controlId="formDepartment">
              <StyledSelect
                className="mb-3"
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option>Choose the department...</option>
                <option>Yvelines</option>
                <option>Seine-et-Marne</option>
                <option>Essonne</option>
                <option>Hauts-de-Seine</option>
              </StyledSelect>
            </Form.Group>
          </Col>

          <Col xs={12} md={6}>
            <Form.Group controlId="formZipCode">
              <FloatingLabel
                controlId="floatingZipCode"
                label="ZipCode"
                className="mb-3"
                style={{ fontWeight: "bold" }}
              >
                <Form.Control
                  placeholder="Enter the name of ZipCode"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </FloatingLabel>
            </Form.Group>
          </Col>
        </StyledRow>

        <Button variant="primary" type="submit">
          Soumettre
        </Button>
      </Form>
    </FormContainer>
  );
}
export default Formulaire;
