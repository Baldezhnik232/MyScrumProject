import { Grid2, Typography } from '@mui/material';
import { SprintsPageItems } from '../Sprintsitems/SprintsProjectsPageItems.tsx';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { AppBreadcrumbs } from '../RouterPanel/BreadcrumbsProjects.tsx';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../store/hooks.ts';
import { fetchSprints } from '../../../store/sprintsSlice.ts';
import { Sprint } from '../../../api/types/interfaceApi.tsx';
import {AppButtonAddSpirits} from "../AddButtonSprints/AppButtonSpirits.tsx";
import {AppFormSprints} from "../AddFormSpirits/CreateFormSprints.tsx";
import { addSprint } from '../../../store/sprintsSlice.ts'


export const AppSprintsList = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();;
  const [open, setOpen] = useState(false);


  const dispatch = useAppDispatch();

  const { sprints, loading } = useAppSelector(state => state.sprints);


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
        sx={{ display: 'flex', justifyContent: 'center', minHeight: '100vh' }}
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
        sx={{  mt: 5 }}
      >
        {projectSprints.map((sprints: Sprint) => (
          <SprintsPageItems
            sprints={sprints}
          />
        ))}
      </Grid2>
      <Grid2 container sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
        <AppButtonAddSpirits setOpen={setOpen} />
          <AppFormSprints open={open} setOpen={setOpen} addSprints={addNewSprint}  />
      </Grid2>
    </>
  );
};
