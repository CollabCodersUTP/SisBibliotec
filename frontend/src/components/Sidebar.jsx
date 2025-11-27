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
} from "@mui/material";

import {
  LocalLibrary as LocalLibraryIcon,
  MenuBook as MenuBookIcon,
  GridView as GridViewIcon,
  Person as PersonIcon,
  AccountCircle as AccountCircleIcon,
  Dashboard as DashboardIcon,
  Logout as LogoutIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

import { Link, useNavigate } from "react-router-dom";

export const drawerWidth = 240;

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

export default function Sidebar() {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
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
      {/* Logo y título */}
      <Box>
        <Box
          sx={{
            p: 2,
            display: "flex",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <LocalLibraryIcon sx={{ fontSize: 36, color: "white" }} />
          <Box sx={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: "white" }}>
              BiblioAPP
            </Typography>
            <Typography variant="body2" sx={{ color: "white", opacity: 0.8 }}>
              Sistema de Biblioteca
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ bgcolor: "rgba(255,255,255,0.3)" }} />

        {/* Menú de páginas */}
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
}
