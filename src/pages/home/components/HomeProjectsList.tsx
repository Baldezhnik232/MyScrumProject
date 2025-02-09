


import { Grid2 } from "@mui/material"
import {AppProjectsItem} from './HomeProjectsItems/HomeProjectsItem'
import {projectsApi} from './HomeProjectsItems/logicsHomeProjects/ProjectsApi'
import {Project} from './HomeProjectsItems/logicsHomeProjects/interfaceApi'

const AppProjectsList: React.FC = () => {
  return (
    <Grid2 container spacing={2}>
    {projectsApi.map((project: Project) => (
        <AppProjectsItem project={project} />
    ))}
  </Grid2>
  )


}





export default AppProjectsList