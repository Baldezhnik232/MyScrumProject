import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
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
      sx={{mt:2}}
      value={filterProject}
      onChange={(e)=> dispatch((setFilterProject(e.target.value)))} 
      >
      </TextField>
    )
  
 }



 export default AppSearch

