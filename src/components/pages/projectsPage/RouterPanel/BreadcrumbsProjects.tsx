import {  Breadcrumbs, Link,useTheme} from '@mui/material'
import { Link  as RouterLink, useLocation, useParams} from 'react-router-dom'


export const AppBreadcrumbs = ()=> {
  const {id} = useParams<{id:string}>()
  const theme = useTheme();
  const location = useLocation();
  const projectPage = location.pathname === `/Project/${id}`;
  const backlogPage = location.pathname === `/Project/${id}/Backlog`

return (
  <Breadcrumbs aria-label="breadcrumb">
  <Link component={RouterLink} to={`/`} underline="hover"  sx={{ color: 'black' }} >
    Home Page
  </Link>
  <Link sx={{ color: projectPage ?  theme.palette.primary.main : 'black'}} component={RouterLink} to ={`/Project/${id}`} underline="hover">Projects</Link>
  <Link sx={{ color: backlogPage ? theme.palette.primary.main : 'black'}} underline="hover" component = {RouterLink} to={`/Project/${id}/Backlog`}>
    Backlog Page
  </Link>
  
</Breadcrumbs>
)
  

}