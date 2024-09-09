import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../Assets/Logo/HRNet.png";
import { NavLink } from "react-router-dom";
import "./NavBar.styled.css";

function NavBar() {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="/">
        <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="HRNet Logo"
          />
          {' '}HRNet
        </Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/" exact="true" activeClassName="selected" className="nav-link">
            Create Employee
          </Nav.Link>
        <Nav.Link as={NavLink} to="/test-current-employees" activeClassName="selected" className="nav-link">
            Test Current Employee
          </Nav.Link>
          <Nav.Link as={NavLink} to="/current-employee" activeClassName="selected" className="nav-link">
            Current Employee
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavBar;
