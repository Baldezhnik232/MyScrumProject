import { Breadcrumbs, Link, List, useTheme, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useLocation, useParams } from 'react-router-dom';
import { Drawer, ListItem } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useAppDispatch, useAppSelector } from '../../../store/hooks.ts';
import { useEffect } from 'react';
import { fetchProjects } from '../../../store/projectsSlice.ts';
import { AppButtonAdd } from '../../BacklogPage/AddButton/FloatingActionButton.tsx';
import { AppForm } from '../../BacklogPage/AddForm/CreateFormTask.tsx';
import {
  addBacklogTask,
  updateTaskStatus,
} from '../../../store/backlogSlice.ts';
import { useState } from 'react';
import { AppButtonAddSprints } from '../AddButtonSprints/AppButtonSpirits.tsx';
import { AppFormSprints } from '../AddFormSpirits/CreateFormSprints.tsx';
import { addSprint } from '../../../store/sprintsSlice.ts';
import { Sprint } from '../../../api/types/interfaceApi.ts';

interface ShowLinks {
  showBacklogLink?: boolean;
  showTaskLink?: boolean;
  showSprintLink?: boolean;
}

export const SideBar: React.FC<ShowLinks> = ({
  showBacklogLink = true,
  showTaskLink = false,
  showSprintLink = false,
}) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const location = useLocation();

  const projectPage: boolean = location.pathname === `/project/${id}`;
  const backlogPage: boolean = location.pathname === `/project/${id}/backlog`;
  const sprintpage: boolean = location.pathname.includes(
    `/project/${id}/sprints/`
  );
  const taskPage: boolean = location.pathname === `/project`;

  const dispatch = useAppDispatch();
  useEffect((): void => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const currentProject = useAppSelector((state) =>
    state.projects.projects.find((proj) => proj.id.toString() === id)
  );
  const currentSprint = useAppSelector((state) =>
    state.sprints.sprints.find((spr) => spr.projectId.toString() === id)
  );

  const addNewSprint = (newSprint: Sprint) => {
    dispatch(addSprint(newSprint));
  };

  return (
    <Drawer
      variant='permanent'
      anchor='left'
      sx={{
        width: 340,
        flexShrink: 0,
        position: 'fixed',
        left: 20,
        button: 0,
        height: '80vh',
        '& .MuiDrawer-paper': {
          width: 365,
          position: 'relative',
        },
      }}
    >
      <List sx={{ width: '100%', display: 'grid', overFlowX: 'hidden' }}>
        <Link
          component={RouterLink}
          to={`/`}
          underline='none'
          sx={{ color: 'black' }}
        >
          {t('homePageRoute')}
        </Link>
        <ListItem divider />
        <Link
          sx={{ color: projectPage ? theme.palette.primary.main : 'black' }}
          component={RouterLink}
          to={`/project/${id}`}
          underline='none'
        >
          {currentProject ? t('projects', { id: currentProject.id }) : '...'}
        </Link>

        <ListItem
          sx={{ height: projectPage ? 70 : 'auto' }}
          divider
        />
        {projectPage && (
          <Box
            sx={{
              position: 'absolute',
              top: '45%',
              right: '35%',
              transform: 'translateX(-40%)',
            }}
          >
            <AppButtonAddSprints setOpen={setOpen} />
            <AppFormSprints
              open={open}
              setOpen={setOpen}
              addSprints={addNewSprint}
            />
          </Box>
        )}

        {showBacklogLink && (
          <Link
            sx={{ color: backlogPage ? theme.palette.primary.main : 'black' }}
            underline='none'
            component={RouterLink}
            to={`/project/${id}/backlog`}
          >
            {t('backlog')}
            <ArrowRightAltIcon
              fontSize='small'
              sx={{ position: 'fixed' }}
            />
          </Link>
        )}

        {showSprintLink && (
          <Link
            sx={{ color: sprintpage ? theme.palette.primary.main : 'black' }}
            underline='none'
            component={RouterLink}
            to={`/project/${id}/sprints/`}
          >
            {currentSprint
              ? t('sprints', { id: currentSprint.projectId })
              : '...'}
            <ArrowRightAltIcon
              fontSize='small'
              sx={{ position: 'fixed' }}
            />
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
      </List>
      {backlogPage && (
        <Box
          sx={{
            position: 'absolute',
            top: '13%',
            right: '40%',
            transform: 'translateX(-50%)',
          }}
        >
          <AppButtonAdd setOpen={setOpen} />
          <AppForm
            open={open}
            setOpen={setOpen}
            addTask={addBacklogTask}
          />
        </Box>
      )}
    </Drawer>
  );
};
