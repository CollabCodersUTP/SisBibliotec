"use client";
import React, { useState } from "react";
import {
  IconButton,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import StarIcon from "@mui/icons-material/Star";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function DetallesLibro({ libro, onVolver }) {
  const [tabActiva, setTabActiva] = useState("sinopsis");

  return (
    <Box sx={{ p: 3, bgcolor: "#000", minHeight: "100vh" }}>
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        {/* Botón de regreso */}
        <IconButton
          onClick={onVolver}
          sx={{
            mb: 3,
            color: "#fff",
            bgcolor: "#1a1a1a",
            "&:hover": { bgcolor: "#2a2a2a" }
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        {/* Grid principal */}
        <Grid container spacing={4}>
          {/* Columna izquierda: Imagen y compra */}
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={libro.imagen}
              alt={libro.titulo}
              sx={{
                width: "100%",
                borderRadius: 2,
                boxShadow: 3,
                mb: 3
              }}
            />

            {/* Panel de compra */}
            <Box sx={{
              bgcolor: "#1a1a1a",
              borderRadius: 2,
              p: 3,
              border: "1px solid #333"
            }}>
              <Typography variant="h4" sx={{ color: "#4ade80", mb: 2 }}>
                {libro.precio}
              </Typography>

              <Box sx={{
                bgcolor: "#4ade80",
                color: "#000",
                py: 1.5,
                borderRadius: 1,
                textAlign: "center",
                fontWeight: "bold",
                mb: 2,
                cursor: "pointer",
                "&:hover": { bgcolor: "#22c55e" }
              }}>
                Comprar ahora
              </Box>

              <Box sx={{
                border: "1px solid #333",
                color: "#fff",
                py: 1.5,
                borderRadius: 1,
                textAlign: "center",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                "&:hover": { bgcolor: "#1a1a1a" }
              }}>
                <FavoriteIcon sx={{ fontSize: 20 }} />
                Añadir a favoritos
              </Box>

              <Box sx={{ mt: 3, color: "#999", fontSize: 14 }}>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  <strong style={{ color: "#fff" }}>Disponibilidad:</strong> {libro.disponibilidad}
                </Typography>
                <Typography variant="body2">
                  <strong style={{ color: "#fff" }}>Formatos:</strong> {libro.formatosDisponibles.join(", ")}
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Columna derecha: Información */}
          <Grid item xs={12} md={8}>
            <Box sx={{
              bgcolor: "#1a1a1a",
              borderRadius: 2,
              p: 4,
              border: "1px solid #333"
            }}>
              {/* Título */}
              <Typography variant="h3" sx={{ color: "#fff", mb: 2 }}>
                {libro.titulo}
              </Typography>

              {/* Info rápida */}
              <Box sx={{ display: "flex", gap: 3, mb: 3, flexWrap: "wrap", color: "#999" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <PersonIcon />
                  <Typography variant="body2">{libro.autor}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <CalendarTodayIcon />
                  <Typography variant="body2">{libro.añoPublicacion}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <MenuBookIcon />
                  <Typography variant="body2">
                    {libro.volumenes || libro.paginas} {libro.volumenes ? "volúmenes" : "páginas"}
                  </Typography>
                </Box>
              </Box>

              {/* Calificación */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    sx={{
                      fontSize: 28,
                      color: i < Math.floor(libro.calificacion) ? "#fbbf24" : "#6b7280"
                    }}
                  />
                ))}
                <Typography variant="h6" sx={{ color: "#fff", ml: 1 }}>
                  {libro.calificacion} / 5.0
                </Typography>
                <Box sx={{
                  ml: 2,
                  px: 2,
                  py: 0.5,
                  borderRadius: 5,
                  bgcolor: libro.estado === "Finalizado" ? "#22c55e" : "#eab308",
                  color: "#000",
                  fontSize: 14
                }}>
                  {libro.estado}
                </Box>
              </Box>

              {/* Tabs */}
              <Box sx={{ borderBottom: "1px solid #333", mb: 3 }}>
                <Box sx={{ display: "flex", gap: 2 }}>
                  {["sinopsis", "detalles", "curiosidades"].map((tab) => (
                    <Box
                      key={tab}
                      onClick={() => setTabActiva(tab)}
                      sx={{
                        px: 2,
                        py: 1,
                        cursor: "pointer",
                        color: tabActiva === tab ? "#4ade80" : "#999",
                        borderBottom: tabActiva === tab ? "2px solid #4ade80" : "none",
                        textTransform: "capitalize",
                        "&:hover": { color: "#fff" }
                      }}
                    >
                      {tab}
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Contenido de tabs */}
              <Box sx={{ color: "#e5e5e5" }}>
                {tabActiva === "sinopsis" && (
                  <Box>
                    <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                      {libro.sinopsis}
                    </Typography>

                    <Typography variant="h6" sx={{ color: "#fff", mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
                      <AutoAwesomeIcon /> Temas principales
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 3 }}>
                      {libro.temas.map((tema, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            px: 2,
                            py: 0.5,
                            borderRadius: 5,
                            bgcolor: "#4ade80",
                            color: "#000",
                            fontSize: 14,
                            border: "1px solid #22c55e"
                          }}
                        >
                          {tema}
                        </Box>
                      ))}
                    </Box>

                    <Typography variant="h6" sx={{ color: "#fff", mb: 2 }}>
                      Personajes principales
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {libro.personajesPrincipales.map((personaje, idx) => (
                        <Box
                          key={idx}
                          sx={{
                            px: 2,
                            py: 0.5,
                            borderRadius: 5,
                            bgcolor: "#ec4899",
                            color: "#fff",
                            fontSize: 14,
                            border: "1px solid #db2777"
                          }}
                        >
                          {personaje}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )}

                {tabActiva === "detalles" && (
                  <Box>
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                      <Grid item xs={6}>
                        <Typography variant="body2" sx={{ color: "#999", mb: 0.5 }}>
                          Editorial
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#fff" }}>
                          {libro.editorial}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" sx={{ color: "#999", mb: 0.5 }}>
                          ISBN
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#fff" }}>
                          {libro.isbn}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" sx={{ color: "#999", mb: 0.5 }}>
                          Idioma
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#fff" }}>
                          {libro.idioma}
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant="body2" sx={{ color: "#999", mb: 0.5 }}>
                          Género
                        </Typography>
                        <Typography variant="body1" sx={{ color: "#fff" }}>
                          {libro.genero}
                        </Typography>
                      </Grid>
                      {libro.ilustrador && (
                        <Grid item xs={12}>
                          <Typography variant="body2" sx={{ color: "#999", mb: 0.5 }}>
                            Ilustrador
                          </Typography>
                          <Typography variant="body1" sx={{ color: "#fff" }}>
                            {libro.ilustrador}
                          </Typography>
                        </Grid>
                      )}
                    </Grid>

                    <Typography variant="h6" sx={{ color: "#fff", mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
                      <EmojiEventsIcon /> Premios y reconocimientos
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, color: "#e5e5e5" }}>
                      {libro.premios.map((premio, idx) => (
                        <Typography component="li" key={idx} variant="body2" sx={{ mb: 1 }}>
                          {premio}
                        </Typography>
                      ))}
                    </Box>
                  </Box>
                )}

                {tabActiva === "curiosidades" && (
                  <Box>
                    <Typography variant="h6" sx={{ color: "#fff", mb: 3 }}>
                      ¿Sabías que...?
                    </Typography>
                    <Box component="ul" sx={{ pl: 0, listStyle: "none" }}>
                      {libro.datosInteresantes.map((dato, idx) => (
                        <Box
                          key={idx}
                          component="li"
                          sx={{
                            mb: 2,
                            p: 2,
                            bgcolor: "#0a0a0a",
                            borderRadius: 1,
                            border: "1px solid #222",
                            display: "flex",
                            gap: 2,
                            alignItems: "start"
                          }}
                        >
                          <AutoAwesomeIcon sx={{ color: "#fbbf24", flexShrink: 0, mt: 0.5 }} />
                          <Typography variant="body1" sx={{ color: "#e5e5e5", lineHeight: 1.6 }}>
                            {dato}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}