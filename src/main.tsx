import  React from 'react'
import  ReactDOM  from 'react-dom'
import { StrictMode } from 'react'
import {createStore, bindActionCreators } from 'redux'
import { createRoot } from 'react-dom/client'
import App from './components/AppProject/AppProject.tsx'
import "./style/style.scss";



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
