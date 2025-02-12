import  React from 'react'
import  ReactDOM  from 'react-dom'
import {styled} from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { StrictMode } from 'react'
import {createStore, bindActionCreators } from 'redux'
import { createRoot } from 'react-dom/client'
import App from './pages/home/HomePage.tsx'
import "./locales/i18n.tsx"; 
import {theme} from './styles/themes/lightTheme.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </StrictMode>,
)


