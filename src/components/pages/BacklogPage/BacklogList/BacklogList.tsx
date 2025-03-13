

import { Typography, Grid2 } from "@mui/material"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import {AppBreadcrumbs} from '../../ProjectsPage/RouterPanel/BreadcrumbsProjects'
import {BacklogPageItem} from '../BacklogItems/BacklogItems.tsx'
import {AppSearchBacklog} from '../SearchBacklog/SearchBacklog'
import {AppButtonAdd} from '../AddButton/FloatingActionButton'
import {AppForm} from '../AddForm/CreateFormBacklog.tsx'
import { useTranslation } from "react-i18next"
import {useDispatch, useSelector} from "react-redux"
import {RootState} from "../../../../store";
import {fetchBacklog} from "../../../../store/backlogSlice"
import {addBacklogTask, removeBacklogTasks} from '../../../../store/backlogSlice.tsx'
import { AppDispatch } from "../../../../store/index.tsx"; 


import {TaskStatus} from "../../../../api/types/interfaceApi.tsx";
import { addTask } from "../../../../store/tasksSlice.tsx"


export const AppBacklogList = () => {
  const {t} = useTranslation();
  const {id} = useParams<{id:string}>();
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const { backlog, filterBacklog, loading } = useSelector((state: RootState) => state.backlog);

    const filteredBacklog = backlog.filter((backlog) => backlog.title.toLowerCase().includes(filterBacklog.toLowerCase()) );


    const handleMoveTask = (tasksID: number, status: TaskStatus, sprintId: number,) => {
      const taskMove = backlog.find(task => task.id === tasksID);
      if (!taskMove) return;

      const newTask = {...taskMove, status, sprintId}
      

    dispatch(removeBacklogTasks(tasksID));
    dispatch(addTask(newTask))

    console.log(newTask, 'new Task');
  };

    

  useEffect((): void => {
    dispatch(fetchBacklog());
  }, [dispatch, id]);

  console.log(handleMoveTask, '22332')


  if (loading) return <Typography sx={{display:'flex', justifyContent: 'center', minHeight: '100vh' }} >{t("loading")}</Typography>;
  return (
    <>
    <AppBreadcrumbs />
    <AppSearchBacklog/>

      <Grid2 container spacing={2} sx={{mt:5}}>
        {filteredBacklog.map((task)=>(
          <BacklogPageItem key={task.id} backlog={task} onMoveTask={handleMoveTask}/>
        ))
        }
      </Grid2>
      <Grid2 container  sx={{ mt:5, display: 'flex', justifyContent: 'center' }}>
      <AppButtonAdd setOpen={setOpen} />
        <AppForm open={open} setOpen={setOpen} addTask={addBacklogTask} />
      </Grid2>
    </>

  )
}