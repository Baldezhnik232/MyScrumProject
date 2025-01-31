import { useState, useEffect } from 'react';
import { ITODo } from '../../types/data';
import AppHeader from './AppHeader/AppHeader';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'



const App: React.FC = () => {
  return (
    
    <Router>
    <div className='appProject'>
      <AppHeader/>
      <h1>Привет, Vite + React + TypeScript! 🚀</h1>
    </div>
    </Router>
  );
}

export default App;