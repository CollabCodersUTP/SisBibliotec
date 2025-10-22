import React, { useState } from "react";
import { Box, Drawer, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const drawerWidth = 180;

export default function AppLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      {/* AppBar móvil */}
      <AppBar
        position="fixed"
        sx={{ display: { xs: "block", sm: "none" }, zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Biblioteca APP
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: 0,
        }}
      >
        {/* Permanente en desktop/tablet */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
          }}
          open
        >
          <Sidebar />
        </Drawer>

        {/* Temporal en móvil */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
          }}
        >
          <Sidebar />
        </Drawer>
      </Box>

      {/* MainContent */}
      <Box
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3 },
          mt: { xs: 7, sm: 0 },
          minWidth: 0,
        }}
      >
        <MainContent />
      </Box>
    </Box>
  );
}