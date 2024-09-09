import PaginationCurrentEmployees from "../../Components/EmployeeList/Pagination/Pagination";
import SearchBar from "../../Components/EmployeeList/Search/Search";
import TableCurrentEmployees from "../../Components/EmployeeList/Table/table";
import { Link } from "react-router-dom";
import { Container } from "./TestCurrentEmployees.styled";
import { useEffect, useState } from "react";
import axios from "axios";

function TestCurrentEmployees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("/Data/Data.json")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  }, []);

  return (
    <>
      <Container>
        <h1>Current Employees</h1>
        <Link to="/">Home</Link>

        <SearchBar />
        <TableCurrentEmployees
          employees={employees}
          setEmployees={setEmployees}
        />
        <PaginationCurrentEmployees />
      </Container>
    </>
  );
}
export default TestCurrentEmployees;
