import { Typography, Grid2, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SideBar } from '../../ProjectsPage/RouterPanel/SidebarProjects.tsx';
import { BacklogPageItem } from '../BacklogItems/BacklogItems.tsx';
import { AppSearchBacklog } from '../SearchBacklog/SearchBacklog.tsx';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../store/hooks.ts';
import { updateTaskStatus } from '../../../store/backlog/backlog.slice.ts';
import { fetchBacklog } from '../../../store/backlog/backlog.thunk.ts';
import { TaskStatus } from '../../../api/tasks/tasks.types.ts';
import { selectBacklogItems } from '../../../store/backlog/backlog.selectors.ts';

export const AppBacklogList = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [showLoading, setShowLoading] = useState(true);
  const dispatch = useAppDispatch();
  const backlog = useAppSelector(selectBacklogItems);
  const { filterBacklog } = useAppSelector((state) => state.backlog);
  const filteredBacklog = backlog.filter((backlog) =>
    backlog.title.toLowerCase().includes(filterBacklog.toLowerCase())
  );

  const handleMoveTask = (tasksID: number, status: TaskStatus, sprintId: number) => {
    dispatch(updateTaskStatus({ tasksID, status, sprintId }));
  };
  3;
  useEffect(() => {
    setShowLoading(true);
    const timeOut = setTimeout(() => {
      setShowLoading(false);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [id]);

  useEffect((): void => {
    if (backlog.length <= 0) {
      dispatch(fetchBacklog());
    }
  }, [dispatch]);

  if (showLoading)
    return (
      <Typography sx={{ display: 'flex', justifyContent: 'center', minHeight: '100vh' }}>
        {t('loading')}
      </Typography>
    );
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <AppSearchBacklog />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <SideBar />
        {filteredBacklog.length > 0 ? (
          <Grid2
            container
            spacing={4}
            sx={{
              ml: {
                xs: '1rem',
                sm: '2rem',
                md: '3rem',
                lg: '3rem',
                xl: '2rem',
              },
              gap: '2rem',
            }}
          >
            {filteredBacklog.map((backlog) => (
              <BacklogPageItem
                key={backlog.tasksID}
                backlog={backlog}
                onMoveTask={handleMoveTask}
              />
            ))}
          </Grid2>
        ) : (
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mt: { xl: 2 },
              ml: {
                xs: '6rem',
                sm: '1rem',
                md: '1rem',
                lg: '1rem',
                xl: '15rem',
              },
            }}
          >
            {t('projectsFind')}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
