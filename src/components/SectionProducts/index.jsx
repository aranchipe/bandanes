import { Box, Typography } from '@mui/material';
import CardProduct from '../CardProduct';
export default function SectionProducts() {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 10,
        py: 1,
        gap: 4,
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h5" sx={{ cursor: 'pointer' }}>
          Mais vendidos
        </Typography>
        <Typography variant="h5" sx={{ cursor: 'pointer' }}>
          Ver todos
        </Typography>
      </Box>

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </Box>
    </Box>
  );
}
