"use client";
import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import { useTheme } from "../components/ThemeProvider";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  const { darkMode } = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        background: darkMode
          ? "linear-gradient(90deg, #333, #222)" 
          : "linear-gradient(90deg, #ff7e5f, #feb47b)", 
        color: darkMode ? "#ffffff" : "white",
        py: 3,
        mt: 5,
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
       
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          ALLORA
        </Typography>

        
        <Typography variant="body2" sx={{ mt: 1 }}>
          © {new Date().getFullYear()} All Rights Reserved.
        </Typography>

      
        <Box sx={{ mt: 2 }}>
          {["Home", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href="#"
              color="inherit"
              sx={{
                mx: 1,
                textDecoration: "none",
                fontWeight: "bold",
                color: darkMode ? "#FFD700" : "white",
              }}
            >
              {item}
            </Link>
          ))}
        </Box>

       
        <Box sx={{ mt: 2 }}>
          <IconButton href="https://instagram.com" target="_blank" sx={{ color: darkMode ? "#FFD700" : "white" }}>
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton href="https://twitter.com" target="_blank" sx={{ color: darkMode ? "#FFD700" : "white" }}>
            <TwitterIcon fontSize="large" />
          </IconButton>
          <IconButton href="https://wa.me/yourwhatsappnumber" target="_blank" sx={{ color: darkMode ? "#FFD700" : "white" }}>
            <WhatsAppIcon fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}


