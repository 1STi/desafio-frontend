import styled from "styled-components";

const SearchCityContainer = styled.div`
  display: flex;
  height: 40px;
  max-width: 500px;
  width: 90%;
  background-color: #fff;
`;

const Input = styled.input`
  border: none;
  flex: 1;
  font-size: ${props => props.theme.typography.size.regular};
  margin: 0 ${props => props.theme.margin.regular};
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.img`
  width: 25px;
  margin: 0 ${props => props.theme.margin.regular};
`;
export { Input, SearchCityContainer, SearchIcon };
