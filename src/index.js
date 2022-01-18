import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
const colors = {
  primary: {
    900: "#000339",
    800: "#121443",
    100: "#1E2251",
  },
  secondary: {
    100: "#FFE1D3",
  },
  base: {
    900: "#E6E6E6",
  },
};
const theme = extendTheme({ colors });
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
