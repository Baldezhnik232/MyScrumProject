import AppHeader from '../../../components/Header/HomeHeader.tsx';
import { AppSprintsList } from '../../ProjectsPage/SprintsList/SprintsProjectsList.tsx';
import { Route, Routes } from 'react-router-dom';
import {Box, Container} from '@mui/material';
import {AppFooter} from '../../../components/Footer/HomeFooter.tsx';
import { AppProjectsList } from '../HomeProjectsList/HomeProjectsList.tsx';
import { AppBacklogList } from '../../BacklogPage/BacklogList/BacklogList.tsx';
import { AppTaskSprints } from '../../SprintsPage/TaskSprintsList/TaskSprintsList.tsx';
import { GlobalStyles } from '@mui/system';


const App: React.FC = () => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column',  minHeight: '100vh' }}>
      <GlobalStyles styles={{ body: { overflowY: 'hidden' } }} />
      <AppHeader />
      <Container sx={{flexGrow: {xs:0.2, sm:0.2, md: 0.2, lg: 0.9}, mt: 2, display: 'flex', flexDirection: 'column', mb: 0}}>
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
            path='/project/:id/sprints/:sprintId'
            element={<AppTaskSprints />}
          />
        </Routes>
      </Container>
      <AppFooter />
    </Box>
  );
};

export default App;
