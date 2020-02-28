import Box, {BoxProps} from '../Box/Box';
import styled from 'styled-components';
import {flex} from 'styled-system';

const Flex = styled(Box)<BoxProps>`
  display: flex;
  ${flex}
`;
export default Flex;
