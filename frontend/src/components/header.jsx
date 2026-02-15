import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../fixora-logo-assets/Fixora_Logo.png";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "white", color: "#0f172a" }}>
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="Fixora"
              style={{
                height: 34,
                objectFit: "contain",
                transform: "scale(3.2)",
                transformOrigin: "left center",
              }}
            />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit">Browse Service</Button>
          <Button color="inherit">Login</Button>
          <Button variant="contained" sx={{ ml: 1, backgroundColor: "white", color: "#1976d2" }}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
