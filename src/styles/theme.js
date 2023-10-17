import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: `'Inter', sans-serif`,
    h5: {
      fontWeight: 600,
      fontSize: '2.2rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: '1.8rem',
    },
    subtitle2: {
      fontWeight: 600,
      fontSize: '1.6rem',
    },
    body1: {
      fontSize: '1.4rem',
      color: '#23242d',
    },
    body2: {
      fontSize: '1.2rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'contained' && {
            background: '#FEC2C2',
            fontWeight: 600,
            fontSize: '1.6rem',
            textTransform: 'none',
            color: '#ffffff',
            height: '4rem',
            boxShadow: 'none',
            ':hover': {
              background: '#23242d',
              color: '#ffffff',
            },
          }),
        }),
      },
    },
  },
});

export default theme;
