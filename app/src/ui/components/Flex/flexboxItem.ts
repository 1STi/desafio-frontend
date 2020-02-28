import {
  AlignSelfProps,
  FlexBasisProps,
  FlexGrowProps,
  FlexProps,
  FlexShrinkProps,
  JustifySelfProps,
  OrderProps,
  system,
} from 'styled-system';

const config = {
  // item
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true,
};

export interface FlexboxItemProps
  extends FlexProps,
    FlexGrowProps,
    FlexShrinkProps,
    FlexBasisProps,
    JustifySelfProps,
    AlignSelfProps,
    OrderProps {}

export const flexboxItem = system(config);
