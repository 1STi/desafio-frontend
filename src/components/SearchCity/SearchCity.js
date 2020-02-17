import React from "react";
import { SearchCityContainer, Input, SearchIcon } from "./SearchCityStyled";
import { Search } from "../../shared/img";

const SearchCity = ({ placeholder, onChange, onClick, term, isLoading }) => {
  //faltou o loading
  return (
    <SearchCityContainer>
      <Input
        placeholder={placeholder}
        value={term}
        onChange={ev => onChange(ev.target.value)}
        onKeyPress={event => {
          if (event.key === "Enter") {
            onClick();
          }
        }}
      />
      <SearchIcon src={Search} onClick={!isLoading ? onClick : undefined} />
    </SearchCityContainer>
  );
};

export default SearchCity;
