import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00F0FF',
    },
    background: {
      default: '#0A1929', // Deep navy
      paper: '#112240',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A0AEC0',
    },
  },
  typography: {
    fontFamily: 'Inter, Plus Jakarta Sans, Arial, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(90deg, #00F0FF 0%, #00BFFF 100%)',
          color: '#0A1929',
          boxShadow: '0 0 8px #00F0FF',
          transition: 'box-shadow 0.3s',
          '&:hover': {
            boxShadow: '0 0 16px #00F0FF',
            background: 'linear-gradient(90deg, #00BFFF 0%, #00F0FF 100%)',
          },
        },
      },
    },
  },
});

export default theme; 