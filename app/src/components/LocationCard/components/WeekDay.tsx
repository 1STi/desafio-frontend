import {color, ColorProps, FlexProps, space, SpaceProps} from 'styled-system';
import React from 'react';
import Box, {BoxProps} from '../../../ui/components/Box/Box';
import Flex from '../../../ui/components/Flex/Flex';
import styled from 'styled-components';

const Cell = styled(Box)<BoxProps & SpaceProps & ColorProps>`
  text-align: center;
  flex: 1;
  ${space}
  ${color}
`;

type MaxMinProps = BoxProps &
  SpaceProps & {
    day: string;
    min: number;
    max: number;
  };

const WeekDay: React.FC<MaxMinProps> = ({day, min, max, ...rest}) => {
  return (
    <Flex {...rest} flexDirection={'column'}>
      <Cell>{day}</Cell>
      <Cell marginTop={1} color={'onWhitePrimary'}>
        {min}º&nbsp;&nbsp;{max}º
      </Cell>
    </Flex>
  );
};

export default WeekDay;
