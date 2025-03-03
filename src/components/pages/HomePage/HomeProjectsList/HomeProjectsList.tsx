import { useEffect } from 'react';

import { Grid2, Typography } from '@mui/material';
import { AppProjectsItem } from '../HomeProjectsItems/HomeProjectsItem';
import { Project } from '../../../../api/types/interfaceApi.tsx';
import AppSearch from '../HomeSearch/HomeSearch';
import { RootState, AppDispatch } from '../../../../store';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProjects } from '../../../../store/projectsSlice';
import { useTranslation } from 'react-i18next';

export const AppProjectsList: React.FC = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch<AppDispatch>();
  useEffect((): void => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const projects: Project[] = useSelector(
    (state: RootState): Project[] => state.projects.projects
  );
  const filterProject: string = useSelector(
    (state: RootState): string => state.projects.filterProject
  );
  const loading: boolean = useSelector(
    (state: RootState): boolean => state.projects.loading
  );
  const error: string | null = useSelector(
    (state: RootState): string | null => state.projects.error
  );

  const filterProjects = projects.filter((project) =>
    project.title
      .toLocaleLowerCase()
      .includes(filterProject.toLocaleLowerCase())
  );

  if (loading) return <Typography  sx={{display:'flex', justifyContent: 'center', minHeight: '50vh' }}> {t('loading')} </Typography>;

  if (error) return (<Typography align={'center'}> {t('error')}:{error} </Typography>);

  return (
    <>
      <AppSearch />
      <Grid2
        container
        spacing={2}
        sx={{ mt: 5 }}
      >
        {filterProjects.length > 0 ? (
          filterProjects.map((project: Project) => (
            <AppProjectsItem
              key={project.id}
              project={project}
            />
          ))
        ) : (
          <Typography align='center'>Проект не найден</Typography>
        )}
      </Grid2>
    </>
  );
};
