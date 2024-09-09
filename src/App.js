import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreateEmployee from "./Pages/CreateEmployee/createEmployee";
import CurrentEmployee from "./Pages/CurrentEmployees/CurrentEmployee";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import TestCurrentEmployees from "./Pages/TestCurrentEmployees/TestCurrentEmployees";
import NavBar from "./Components/NavBar/NavBar";


function App() {
  return (
    <div className="App">
      <PrimeReactProvider>
        <NavBar/>
        <Routes>
          <Route exact="true" path="/" element={<CreateEmployee />} />
          <Route path="/current-employee" element={<CurrentEmployee />} />
          <Route path="/test-current-employees" element={<TestCurrentEmployees />} />
        </Routes>
        </PrimeReactProvider>
    </div>
  );
}

export default App;
