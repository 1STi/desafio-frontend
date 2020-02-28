import React, {useEffect} from 'react';
import Box from '../../ui/components/Box/Box';
import {FlexboxItemProps} from '../../ui/components/Flex/flexboxItem';
import {LocationForecast, translateCondition} from '../../state/common';
import {CardWrapper, Title, Conditions} from './styled';

type LocationCardProps = FlexboxItemProps & {
  forecastData: LocationForecast;
};

const LocationCard: React.FC<LocationCardProps> = ({
  forecastData,
  ...props
}) => {
  const {city, region, country, temperature, forecasts} = forecastData;
  const [currForecast, ...otherForecasts] = forecasts;
  const title = `${city}, ${region} - ${country}`;
  const {code} = currForecast;
  const conditions = `${temperature}ºC ${translateCondition(code)}`;
  return (
    <CardWrapper>
      <Title>${title}</Title>
      <Conditions>{conditions}</Conditions>
      <Box></Box>
    </CardWrapper>
  );
};

export default HomeNewsGrid;
