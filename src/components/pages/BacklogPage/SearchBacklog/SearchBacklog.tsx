import { TextField } from "@mui/material"
import { useTranslation } from "react-i18next"



export const AppSearchBacklog = () => {
  const {t} = useTranslation()
return (

  <TextField
  id="outlined-multiline-flexible"
  label={t("backlogSearch.title")}
  type="search"
  fullWidth
  sx={{mt:2}}
  >
  </TextField>


)
  


}