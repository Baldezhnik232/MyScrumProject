import AppHeader from '../../../components/Header/HomeHeader.tsx';
import { AppSprintsList } from '../../ProjectsPage/SprintsList/SprintsProjectsList.tsx';
import { Route, Routes } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { AppFooter } from '../../../components/Footer/HomeFooter.tsx';
import { AppProjectsList } from '../ui/home-page/HomeProjectsList.tsx';
import { AppBacklogList } from '../../BacklogPage/BacklogList/BacklogList.tsx';
import { AppTaskSprints } from '../../SprintsPage/TaskSprintsList/TaskSprintsList.tsx';
import { HomePageLayout } from '../ui/home-page/HomePageLayout.tsx';

const App: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minWidth: { xs: '31.25rem' },
        minHeight: '1rem',
        flex: 0,
      }}
    >
      <AppHeader />
      <Container>
        <Routes>
          <Route
            path='/'
            element={<HomePageLayout />}
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
