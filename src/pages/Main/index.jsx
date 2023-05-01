import Carrossel from "../../components/Carrossel";
import Navbar from "../../components/Navbar";
import "./Main.css";
import halloween from "../../assets/halloween.png";
import halloween_pc from "../../assets/halloween_pc.png";
import novidade from "../../assets/novidade.png";
import fundo_main from "../../assets/fundo_main.png";
import Box from "@mui/material/Box";
import { Button, Typography, Grid } from "@mui/material";
import botao from "../../assets/botao.svg";
import { useEffect, useState } from "react";
import texto from "../../assets/texto.svg";
import Footer from "../../components/Footer";
import Link from "@mui/material/Link";

function Main() {
  const [indice, setIndice] = useState(0);

  return (
    <div className="Main">
      <Navbar />
      <Carrossel />
      <Grid
        container
        sx={{
          display: { xs: "flex", sm: "none" },
          width: "100vw",
          justifyContent: "center",
          gap: "5vw",
          py: "4vh",
        }}
      >
        <Grid
          item
          xs={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            alignItems: "center",
            background: "#FEC2C2",
            borderRadius: "50px",
            height: "50px",
            boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          {/* <img
            src={botao}
            alt="botao"
            style={{ width: "150px", position: "absolute" }}
          /> */}
          <Typography
            sx={{
              zIndex: 1,
              fontFamily: "font1",
              fontSize: "22px",
              color: "white",
              textShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Produtos
          </Typography>
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            alignItems: "center",
            background: "#FEC2C2",
            borderRadius: "50px",
            height: "50px",
            boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          {/* <img
            src={botao}
            alt="botao"
            style={{ width: "150px", position: "absolute" }}
          /> */}
          <Typography
            sx={{
              zIndex: 1,
              fontFamily: "font1",
              fontSize: "22px",
              color: "white",
              textShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Estampas
          </Typography>
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            alignItems: "center",
            background: "#FEC2C2",
            borderRadius: "50px",
            height: "50px",
            boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          {/* <img
            src={botao}
            alt="botao"
            style={{ width: "150px", position: "absolute" }}
          /> */}
          <Typography
            sx={{
              zIndex: 1,
              fontFamily: "font1",
              fontSize: "22px",
              color: "white",
              textShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Personalize
          </Typography>
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            alignItems: "center",
            background: "#FEC2C2",
            borderRadius: "50px",
            height: "50px",
            boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          {/* <img
            src={botao}
            alt="botao"
            style={{
              width: "150px",
              position: "absolute",
            }}
          /> */}
          <Typography
            sx={{
              zIndex: 1,
              fontFamily: "font1",
              fontSize: "22px",
              color: "white",
              textShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            Compre Aqui
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ width: "100vw", display: "flex", justifyContent: "center" }}>
        <img src={texto} alt="texto" style={{ width: "90vw" }} />
      </Box>
      <Footer />
    </div>
  );
}

export default Main;
