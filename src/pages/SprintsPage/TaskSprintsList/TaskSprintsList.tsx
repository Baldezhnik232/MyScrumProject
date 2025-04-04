import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid2, Typography } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { TaskSprintsItems } from '../TasksSprintsItems/TaskSprintsPage.tsx';
import { Tasks } from '../../../api/types/interfaceApi.tsx';
import { SideBar } from '../../ProjectsPage/RouterPanel/SidebarProjects.tsx';
import { fetchBacklog, updateTaskStatusSprints  } from '../../../store/backlogSlice.ts';
import { useAppDispatch, useAppSelector } from '../../../store/hooks.ts';
import { useTranslation } from 'react-i18next';

export const AppTaskSprints = () => {
  const { t } = useTranslation();

  const { sprintId } = useParams<{ id: string; sprintId: string }>();
  const dispatch = useAppDispatch();

  const { sprints, loading } = useAppSelector((state) => state.backlog);


  const handleMoveSprintTask = (
    SprintTasksID: number,
    status: Tasks["status"],
    sprintId: number
  ) => {
    dispatch(updateTaskStatusSprints({ SprintTasksID, status, sprintId }));
  };

  useEffect(() => {
    dispatch(fetchBacklog());
  }, [dispatch]);

  const taskSpr: Tasks[] = sprints.filter(
    (task) => task.sprintId?.toString() === sprintId
  );

  const todoTasks = taskSpr.filter((task) => task.status === 'todo');
  const doingTasks = taskSpr.filter((task) => task.status === 'doing');
  const doneTasks = taskSpr.filter((task) => task.status === 'done');

  

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
      <SideBar
        showSprintLink={true}
        showBacklogLink={false}
      />
      {taskSpr.length > 0 ? (
        <>
          {todoTasks.length > 0 && (
            <>
              {/* <Typography variant="h6">📝 To Do</Typography> */}
              <Grid2
                container
                spacing={2}
                sx={{ mt: 5, pr: 4, ml: { xs: '6rem', lg: '14rem' } }}
              >
                {todoTasks.map((task) => (
                  <TaskSprintsItems
                    key={task.tasksID}
                    tasks={task}
                    onMoveSprintTask={handleMoveSprintTask}
                  />
                ))}
              </Grid2>
            </>
          )}

          {doingTasks.length > 0 && (
            <>
              <Typography variant='h6'>🚀 Doing</Typography>
              <Grid2
                container
                spacing={2}
                sx={{ mt: 2 }}
              >
                {doingTasks.map((task) => (
                  <TaskSprintsItems
                    key={task.tasksID}
                    tasks={task}
                    onMoveSprintTask={handleMoveSprintTask}
                  />
                ))}
              </Grid2>
            </>
          )}

          {doneTasks.length > 0 && (
            <>
              <Typography variant='h6'>🚀 Done</Typography>
              <Grid2
                container
                spacing={2}
                sx={{ mt: 5 }}
              >
                {doneTasks.map((task: Tasks) => (
                  <TaskSprintsItems
                    key={task.tasksID}
                    tasks={task}
                    onMoveSprintTask={handleMoveSprintTask}
                  />
                ))}
              </Grid2>
            </>
          )}
        </>
      ) : (
        <Typography
          sx={{ display: 'flex', justifyContent: 'center', mt: 10, mb: 60 }}
        >
          {t('projectsFind')}
        </Typography>
      )}
    </>
  );
};
