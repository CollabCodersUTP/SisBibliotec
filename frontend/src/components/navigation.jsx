import * as React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
  Divider,
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
} from "@mui/material";

import {
  Menu as MenuIcon,
  LocalLibrary as LocalLibraryIcon,
  MenuBook as MenuBookIcon,
  Dashboard as DashboardIcon,
  Logout as LogoutIcon,
  AccountCircle as AccountCircleIcon,
  GridView as GridViewIcon,
  Person as PersonIcon,
} from "@mui/icons-material";

import { Link, Routes, Route, useNavigate } from "react-router-dom";
import { LayoutTextFlipDemo } from "./LayoutTextFlipDemo";

const drawerWidth = 240;

const pages = [
  { text: "Inicio", icon: <MenuBookIcon />, path: "/inicio" },
  { text: "Catálogo", icon: <GridViewIcon />, path: "/catalogo" },
  { text: "Mi Cuenta", icon: <PersonIcon />, path: "/myaccount" },
];

const settings = [
  { text: "Profile", icon: <AccountCircleIcon />, path: "/profile" },
  { text: "Account", icon: <DashboardIcon />, path: "/account" },
  { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { text: "Logout", icon: <LogoutIcon />, path: "/LoginRegister" },
];

export default function ResponsiveSidebar() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const drawerContent = (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        bgcolor: "#1976d2",
        color: "white",
      }}
    >
      <Box>
        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 1.5,
          }}
        >
          <LocalLibraryIcon sx={{ fontSize: 36, color: "white" }} />
          <Box
            sx={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, color: "white" }}>
              BiblioAPP
            </Typography>
            <Typography variant="body2" sx={{ color: "white", opacity: 0.8 }}>
              Sistema de Biblioteca
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ bgcolor: "rgba(255,255,255,0.3)" }} />
        <List>
          {pages.map((page) => (
            <ListItem key={page.text} disablePadding>
              <ListItemButton
                component={Link}
                to={page.path}
                sx={{
                  color: "white",
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" },
                }}
                onClick={() => setMobileOpen(false)}
              >
                <ListItemIcon sx={{ color: "white" }}>{page.icon}</ListItemIcon>
                <ListItemText primary={page.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Usuario */}
      <Box sx={{ textAlign: "center", mb: 2 }}>
        <Tooltip title="Abrir menú de usuario">
          <IconButton onClick={handleOpenUserMenu}>
            <Avatar alt="Usuario" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>

        <Menu
          anchorEl={anchorElUser}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
        >
          {settings.map((setting) => (
            <MenuItem
              key={setting.text}
              onClick={() => {
                handleCloseUserMenu();
                navigate(setting.path);
              }}
            >
              <ListItemIcon>{setting.icon}</ListItemIcon>
              <ListItemText>{setting.text}</ListItemText>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#f5f5f5" }}>
      {/* Barra superior móvil */}
      <AppBar
        position="fixed"
        sx={{ display: { sm: "none" }, backgroundColor: "#1976d2" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Biblioteca APP
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer escritorio */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            position: "relative",
            backgroundColor: "#1976d2",
            color: "white",
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>

      {/* Drawer móvil */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#1976d2",
            color: "white",
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Contenido principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 4 },
          mt: { xs: 7, sm: 0 },
          width: { xs: "100%", sm: `calc(100% - ${drawerWidth}px)` },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <Box sx={{ textAlign: "center", color: "#333" }}>
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
                  Bienvenido a la Biblioteca
                </Typography>
                <LayoutTextFlipDemo/>

                <Typography variant="body1" sx={{ mb: 2 }}>
                  Explora nuestra colección de libros, revistas y recursos
                  digitales.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 2,
                    mb: 2,
                  }}
                >
                  <button className="btn">Ver Catálogo</button>
                  <button className="btn">Mi Cuenta</button>
                </Box>

                <img
                  src="/ruta-de-tu-imagen.jpg"
                  alt="Biblioteca"
                  style={{ maxWidth: "100%", borderRadius: "8px" }}
                />
              </Box>
            }
          />
          <Route
            path="/inicio"
            element={<Typography variant="h4">Sección de Inicio</Typography>}
          />
          <Route
            path="/catalogo"
            element={<Typography variant="h4">Sección de Catálogo</Typography>}
          />
          <Route
            path="/myaccount"
            element={<Typography variant="h4">Sección Mi Cuenta</Typography>}
          />
          <Route
            path="/profile"
            element={<Typography variant="h4">Sección Profile</Typography>}
          />
          <Route
            path="/account"
            element={<Typography variant="h4">Sección Account</Typography>}
          />
          <Route
            path="/dashboard"
            element={<Typography variant="h4">Sección Dashboard</Typography>}
          />
        </Routes>
      </Box>
    </Box>
  );
}
