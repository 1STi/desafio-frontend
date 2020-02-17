import React from "react";
import Routes from "./routes";
import { GlobalStyles } from "./styles/globalStyled";
import theme from "./styles/Theme";
import { store } from "./store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}
