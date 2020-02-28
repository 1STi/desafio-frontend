import Box from '../../ui/components/Box/Box';
import styled from 'styled-components';
import {
  flex,
  flexbox,
  FlexboxProps,
  FlexProps,
  fontSize,
  FontSizeProps,
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

export const CardWrapper = styled(Box)<FlexProps & LayoutProps>`
  background-color: rgba(255, 255, 255, 0.8);
  text-align: left;
  ${flex}
  ${layout}
`;

export const Title = styled(Box)<FontSizeProps & SpaceProps>`
  font-size: 12px;
  font-weight: bold;
  color: #505050;
  ${fontSize}
  ${space}
`;
export const Conditions = styled(Flex)<FontSizeProps>`
  padding: 10px 0;
  color: #505050;
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
