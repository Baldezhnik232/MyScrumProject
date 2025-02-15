
import AppHeader from './components/HomeHeader/HomeHeader'
import AppProjectsList from './components/HomeProjectsList/HomeProjectsList'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { useTranslation } from "react-i18next";
import {Container } from "@mui/material";
import AppFooter from './components/HomeFooter'




const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Router>
      <AppHeader/>
          <Container sx={{ mt: 4 }}>
          <AppProjectsList /> 
          </Container>
      <AppFooter/>    
    </Router>
  );
}

export default App;

