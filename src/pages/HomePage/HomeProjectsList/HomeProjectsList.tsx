import { useEffect } from 'react';
import { Grid2, Typography } from '@mui/material';
import { AppProjectsItem } from '../HomeProjectsItems/HomeProjectsItem.tsx';
import { Project } from '../../../api/types/interfaceApi.tsx';
import AppSearch from '../HomeSearch/HomeSearch.tsx';
import { useAppSelector, useAppDispatch } from '../../../store/hooks/hooks.ts';
import { fetchProjects } from '../../../store/projectsSlice.ts';
import { useTranslation } from 'react-i18next';

export const AppProjectsList: React.FC = () => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();
  useEffect((): void => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const projects: Project[] = useAppSelector(
    state => state.projects.projects
  );
  const filterProject: string = useAppSelector(
    state => state.projects.filterProject
  );
  const loading: boolean = useAppSelector(
    state => state.projects.loading
  );
  const error: string | null = useAppSelector(
    state => state.projects.error
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
        sx={{ mt: 5, pr: 4, ml: { xs: '1.5rem', lg: '14rem' }}}
      >
        {filterProjects.length > 0 ? (
          filterProjects.map((project: Project) => (
            <AppProjectsItem
              key={project.id}
              project={project}
            />
          ))
        ) : (
          <Typography sx={{display: 'flex', justifyContent: 'center'}}>{t('homeSearch.projectsFind')}</Typography>
        )}
      </Grid2>
    </>
  );
};
