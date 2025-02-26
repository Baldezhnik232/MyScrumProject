

import { Typography, Grid2 } from "@mui/material"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import {AppBreadcrumbs} from '../../projectsPage/RouterPanel/BreadcrumbsProjects'
import {BacklogPageItem} from '../BacklogItems/backlogItems'
import {AppSearchBacklog} from '../SearchBacklog/SearchBacklog'
import {backlogMoksApi} from '../../../../api/index'
import {Backlog} from '../../../../api/interfaceApi'
import {AppButtonAdd} from '../AddButton/FloatingActionButton'
import {AppForm} from '../AddForm/CreateFormTask'
import { useTranslation } from "react-i18next"


export const AppBacklogList = () => {
  const {t} =useTranslation();
  const {id} = useParams<{id:string}>();
  const [task, setTask] = useState<Backlog[]>([])
  const [loading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState(false);

  
  useEffect(()=> {
    backlogMoksApi.getBacklog({})
    .then((data)=> {
      setTask(data)
    })
    .then(()=> setLoading(false))
  }, [id])

  const addNewTask = (newTask:Backlog) => {
    setTask((prevTasks)=> [...prevTasks, newTask])
  }
  if (loading) return <Typography align={'center'} >{t("loading")}</Typography>;

  return (
    <>
    <AppBreadcrumbs/>
    <AppSearchBacklog/>
    <Grid2 container spacing={2} sx={{mt:5}}>
        {task.map((task)=>(
          <BacklogPageItem key={task.id} backlog={task}/>
        ))}
      </Grid2>
      <Grid2 container  sx={{ mt:2, display: 'flex', justifyContent: 'center' }}>
      <AppButtonAdd setOpen={setOpen} />
      <AppForm open={open} setOpen={setOpen} addTask={addNewTask} />
      </Grid2>
    </>

  )
}