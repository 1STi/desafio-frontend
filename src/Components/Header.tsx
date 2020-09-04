import React from "react";
import styled from "styled-components";
import { SearchContext } from "../SearchContext";

declare module "react" {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    card?: any;
  }
}

const Title = styled.h1`
  color: #fff;
  font-size: 4rem;
  font-weight: bold;

  @media (max-width: 740px) {
    font-size: ${(props) => (props.card ? "1.8rem" : "3.3rem")};
    padding: ${(props) => (props.card ? "0 2rem 1.5rem 2rem" : "0 2rem")};
  }
`;

const Header = () => {
  const { search } = React.useContext(SearchContext);

  return (
    <Title {...(search !== null ? { card: "contains" } : {})}>
      Previsão do tempo
    </Title>
  );
};

export default Header;
