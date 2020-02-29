import styled from 'styled-components';
import {border, BordersProps, space, SpaceProps} from 'styled-system';

export const Divider = styled.div<BordersProps & SpaceProps>`
  border-top: 2px solid #fff;
  display: block;
  height: 1px;
  ${border}
  ${space}
`;
Divider.defaultProps = {
  borderColor: 'blue',
};
