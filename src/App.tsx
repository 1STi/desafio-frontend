import React from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Capitals from "./Components/Capitals";

const Container = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  padding-top: 3rem;
`;

function App() {
  return (
    <Container className="App">
      <Header/>
      <Input/>
      <Capitals/>
    </Container>
  );
}

export default App;
