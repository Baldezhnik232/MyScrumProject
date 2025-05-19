import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid2, Typography, Box } from '@mui/material';
import {
  DndContext,
  closestCenter,
  DragEndEvent,
  useSensor,
  MouseSensor,
  TouchSensor,
  useSensors,
  KeyboardSensor,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { TaskStatus, Tasks } from '../../../api/tasks/tasks.types.ts';
import { SideBar } from '../../ProjectsPage/RouterPanel/SidebarProjects.tsx';
import {
  updateTaskStatusSprints,
  removeTaskFromSprint,
} from '../../../store/backlog/backlog.slice.ts';
import { useAppDispatch, useAppSelector } from '../../../store/hooks.ts';
import { useTranslation } from 'react-i18next';
import { fetchSprints } from '../../../store/sprints/sprints.thunk.ts';
import { selectBacklogItems } from '../../../store/backlog/backlog.selectors.ts';
import { StatusColumn } from '../TasksDndColumn/StatusColumn.tsx';

export const AppTaskSprints = () => {
  const { t } = useTranslation();

  const { sprintId } = useParams<{ id: string; sprintId: string }>();

  const [showLoading, setShowLoading] = useState(true);

  const dispatch = useAppDispatch();

  const sprints = useAppSelector(selectBacklogItems);

  const handleMoveSprintTask = (
    SprintTasksID: number,
    status: Tasks['status'],
    sprintId: number
  ) => {
    dispatch(updateTaskStatusSprints({ SprintTasksID, status, sprintId }));
  };
  const handleDeleteTask = (SprintTasksID: number) => {
    dispatch(removeTaskFromSprint(SprintTasksID));
  };

  useEffect(() => {
    if (sprints.length === 0) {
      dispatch(fetchSprints);
    }
  }, [dispatch]);

  useEffect(() => {
    setShowLoading(true);
    const timeOut = setTimeout(() => {
      setShowLoading(false);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [sprintId]);

  const taskSpr: Tasks[] = sprints.filter((task) => task.sprintId?.toString() === sprintId);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active?.data?.current?.tasks) {
      const task = active.data.current.tasks as Tasks;
      console.log(over?.id);
      console.log(task.status);
      if (task.status !== over.id) {
        dispatch(
          updateTaskStatusSprints({
            SprintTasksID: task.tasksID,
            status: over.id as TaskStatus,
            sprintId: task.sprintId!,
          })
        );
      }
    }
  };

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 5,
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 350,
      tolerance: 10,
    },
  });

  const keyboardSensor = useSensor(KeyboardSensor, {
    coordinateGetter: sortableKeyboardCoordinates,
    keyboardCodes: {
      start: ['Space', 'Enter'],
      cancel: ['Escape'],
      end: ['Space', 'Enter'],
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

  const todoTasks = taskSpr.filter((task) => task.status === 'todo');
  const doingTasks = taskSpr.filter((task) => task.status === 'doing');
  const doneTasks = taskSpr.filter((task) => task.status === 'done');

  if (showLoading)
    return (
      <Typography sx={{ display: 'flex', justifyContent: 'center', minHeight: '100vh' }}>
        {t('loading')}
      </Typography>
    );

  return (
    <Box>
      <SideBar
        showSprintLink={true}
        showBacklogLink={false}
      />
      {taskSpr.length > 0 ? (
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          sensors={sensors}
        >
          <Grid2
            container
            spacing={2}
            sx={{ mt: 5, pr: 4, ml: { xs: '6rem', lg: '14rem' } }}
          >
            <StatusColumn
              id='todo'
              title='📝 To Do'
              status='todo'
              tasks={todoTasks}
              onMoveSprintTask={handleMoveSprintTask}
              onDeleteTask={handleDeleteTask}
            />
            <StatusColumn
              id='doing'
              title='🚀 Doing'
              status='doing'
              tasks={doingTasks}
              onMoveSprintTask={handleMoveSprintTask}
              onDeleteTask={handleDeleteTask}
            />
            <StatusColumn
              id='done'
              title='✅ Done'
              status='done'
              tasks={doneTasks}
              onMoveSprintTask={handleMoveSprintTask}
              onDeleteTask={handleDeleteTask}
            />
          </Grid2>
        </DndContext>
      ) : (
        <Typography sx={{ display: 'flex', justifyContent: 'center', mt: 10, mb: 60 }}>
          {t('projectsFind')}
        </Typography>
      )}
    </Box>
  );
};
