
import AppHeader from '../../components/HomeHeader/HomeHeader'
import {AppProjectsList} from '../../components/HomeProjectsList/HomeProjectsList'
import {Route, Routes, Link} from 'react-router-dom'
import { useTranslation } from "react-i18next";
import {Container } from "@mui/material";
import AppFooter from '../../components/HomeFooter'
import {ProjectsPage} from '../projectsPage/ProjectsPageItems'



const App: React.FC = () => {
  const { t } = useTranslation();
  return (
      <>
      <AppHeader/>
          <Container sx={{ mt: 4 }}>
            <Routes>
          <Route path="/" element={<AppProjectsList />} />
          <Route path="/Project/:id" element={<ProjectsPage />} />
          </Routes>
          </Container>
      <AppFooter/> 
      </>
  );
}

export default App;

