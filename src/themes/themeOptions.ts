// ** MUI Theme Provider
import { ThemeOptions } from '@mui/material';
import { deepmerge } from '@mui/utils';

// ** Theme Override Imports
import { Settings } from '../contexts/setting';
import breakpoints from './breakpoints';
import palette from './palette';

const themeOptions = (settings: Settings): ThemeOptions => {
  // ** Vars
  const { mode } = settings;

  const themeConfig = {
    palette: palette(mode),
    typography: {
      fontFamily: [
        '"Space Grotesk"',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        '"PingFang SC"',
        ' "Noto Sans"',
        '"Noto Sans CJK SC"',
        '"Microsoft YaHei"',
        'sans-serif',
      ].join(','),
    },
    breakpoints: breakpoints(),
    shape: {
      borderRadius: 6,
    },
    mixins: {
      toolbar: {
        minHeight: 64,
      },
    },
  };

  return deepmerge(themeConfig, {});
};

export default themeOptions;
