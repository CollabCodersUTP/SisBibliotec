"use client";
import React, { useState } from "react";
import {
  Avatar,
  IconButton,
  Typography,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Box,
} from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarIcon from "@mui/icons-material/Star";
import { librosData, gifsPorTipo } from "./librosData";
import DetallesLibro from "./DetallesLibro";

// ✅ Función auxiliar tipo Shadcn
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Catalogo() {
  // 🎚️ Estados
  const [genero, setGenero] = useState("");
  const [estado, setEstado] = useState("");
  const [tipo, setTipo] = useState("");
  const [libroSeleccionado, setLibroSeleccionado] = useState(null);

  const filtrados = librosData.filter(
    (item) =>
      (genero === "" || item.genero === genero) &&
      (estado === "" || item.estado === estado) &&
      (tipo === "" || item.tipo === tipo)
  );

  // 🔙 Si hay libro seleccionado, mostrar DetallesLibro
  if (libroSeleccionado) {
    return (
      <DetallesLibro
        libro={libroSeleccionado}
        onVolver={() => setLibroSeleccionado(null)}
      />
    );
  }

  // 📚 Vista del catálogo
  return (
    <Box sx={{ p: 3, bgcolor: "#000", minHeight: "100vh" }}>
      {/* 🎚️ Filtros */}
      <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel sx={{ color: "#fff" }}>Género</InputLabel>
          <Select
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            label="Género"
            sx={{
              color: "#fff",
              ".MuiOutlinedInput-notchedOutline": { borderColor: "#333" },
              "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#666" },
              ".MuiSvgIcon-root": { color: "#fff" }
            }}
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="Aventura">Aventura</MenuItem>
            <MenuItem value="Acción">Acción</MenuItem>
            <MenuItem value="Suspenso">Suspenso</MenuItem>
            <MenuItem value="Ciencia ficción">Ciencia ficción</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel sx={{ color: "#fff" }}>Estado</InputLabel>
          <Select
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            label="Estado"
            sx={{
              color: "#fff",
              ".MuiOutlinedInput-notchedOutline": { borderColor: "#333" },
              "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#666" },
              ".MuiSvgIcon-root": { color: "#fff" }
            }}
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="En emisión">En emisión</MenuItem>
            <MenuItem value="Finalizado">Finalizado</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel sx={{ color: "#fff" }}>Tipo</InputLabel>
          <Select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            label="Tipo"
            sx={{
              color: "#fff",
              ".MuiOutlinedInput-notchedOutline": { borderColor: "#333" },
              "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#666" },
              ".MuiSvgIcon-root": { color: "#fff" }
            }}
          >
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="Cuentos">Cuentos</MenuItem>
            <MenuItem value="Novela">Novela</MenuItem>
            <MenuItem value="Libro">Libro</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* 📚 Catálogo de tarjetas */}
      <Grid container spacing={3}>
        {filtrados.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            {/* 🎴 Card */}
            <div
              onClick={() => setLibroSeleccionado(item)}
              className={cn(
                "group relative cursor-pointer overflow-hidden h-96 rounded-lg shadow-xl flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800 transition-all duration-500 group-hover:scale-105",
                "bg-cover bg-center"
              )}
              style={{
                backgroundImage: `url(${gifsPorTipo[item.tipo] || gifsPorTipo["Libro"]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* 🖼️ Imagen al hacer hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  backgroundImage: `url(${item.imagen})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* 🌑 Capa oscura */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

              {/* 💬 Contenido visible */}
              <div className="relative z-10 text-gray-50 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
                <div className="flex items-center justify-between mb-2">
                  <Avatar sx={{ bgcolor: red[500], fontSize: "0.9rem" }}>
                    {item.titulo[0]}
                  </Avatar>
                  <IconButton sx={{ color: "white" }}>
                    <MoreVertIcon />
                  </IconButton>
                </div>

                <h2 className="font-bold text-lg md:text-xl">{item.titulo}</h2>
                <p className="text-sm opacity-90">
                  {item.genero} • {item.estado}
                </p>
                <p className="text-sm mt-2 opacity-90">Tipo: {item.tipo}</p>

                <div className="mt-3 flex items-center gap-2">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        sx={{
                          fontSize: 18,
                          color: i < Math.floor(item.calificacion) ? "#fbbf24" : "#6b7280"
                        }}
                      />
                    ))}
                    <Typography variant="caption" sx={{ ml: 0.5, color: "white" }}>
                      ({item.calificacion})
                    </Typography>
                  </Box>
                  <IconButton sx={{ color: "white" }}>
                    <FavoriteIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>

      {/* 🕵️‍♂️ Sin resultados */}
      {filtrados.length === 0 && (
        <Typography sx={{ mt: 4, textAlign: "center", color: "#999" }}>
          No se encontraron resultados con esos filtros.
        </Typography>
      )}
    </Box>
  );
}