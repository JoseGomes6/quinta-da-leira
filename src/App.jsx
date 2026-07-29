// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Quinta from "./Quinta";
import Alojamento from "./Alojamento";

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
        {/* Enquanto não crias os outros, podes reutilizar temporariamente ou criar os ficheiros respetivos */}
        <Route path="/experiencias" element={<Alojamento />} />
        <Route path="/galeria" element={<Alojamento />} />
        <Route path="/contactos" element={<Alojamento />} />
      </Routes>
    </Router>
  );
}

export default App;
