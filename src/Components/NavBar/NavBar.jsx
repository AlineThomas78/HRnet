import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../Assets/Logo/HRNet.png";
import { NavLink } from "react-router-dom";
import "./NavBar.styled.css";

function NavBar() {
  return (
    <Navbar
      expand="sm"
      className="navbar-expand-sm"
      style={{ backgroundColor: "#2F2F2F" }}
    >
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="/" style={{ color: "white" }}>
          <img
            src={Logo}
            width="40"
            height="40"
            className="d-inline-block align-center"
            alt="HRNet Logo"
            style={{ marginRight: "0.5rem" }}
          />{" "}
          HRNet
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ backgroundColor: "white" }}
        />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              exact="true"
              className="nav-link"
              style={({ isActive }) => ({
                color: "white",
                borderBottom: isActive ? "2px solid white" : "none",
              })}
            >
              Create Employee
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/current-employees"
              className="nav-link"
              style={({ isActive }) => ({
                color: "white",
                borderBottom: isActive ? "2px solid white" : "none",
              })}
            >
              Current Employee
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
