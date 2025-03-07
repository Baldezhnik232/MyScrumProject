import { Grid2, Typography } from '@mui/material';
import { SprintsPageItems } from '../Sprintsitems/SprintsProjectsPageItems';
import {useEffect, useState} from 'react';
import { RootState, AppDispatch } from '../../../../store';
import { useParams } from 'react-router-dom';
import { AppBreadcrumbs } from '../RouterPanel/BreadcrumbsProjects';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSprints } from '../../../../store/sprintsSlice';
import { Sprint } from '../../../../api/types/interfaceApi.tsx';
import {AppButtonAddSpirits} from "../AddButtonSprints/AppButtonSpirits.tsx";
import {AppFormSprints} from "../AddFormSpirits/CreateFormSprints.tsx";
import { addSprint } from '../../../../store/sprintsSlice.tsx'


export const AppSprintsList = () => {
  const { t } = useTranslation();

  const { id } = useParams<{ id: string }>();;
  const [open, setOpen] = useState(false);


  const dispatch = useDispatch<AppDispatch>();

  const { sprints, loading } = useSelector((state: RootState) => state.sprints);


  useEffect((): void => {
    dispatch(fetchSprints());
  }, [dispatch]);


    const projectSprints = sprints.filter((sprint) => sprint.projectId.toString() === id);

    const addNewSprint = (newSprint: Sprint) => {
        dispatch(addSprint(newSprint));
    };

    console.log(addNewSprint, 'New Sprint');

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
            sprints={sprints}
          />
        ))}
      </Grid2>
      <Grid2 container sx={{ mt: 2, display: 'flex', justifyContent: 'center', minHeight: '5vh' }}>
        <AppButtonAddSpirits setOpen={setOpen} />
          <AppFormSprints open={open} setOpen={setOpen} addSprints={addNewSprint}  />
      </Grid2>
    </>
  );
};
