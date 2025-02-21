import  React from 'react'
import  ReactDOM  from 'react-dom'
import {styled} from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { StrictMode } from 'react'
import {createStore, bindActionCreators } from 'redux'
import { createRoot } from 'react-dom/client'
import App from './components/pages/homePage/HomePage/HomePage.tsx'
import "./locales/i18n.tsx"; 
import {theme} from './styles/themes/lightTheme.tsx'
import { Provider } from 'react-redux';
import {store} from './store/index.tsx'
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
    </Provider>
  </StrictMode>,
)


