// src/components/Layout.jsx
import React from "react";
import Sidebar from "./Sidebar"; // tu sidebar
import "./Layout.css"; // si quieres estilos generales

const Layout = () => {
  return (
    <div className="layout-container">
      <Sidebar />
      <main className="content">
        <Outlet /> {/* Aquí se muestran las páginas: Catalogo, Perfil, etc */}
      </main>

    </div>
  );
};

export default Layout;
