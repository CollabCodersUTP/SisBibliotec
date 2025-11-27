// src/components/MainContent.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import { LayoutTextFlipDemo } from "./LayoutTextFlipDemo";
import { Typography, Box, Button } from "@mui/material";
import imgcastillo from "../assets/castillo.jpg"
import PerfilUsuario from "./ui/PerfilUsuario"

export default function MainContent() {
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <Box
              sx={{
                width: { xs: "100%", sm: "90%", md: "70%", lg: "60%" },
                textAlign: "center",
                color: "#333",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
                Bienvenido a la Biblioteca
              </Typography>

              <LayoutTextFlipDemo />

              <Typography variant="body1" sx={{ mb: 3 }}>
                Explora nuestra colección de libros, revistas y recursos digitales.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  flexWrap: "wrap",
                  mb: 3,
                }}
              >
                <Button variant="contained" color="primary">
                  Ver Catálogo
                </Button>
                <Button variant="outlined" color="primary">
                  Mi Cuenta
                </Button>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Box
                  component="img"
                  src={imgcastillo}
                  alt="Biblioteca"
                  sx={{
                    width: "100%",
                    maxWidth: "600px",
                    height: "auto",
                    borderRadius: 2,
                  }}
                />
              </Box>
            </Box>
          }
        />

        <Route
          path="/catalogo"
          element={
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Sección de Catálogo
            </Typography>
          }
        />

        <Route
          path="/myaccount"
          element={
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Sección Mi Cuenta
            </Typography>
          }
        />

        <Route
          path="/profile"
          element={
            <PerfilUsuario/>
          }
        />

        <Route
          path="/account"
          element={
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Sección Account
            </Typography>
          }
        />

        <Route
          path="/dashboard"
          element={
            <Typography variant="h4" sx={{ textAlign: "center" }}>
              Sección Dashboard
            </Typography>
          }
        />
      </Routes>
    </Box>
  );
}