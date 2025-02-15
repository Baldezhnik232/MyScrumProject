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
import { Provider } from 'react-redux';
import {store} from './pages/store'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </Provider>
  </StrictMode>,
)


