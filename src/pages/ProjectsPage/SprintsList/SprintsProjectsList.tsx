import { Grid2, Typography, Box } from '@mui/material';
import { SprintsPageItems } from '../Sprintsitems/SprintsProjectsPageItems.tsx';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SideBar } from '../RouterPanel/SidebarProjects.tsx';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../../store/hooks.ts';
import { addSprints, fetchSprints } from '../../../store/sprintsSlice.ts';
import { Sprint } from '../../../api/types/interfaceApi.tsx';


export const AppSprintsList = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [showLoading, setShowLoading] = useState(true);


  const dispatch = useAppDispatch();

  const { sprints } = useAppSelector((state) => state.sprints);

   useEffect(()=> {
      setShowLoading(true)
      const timeOut = setTimeout( ()=>{
          setShowLoading(false)
      }, 1000) 
      return () => clearTimeout(timeOut) 
   }, [id])

  useEffect((): void => {
    if(sprints.length === 0){
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
    <Typography
      sx={{ display: 'flex', justifyContent: 'center', minHeight: '100vh' }}
    >
      {t('loading')}
    </Typography>
  );
  return (
    <Box>
      {projectSprints.length > 0 ? (
        <Grid2
          container
          spacing={2}
          sx={{ mt: 5, ml: { xs: '6rem', lg: '15rem' } }}
        >
          <SideBar />
          {projectSprints.map((sprints: Sprint) => (
            <SprintsPageItems
              sprints={sprints}
              key={sprints.sprintId}
            />
          ))}
        </Grid2>
      ) : (
        <Box>
          <SideBar />
        <Typography
          sx={{ display: 'flex', justifyContent: 'center', mt: 3, mb: 60 }}
        >
            {t('sprintsFind')}
        </Typography>
        </Box>
      )}
    </Box>
  );
};
