import React from "react";
import SearchIcon from "../Assets/SearchIcon";
import styled from "styled-components";
import { SearchContext } from "../SearchContext";

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80vw;
  max-width: 600px;
  margin-top: 1.2rem;
`;

const Search = styled.input`
  padding: 0.8rem 1.5rem;
  font-size: 1.4rem;
  font-weight: 300;
  width: 100%;
  flex: 1;
  border-top: 1px solid #d86c00;
  border-right: none;
  border-bottom: 1px solid #d86c00;
  border-left: 1px solid #d86c00;
`;

const Button = styled.button`
  background: #fff;
  border-top: 1px solid #d86c00;
  border-right: 1px solid #d86c00;
  border-bottom: 1px solid #d86c00;
  border-left: none;
  padding: 0 1rem;
  cursor: pointer;
  display: flex;
  align-self: normal;
  align-items: center;
`;

const Input = () => {
  const { getSearch } = React.useContext(SearchContext);

  const [query, setQuery] = React.useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    getSearch(query);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Search
        type="text"
        name="search"
        id="search"
        placeholder="Insira aqui o nome da cidade"
        onChange={({ target }) => setQuery(target.value)}
      />
      <Button>
        <SearchIcon />
      </Button>
    </Form>
  );
};

export default Input;
