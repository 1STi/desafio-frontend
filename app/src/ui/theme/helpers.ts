import {css, DefaultTheme, ThemedCssFunction} from 'styled-components';
import themeBase from './themeBase';
import _get from 'lodash/get';

//Utilizar esta função em grids para definir a visibilidade das gridAreas
type DisplayAreasMap = {
  [x: string]: string[] | number[];
};

export const buildDisplayArea = (displayAreasMap: DisplayAreasMap) => (
  gridArea: string,
  displayValue = 'flex',
): string[] =>
  displayAreasMap[gridArea] &&
  // @ts-ignore
  displayAreasMap[gridArea].map((b: any) => (b ? displayValue : 'none'));

export type DisplayAreaProp = {
  displayArea: ReturnType<typeof buildDisplayArea>;
};

export function themed(themeKeyPath: string) {
  return (props: {theme: DefaultTheme}) => {
    const config = _get(props.theme, themeKeyPath);
    if (config) return css(config);
  };
}

//! Not needed now
// const {breakpoints}: Record<string, string> = themeBase;
// type MediaHelper = {
//   [b: string]: ThemedCssFunction<DefaultTheme>;
// };
// export const media: MediaHelper = Object.keys(breakpoints).reduce(
//   (acc: MediaHelper, label: string) => {
//     const mediaValue = breakpoints[label] as string;
//     acc[label] = (...args: any) => css`
//       @media (max-width: ${mediaValue}) {
//         ${css(...args)}
//       }
//     `;
//     return acc;
//   },
//   {},
// );
