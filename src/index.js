import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider,extendTheme } from '@chakra-ui/react';
const colors = {
  primary: {
    900: '#000339',
    800: '#121443',
    100: '#1E2251'
  },
  secondary:{
    100:'#FFE1D3'
  },
  base:{
    900:'#E6E6E6'
  }
}
const theme = extendTheme({ colors })
ReactDOM.render(
  <ChakraProvider theme={theme}>
  <App  />
</ChakraProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
