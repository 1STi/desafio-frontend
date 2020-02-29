import React from 'react';
import {FlexProps, SpaceProps} from 'styled-system';
import Box, {BoxProps} from '../../../../ui/components/Box/Box';
import {ReactComponent as Cloud} from './cloud.svg';
import './CloudLoader.css';

type CloudLoaderProps = BoxProps & SpaceProps & {};

const CloudLoader: React.FC<CloudLoaderProps> = ({...rest}) => {
  return (
    <Box className="cloud-loader">
      <Cloud />
    </Box>
  );
};

export default CloudLoader;
