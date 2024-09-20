import "./App.css";
import { Routes, Route } from "react-router-dom";
import CreateEmployee from "./Pages/CreateEmployee/createEmployee";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./Components/NavBar/NavBar";
import CurrentEmployer from "./Pages/CurrentEmployee/CurrentEmployees";



function App() {
  return (
    <div className="App">
      <PrimeReactProvider>
        <NavBar/>
        <Routes>
          <Route exact="true" path="/" element={<CreateEmployee />} />
          <Route path="/current-employees" element={<CurrentEmployer />} />
        </Routes>
        </PrimeReactProvider>
    </div>
  );
}

export default App;
