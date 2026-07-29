import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import Quinta from "./Quinta.jsx"; // Importa o componente da Quinta
import Alojamento from "./Alojamento.jsx"; // Importa o componente do Alojamento
import Galeria from "./Galeria.jsx"; // Importa o componente da Quinta
import "./index.css";
import "./i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/a-quinta" element={<Quinta />} />{" "}
        {/* Agora aponta para Quinta */}
        <Route path="/alojamento" element={<Alojamento />} />{" "}
        <Route path="/galeria" element={<Galeria />} />{" "}
        {/* Agora aponta para Alojamento */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
