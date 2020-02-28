import styled from 'styled-components';
import {boxStyled} from './boxStyled';
import {
  BackgroundColorProps,
  BordersProps,
  GridAreaProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  ZIndexProps,
} from 'styled-system';
import {FlexboxItemProps} from '../Flex/flexboxItem';

export type BoxProps = SpaceProps &
  LayoutProps &
  FlexboxItemProps &
  BordersProps &
  PositionProps &
  BackgroundColorProps &
  ZIndexProps &
  GridAreaProps;

const Box = styled.div<BoxProps>`
  ${boxStyled}
`;

export default Box;
