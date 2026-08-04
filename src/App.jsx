// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Quinta from "./Quinta";
import Alojamento from "./Alojamento";
import Experiencias from "./Experiencias";
import Galeria from "./Galeria";
import Contactos from "./Contactos";

// Se ainda não tiveres criados estes ficheiros, podes criá-los depois ou apontar temporariamente para o HomePage/Alojamento
// import ExperienciasPage from "./ExperienciasPage";
// import GaleriaPage from "./GaleriaPage";
// import ContactosPage from "./ContactosPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/a-quinta" element={<Quinta />} />
        <Route path="/alojamento" element={<Alojamento />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contactos" element={<Contactos />} />
      </Routes>
    </Router>
  );
}

export default App;
