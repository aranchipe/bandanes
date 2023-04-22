import "./style.css";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import logo from "../../assets/logo.jpg";
import CloseIcon from "@mui/icons-material/Close";
import fundoMenu from "../../assets/fundo_menu.png";

const drawerWidth = 240;
const navItems = ["Produtos", "Estampas", "Personalize", "Compre Aqui"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "center", py: 5 }}>
      {/* <Box sx={{ display: "flex", p: 3 }}>
      </Box> */}
      <img
        src={logo}
        alt="logo"
        style={{ width: "20%", borderRadius: "50%" }}
      />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box>
      <CssBaseline />
      <AppBar component="nav">
        <Box
          sx={{
            width: "100vw",
            height: "4vh",
            display: { sm: "flex", xs: "none" },
            justifyContent: "end",
            alignItems: "center",
            px: "2%",
            background: "rgb(215, 243, 253)",
            color: "#FEC2C2",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* <img src={instagram} alt="instagram" style={{ width: "25px" }} /> */}
            <Link
              href="https://instagram.com/bandanes_?igshid=YmMyMTA2M2Y="
              underline="none"
              sx={{
                color: "#FEC2C2",
                fontFamily: "font1",
                fontSize: "24px",
                ":hover": { transform: "scale(1.05)" },
              }}
              target="blank"
            >
              Siga @bandanes_
            </Link>
          </Box>
        </Box>
        <Toolbar
          sx={{
            background: "#FEC2C2",
            height: "14vh",
            display: "flex",
            justifyContent: { xs: "center", sm: "space-between" },
          }}
        >
          {
            <Box
              sx={{
                mr: 2,
                display: { sm: "none" },
                position: "absolute",
                left: "5vw",
              }}
            >
              <IconButton
                color="inherit"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          }
          <Box>
            <img
              src={logo}
              alt="logo"
              style={{
                width: "12vh",
                borderRadius: "100%",
              }}
            />
          </Box>
          <Box
            sx={{ display: { sm: "none" }, position: "absolute", right: "5vw" }}
          >
            <Link
              href="https://instagram.com/bandanes_?igshid=YmMyMTA2M2Y="
              underline="none"
              sx={{
                color: "white",
                fontFamily: "font1",
                fontSize: "16px",
                ":hover": { transform: "scale(1.05)" },
              }}
              target="blank"
            >
              @bandanes_
            </Link>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  fontFamily: "font1",
                  fontSize: "24px",
                  color: "#fff",
                  ":hover": {
                    color: "rgb(215, 243, 253)",
                    background: "transparent",
                  },
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          odalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: { xs: "100%", sm: 240 },
              backgroundImage: `url(${fundoMenu})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            },
          }}
        >
          <CloseIcon
            onClick={handleDrawerToggle}
            fontSize="large"
            sx={{
              position: "absolute",
              top: "5%",
              right: "10%",
            }}
          />
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
