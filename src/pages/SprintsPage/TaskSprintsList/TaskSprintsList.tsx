

import { useEffect } from "react"
import {useParams} from "react-router-dom"
import { Grid2, Typography } from "@mui/material"
import {TaskSprintsItems} from '../TasksSprintsItems/TaskSprintsPage.tsx'
import {Tasks} from '../../../api/types/interfaceApi.tsx'
import {AppBreadcrumbs} from '../../ProjectsPage/RouterPanel/BreadcrumbsProjects.tsx'
import {fetchBacklog} from "../../../store/backlogSlice.ts"
import {useDispatch, useSelector} from "react-redux";
import { RootState, AppDispatch } from '../../../store/index.ts';



export const AppTaskSprints = ()=> {
  const { sprintId } = useParams<{ id: string, sprintId: string }>();
  const dispatch = useDispatch<AppDispatch>();

  const { sprints, loading } = useSelector((state: RootState) => state.backlog);


  useEffect(() => {
    dispatch(fetchBacklog());
  }, [dispatch]);


  const taskSpr: Tasks[] = sprints.filter((task) => task.sprintId?.toString() === sprintId);

  const todoTasks = taskSpr.filter((task) => task.status === 'todo');
  const doingTasks = taskSpr.filter((task) => task.status === 'doing');
  const doneTasks = taskSpr.filter((task) => task.status === 'done');

  if (loading) return <Typography sx={{display:'flex', justifyContent: 'center', minHeight: '50vh' }} >Loading...</Typography>;

  return (
    <>
    <AppBreadcrumbs showBacklogLink={false} />
    {todoTasks.length > 0 && (
      <>
        <Typography variant="h6">📝 To Do</Typography>
        <Grid2 container spacing={2} sx={{ mt: 2 }}>
          {todoTasks.map((task) => (
            <TaskSprintsItems key={task.tasksID} tasks={task} />
          ))}
        </Grid2>
      </>
    )}
       {doingTasks.length > 0 && (
      <>
        <Typography variant="h6">🚀 Doing</Typography>
        <Grid2 container spacing={2} sx={{ mt: 2 }}>
          {doingTasks.map((task) => (
            <TaskSprintsItems key={task.tasksID} tasks={task} />
          ))}
        </Grid2>
      </>
    )}
      {doneTasks.length > 0 && (
     <>
      <Typography variant="h6">🚀 Done</Typography>
      <Grid2 container spacing={2} sx={{ mt: 5 }}>
        {doneTasks.map((task: Tasks) => (
            <TaskSprintsItems key={task.tasksID} tasks={task} />
        ))}
      </Grid2>
      </>
      )}
    </>
  );
};
