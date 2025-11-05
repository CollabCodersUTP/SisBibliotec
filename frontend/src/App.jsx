import React from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import { LoginRegister } from "./components/LoginRegister";
import PerfilUsuario from "./components/ui/PerfilUsuario";

function App() {
  return (
    <Routes>
      {/* Layout principal con sidebar y contenido */}
      <Route path="/*" element={<AppLayout />} />

      {/* Ruta independiente para login/registro */}
      <Route path="/LoginRegister" element={<LoginRegister />} />
      <Route path="/myacount" element={<PerfilUsuario/>} />
      <Route path="/inicio" element={<AppLayout/>} />
    </Routes>
  );
}

export default App;