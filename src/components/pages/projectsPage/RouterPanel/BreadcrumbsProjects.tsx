import {  Breadcrumbs, Link,useTheme} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link  as RouterLink, useLocation, useParams} from 'react-router-dom'


interface ShowLinks {
  showBacklogLink?: boolean
  showTaskLink?: boolean
}

export const AppBreadcrumbs: React.FC<ShowLinks> = ({
  showBacklogLink = true,
  showTaskLink = false
})=> {
  const {t} = useTranslation();
  const {id } = useParams<{id:string}>()
  const theme = useTheme();
  const location = useLocation();
  const projectPage = location.pathname === `/Project/${id}`;
  const backlogPage = location.pathname === `/Project/${id}/Backlog`
  const taskPage = location.pathname === `/Project`

return (
  <Breadcrumbs aria-label="breadcrumb">
  <Link component={RouterLink} to={`/`} underline="hover"  sx={{ color: 'black' }} >
    {t("homePageRoute")}
  </Link>
  <Link sx={{ color: projectPage ?  theme.palette.primary.main : 'black'}} component={RouterLink} to ={`/Project/${id}`} underline="hover">{t("projects")}</Link>
  {showBacklogLink && (<Link sx={{ color: backlogPage ? theme.palette.primary.main : 'black'}} underline="hover" component = {RouterLink} to={`/Project/${id}/Backlog`}>
    {t("backlog")}
  </Link>
  )}
  {showTaskLink && (<Link sx={{color: taskPage ? theme.palette.primary.main: 'black' }} underline='hover' component={RouterLink} to={`/Project`}> 
  </Link>
)}
</Breadcrumbs>
)
  

}