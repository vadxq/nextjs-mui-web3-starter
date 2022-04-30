import { useContext } from 'react';

import { SettingsContext, SettingsContextValue } from '.';

export const useSettings = (): SettingsContextValue =>
  useContext(SettingsContext);
