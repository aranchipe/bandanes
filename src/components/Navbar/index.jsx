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
import instagram from "../../assets/instagram.svg";

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
        style={{
          width: "20%",
          borderRadius: "50%",
          marginBottom: "3vh",
          boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
        }}
      />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "left",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "font1",
                  fontSize: "22px",
                  color: "white",
                  textShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                {item}
              </Typography>
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
      <Box
        sx={{
          width: "100vw",
          height: "4vh",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          px: "2%",
          background: "rgb(215, 243, 253)",
          color: "#FEC2C2",
          position: "absolute",
          top: "0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="https://instagram.com/bandanes_?igshid=YmMyMTA2M2Y="
            underline="none"
            sx={{
              color: "#FEC2C2",
              ":hover": { transform: "scale(1.05)" },
            }}
            target="blank"
          >
            <Typography
              sx={{
                fontFamily: "font1",
                textShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                fontSize: "20px",
              }}
            >
              @bandanes_
            </Typography>
          </Link>
        </Box>
      </Box>
      <CssBaseline />
      <AppBar sx={{ marginTop: "4vh" }} component="nav">
        <Box>
          <Toolbar
            sx={{
              background: "#FEC2C2",
              display: "flex",
              width: "100vw",
              position: "unset",
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
                  <MenuIcon fontSize="large" />
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
                  boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
                }}
              />
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
        </Box>
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
