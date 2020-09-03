import React from "react";
import SearchIcon from "../Assets/SearchIcon";
import styled from "styled-components";
import { GET_ALL } from "../api";

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 3rem;
`;

const Search = styled.input`
  padding: 0.8rem 1.5rem;
  font-size: 1.4rem;
  font-weight: 300;
  width: 100%;
  max-width: 600px;
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
  const [search, setSearch] = React.useState("");

  async function fetchSearch(param: string) {
    const { url, headers } = GET_ALL(param);
    const response = await fetch(url, { headers });
    const json = await response.json();
    console.log(json)
    return json;
  }

  
  function handleClick(event: React.FormEvent) {
    event.preventDefault();
    fetchSearch(search);
  }

  return (
    <Form action="">
      <Search
        type="text"
        name="search"
        id="search"
        placeholder="Insira aqui o nome da cidade"
        onChange={({ target }) => setSearch(target.value)}
      />
      <Button onClick={handleClick}>
        <SearchIcon />
      </Button>
    </Form>
  );
};

export default Input;
