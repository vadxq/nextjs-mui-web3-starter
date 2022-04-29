// ** Theme Type Import
import { Theme } from '@mui/material/styles';

const Typography = (theme: Theme) => {
  return {
    h1: {
      fontWeight: 700,
      letterSpacing: '-1.5px',
      color: theme.palette.text.primary,
    },
    h2: {
      fontWeight: 600,
      letterSpacing: '-0.5px',
      color: theme.palette.text.primary,
    },
    h3: {
      fontWeight: 600,
      letterSpacing: 0,
      color: theme.palette.text.primary,
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '0.25px',
      color: theme.palette.text.primary,
    },
    h5: {
      fontWeight: 600,
      letterSpacing: 0,
      color: theme.palette.text.primary,
    },
    h6: {
      fontWeight: 600,
      letterSpacing: '0.15px',
      color: theme.palette.text.primary,
    },
    subtitle1: {
      fontWeight: 600,
      letterSpacing: '0.15px',
      color: theme.palette.text.primary,
    },
    subtitle2: {
      fontWeight: 400,
      letterSpacing: '0.1px',
      color: theme.palette.text.secondary,
    },
    body1: {
      fontWeight: 400,
      letterSpacing: '0.15px',
      color: theme.palette.text.primary,
    },
    body2: {
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: '0.15px',
      color: theme.palette.text.secondary,
    },
    button: {
      letterSpacing: '0.3px',
      color: theme.palette.text.primary,
    },
    caption: {
      letterSpacing: '0.4px',
      color: theme.palette.text.secondary,
    },
    overline: {
      letterSpacing: '1px',
      color: theme.palette.text.secondary,
    },
  };
};

export default Typography;
