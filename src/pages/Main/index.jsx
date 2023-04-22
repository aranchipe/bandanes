import Carrossel from "../../components/Carrossel";
import Navbar from "../../components/Navbar";
import "./Main.css";
import halloween from "../../assets/halloween.png";
import halloween_pc from "../../assets/halloween_pc.png";
import fundo_main from "../../assets/fundo_main.png";
import Box from "@mui/material/Box";
import { Button, Typography, Grid } from "@mui/material";
import botao from "../../assets/botao.svg";

function Main() {
  return (
    <div className="Main">
      <Navbar />
      {/* <Carrossel /> */}
      <Box
        sx={{
          width: "100vw",
          height: { xs: "20vh", sm: "70vh" },
          backgroundImage: `url(${halloween_pc})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>
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
