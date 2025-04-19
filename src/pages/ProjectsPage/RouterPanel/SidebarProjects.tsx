import {
  Link,
  List,
  useTheme,
  Typography,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink, useLocation, useParams } from 'react-router-dom';
import { Drawer, ListItem } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks.ts';
import { useEffect } from 'react';
import { fetchProjects } from '../../../store/projectsSlice.ts';
import { AppButtonAdd } from '../../BacklogPage/AddButton/FloatingActionButton.tsx';
import { AppForm } from '../../BacklogPage/AddForm/CreateFormTask.tsx';
import { addBacklogTask} from '../../../store/backlogSlice.ts';
import { useState } from 'react';
import { AppButtonAddSprints } from '../AddButtonSprints/AppButtonSpirits.tsx';
import { AppFormSprints } from '../AddFormSpirits/CreateFormSprints.tsx';
import {addSprints} from '../../../store/sprintsSlice.ts'

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
  const { id, sprintId } = useParams<{ id: string, sprintId: string }>();
  const [open, setOpen] = useState(false);

  const theme = useTheme();
  const location = useLocation();

  const projectPage: boolean = location.pathname === `/project/${id}`;
  const backlogPage: boolean = location.pathname === `/project/${id}/backlog`;
  const sprintPage: boolean = location.pathname.includes(
`/project/${id}/sprints/${sprintId}`
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
    state.sprints.sprints.find((spr) => spr.sprintId.toString() === sprintId)
  );


  return (
    <Drawer
      variant='permanent'
      anchor='left'
      sx={{
        width: {xs:100, lg:140},
        flexShrink: 0,
        position: { xs:'fixed', lg:'fixed'},
        left: 10,
        height: { 
          xs: '38vh',
          lg: '75vh' },
        '& .MuiDrawer-paper': {
          width: {
            xs: 75,
            lg: 200
          } ,
          position: 'relative',
        },
      }}
    >
      <List sx={{ width: '100%', display: 'grid', overFlowY: 'none'  }}>
        <Link
          component={RouterLink}
          to={`/`}
          underline='none'
          sx={{ color: 'black' }}
        >
          <Typography sx={{fontSize:{xs: '0.6rem', lg: '1rem'}}}>{t('homePageRoute')}</Typography>
        </Link>
        <ListItem divider />
        <Link
          sx={{ color: projectPage ? theme.palette.primary.main : 'black' }}
          component={RouterLink}
          to={`/project/${id}`}
          underline='none'
        >
          <Typography sx={{fontSize:{xs: '0.6rem', lg: '1rem'}}}>
            {currentProject ? t('projects', { id: currentProject.id }) : '...'}
          </Typography>
        </Link>

        <ListItem
          sx={{ height: projectPage ? 40 : 'auto' }}
          divider
        />
        {projectPage && (
          <Link
            sx={{
              color: 'black',
              position: 'fixed',
              top: {
                xs: '28%',
                lg:'22%'},
              cursor: 'pointer',
            }}
            underline='none'
          >
            <AppButtonAddSprints setOpen={setOpen} />
            <AppFormSprints
              open={open}
              setOpen={setOpen}
              addSprint={addSprints}
            />
          </Link>
        )}
        

        {showBacklogLink && (
          <Link
            sx={{ color: backlogPage ? theme.palette.primary.main : 'black' }}
            underline='none'
            component={RouterLink}
            to={`/project/${id}/backlog`}
          >
            <Typography sx={{fontSize:{xs: '0.6rem', lg: '1rem'}}}>
              {t('backlog')}
            </Typography>
          </Link>
        )}

        {showSprintLink && (
          <Link
            sx={{ color: sprintPage ? theme.palette.primary.main : 'black' }}
            underline='none'
            component={RouterLink}
            to={`/project/${id}/sprints/${sprintId}`}
          >
            <Typography sx={{fontSize:{xs: '0.6rem', lg: '1rem'}}}>
            {currentSprint
              ? t('sprints', { id: currentSprint.sprintId })
              : '...'}
            </Typography>
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
        <Link
          sx={{
            color: 'black',
            position: 'fixed',
            top: {
              xs:'27%',
              lg:'23%'},
            cursor: 'pointer'
          }}
          underline='none' 
        >
          <AppButtonAdd setOpen={setOpen} />
          <AppForm
            open={open}
            setOpen={setOpen}
            addTask={addBacklogTask}
          />
        </Link>
      )}
    </Drawer>
  );
};
