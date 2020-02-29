import React from 'react';
import Box, {BoxProps} from '../../../ui/components/Box/Box';
import {boxStyled} from '../../../ui/components/Box/boxStyled';
import Flex from '../../../ui/components/Flex/Flex';
import styled from 'styled-components';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import {faArrowUp, faArrowDown} from '@fortawesome/free-solid-svg-icons';
import {FlexProps, space, SpaceProps} from 'styled-system';

const MinMaxBox = styled(Flex)<FlexProps>`
  ${space}
`;

const Icon = styled(FontAwesomeIcon)<FontAwesomeIconProps & BoxProps>`
  ${boxStyled}
`;
Icon.defaultProps = {
  color: 'onWhitePrimary',
};

const Temperature = styled(Box)<BoxProps>``;
Temperature.defaultProps = {
  marginLeft: 1,
};

type MaxMinProps = FlexProps &
  SpaceProps & {
    min: number;
    max: number;
  };

const MaxMin: React.FC<MaxMinProps> = ({min, max, ...rest}) => {
  const minTx = `${min}º`;
  const maxTx = `${max}º`;
  return (
    <Flex>
      <MinMaxBox marginRight={2} {...rest}>
        <Icon icon={faArrowUp} />
        <Temperature>{maxTx}</Temperature>
      </MinMaxBox>
      <MinMaxBox>
        <Icon icon={faArrowDown} />
        <Temperature>{minTx}</Temperature>
      </MinMaxBox>
    </Flex>
  );
};
export default MaxMin;
