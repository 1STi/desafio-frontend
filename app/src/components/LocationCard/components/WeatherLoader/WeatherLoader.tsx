import {FlexProps, SpaceProps} from 'styled-system';
import React from 'react';
import Box, {BoxProps} from '../../../../ui/components/Box/Box';
import {ReactComponent as Sun} from './sun.svg';
import {ReactComponent as Cloud} from './cloud.svg';
import './WeatherLoader.css';

type WeatherLoaderProps = BoxProps & SpaceProps & {};

const WeatherLoader: React.FC<WeatherLoaderProps> = ({...rest}) => {
  return (
    <Box className="weather-loader">
      <Sun />
      <Cloud />
      <div className="rain">
        {Array(10)
          .fill(null)
          .map((v, i) => (
            <span key={i} className="drop" />
          ))}
      </div>

      <div className="text">AGUARDE... ESTAMOS OLHANDO PELA JANELA</div>
    </Box>
  );
};

export default WeatherLoader;
