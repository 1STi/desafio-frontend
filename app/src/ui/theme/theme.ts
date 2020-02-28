import themeBase, {ThemeBase} from './themeBase';
import _cloneDeep from 'lodash/cloneDeep';
export type ThemeType = ReturnType<typeof buildTheme>;

export type AppTheme = ThemeBase & {};

export function buildTheme(themeVars = themeBase): AppTheme {
  return _cloneDeep({
    ...themeVars,
  });
}
