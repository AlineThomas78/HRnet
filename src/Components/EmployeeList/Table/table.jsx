import { useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';


function TableCurrentEmployees({jsonEmployees}) {

  const employeesFromStore = useSelector((state) => state.employees.employees);
  // const employees = useSelector((state) => state.employees.employees);
  const searchTerm = useSelector((state) => state.employees.searchTerm.toLowerCase());
  const currentPage = useSelector((state) => state.employees.currentPage);
  const employeesPerPage = useSelector((state) => state.employees.employeesPerPage);

  const employees = employeesFromStore.length > 0 ? employeesFromStore : jsonEmployees;
  console.log(employeesFromStore, 'hey2')
  console.log(employees, 'hey3')

    // Gérer l'état pour le tri
    const [sortConfig, setSortConfig] = useState({ key: 'firstName', direction: 'asc' });

     // Fonction pour trier les employés
  const sortedEmployees = [...employees].sort((a, b) => {
    if (sortConfig.key === 'startDate' || sortConfig.key === 'birthDate') {
      // Si on trie par date, les convertir pour comparaison
      const dateA = new Date(a[sortConfig.key]);
      const dateB = new Date(b[sortConfig.key]);
      if (dateA < dateB) return sortConfig.direction === 'asc' ? -1 : 1;
      if (dateA > dateB) return sortConfig.direction === 'asc' ? 1 : -1;
    } else {
      // Pour les autres champs
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
    }
    return 0;
  });

     // Fonction pour gérer le tri lorsqu'une colonne est cliquée
  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Affichage de l'icône de tri
  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? '▲' : '▼';
    }
    return '⬍';
  };


  const filteredEmployees = searchTerm
  ? sortedEmployees.filter((employee) =>
      employee.firstName.toLowerCase().includes(searchTerm) ||
      employee.lastName.toLowerCase().includes(searchTerm) ||
      employee.startDate.toLowerCase().includes(searchTerm) ||
      employee.birthDate.toLowerCase().includes(searchTerm) ||
      employee.department.toLowerCase().includes(searchTerm) ||
      employee.street.toLowerCase().includes(searchTerm) ||
      employee.city.toLowerCase().includes(searchTerm) ||
      employee.state.toLowerCase().includes(searchTerm) ||
      employee.zipCode.toLowerCase().includes(searchTerm)
    )
  : sortedEmployees;

// Calculer les employés pour la page actuelle
const indexOfLastEmployee = currentPage * employeesPerPage;
const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  return (

      <Container fluid>
        <div className="table-responsive">
          <Table striped bordered hover style={{marginBottom: '0', borderRadius:'10px'}}>
            <thead>
              <tr>
              <th onClick={() => handleSort('firstName')}>
                First Name {getSortIcon('firstName')}
              </th>
              <th onClick={() => handleSort('lastName')}>
                Last Name {getSortIcon('lastName')}
              </th>
              <th onClick={() => handleSort('startDate')}>
                Start Date {getSortIcon('startDate')}
              </th>
              <th onClick={() => handleSort('birthDate')}>
                Date of Birth {getSortIcon('birthDate')}
              </th>
              <th onClick={() => handleSort('department')}>
                Department {getSortIcon('department')}
              </th>
              <th onClick={() => handleSort('street')}>
                Street {getSortIcon('street')}
              </th>
              <th onClick={() => handleSort('city')}>
                City {getSortIcon('city')}
              </th>
              <th onClick={() => handleSort('state')}>
                State {getSortIcon('state')}
              </th>
              <th onClick={() => handleSort('zipCode')}>
                Zip Code {getSortIcon('zipCode')}
              </th>
              </tr>
            </thead>
            <tbody>
            {currentEmployees.length > 0 ? (
              currentEmployees.map((employee, index) => (
                <tr key={index}>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.startDate}</td>
                    <td>{employee.birthDate}</td>
                    <td>{employee.department}</td>
                    <td>{employee.street}</td>
                    <td>{employee.city}</td>
                    <td>{employee.state}</td>
                    <td>{employee.zipCode}</td>
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
