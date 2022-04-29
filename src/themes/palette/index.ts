// ** Type Imports
import { PaletteMode } from '@mui/material';

const DefaultPalette = (mode: PaletteMode) => {
  // ** Vars
  const lightColor = '#374BFF';
  const darkColor = 'rgba(55, 75, 255, 0.4)';
  const mainColor = mode === 'light' ? lightColor : darkColor;

  return {
    customColors: {
      main: mainColor,
    },
    common: {
      black: '#000',
      white: '#FFF',
      overlay: 'rgba(0, 0, 0, 0.4)',
    },
    mode,
    grey: {
      50: '#fff',
      100: 'rgba(0, 0, 0, 0.04)',
      200: 'rgba(0, 0, 0, 0.08)',
      300: 'rgba(0, 0, 0, 0.12)',
      400: 'rgba(0, 0, 0, 0.16)',
      500: 'rgba(0, 0, 0, 0.24)',
      600: 'rgba(0, 0, 0, 0.4)',
      700: 'rgba(0, 0, 0, 0.6)',
      800: 'rgba(0, 0, 0, 0.8)',
      900: '#000',
    },
    text: {
      primary: `rgba(${mainColor}, 0.87)`,
      secondary: `rgba(${mainColor}, 0.68)`,
      disabled: `rgba(${mainColor}, 0.38)`,
    },
    background: {
      paper: mode === 'light' ? '#FFF' : '#312D4B',
      default: mode === 'light' ? '#F4F5FA' : '#28243D',
    },
  };
};

export default DefaultPalette;
