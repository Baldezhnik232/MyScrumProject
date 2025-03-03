import { Breadcrumbs, Link, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../store';
import { useEffect } from 'react';
import { fetchProjects } from '../../../../store/projectsSlice.tsx';

interface ShowLinks {
  showBacklogLink?: boolean;
  showTaskLink?: boolean;
}

export const AppBreadcrumbs: React.FC<ShowLinks> = ({
  showBacklogLink = true,
  showTaskLink = false,
}) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  const theme = useTheme();
  const location = useLocation();

  const projectPage: boolean = location.pathname === `/project/${id}`;
  const backlogPage: boolean = location.pathname === `/project/${id}/backlog`;
  const taskPage: boolean = location.pathname === `/project`;

  const dispatch = useDispatch<AppDispatch>();
  useEffect((): void => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const currentProject = useSelector((state: RootState) =>
    state.projects.projects.find((proj) => proj.id.toString() === id)
  );

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
