import Box, {BoxProps} from '../../../ui/components/Box/Box';
import {
  FlexboxProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  layout,
  LayoutProps,
  SpaceProps,
} from 'styled-system';
import React from 'react';
import {CityForecast} from '../../../state/capitals/useCapitalsActions';
import Flex from '../../../ui/components/Flex/Flex';
import styled from 'styled-components';
import CloudLoader from './CloudLoader/CloudLoader';

const Container = styled(Flex)<
  FlexboxProps & FontSizeProps & FontWeightProps & LayoutProps
>`
  text-align: left;
  ${fontSize}
  ${fontWeight}
  ${layout}
`;
Container.defaultProps = {
  fontSize: 1,
  fontWeight: 'bold',
};

const HoverableContainer = styled(Container)<
  FlexboxProps & FontSizeProps & FontWeightProps
>`
  cursor: pointer;
  &:hover,
  &.is-active {
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

type CapitalsListItemProps = BoxProps &
  SpaceProps & {
    forecast?: CityForecast;
    isActive?: boolean;
    onClick(forecast: CityForecast): void;
  };
type CapitalsListItemHeaderProps = Omit<
  CapitalsListItemProps,
  'forecast' | 'isActive' | 'onClick'
>;
type CapitalsListItemType = React.FC<CapitalsListItemProps> & {
  Header: React.FC<CapitalsListItemHeaderProps>;
};

const CapitalsListItem: CapitalsListItemType = ({
  forecast,
  isActive = false,
  onClick,
  ...rest
}) => {
  if (!forecast) return <></>;
  const {isLoading, data} = forecast;
  if (isLoading) return <CloudLoader />;
  if (!data) return <></>;
  const [currForecast] = data.forecasts;
  return (
    <HoverableContainer
      {...rest}
      className={isActive ? 'is-active' : ''}
      onClick={() => onClick(forecast as CityForecast)}>
      <Box mr={2} width={'40px'}>
        {currForecast.low}ºC
      </Box>
      <Box mr={2} width={'40px'}>
        {currForecast.high}ºC
      </Box>
      <Box flex={1}>{data?.city}</Box>
    </HoverableContainer>
  );
};

const CapitalsListItemHeader: React.FC<CapitalsListItemHeaderProps> = ({
  ...rest
}) => {
  return (
    <Container {...rest} fontWeight={'normal'}>
      <Box mr={2} width={'40px'}>
        Min
      </Box>
      <Box mr={2} width={'40px'}>
        Max
      </Box>
      <Box flex={1}> </Box>
    </Container>
  );
};

CapitalsListItem.Header = CapitalsListItemHeader;

export default CapitalsListItem;
