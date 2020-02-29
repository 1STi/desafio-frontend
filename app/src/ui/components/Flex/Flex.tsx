import Box, {BoxProps} from '../Box/Box';
import styled from 'styled-components';
import {flexbox, FlexboxProps} from 'styled-system';

const Flex = styled(Box)<BoxProps & FlexboxProps>`
  display: flex;
  ${flexbox}
`;
export default Flex;
