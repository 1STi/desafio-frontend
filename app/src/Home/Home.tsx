import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Flex from '../ui/components/Flex/Flex';
import styled from 'styled-components';
import {flex, layout, LayoutProps, space, SpaceProps} from 'styled-system';
import useCapitalActions from '../state/capitals/useCapitalsActions';
import {useSelector} from 'react-redux';
import LocationCard from '../components/LocationCard/LocationCard';
import SearchInput from '../components/SearchInput/SearchInput';
import Box from '../ui/components/Box/Box';

const Container = styled.div<LayoutProps>`
  margin: auto;
  ${layout}
`;

const Content = styled.div<LayoutProps & SpaceProps>`
  ${space}
  ${layout}
`;

const Title = styled.h1<LayoutProps>`
  color: #fff;
  ${layout}
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
        {selectedLocation?.isLoading && <Box>Loading...</Box>}
        {selectedLocationData && (
          <LocationCard
            forecastData={selectedLocationData}
            onClose={handleClose}
          />
        )}
      </Content>

      <Content padding={[2, 4]}>
        <SearchInput
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          onInputStop={handleInputStop}
        />
      </Content>
      <hr />
      {capitalsWoeid.map(woeid => (
        <div key={woeid}>
          {!locations[woeid] || locations[woeid].isLoading ? (
            <div>loading..</div>
          ) : (
            <div>Carregou!!!</div>
          )}
        </div>
      ))}
    </Container>
  );
};

export default Home;
