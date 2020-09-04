import React from "react";
import { GET_ALL } from "./api";

export const SearchContext = React.createContext();

export const SearchStorage = ({ children }) => {
  const [search, setSearch] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  async function getSearch(param) {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      const { url, headers } = GET_ALL(param);
      response = await fetch(url, { headers });
      json = await response.json();
      if (json.forecasts.length === 0) throw new Error("Essa pesquisa não retornou resultado");
    } catch (error) {
      setError(error);
    } finally {
      setSearch(json);
      setLoading(false);
    }
  }

  return (
    <SearchContext.Provider
      value={{ getSearch, search, setSearch, loading, error }}
    >
      {children}
    </SearchContext.Provider>
  );
};
