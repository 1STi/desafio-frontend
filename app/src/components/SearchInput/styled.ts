import styled from 'styled-components';
import Box, {BoxProps} from '../../ui/components/Box/Box';
import React from 'react';
import {FlexboxProps, fontSize, FontSizeProps} from 'styled-system';
import {boxStyled} from '../../ui/components/Box/boxStyled';
import Flex from '../../ui/components/Flex/Flex';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

export const InputBox = styled(Flex)<FlexboxProps>`
  position: relative;
  border: 1px solid #f18000;
  background-color: white;
`;

export const Input = styled.input<
  BoxProps & FontSizeProps & React.InputHTMLAttributes<HTMLInputElement>
>`
  flex: 1;
  border: none;
  background-color: transparent;
  ${fontSize}
  ${boxStyled}
`;
Input.defaultProps = {
  fontSize: 2,
  paddingY: 2,
};

export const Icon = styled(FontAwesomeIcon)<FontAwesomeIconProps & BoxProps>`
  position: absolute;
  right: 0;
  top: 0;
  ${boxStyled}
`;
Icon.defaultProps = {
  color: 'onWhite',
};
