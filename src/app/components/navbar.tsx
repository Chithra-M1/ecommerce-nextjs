"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTheme } from "../components/ThemeProvider"; 
import { Brightness4, Brightness7 } from "@mui/icons-material"; 

export default function ResponsiveAppBar() {
  const router = useRouter();
  const { darkMode, setDarkMode } = useTheme();

  return (
    <AppBar
      position="static"
      sx={{
        background: darkMode
          ? "linear-gradient(90deg, #333, #222)" 
          : "linear-gradient(90deg, #ff7e5f, #feb47b)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
          
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                fontWeight: 700,
                color: darkMode ? "#ffffff" : "white", 
                textDecoration: "none",
                mr: 2,
              }}
            >
              ALLORA
            </Typography>

            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              style={{ borderRadius: "50%" }}
            />
          </Box>

          
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
           
            <IconButton
              onClick={() => setDarkMode(!darkMode)}
              color="inherit"
              sx={{
                background: darkMode ? "#444" : "#f5f5f5",
                borderRadius: "50%",
                transition: "background 0.3s ease",
              }}
            >
              {darkMode ? <Brightness7 sx={{ color: "#ffd700" }} /> : <Brightness4 sx={{ color: "#000000" }} />}
            </IconButton>

            
            <IconButton onClick={() => router.push("/cart")} sx={{ color: "white" }}>
              <ShoppingCartIcon fontSize="large" />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}





