import React from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Capitals from "./Components/Capitals";
import { SearchStorage } from "./SearchContext";
import Single from "./Components/Single";

const Container = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  padding-top: 3rem;

  @media (max-width: 740px) {
    padding-top: 1.5rem;
    align-items: flex-start;
  }
`;

function App() {
  return (
    <Container className="App">
      <SearchStorage>
        <Header />
        <Single />
        <Input />
        <Capitals />
      </SearchStorage>
    </Container>
  );
}

export default App;
