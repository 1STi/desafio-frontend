import themeBase, {ThemeBase} from './themeBase';
import _cloneDeep from 'lodash/cloneDeep';
import {CardImageTheme} from '../components/CardImage/styled';
export type ThemeType = ReturnType<typeof buildTheme>;

export type AppTheme = ThemeBase & {
  cardImage?: Partial<CardImageTheme>;
};

export function buildTheme(themeVars = themeBase): AppTheme {
  return _cloneDeep({
    ...themeVars,
  });
}
