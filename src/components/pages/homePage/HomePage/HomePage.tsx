
import AppHeader from '../HomeHeader/HomeHeader'
import {AppSprintsList} from '../../projectsPage/SprintsList/SprintsProjectsList'
import {Route, Routes, Link} from 'react-router-dom'
import { useTranslation } from "react-i18next";
import {Container } from "@mui/material";
import AppFooter from '../HomeFooter/HomeFooter'
import {AppProjectsList} from '../HomeProjectsList/HomeProjectsList'
import {AppBacklogList} from '../../backlogPage/BacklogList/backlogList'
import {AppTaskSprints} from '../../sprintsPage/TaskSprintsList/TaskSprintsList'


const App: React.FC = () => {
  const { t } = useTranslation();
  return (
      <>
      <AppHeader/>
          <Container sx={{ mt: 4 }}>
            <Routes>
          <Route path="/" element={<AppProjectsList />} />
          <Route path="/Project/:id" element={<AppSprintsList />} />
          <Route path="/Project/:id/Backlog" element={ <AppBacklogList />} />
          <Route path ="/Project/:id/sprints/:sprintId" element={< AppTaskSprints/>}/>
          </Routes>
          </Container>
      <AppFooter/> 
      </>
  );
}

export default App;

