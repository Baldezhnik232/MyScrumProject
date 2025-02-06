import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";

 const AppSearch = () => {
  const {t} = useTranslation()
    return (
      <TextField
      id="outlined-search" 
      label={t('homeSearch.title')} 
      type="search"
      fullWidth
      sx={{mt:2}} 
      >
      </TextField>
    )
  
 }



 export default AppSearch