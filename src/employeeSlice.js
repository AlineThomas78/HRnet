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
   
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.currentPage = 1; 
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    
    setEmployeesPerPage: (state, action) => {
      state.employeesPerPage = action.payload;
    },
  },
});

export const { addEmployee, setEmployees, setSearchTerm, setCurrentPage, setEmployeesPerPage  } = employeeSlice.actions;
export default employeeSlice.reducer;