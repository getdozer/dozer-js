import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const dark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#A73D82',
      light: '#A63880',
      dark: '#871861',
    },
    secondary: {
      main: '#5865F2',
    },
    success: {
      main: '#31C632',
    },
    error: {
      main: '#B3261E',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#939393',
      disabled: '#797b7c',
    },
    background: {
      default: '#181A1D',
      paper: '#202325',
    }
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={dark}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
