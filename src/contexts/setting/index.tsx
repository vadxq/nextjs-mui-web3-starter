// ** React Imports
import { createContext, useState, ReactNode } from 'react';

// ** MUI Imports
import { PaletteMode } from '@mui/material';

// ** ThemeConfig Import
import { ThemeColor } from '../../components/types';
import themeConfig from '../../configs/theme';

export type Settings = {
  mode: PaletteMode;
  themeColor: ThemeColor;
};

export type SettingsContextValue = {
  settings: Settings;
  saveSettings: (updatedSettings: Settings) => void;
};

const initialSettings: Settings = {
  themeColor: 'primary',
  mode: themeConfig.mode,
};

// ** Create Context
export const SettingsContext = createContext<SettingsContextValue>({
  saveSettings: () => null,
  settings: initialSettings,
});

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  // ** State
  const [settings, setSettings] = useState<Settings>({ ...initialSettings });

  const saveSettings = (updatedSettings: Settings) => {
    setSettings(updatedSettings);
  };

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;
