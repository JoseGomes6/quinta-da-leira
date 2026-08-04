import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import Quinta from "./Quinta.jsx";
import Alojamento from "./Alojamento.jsx";
import Experiencias from "./Experiencias.jsx";
import Galeria from "./Galeria.jsx";
import Contactos from "./Contactos.jsx";
import "./index.css";
import "./i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/a-quinta" element={<Quinta />} />
        <Route path="/alojamento" element={<Alojamento />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/contactos" element={<Contactos />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
