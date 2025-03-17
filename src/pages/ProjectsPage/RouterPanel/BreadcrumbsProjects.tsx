import { Breadcrumbs, Link, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useLocation, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/hooks.ts';
import { useEffect } from 'react';
import { fetchProjects } from '../../../store/projectsSlice.ts';

interface ShowLinks {
  showBacklogLink?: boolean;
  showTaskLink?: boolean;
  showSprintLink?: boolean;
}

export const AppBreadcrumbs: React.FC<ShowLinks> = ({
  showBacklogLink = true,
  showTaskLink = false,
  showSprintLink = false,
}) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string  }>();

  const theme = useTheme();
  const location = useLocation();

  const projectPage: boolean = location.pathname === `/project/${id}`;
  const backlogPage: boolean = location.pathname === `/project/${id}/backlog`;
  const sprintpage: boolean = location.pathname.includes(`/project/${id}/sprints/`);
  const taskPage: boolean = location.pathname === `/project`;
  

  const dispatch = useAppDispatch();
  useEffect((): void => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const currentProject = useAppSelector(state => state.projects.projects.find((proj) => proj.id.toString() === id));
  const currentSprint = useAppSelector(state => state.sprints.sprints.find((spr) => spr.projectId.toString() === id));

  return (
    <Breadcrumbs aria-label='breadcrumb'>
      <Link
        component={RouterLink}
        to={`/`}
        underline='none'
        sx={{ color: 'black' }}
      >
        {t('homePageRoute')}
      </Link>

      <Link
        sx={{ color: projectPage ? theme.palette.primary.main : 'black' }}
        component={RouterLink}
        to={`/project/${id}`}
        underline='none'
      >
        {currentProject ? t('projects', { id: currentProject.id }) : '...'}
      </Link>
      {showBacklogLink && ( 
      <Link
        sx={{ color: backlogPage ? theme.palette.primary.main : 'black' }}
        underline='none'
        component={RouterLink}
        to={`/project/${id}/backlog`}
      >
        {t('backlog')}
      </Link>
    )}
    {showSprintLink && ( 
      <Link
        sx={{ color: sprintpage ? theme.palette.primary.main : 'black' }}
        underline='none'
        component={RouterLink}
        to={`/project/${id}/sprints/`}
      >
        {currentSprint ? t('sprints', { id: currentSprint.projectId }) : '...'}
      </Link>
    )}
      {showTaskLink && (
        <Link
          sx={{ color: taskPage ? theme.palette.primary.main : 'black' }}
          underline='none'
          component={RouterLink}
          to={`/project`}
        ></Link>
      )}
    </Breadcrumbs>
  );
};
