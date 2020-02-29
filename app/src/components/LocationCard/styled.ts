import Box, {BoxProps} from '../../ui/components/Box/Box';
import styled from 'styled-components';
import {
  border,
  BordersProps,
  color,
  ColorProps,
  flex,
  flexbox,
  FlexboxProps,
  FlexProps,
  fontSize,
  FontSizeProps,
  fontStyle,
  FontStyleProps,
  fontWeight,
  FontWeightProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from 'styled-system';
import Flex from '../../ui/components/Flex/Flex';
import {
  flexboxItem,
  FlexboxItemProps,
} from '../../ui/components/Flex/flexboxItem';
import React from 'react';
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import {boxStyled} from '../../ui/components/Box/boxStyled';

export const CardWrapper = styled(Box)<FlexProps & LayoutProps>`
  position: relative;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: left;
  box-shadow: 1px 4px 3px 1px rgba(0,0,0,0.1);
  ${flex}
  ${layout}
  ${color}
`;

CardWrapper.defaultProps = {
  color: 'onWhite',
};

export const Title = styled(Box)<FontSizeProps & SpaceProps & ColorProps>`
  font-size: 12px;
  font-weight: bold;
  ${fontSize}
  ${space}
  ${color}
`;

export const Conditions = styled(Flex)<FontSizeProps & ColorProps>`
  padding: 10px 0;
  font-weight: bold;
  justify-content: flex-start;
  ${fontSize}
`;
export const ConditionsElement = styled(Flex)<
  FontSizeProps & FlexboxItemProps & SpaceProps
>`
  align-items: center;
  text-align: center;
  ${fontSize}
  ${flexboxItem}
  ${space}
`;

export const ConditionDetails = styled(Flex)<
  FlexboxProps & FontSizeProps & FontWeightProps
>`
  ${fontWeight}
  ${fontSize}
`;
ConditionDetails.defaultProps = {
  fontSize: 1,
  fontWeight: 'bold',
};

export const WeekDayContainer = styled(Flex)<FlexboxProps & FontSizeProps>`
  font-weight: bold;
  ${fontSize}
`;
WeekDayContainer.defaultProps = {
  fontSize: 1,
};

export const CloseContainer = styled.div<FontSizeProps & SpaceProps>`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  ${space}
`;
export const CloseIcon = styled(FontAwesomeIcon)<
  FontAwesomeIconProps & BoxProps
>`
  ${boxStyled}
`;
CloseIcon.defaultProps = {
  color: 'onWhitePrimary',
};

export const NotFound = styled.div<FontSizeProps & SpaceProps & ColorProps>`
  padding: 10px;
  border: 2px solid #fff;
  font-weight: bold;
  background-color: rgba(255, 255, 255, 0.6);
  ${space}
  ${color}
  ${fontSize}
`;
NotFound.defaultProps = {
  color: 'onWhitePrimary',
  fontSize: 4,
};

export const Blurred = styled.span`
  color: transparent;
  text-shadow: 0 0 2px rgba(255, 116, 0, 1);
`;
