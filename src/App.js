import './App.css';
import { Routes, Route } from "react-router-dom";
import CreateEmployee from './Pages/CreateEmployee/createEmployee';


function App() {
  return (
    <div className="App">
       <Routes>
       <Route exact="true" path="/" element={<CreateEmployee />} />

       </Routes>
      
    </div>
  );
}

export default App;
