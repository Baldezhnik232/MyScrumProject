import { TextField } from "@mui/material"
import { useTranslation } from "react-i18next"
import { useAppDispatch, useAppSelector } from '../../../store/hooks.ts';
import {setFilterBacklog} from "../../../store/backlogSlice"


export const AppSearchBacklog = () => {
  const {t} = useTranslation()

   const dispatch = useAppDispatch();

   const filterBacklog = useAppSelector(state => state.backlog.filterBacklog);


return (

  <TextField
  id="outlined-multiline-flexible"
  label={t("backlogSearch.title")}
  type="search"
  fullWidth
  sx={{mt:2}}
  value={filterBacklog}
  onChange={(e) => dispatch(setFilterBacklog(e.target.value))}
  >
  </TextField>


)
  


}