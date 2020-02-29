import styled from 'styled-components';
import {gridStyled} from './gridStyled';
import {
  GridAutoColumnsProps,
  GridAutoRowsProps,
  GridColumnProps,
  GridColumnGapProps,
  GridGapProps,
  GridRowProps,
  GridRowGapProps,
  GridTemplateAreasProps,
  GridTemplateColumnsProps,
  GridTemplateRowsProps,
} from 'styled-system';

import {BoxProps} from '../Box/Box';
export type GridProps = BoxProps &
  GridAutoColumnsProps &
  GridAutoRowsProps &
  GridColumnProps &
  GridColumnGapProps &
  GridGapProps &
  GridRowProps &
  GridRowGapProps &
  GridTemplateAreasProps &
  GridTemplateColumnsProps &
  GridTemplateRowsProps;

const Grid = styled.div<GridProps>`
  display: grid;
  ${gridStyled}
`;

export default Grid;
