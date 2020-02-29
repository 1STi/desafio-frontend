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
  WeekDayContainer,
  CloseContainer,
  CloseIcon,
  NotFound,
  Blurred,
} from './styled';
import MaxMin from './components/MaxMin';
import ConditionAttribute from './components/ConditionAttribute';
import WeekDay from './components/WeekDay';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {CityForecast} from '../../state/capitals/useCapitalsActions';
import WeatherLoader from './components/WeatherLoader/WeatherLoader';
import {Divider} from '../Divider';

type LocationCardProps = FlexboxItemProps & {
  forecast?: CityForecast;
  onClose?: () => void;
};

const LocationCard: React.FC<LocationCardProps> = ({
  forecast,
  onClose,
  ...props
}) => {
  const forecastData = forecast?.data;
  if (!forecast || !forecast?.data) {
    if (forecast?.isLoading) return <WeatherLoader />;
    if (forecast && !forecast.data) {
      return (
        <NotFound>
          <p>Minha previsão está um pouco</p>
          <p>
            {' '}
            <Blurred>nublada</Blurred> para este local.
          </p>{' '}
          <h2>:(</h2>
        </NotFound>
      );
    }
    return <></>;
  }

  const {
    city,
    region,
    country,
    temperature,
    feelsLike,
    humidity,
    wind,
    forecasts,
  } = forecastData as LocationForecast;
  const [currForecast, ...otherForecasts] = forecasts;
  const title = `${city}, ${region} - ${country}`;
  const {code} = currForecast;
  const temperatureTx = `${temperature}ºC`;
  const conditionTx = translateCondition(code);
  const feelsLikeTx = `${Math.round(feelsLike)}ºC`;
  const humidityTx = `${humidity}%`;
  const windTx = `${wind}km/h`;

  return (
    <CardWrapper paddingY={[2, 4]} paddingX={[0, 5]}>
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
      <Divider marginY={3} borderColor="onWhitePrimary" />
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
