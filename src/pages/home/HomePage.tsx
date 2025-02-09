
import AppHeader from './components/HomeHeader/HomeHeader'
import AppProjectsList from './components/HomeProjectsList'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { useTranslation } from "react-i18next";
import {Container,Typography } from "@mui/material";
import AppSearch from './components/HomeSearch';



const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Router>
      <AppHeader/>
      <Container sx={{ mt: 4 }}>
          <AppSearch/>
          <Container sx={{ mt: 4 }}>
          <AppProjectsList /> 
          </Container>
        <Typography variant="h2">{t('homePage.title')}</Typography>
      </Container>
    </Router>
  );
}

export default App;

