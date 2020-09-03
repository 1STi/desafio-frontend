import React from "react";
import { GET_ALL } from "./api";

export const SearchContext = React.createContext();

export const SearchStorage = ({ children }) => {
  const [search, setSearch] = React.useState(null);

  async function getSearch(param) {
    const { url, headers } = GET_ALL(param);
    const response = await fetch(url, { headers });
    const json = await response.json();
    console.log(json);
    setSearch(json);
  }

  return (
    <SearchContext.Provider value={{ getSearch, search }}>
      {children}
    </SearchContext.Provider>
  );
};
