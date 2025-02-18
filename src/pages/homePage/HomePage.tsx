
import AppHeader from '../../components/HomeHeader/HomeHeader'
import {AppSprintsList} from '../../pages/projectsPage/SprintsProjectsList'
import {Route, Routes, Link} from 'react-router-dom'
import { useTranslation } from "react-i18next";
import {Container } from "@mui/material";
import AppFooter from '../../components/HomeFooter'
import {AppProjectsList} from '../../components/HomeProjectsList/HomeProjectsList'




const App: React.FC = () => {
  const { t } = useTranslation();
  return (
      <>
      <AppHeader/>
          <Container sx={{ mt: 4 }}>
            <Routes>
          <Route path="/" element={<AppProjectsList />} />
          <Route path="/Project/:id" element={<AppSprintsList />} />
          </Routes>
          </Container>
      <AppFooter/> 
      </>
  );
}

export default App;

