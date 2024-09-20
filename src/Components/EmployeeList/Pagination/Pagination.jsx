import Pagination from "react-bootstrap/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage, setEmployeesPerPage } from "../../../employeeSlice.js";
import { Form } from "react-bootstrap";

function PaginationCurrentEmployees({ jsonEmployees }) {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.employees.currentPage);
  const employeesFromStore = useSelector((state) => state.employees.employees);
  const employeesPerPage = useSelector(
    (state) => state.employees.employeesPerPage
  );
  const searchTerm = useSelector((state) =>
    state.employees.searchTerm.toLowerCase()
  );

  // Choisir les données à utiliser
  const employees =
    employeesFromStore.length > 0 ? employeesFromStore : jsonEmployees;

  // Filtrer les employés selon le terme de recherche
  const filteredEmployees = searchTerm
    ? employees.filter(
        (employee) =>
          employee.firstName.toLowerCase().includes(searchTerm) ||
          employee.lastName.toLowerCase().includes(searchTerm) ||
          employee.startDate.includes(searchTerm) ||
          employee.birthDate.includes(searchTerm) ||
          employee.department.toLowerCase().includes(searchTerm) ||
          employee.street.toLowerCase().includes(searchTerm) ||
          employee.city.toLowerCase().includes(searchTerm) ||
          employee.state.toLowerCase().includes(searchTerm) ||
          employee.zipCode.includes(searchTerm)
      )
    : employees;

  // Calculer le nombre total de pages basé sur les résultats filtrés
  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);

  // Calculer les indices de début et de fin
  const startIndex = (currentPage - 1) * employeesPerPage + 1;
  const endIndex = Math.min(
    currentPage * employeesPerPage,
    filteredEmployees.length
  );

  const handlePageChange = (pageNumber) => {
    dispatch(setCurrentPage(pageNumber));
  };

  const handleEmployeesPerPageChange = (e) => {
    dispatch(setEmployeesPerPage(Number(e.target.value)));
    dispatch(setCurrentPage(1)); // Remet à la première page après changement du nombre d'éléments par page
  };

  // Créer les items de pagination
  const paginationItems = [];
  for (let page = 1; page <= totalPages; page++) {
    paginationItems.push(
      <Pagination.Item
        key={page}
        active={page === currentPage}
        onClick={() => handlePageChange(page)}
      >
        {page}
      </Pagination.Item>
    );
  }

  return (
    <>
      <div className="container-fluid containerShowing d-flex justify-content-between p-3">
        <div className="d-flex justify-content-between align-items-center fw-bold">
          <span>
            Showing {startIndex} to {endIndex} of {filteredEmployees.length}{" "}
            entries
          </span>
        </div>
        <div className="containerPagination">
          <Pagination
            style={{ marginBottom: "0" }}
            className="pagination-responsive"
          >
            {/* Boutons pour mobile (affichage minimal) */}
            <div className="d-block d-sm-none">
              <Pagination.First
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1 || totalPages === 0}
              />
              <Pagination.Prev
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1 || totalPages === 0}
              />
              <Pagination.Item active>{currentPage}</Pagination.Item>
              <Pagination.Next
                onClick={() =>
                  handlePageChange(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages || totalPages === 0}
              />
              <Pagination.Last
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages || totalPages === 0}
              />
            </div>

            {/* Pagination complète pour les écrans plus grands */}
            <div className="d-none d-sm-flex">
              <Pagination.First
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1 || totalPages === 0}
              />
              <Pagination.Prev
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1 || totalPages === 0}
              />
              {paginationItems}{" "}
              {/* Montre tous les items pour les écrans larges */}
              <Pagination.Next
                onClick={() =>
                  handlePageChange(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages || totalPages === 0}
              />
              <Pagination.Last
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages || totalPages === 0}
              />
            </div>
          </Pagination>

          {/* Sélection pour les entrées par page */}
          <div className="d-flex justify-content-between align-items-center fw-bold">
            <div className="entries-select">
              <Form.Select
                id="entriesSelect"
                value={employeesPerPage}
                onChange={handleEmployeesPerPageChange}
                className="form-select-sm"
                style={{
                  width: "70px",
                  padding: "0.50rem",
                  color: "#0d6efd",
                  fontWeight: "bold",
                }}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </Form.Select>
              <span className="ms-2">entries</span>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default PaginationCurrentEmployees;
