
import { useEffect } from "react"

import { Grid2, Typography } from "@mui/material"
import {AppProjectsItem} from '../HomeProjectsItems/HomeProjectsItem'
import {Project} from '../../../api/interfaceApi'
import AppSearch from '../HomeSearch'
import { RootState, AppDispatch } from "../../../store";
import { useSelector, useDispatch } from "react-redux"
import { fetchProjects } from "../../../store/projectsSlice";


const AppProjectsList: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const projects = useSelector((state:RootState)=> state.projects.projects );
  const filterProject = useSelector((state:RootState)=> state.projects.filterProject);
  const loading = useSelector((state:RootState)=> state.projects.loading)
  const error = useSelector((state:RootState)=> state.projects.error)

  const filterProjects = projects.filter((project)=> 
  project.titleKey.toLocaleLowerCase().includes(filterProject.toLocaleLowerCase()))


  if (loading) return <Typography align={'center'} >Загрузка...</Typography>;
  if( error) return <Typography align={'center'} >Ошибка: {error}</Typography>


  

  return (
    <>
    <AppSearch/> 
    <Grid2 container spacing={2} sx={{mt:5}}>
      {filterProjects.length > 0 ? (
        filterProjects.map((project: Project) => (
        <AppProjectsItem key={project.id} project={project} />
    ))
     ):
    (
      <Typography align="center">Проект не найден</Typography>
    )}
  </Grid2>
  </>
  )


}

export default AppProjectsList