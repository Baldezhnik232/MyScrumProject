

import { useEffect, useState } from "react"
import {useParams} from "react-router-dom"
import { Grid2, Typography } from "@mui/material"
import {TaskSprintsItems} from '../TasksSprintsItems/TaskSprintsPage'
import {Tasks} from '../../../../api/types/interfaceApi.tsx'
import {AppBreadcrumbs} from '../../ProjectsPage/RouterPanel/BreadcrumbsProjects.tsx'
import {fetchBacklog} from "../../../../store/backlogSlice"
import {useDispatch, useSelector} from "react-redux";
import { RootState, AppDispatch } from '../../../../store';
import {AppButtonAddTasks} from '../AddButtonTasks/AppButtonTasks.tsx'
import {AppFormTasks} from '../AddFormTasks/CreateFormTasks.tsx'
import {addTask} from '../../../../store/tasksSlice.tsx'



export const AppTaskSprints = ()=> {
  const { id } = useParams<{ id: string, sprintId: string }>();

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  
  const { tasks, loading } = useSelector((state: RootState) => state.tasks);


  useEffect(() => {
    dispatch(fetchBacklog());
  }, [dispatch]);


  const taskSpr: Tasks[] = tasks.filter((task) => task.id.toString() === id);

  const todoTasks = taskSpr.filter((task) => task.status === '📝 To Do');
  const doingTasks = taskSpr.filter((task) => task.status === '🚀 Doing');
  const doneTasks = taskSpr.filter((task) => task.status === '🚀 Done');

  if (loading) return <Typography sx={{display:'flex', justifyContent: 'center', minHeight: '50vh' }} >Loading...</Typography>;


return (
  <>
    <AppBreadcrumbs showBacklogLink={false} />
    {todoTasks.length > 0 && (
      <>
        <Typography variant="h6">📝 To Do</Typography>
        <Grid2 container spacing={2} sx={{ mt: 2 }}>
          {todoTasks.map((task) => (
            <TaskSprintsItems key={task.id} tasks={task} status={task.status} />
          ))}
        </Grid2>
      </>
    )}
    {doingTasks.length > 0 && (
      <>
        <Typography variant="h6">🚀 Doing</Typography>
        <Grid2 container spacing={2} sx={{ mt: 2 }}>
          {doingTasks.map((task) => (
            <TaskSprintsItems key={task.id} tasks={task} status={task.status} />
          ))}
        </Grid2>
      </>
    )}
    {doneTasks.length > 0 && (
      <>
        <Typography variant="h6">🚀 Done</Typography>
        <Grid2 container spacing={2} sx={{ mt: 5 }}>
          {doneTasks.map((task) => (
            <TaskSprintsItems key={task.id} tasks={task} status={task.status} />
          ))}
          
        </Grid2>
      </>
    )}
    <Grid2 container sx={{ mt: 2, display: 'flex', justifyContent: 'center', minHeight: '5vh' }}>
        <AppButtonAddTasks setOpen={setOpen} />
        <AppFormTasks open={open} setOpen={setOpen} addTask={addTask}/>
      </Grid2>
  </>
)} 