import React from 'react';
import Box, {BoxProps} from '../../ui/components/Box/Box';
import Flex from '../../ui/components/Flex/Flex';
import styled from 'styled-components';
import {
  FlexboxProps,
  FlexProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  space,
  SpaceProps,
} from 'styled-system';

const ConditionAttributeBox = styled(Flex)<FlexProps>`
  ${space}
`;

const Label = styled(Box)<BoxProps & FontSizeProps & FontWeightProps>`
  ${fontSize}
  ${fontWeight}
  ${space}
`;
Label.defaultProps = {
  marginRight: 2,
  fontWeight: 'normal',
};
const Value = styled(Box)<BoxProps & FontSizeProps>`
  ${fontSize}
`;

type ConditionAttributeProps = FlexboxProps &
  SpaceProps & {
    label: string;
    value: string;
  };

const ConditionAttribute: React.FC<ConditionAttributeProps> = ({
  label,
  value,
  ...rest
}) => {
  return (
    <Flex {...rest}>
      <ConditionAttributeBox>
        <Label>{label}:</Label>
        <Value>{value}</Value>
      </ConditionAttributeBox>
    </Flex>
  );
};
export default ConditionAttribute;
