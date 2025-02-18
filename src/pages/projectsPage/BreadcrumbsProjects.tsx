import {  Breadcrumbs, Link,useTheme} from '@mui/material'
import { Link  as RouterLink} from 'react-router-dom'


export const AppBreadcrumbs = ()=> {
  const theme = useTheme();
return (
  <Breadcrumbs aria-label="breadcrumb">
  <Link component={RouterLink} to={`/`} underline="hover"  sx={{ color: 'black' }} >
    Home Page
  </Link>
  <Link sx={{ color: theme.palette.primary.main }} underline="hover">Projects</Link>
  <Link  sx={{ color: 'black' }} underline="hover" component = {RouterLink} to={``}>
    Backlog Page
  </Link>
  
</Breadcrumbs>
)
  

}