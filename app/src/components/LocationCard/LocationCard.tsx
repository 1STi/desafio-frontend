import React, {useEffect} from 'react';
import Box from '../../ui/components/Box/Box';
import Flex from '../../ui/components/Flex/Flex';
import {FlexboxItemProps} from '../../ui/components/Flex/flexboxItem';
import {LocationForecast, translateCondition} from '../../state/common';
import {
  CardWrapper,
  Title,
  Conditions,
  ConditionsElement,
  ConditionDetails,
  Divider,
  WeekDayContainer,
  CloseContainer,
  CloseIcon,
} from './styled';
import MaxMin from './MaxMin';
import ConditionAttribute from './ConditionAttribute';
import WeekDay from './WeekDay';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

type LocationCardProps = FlexboxItemProps & {
  forecastData?: LocationForecast;
  onClose?: () => void;
};

const LocationCard: React.FC<LocationCardProps> = ({
  forecastData,
  onClose,
  ...props
}) => {
  if (!forecastData) return <div>No data</div>;
  const {
    city,
    region,
    country,
    temperature,
    feelsLike,
    humidity,
    wind,
    forecasts,
  } = forecastData;
  const [currForecast, ...otherForecasts] = forecasts;
  const title = `${city}, ${region} - ${country}`;
  const {code} = currForecast;
  const temperatureTx = `${temperature}ºC`;
  const conditionTx = translateCondition(code);
  const feelsLikeTx = `${Math.round(feelsLike)}ºC`;
  const humidityTx = `${humidity}%`;
  const windTx = `${wind}km/h`;

  return (
    <CardWrapper paddingY={[2, 4]} paddingX={[2, 5]}>
      <Box paddingX={3}>
        <Title fontSize={1} paddingBottom={[2]}>
          {title}
        </Title>
        <Conditions fontSize={6}>
          <ConditionsElement marginRight={2}>{temperatureTx}</ConditionsElement>
          <ConditionsElement>{conditionTx}</ConditionsElement>
        </Conditions>
        <ConditionDetails marginY={2}>
          <Box marginRight={4}>
            <MaxMin
              min={currForecast.low}
              max={currForecast.high}
              marginBottom={3}
            />
            <ConditionAttribute label="Vento" value={windTx} />
          </Box>
          <div>
            <ConditionAttribute
              label="Sensação"
              value={feelsLikeTx}
              marginBottom={3}
            />
            <ConditionAttribute label="Umidade" value={humidityTx} />
          </div>
        </ConditionDetails>
      </Box>
      <Divider marginY={3} />
      <WeekDayContainer paddingX={3}>
        {otherForecasts.slice(0, 5).map(fc => (
          <WeekDay
            key={fc.date}
            day={fc.day}
            min={fc.low}
            max={fc.high}
            flex={1}
          />
        ))}
      </WeekDayContainer>
      <CloseContainer padding={2} onClick={onClose}>
        <CloseIcon icon={faTimes} />
      </CloseContainer>
    </CardWrapper>
  );
};

export default LocationCard;
