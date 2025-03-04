

import { Typography, Grid2 } from "@mui/material"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import {AppBreadcrumbs} from '../../ProjectsPage/RouterPanel/BreadcrumbsProjects'
import {BacklogPageItem} from '../BacklogItems/BacklogItems.tsx'
import {AppSearchBacklog} from '../SearchBacklog/SearchBacklog'
import {AppButtonAdd} from '../AddButton/FloatingActionButton'
import {AppForm} from '../AddForm/CreateFormTask'
import { useTranslation } from "react-i18next"
import {useDispatch, useSelector} from "react-redux"
import {RootState} from "../../../../store";
import {fetchBacklog} from "../../../../store/backlogSlice"
import {addBacklogTask} from '../../../../store/backlogSlice.tsx'

export const AppBacklogList = () => {
  const {t} = useTranslation();
  const {id} = useParams<{id:string}>();
  // const [task, setTask] = useState([])
  // const [loading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const { backlog, filterBacklog, loading } = useSelector((state: RootState) => state.backlog);

  const filteredBacklog = backlog.filter((backlog) =>
      backlog.title.toLowerCase().includes(filterBacklog.toLowerCase())
  );


  useEffect((): void => {
    dispatch(fetchBacklog());
  }, [dispatch, id]);

  // const addNewTask = (newTask): void => {
  //   setTask((prevTasks)=> [...prevTasks, newTask])
  // }
  if (loading) return <Typography sx={{display:'flex', justifyContent: 'center', minHeight: '100vh' }} >{t("loading")}</Typography>;
  return (
    <>
    <AppBreadcrumbs />
    <AppSearchBacklog/>
      <Grid2 container spacing={2} sx={{mt:5}}>
        {filteredBacklog.map((backlog)=>(
          <BacklogPageItem key={backlog.id} backlog={backlog}/>
        ))}
      </Grid2>
      <Grid2 container  sx={{ mt:2, display: 'flex', justifyContent: 'center' }}>
      <AppButtonAdd setOpen={setOpen} />
        <AppForm open={open} setOpen={setOpen} addTask={addBacklogTask} />
      </Grid2>
    </>

  )
}