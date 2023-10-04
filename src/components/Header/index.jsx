import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { CardMedia, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import LogoBandanes from '../../assets/logo.jpg';

export default function Header() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '10rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 4,
        py: 1,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <CardMedia component="img" image={LogoBandanes} sx={{ width: '8rem' }} />

        <Box sx={{ display: 'flex', gap: 4 }}>
          <Typography variant="body1" sx={{ cursor: 'pointer' }}>
            Sobre
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ cursor: 'pointer' }}>
              Produtos
            </Typography>
            <KeyboardArrowDownIcon sx={{ fontSize: '2rem', color: '#23242d', cursor: 'pointer' }} />
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <Typography variant="body1" sx={{ cursor: 'pointer' }}>
          Contact
        </Typography>

        <AddShoppingCartIcon sx={{ fontSize: '2rem', color: '#23242d', cursor: 'pointer' }} />
      </Box>
    </Box>
  );
}
