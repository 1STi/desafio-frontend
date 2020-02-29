import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Flex from '../../ui/components/Flex/Flex';
import styled from 'styled-components';
import {
  flex,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
} from 'styled-system';
import useCapitalActions, {
  CityForecast,
} from '../../state/capitals/useCapitalsActions';
import {useSelector} from 'react-redux';
import LocationCard from '../LocationCard/LocationCard';
import SearchInput from '../SearchInput/SearchInput';
import Box from '../../ui/components/Box/Box';
import CapitalsListItem from '../LocationCard/components/CapitalsListItem';
import {Divider} from '../Divider';

const Container = styled.div<LayoutProps>`
  margin: auto;
  ${layout}
`;

const Content = styled.div<LayoutProps & SpaceProps>`
  ${space}
  ${layout}
`;

const Title = styled.h1<LayoutProps & TextAlignProps>`
  color: #fff;
  ${layout}
  ${textAlign}
`;

const Title2 = styled.h2<LayoutProps & TextAlignProps>`
  color: #fff;
  ${layout}
  ${textAlign}
`;

const TitleBar = styled.h3<SpaceProps & LayoutProps>`
  color: #fff;
  background-color: #ff7400;
  margin: 0;
  text-align: left;
  ${space}
  ${layout}
`;

const capitalsWoeid = [
  455825,
  455827,
  455821,
  455819,
  455820,
  455826,
  455822,
  455830,
  455833,
  455872,
];

const Home: React.FC = () => {
  const capitalsActions = useCapitalActions();
  const locations = useSelector(state => state.capitals.locations);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedLocationId, setSelectedLocationId] = useState<number>(-1);

  const handleInputStop = useCallback(
    v => {
      setSelectedLocationId(-1);
      capitalsActions.search(v);
    },
    [capitalsActions],
  );

  useEffect(() => {
    capitalsWoeid.forEach(id => capitalsActions.get(id));
  }, []);

  function handleClickListItem(forecast: CityForecast) {
    if (forecast.data?.woeid) {
      setSelectedLocationId(forecast.data.woeid);
    }
  }

  const selectedLocation = locations[selectedLocationId];
  const selectedLocationData = selectedLocation?.data;

  function handleClose() {
    capitalsActions.search('');
  }

  return (
    <Container width="100vw" maxWidth={'500px'}>
      <Content padding={[0, 4]}>
        {!selectedLocationData && <Title>Previsão do Tempo</Title>}
        {selectedLocationData && (
          <>
            <Title display={['none', 'block']}>Previsão do Tempo</Title>
            <TitleBar
              display={['block', 'none']}
              m={0}
              paddingX={2}
              paddingY={3}>
              Previsão do Tempo
            </TitleBar>
          </>
        )}
        <LocationCard forecast={selectedLocation} onClose={handleClose} />
      </Content>
      <Content padding={[2, 4]}>
        <SearchInput
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onInputStop={handleInputStop}
        />
      </Content>
      <Divider borderColor={'#fff'} borderWidth={'1px'} />
      <Content paddingX={[2, 4]}>
        <Title2 textAlign={'left'}>Capitais</Title2>
        <Flex flexDirection={['column', 'row']}>
          <Box flex={1}>
            <CapitalsListItem.Header mb={4} paddingX={1} />
            {capitalsWoeid.slice(0, 5).map(woeid => (
              <CapitalsListItem
                onClick={handleClickListItem}
                isActive={selectedLocationId === woeid}
                mb={1}
                paddingY={3}
                paddingX={1}
                key={woeid}
                forecast={locations[woeid]}
              />
            ))}
          </Box>
          <Box flex={1}>
            <CapitalsListItem.Header
              mb={4}
              paddingX={1}
              display={['none', 'flex']}
            />
            {capitalsWoeid.slice(5).map(woeid => (
              <CapitalsListItem
                onClick={handleClickListItem}
                isActive={selectedLocationId === woeid}
                mb={1}
                paddingY={3}
                paddingX={1}
                key={woeid}
                forecast={locations[woeid]}
              />
            ))}
          </Box>
        </Flex>
      </Content>
    </Container>
  );
};

export default Home;
