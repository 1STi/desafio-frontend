import React from 'react';
import {CardImageProps, Wrapper, FooterText, Logo, Title} from './styled';

const CardImage: React.FC<CardImageProps> = ({
  image,
  logo,
  title,
  footerText,
  ...props
}) => {
  return (
    <Wrapper image={image} {...props}>
      <Logo logo={logo} />
      <Title title={title}>{title}</Title>
      <FooterText footerText={footerText}>{footerText}</FooterText>
    </Wrapper>
  );
};

export default CardImage;
