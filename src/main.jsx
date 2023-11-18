import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
      light: '#4f749c',
    },
    secondary: {
      main: '#d61155',
      light: '#502131',
    },
    background: {
      default: '#e8e1e1',
      paper: '#dcd8d8',
    },
    warning: {
      main: '#b55a10',
    },
    error: {
      main: '#9e0000',
    },
    success: {
      main: '#206923',
    },

    indigo: {
      main: '#4b0082',
      light: '#502131',
    },
    bgwarning: {
      main: '#ffc107',
    },
    bgsuccess: {
      main: '#28a745',
    },
  },


})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
