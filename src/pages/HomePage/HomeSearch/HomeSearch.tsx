import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import {setFilterProject} from '../../../store/projectsSlice'



 const AppSearch = () => {
  const {t} = useTranslation()
  const dispatch = useAppDispatch();
  const filterProject: string = useAppSelector(state=> state.projects.filterProject)


    return (
      <TextField
      id="outlined-search" 
      label={t('homeSearch.title')} 
      type="search"
      fullWidth
      sx={{width: { xs: '83%', lg:'74%'}, mt:2,  ml:{xs:3, lg:28}}}
      value={filterProject}
      onChange={(e)=> dispatch((setFilterProject(e.target.value)))} 
      >
      </TextField>
    )
  
 }



 export default AppSearch

