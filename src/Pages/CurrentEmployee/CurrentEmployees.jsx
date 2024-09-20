import PaginationCurrentEmployees from "../../Components/EmployeeList/Pagination/Pagination";
import SearchBar from "../../Components/EmployeeList/Search/Search";
import TableCurrentEmployees from "../../Components/EmployeeList/Table/table";
import { Link } from "react-router-dom";
import { Container } from "./TestCurrentEmployees.styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function CurrentEmployer() {

  const dispatch = useDispatch();
  const employeesFromStore = useSelector((state) => state.employees.employees);
  
  // state pour stocker les données locales (Json)
  const [jsonEmployees, setJsonEmployees] = useState([]);

  useEffect(() => {
    if (employeesFromStore.length === 0) {
      axios
        .get("/Data/Data.json") 
        .then((response) => {
          setJsonEmployees(response.data); 
         
        })
        .catch((error) => {
          console.error("Erreur lors du fetching des données:", error);
        });
    }
  }, [employeesFromStore.length]);
  console.log(jsonEmployees, 'hey')


  return (
    
    <>
      <Container>
        <h1>Current Employees</h1>
        <Link to="/">Home</Link>

        <SearchBar jsonEmployees = {jsonEmployees} />
        <TableCurrentEmployees jsonEmployees={jsonEmployees}/>
        <PaginationCurrentEmployees jsonEmployees = {jsonEmployees} />
      </Container>
    </>
  );
}
export default CurrentEmployer;
