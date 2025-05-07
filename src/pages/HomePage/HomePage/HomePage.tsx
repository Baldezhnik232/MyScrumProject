import AppHeader from '../../../components/Header/HomeHeader.tsx';
import { AppSprintsList } from '../../ProjectsPage/SprintsList/SprintsProjectsList.tsx';
import { Route, Routes } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { AppFooter } from '../../../components/Footer/HomeFooter.tsx';
import { AppProjectsList } from '../HomeProjectsList/HomeProjectsList.tsx';
import { AppBacklogList } from '../../BacklogPage/BacklogList/BacklogList.tsx';
import { AppTaskSprints } from '../../SprintsPage/TaskSprintsList/TaskSprintsList.tsx';
import { GlobalStyles } from '@mui/system';

const App: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '10rem', flex: 1 }}>
      <GlobalStyles styles={{ body: { overflowY: 'hidden' } }} />
      <AppHeader />
      <Container
        maxWidth={false}
        sx={{ flexGrow: { xs: 1, sm: 0.2, md: 0.2, lg: 0.3, xl: 0.4 }, mt: 2 }}
      >
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
