import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: `'Inter', sans-serif`,
    subtitle1: {
      fontWeight: 600,
      fontSize: '1.8rem',
      color: '#3EA6AC',
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: '1.6rem',
      color: '#3EA6AC',
    },
    body1: {
      fontWeight: 600,
      fontSize: '1.4rem',
      color: '#23242d',
    },
    body2: {
      fontWeight: 600,
      fontSize: '1.2rem',
      color: '#3EA6AC',
    },
  },
});

export default theme;
