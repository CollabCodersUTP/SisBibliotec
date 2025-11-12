// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { LoginRegister } from "./components/LoginRegister";
import PerfilUsuario from "./components/ui/PerfilUsuario";
import Catalogo from "./components/Catalogo";
import MainContent from "./components/MainContent";

function App() {
  return (
    <Routes>
      {/* 🟣 LoginRegister SIN sidebar (Ruta base que maneja login/registro) */}
      <Route path="/*" element={<LoginRegister />} />

      {/* 🟢 TODAS las demás rutas usan AppLayout (Contenido autenticado) */}
      <Route element={<AppLayout />}>
        <Route path="/inicio" element={<MainContent />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/profile" element={<PerfilUsuario />} />
        <Route path="/account" element={<PerfilUsuario />} />
        <Route path="/dashboard" element={<MainContent />} />
      </Route>
    </Routes>
  );
}

export default App;
