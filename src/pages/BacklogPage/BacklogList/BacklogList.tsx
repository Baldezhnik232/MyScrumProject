

import { Typography, Grid2 } from "@mui/material"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import {AppBreadcrumbs} from '../../ProjectsPage/RouterPanel/BreadcrumbsProjects.tsx'
import {BacklogPageItem} from '../BacklogItems/BacklogItems.tsx'
import {AppSearchBacklog} from '../SearchBacklog/SearchBacklog.tsx'
import {AppButtonAdd} from '../AddButton/FloatingActionButton.tsx'
import {AppForm} from '../AddForm/CreateFormTask.tsx'
import { useTranslation } from "react-i18next"
import {useDispatch, useSelector} from "react-redux"
import {RootState} from "../../../store/index.ts";
import {fetchBacklog} from "../../../store/backlogSlice.ts"
import {addBacklogTask, updateTaskStatus} from '../../../store/backlogSlice.ts'
import { AppDispatch } from "../../../store/index.ts"; 


import {  TaskStatus} from "../../../api/types/interfaceApi.tsx";


export const AppBacklogList = () => {
  const {t} = useTranslation();
  const {id} = useParams<{id:string}>();
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const { backlog, filterBacklog, loading } = useSelector((state: RootState) => state.backlog);

  console.log("Backlog from Redux:", backlog);


    const filteredBacklog = backlog.filter((backlog) => backlog.title.toLowerCase().includes(filterBacklog.toLowerCase()) );


    const handleMoveTask = (tasksID: number, status: TaskStatus, sprintId: number,) => {

    dispatch(updateTaskStatus({tasksID,  status, sprintId }));

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
        {filteredBacklog.map((backlog)=>(
          <BacklogPageItem key={backlog.sprintId} backlog={backlog} onMoveTask={handleMoveTask}/>
        ))
        }
      </Grid2>
      <Grid2 container  sx={{ mt:2, display: 'flex', justifyContent: 'center' }}>
      <AppButtonAdd setOpen={setOpen} />
        <AppForm open={open} setOpen={setOpen} addTask={addBacklogTask} />
      </Grid2>
    </>

  )
}