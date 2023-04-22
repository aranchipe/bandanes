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

function Main() {
  const [indice, setIndice] = useState(0);

  setInterval(() => {
    if (indice === 0) {
      setIndice(1);
    } else {
      setIndice(0);
    }
  }, 5000);

  return (
    <div className="Main">
      <Navbar />
      {/* <Carrossel /> */}
      {/* <Box
        sx={{
          width: "100vw",
          height: { xs: "20vh", sm: "70vh" },
          backgroundImage: `url(${indice === 0 ? halloween_pc : novidade})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box> */}
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
    </div>
  );
}

export default Main;
