import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from "./global/styles/globalStyles"
import {ThemeProvider} from "styled-components"
import theme from "./global/styles/theme"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider  theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
