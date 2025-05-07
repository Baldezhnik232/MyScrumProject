import { Grid2, Typography, Box } from '@mui/material';
import { SprintsPageItems } from '../Sprintsitems/SprintsProjectsPageItems.tsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SideBar } from '../RouterPanel/SidebarProjects.tsx';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../store/hooks.ts';
import { addSprints } from '../../../store/sprints/sprints.slice.ts';
import { fetchSprints } from '../../../store/sprints/sprints.thunk.ts';
import { selectSprinstItems } from '../../../store/sprints/sprints.selector.ts';
import { Sprint } from '../../../api/sprints/sprints.types.ts';

export const AppSprintsList = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [showLoading, setShowLoading] = useState(true);
  const dispatch = useAppDispatch();

  const sprints = useAppSelector(selectSprinstItems);

  useEffect(() => {
    setShowLoading(true);
    const timeOut = setTimeout(() => {
      setShowLoading(false);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [id]);

  useEffect((): void => {
    if (sprints.length === 0) {
      dispatch(fetchSprints());
    }
  }, [dispatch]);

  const projectSprints: Sprint[] = sprints.filter(
    (sprint) => String(sprint.projectId?.toString()) === id
  );

  const addNewSprint = (newSprint: Sprint) => {
    dispatch(addSprints(newSprint));
    console.log(addNewSprint);
  };

  if (showLoading)
    return (
      <Typography sx={{ display: 'flex', justifyContent: 'center', minHeight: '100vh' }}>
        {t('loading')}
      </Typography>
    );
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'start',
      }}
    >
      <SideBar />
      {projectSprints.length > 0 ? (
        <Grid2
          container
          spacing={{ xs: 20, sm: 20, md: 20, lg: 20, xl: 20 }}
        >
          {projectSprints.map((sprints: Sprint) => (
            <SprintsPageItems
              sprints={sprints}
              key={sprints.sprintId}
            />
          ))}
        </Grid2>
      ) : (
        <Typography sx={{ display: 'flex', justifyContent: 'center', mt: 3, mb: 60 }}>
          {t('sprintsFind')}
        </Typography>
      )}
    </Box>
  );
};
