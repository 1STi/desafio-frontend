import styled from 'styled-components';
import {BoxProps} from '../Box/Box';
import {fontSize, FontSizeProps} from 'styled-system';
import Flex from '../Flex/Flex';
import {GridProps} from '../Grid/Grid';
import {themed} from '../../theme/helpers';
export type CardImageProps = BoxProps & {
  image: string;
  logo: string;
  title: string;
  footerText: string;
};

const MAX_WIDTH = '500px';

export type CardImageTheme = {
  wrapper: {[p: string]: string};
  logo: {[p: string]: string};
  title: {[p: string]: string};
  footerText: {[p: string]: string};
};

export const Wrapper = styled(Flex)<GridProps & Pick<CardImageProps, 'image'>>`
  background-image: url('${p => p.image}');
  background-size: cover;
  ${themed('cardImage.wrapper')}
`;

export const Logo = styled(Flex)<Pick<CardImageProps, 'logo'>>`
  background-image: url('${p => p.logo}');
  background-size: cover;
  background-repeat: no-repeat;
  height: 30px;
  max-width: ${MAX_WIDTH};
  ${themed('cardImage.logo')}
`;

//! deveria ser um componente de typography
export const Title = styled(Flex)<
  Pick<CardImageProps, 'title'> & FontSizeProps
>`
  max-width: ${MAX_WIDTH};
  ${themed('cardImage.title')}
  ${fontSize}
`;
//! deveria ser um componente de typography
export const FooterText = styled(Flex)<
  Pick<CardImageProps, 'footerText'> & FontSizeProps
>`
  max-width: ${MAX_WIDTH};
  ${themed('cardImage.footerText')}
  ${fontSize}
`;
