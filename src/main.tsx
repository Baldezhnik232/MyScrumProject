import  React from 'react'
import  ReactDOM  from 'react-dom'
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { StrictMode } from 'react'
import {createStore, bindActionCreators } from 'redux'
import { createRoot } from 'react-dom/client'
import App from './components/AppProject/AppProject.tsx'
import "./i18n"; // 👈 Должно быть в самом верху




const theme = createTheme ({
    palette: {
      primary: {
        main: '#CD0074'
      },
      secondary:{
        main: '#9FEE00'
      }
    }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    
  </StrictMode>,
)


