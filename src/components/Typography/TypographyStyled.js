import styled from "styled-components";

const Title = styled.h1`
  display: flex;
  color: ${props => props.theme.colors.title};
  margin: ${props => props.theme.margin.large} 0;
  font-size: ${props => props.theme.typography.size.largest};
`;

export { Title };
