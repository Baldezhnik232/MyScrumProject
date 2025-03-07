

import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import {Tasks} from "../../../../api/types/interfaceApi.tsx"
import { Grid2, Typography } from "@mui/material"
import {TaskSprintsItems} from '../TasksSprintsItems/TaskSprintsPage'
// import {tasksMocksApi} from '../../../../api'
import {AppBreadcrumbs} from '../../ProjectsPage/RouterPanel/BreadcrumbsProjects.tsx'
import {fetchBacklog} from "../../../../store/backlogSlice"
import {useDispatch, useSelector} from "react-redux";


export const AppTaskSprints = ()=> {
  const { sprintId } = useParams<{ id: string, sprintId: string }>();
  const dispatch = useDispatch();

  const { sprints, loading } = useSelector((state: RootState) => state.backlog);


  useEffect(() => {
    dispatch(fetchBacklog());
  }, [dispatch]);



  const taskSpr = sprints.filter((task) => task.sprintId?.toString() === sprintId);

  const todoTasks = taskSpr.filter((task) => task.status === 'todo');
  const doingTasks = taskSpr.filter((task) => task.status === 'doing');
  const doneTasks = taskSpr.filter((task) => task.status === 'done');

  if (loading) return <Typography sx={{display:'flex', justifyContent: 'center', minHeight: '50vh' }} >Loading...</Typography>;

  return (
    <>
    <AppBreadcrumbs showBacklogLink={false} />
      <Grid2 container spacing={2} sx={{ mt: 5 }}>
        {todoTasks.map((task: Tasks) => (
          <TaskSprintsItems key={task.taskID} tasks={task}  />
        ))}
      </Grid2>
      <Grid2 container spacing={2} sx={{ mt: 5 }}>
        {doingTasks.map((task: Tasks) => (
            <TaskSprintsItems key={task.taskID} tasks={task}  />
        ))}
      </Grid2>
      <Grid2 container spacing={2} sx={{ mt: 5 }}>
        {doneTasks.map((task: Tasks) => (
            <TaskSprintsItems key={task.taskID} tasks={task} />
        ))}
      </Grid2>
    </>
  );
};
