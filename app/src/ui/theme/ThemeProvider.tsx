import React from 'react';
import {ThemeProvider as STYThemeProvider} from 'styled-components';

import {ThemeType} from './theme';

interface ThemeProviderProps {
  theme: ThemeType;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  children,
}) => {
  return <STYThemeProvider theme={theme}>{children}</STYThemeProvider>;
};
