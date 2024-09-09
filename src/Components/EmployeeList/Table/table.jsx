import { Table, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';


function TableCurrentEmployees() {

  const employees = useSelector((state) => state.employees.employees);

  return (

      <Container fluid>
        <div className="table-responsive">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Start Date</th>
                <th>Date of Birth</th>
                <th>Department</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
              </tr>
            </thead>
            <tbody>
              {employees.length > 0 ? (
                employees.map((employee, index) => (
                  <tr key={index}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.startDate}</td>
                    <td>{employee.birthDate}</td>
                    <td>{employee.department}</td>
                    <td>{employee.address.street}</td>
                    <td>{employee.address.city}</td>
                    <td>{employee.address.state}</td>
                    <td>{employee.address.zipCode}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9">Loading data...</td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </Container>
  );
}
export default TableCurrentEmployees;
