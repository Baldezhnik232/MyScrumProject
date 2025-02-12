


import { Grid2, Typography } from "@mui/material"
import {AppProjectsItem} from '../HomeProjectsItems/HomeProjectsItem'
import {Project} from '../../../api/interfaceApi'
import {useHomeProjectsItems} from './useHomeProjectsItems'


const AppProjectsList: React.FC = () => {
  const {projects, loading} = useHomeProjectsItems();

  if (loading) return <Typography align={'center'} >Загрузка...</Typography>;

  return (
    <Grid2 container spacing={2}>
    {projects.map((project: Project) => (
        <AppProjectsItem project={project} />
    ))}
  </Grid2>
  )


}

export default AppProjectsList