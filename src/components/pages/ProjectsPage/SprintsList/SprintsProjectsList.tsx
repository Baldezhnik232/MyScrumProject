import { Grid2, Typography } from '@mui/material';
import { SprintsPageItems } from '../Sprintsitems/SprintsProjectsPageItems';
import {useEffect} from 'react';
import { RootState, AppDispatch } from '../../../../store';
import { useParams } from 'react-router-dom';
import { AppBreadcrumbs } from '../RouterPanel/BreadcrumbsProjects';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSprints } from '../../../../store/sprintsSlice';
import { Sprint } from '../../../../api/types/interfaceApi.tsx';


export const AppSprintsList = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();;


  const dispatch = useDispatch<AppDispatch>();

  const { sprints, loading } = useSelector((state: RootState) => state.sprints);


  useEffect((): void => {
    dispatch(fetchSprints());
  }, [dispatch]);


    const projectSprints = sprints.filter((sprint) => sprint.projectId.toString() === id);

   
  if (loading)
    return (
      <Typography
        sx={{ display: 'flex', justifyContent: 'center', minHeight: '5vh' }}
      >
        {t('loading')}
      </Typography>
    );


  return (
    <>
      <AppBreadcrumbs />
      <Grid2
        container
        spacing={2}
        sx={{ mt: 5 }}
      >
        {projectSprints.map((sprints: Sprint) => (
          <SprintsPageItems
            key={sprints.tasksID}
            sprints={sprints}
          />
        ))}
      </Grid2>
    </>
  );
};
