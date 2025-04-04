import { Typography, Grid2 } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SideBar } from '../../ProjectsPage/RouterPanel/SidebarProjects.tsx';
import { BacklogPageItem } from '../BacklogItems/BacklogItems.tsx';
import { AppSearchBacklog } from '../SearchBacklog/SearchBacklog.tsx';
import { AppButtonAdd } from '../AddButton/FloatingActionButton.tsx';
import { AppForm } from '../AddForm/CreateFormTask.tsx';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../store/hooks.ts';
import { fetchBacklog } from '../../../store/backlogSlice.ts';
import {
  addBacklogTask,
  updateTaskStatus,
} from '../../../store/backlogSlice.ts';

import { TaskStatus } from '../../../api/types/interfaceApi.tsx';

export const AppBacklogList = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();
  const { backlog, filterBacklog, loading } = useAppSelector(
    (state) => state.backlog
  );

  const filteredBacklog = backlog.filter((backlog) =>
    backlog.title.toLowerCase().includes(filterBacklog.toLowerCase())
  );

  const handleMoveTask = (
    tasksID: number,
    status: TaskStatus,
    sprintId: number
  ) => {
    dispatch(updateTaskStatus({ tasksID, status, sprintId }));
  };

  useEffect((): void => {
    dispatch(fetchBacklog());
  }, [dispatch, id]);

  if (loading)
    return (
      <Typography
        sx={{ display: 'flex', justifyContent: 'center', minHeight: '100vh' }}
      >
        {t('loading')}
      </Typography>
    );
  return (
    <>
      <AppSearchBacklog />
      <SideBar />
      <Grid2
        container
        spacing={2}
        sx={{ mt: 5, pr: 4, ml: { xs: '6rem', lg: '14rem' } }}
      >
        {filteredBacklog.map((backlog) => (
          <BacklogPageItem
            key={backlog.tasksID}
            backlog={backlog}
            onMoveTask={handleMoveTask}
          />
        ))}
      </Grid2>
    </>
  );
};
