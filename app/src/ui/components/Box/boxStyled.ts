import {
  borders,
  color,
  compose,
  gridArea,
  layout,
  position,
  space,
  zIndex,
} from 'styled-system';
import {flexboxItem} from '../Flex/flexboxItem';

export const boxStyled = compose(
  space,
  color,
  layout,
  flexboxItem,
  borders,
  position,
  zIndex,
  gridArea,
);
