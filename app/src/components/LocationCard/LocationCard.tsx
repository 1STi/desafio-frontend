import React, {useEffect} from 'react';
import Box from '../../ui/components/Box/Box';
import {FlexboxItemProps} from '../../ui/components/Flex/flexboxItem';
import {LocationForecast, translateCondition} from '../../state/common';
import {CardWrapper, Title, Conditions, ConditionsElement} from './styled';

type LocationCardProps = FlexboxItemProps & {
  forecastData?: LocationForecast;
};

const LocationCard: React.FC<LocationCardProps> = ({
  forecastData,
  ...props
}) => {
  if (!forecastData) return <div>No data</div>;
  const {city, region, country, temperature, forecasts} = forecastData;
  const [currForecast, ...otherForecasts] = forecasts;
  const title = `${city}, ${region} - ${country}`;
  const {code} = currForecast;
  const temperatureTx = `${temperature}ºC`;
  const conditionTx = translateCondition(code);

  return (
    <CardWrapper paddingY={[2, 4]} paddingX={[2, 5]}>
      <Title fontSize={1} paddingBottom={[2]}>
        {title}
      </Title>
      <Conditions fontSize={6}>
        <ConditionsElement marginRight={2}>{temperatureTx}</ConditionsElement>
        <ConditionsElement>{conditionTx}</ConditionsElement>
      </Conditions>
      <Box>
        {currForecast.high + 'º'} {currForecast.low + 'º'}
      </Box>
    </CardWrapper>
  );
};

export default LocationCard;
