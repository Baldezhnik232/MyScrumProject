// import AppHeader from '../../../components/Header/HomeHeader.tsx';
// import { AppSprintsList } from '../projects/SprintsList/SprintsProjectsList.tsx';
import { Route, Routes } from 'react-router-dom';
import { Box, Container } from '@mui/material';
// import { AppFooter } from '../../../components/Footer/HomeFooter.tsx';
// import { AppProjectsList } from './ui/home-page/HomeProjectsList.tsx';
// import { AppBacklogList } from '../backlog/BacklogList/BacklogList.tsx';
// import { AppTaskSprints } from '../sprints/TaskSprintsList/TaskSprintsList.tsx';
import { HomePageLayout } from './ui/home-page/HomePageLayout.tsx';
import React from 'react';
const App: React.FC = () => {
  return (
    <Box>
      <React.StrictMode>
        <Routes>
          <Route
            path='/'
            element={<HomePageLayout />}
          />
          {/* <Route
            path='/project/:id'
            element={<AppSprintsList />}
          /> */}
          {/* <Route
            path='/project/:id/backlog'
            element={<AppBacklogList />}
          />
          <Route
            path='/project/:id/sprints/:sprintId'
            element={<AppTaskSprints />}
          /> */}
        </Routes>
      </React.StrictMode>
    </Box>
  );
};

export default App;
