

import { Typography, Grid2 } from "@mui/material"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import {AppBreadcrumbs} from '../../projectsPage/RouterPanel/BreadcrumbsProjects'
import {BacklogPageItem} from '../BacklogItems/backlogItems'
import {AppSearchBacklog} from '../SearchBacklog/SearchBacklog'
import {backlogMoksApi} from '../../../../api/index'
import {Backlog} from '../../../../api/interfaceApi'
import {AppButtonAdd} from '../AddButton/FloatingActionButton'


export const AppBacklogList = () => {
  const {id} = useParams<{id:string}>();
  const [task, setTask] = useState<Backlog[]>([])
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(()=> {
    backlogMoksApi.getBacklog({})
    .then((data)=> {
      const filteredTask = data
      setTask(filteredTask)
    })
    .then(()=> setLoading(false))
  }, [id])

  if (loading) return <Typography align={'center'} >Загрузка...</Typography>;

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
      <AppButtonAdd />
      </Grid2>
    </>

  )
}