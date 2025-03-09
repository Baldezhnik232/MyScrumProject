import AppHeader from '../../../Header/HomeHeader';
import { AppSprintsList } from '../../ProjectsPage/SprintsList/SprintsProjectsList';
import { Route, Routes } from 'react-router-dom';
import {Box, Container} from '@mui/material';
import {AppFooter} from '../../../Footer/HomeFooter';
import { AppProjectsList } from '../HomeProjectsList/HomeProjectsList';
import { AppBacklogList } from '../../BacklogPage/BacklogList/BacklogList.tsx';
import { AppTaskSprints } from '../../SprintsPage/TaskSprintsList/TaskSprintsList';

const App: React.FC = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column',  minHeight: '100vh'}}>
      <AppHeader />
      <Container sx={{flexGrow: 1, mt: 5, display: 'flex', flexDirection: 'column'}}>
        <Routes>
          <Route
            path='/'
            element={<AppProjectsList />}
          />
          <Route
            path='/project/:id'
            element={<AppSprintsList />}
          />
          <Route
            path='/project/:id/backlog'
            element={<AppBacklogList />}
          />
          <Route
            path='/project/:id/sprints/:tasksId'
            element={<AppTaskSprints />}
          />
        </Routes>
      </Container>
      <AppFooter />
    </Box>
  );
};

export default App;
