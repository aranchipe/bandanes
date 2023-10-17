import { Box, Button, CardMedia, Grid, Paper, Typography } from '@mui/material';
import Logo from '../../assets/logo.jpg';
export default function CardProduct() {
  return (
    <Box
      sx={{
        width: '25rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 2,
        gap: 2,
      }}
      component={Paper}
    >
      <CardMedia component="img" image={Logo} sx={{ width: '60%', height: '60%' }} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography variant="subtitle2">Bandana 01 - Desenho Scooby Doo</Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgb(127, 133, 141)', textDecorationLine: 'line-through' }}>
            R$ 35,99
          </Typography>
          <Typography variant="h6" sx={{ color: '#23242d' }}>
            R$ 28,99
          </Typography>

          <Typography variant="body2" sx={{ color: 'rgb(127, 133, 141)' }}>
            À vista no PIX
          </Typography>
        </Box>
      </Box>

      <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" fullWidth>
            Comprar
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
