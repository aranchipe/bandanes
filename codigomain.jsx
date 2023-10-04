import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import texto from '../../assets/texto.svg';
import Carrossel from '../../components/Carrossel';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import './Main.css';

function Main() {
  const [indice, setIndice] = useState(0);

  return (
    <div className="Main">
      <Navbar />

      <Carrossel />

      <Grid
        container
        sx={{
          display: { xs: 'flex', sm: 'none' },
          width: '100vw',
          justifyContent: 'center',
          gap: '5vw',
          py: '4vh',
        }}
      >
        <Grid
          item
          xs={5}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            alignItems: 'center',
            background: '#FEC2C2',
            borderRadius: '50px',
            height: '50px',
            boxShadow: '0px 5px 4px rgba(0, 0, 0, 0.25)',
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
              fontFamily: 'font1',
              fontSize: '22px',
              color: 'white',
              textShadow: '0px 5px 4px rgba(0, 0, 0, 0.25)',
            }}
          >
            Produtos
          </Typography>
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            alignItems: 'center',
            background: '#FEC2C2',
            borderRadius: '50px',
            height: '50px',
            boxShadow: '0px 5px 4px rgba(0, 0, 0, 0.25)',
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
              fontFamily: 'font1',
              fontSize: '22px',
              color: 'white',
              textShadow: '0px 5px 4px rgba(0, 0, 0, 0.25)',
            }}
          >
            Estampas
          </Typography>
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            alignItems: 'center',
            background: '#FEC2C2',
            borderRadius: '50px',
            height: '50px',
            boxShadow: '0px 5px 4px rgba(0, 0, 0, 0.25)',
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
              fontFamily: 'font1',
              fontSize: '22px',
              color: 'white',
              textShadow: '0px 5px 4px rgba(0, 0, 0, 0.25)',
            }}
          >
            Personalize
          </Typography>
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
            alignItems: 'center',
            background: '#FEC2C2',
            borderRadius: '50px',
            height: '50px',
            boxShadow: '0px 5px 4px rgba(0, 0, 0, 0.25)',
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
              fontFamily: 'font1',
              fontSize: '22px',
              color: 'white',
              textShadow: '0px 5px 4px rgba(0, 0, 0, 0.25)',
            }}
          >
            Compre Aqui
          </Typography>
        </Grid>
      </Grid>

      <Box
        sx={{
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            width: { xs: '90vw', sm: '20vw' },
          }}
        >
          <img src={texto} alt="texto" style={{ width: '100%' }} />
        </Box>
      </Box>

      <Box
        sx={{
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '30vh',
        }}
      >
        <Typography sx={{ fontSize: '40px' }}>Mensagens</Typography>
      </Box>

      <Footer />
    </div>
  );
}

export default Main;
