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

// ✅ Función auxiliar tipo Shadcn (para concatenar clases)
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Catalogo() {
  const items = [
    {
      id: 1,
      titulo: "One Piece",
      genero: "Aventura",
      tipo: "Cuentos",
      estado: "En emisión",
      imagen: "https://i.redd.it/50sm6l6r05m51.jpg",
    },
    {
      id: 2,
      titulo: "Naruto",
      genero: "Acción",
      tipo: "Cuentos",
      estado: "Finalizado",
      imagen: "https://i.imgur.com/0H5RZkx.jpg",
    },
    {
      id: 3,
      titulo: "Death Note",
      genero: "Suspenso",
      tipo: "Novela",
      estado: "Finalizado",
      imagen: "https://i.imgur.com/gIoQz5M.jpg",
    },
    {
      id: 4,
      titulo: "Dune",
      genero: "Ciencia ficción",
      tipo: "Libro",
      estado: "Finalizado",
      imagen: "https://i.imgur.com/tpRytgz.jpg",
    },
    {
      id: 5,
      titulo: "Dune",
      genero: "Ciencia ficción",
      tipo: "Libro",
      estado: "En emisión",
      imagen: "https://i.imgur.com/tpRytgz.jpg",
    },
    {
      id: 6,
      titulo: "Dune",
      genero: "Ciencia ficción",
      tipo: "Novela",
      estado: "Finalizado",
      imagen: "https://i.imgur.com/tpRytgz.jpg",
    },
    {
      id: 7,
      titulo: "Dune",
      genero: "Ciencia ficción",
      tipo: "Cuento",
      estado: "Finalizado",
      imagen: "https://i.imgur.com/tpRytgz.jpg",
    },
    {
      id: 8,
      titulo: "Dune",
      genero: "Ciencia ficción",
      tipo: "Libro",
      estado: "En emisión",
      imagen: "https://i.imgur.com/tpRytgz.jpg",
    },
    {
      id: 9,
      titulo: "Dune",
      genero: "Ciencia ficción",
      tipo: "Libro",
      estado: "Finalizado",
      imagen: "https://i.imgur.com/tpRytgz.jpg",
    },
    {
      id: 10,
      titulo: "Dune",
      genero: "Ciencia ficción",
      tipo: "Novela",
      estado: "En emisión",
      imagen: "https://i.imgur.com/tpRytgz.jpg",
    },
  ];

  // 🎚️ Filtros
  const [genero, setGenero] = useState("");
  const [estado, setEstado] = useState("");
  const [tipo, setTipo] = useState("");

  // 🎞️ GIFs por tipo
  const gifsPorTipo = {
    Cuentos:
      "https://i.pinimg.com/736x/93/97/0d/93970dde9db766c47f4c39d82d2b778f.jpg",
    Novela:
      "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExanpqMHh2cDY1aGJlems3Zzh1OGpvMGR2ZGNxZjg0Z2NzcTE2dzM3dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/23hUeKyLx8eEriCx9L/giphy.gif",
    Libro:
      "https://img.freepik.com/fotos-premium/uma-biblioteca-magica-cheia-de-livros-flutuantes-e-manuscritos-encantados_1029473-316830.jpg",
  };

  const filtrados = items.filter(
    (item) =>
      (genero === "" || item.genero === genero) &&
      (estado === "" || item.estado === estado) &&
      (tipo === "" || item.tipo === tipo)
  );

  return (
    <Box sx={{ p: 3 }}>
      {/* 🎚️ Filtros */}
      <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Género</InputLabel>
          <Select value={genero} onChange={(e) => setGenero(e.target.value)} label="Género">
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="Aventura">Aventura</MenuItem>
            <MenuItem value="Acción">Acción</MenuItem>
            <MenuItem value="Suspenso">Suspenso</MenuItem>
            <MenuItem value="Ciencia ficción">Ciencia ficción</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Estado</InputLabel>
          <Select value={estado} onChange={(e) => setEstado(e.target.value)} label="Estado">
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="En emisión">En emisión</MenuItem>
            <MenuItem value="Finalizado">Finalizado</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 150 }}>
          <InputLabel>Tipo</InputLabel>
          <Select value={tipo} onChange={(e) => setTipo(e.target.value)} label="Tipo">
            <MenuItem value="">Todos</MenuItem>
            <MenuItem value="Cuentos">Cuentos</MenuItem>
            <MenuItem value="Novela">Novela Ligera</MenuItem>
            <MenuItem value="Libro">Libro</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* 📚 Catálogo */}
      <Grid container spacing={3}>
        {filtrados.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            {/* 🎴 Card */}
            <div
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
        <Typography sx={{ mt: 4, textAlign: "center" }}>
          No se encontraron resultados con esos filtros.
        </Typography>
      )}
    </Box>
  );
}
