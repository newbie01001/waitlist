import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00F0FF',
      light: '#33F3FF',
      dark: '#00A8B3',
    },
    secondary: {
      main: '#112240',
      light: '#1A2F5A',
      dark: '#0A1929',
    },
    background: {
      default: '#0A1929',
      paper: '#112240',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B8C7D9',
    },
  },
  typography: {
    fontFamily: '"Inter", "Plus Jakarta Sans", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 24px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #00F0FF 30%, #00A8B3 90%)',
          '&:hover': {
            background: 'linear-gradient(45deg, #00A8B3 30%, #00F0FF 90%)',
          },
        },
        outlined: {
          borderColor: '#00F0FF',
          color: '#00F0FF',
          '&:hover': {
            borderColor: '#00A8B3',
            color: '#00A8B3',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#00F0FF',
            },
            '&:hover fieldset': {
              borderColor: '#00A8B3',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00F0FF',
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(180deg, #112240 0%, #0A1929 100%)',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
        },
      },
    },
  },
}); 