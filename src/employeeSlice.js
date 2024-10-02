import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [],
  searchTerm: '', 
  currentPage: 1,   
  employeesPerPage: 10, 
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
    setEmployees: (state, action) => {
      state.employees = action.payload; // Remplacer tous les employés
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.currentPage = 1; // Réinitialiser la page lors d'une recherche
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    // Nouvelle action pour définir le nombre d'employés par page
    setEmployeesPerPage: (state, action) => {
      state.employeesPerPage = action.payload;
    },
  },
});

export const { addEmployee, setEmployees, setSearchTerm, setCurrentPage, setEmployeesPerPage  } = employeeSlice.actions;
export default employeeSlice.reducer;