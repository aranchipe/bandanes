import Box from '@mui/material/Box';
import Header from '../../components/Header/index';
import Main from '../../components/Main';
import SectionProducts from '../../components/SectionProducts';

export default function Home() {
  return (
    <Box
      sx={{
        height: '100vh',
        widht: '100vw',
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <Header />
      <Main />
      <SectionProducts />
    </Box>
  );
}
