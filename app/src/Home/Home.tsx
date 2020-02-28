import React, {useEffect} from 'react';
import Flex from '../ui/components/Flex/Flex';
import styled from 'styled-components';
import {flex, layout, LayoutProps, space, SpaceProps} from 'styled-system';
import useCapitalActions from '../state/capitals/useCapitalsActions';
import {useSelector} from 'react-redux';
import LocationCard from '../components/LocationCard/LocationCard';

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

const Home: React.FC = () => {
  const capitalsActions = useCapitalActions();
  const locations = useSelector(state => state.capitals.locations);
  useEffect(() => {
    capitalsActions.get(455827);
  }, []);
  const selectedLocation = locations[455827]?.data;

  return (
    <Container width="100vw" maxWidth={'500px'}>
      {!selectedLocation && (
        <Content padding={[2, 4]}>
          <Title>Previsão do Tempo</Title>
        </Content>
      )}
      {selectedLocation && (
        <Content padding={[0, 4]}>
          <Title display={['none', 'block']}>Previsão do Tempo</Title>
          <TitleBar display={['block', 'none']} m={0} paddingX={2} paddingY={3}>
            Previsão do Tempo
          </TitleBar>
          <LocationCard forecastData={selectedLocation} />
        </Content>
      )}
      <hr />
      <Title>Previsão do Tempo</Title>
    </Container>
  );
};

export default Home;
