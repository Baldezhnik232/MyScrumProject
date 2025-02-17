import { Box, AppBar, Toolbar, Typography,MenuItem } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from "react-i18next";
import {useLanguage} from './logic/useHomeHeader'

const AppHeader = () =>  {
      const { t  } = useTranslation();
      const { language, handleChange } = useLanguage();
  return ( <Box sx = {{flexGrow:1}}>
            <AppBar position='static'>
                  <Toolbar>
                        <Typography variant='h5' component={'div'} color={'inherit'} sx={{flexGrow:1}}>
                        {t("header.title")}
                        </Typography>
                        <FormControl sx={{m:4, minWidth: 80}}> 
                                    <Select
                                          labelId="demo-simple-select-autowidth-label"
                                          id="demo-simple-select-autowidth"
                                          value={language}
                                          onChange={handleChange}
                                          displayEmpty
                                          sx={{
                                                bgcolor: 'white'
                                          }}
                                          renderValue={(selected)=>(selected ? selected : "Lang")}
                                    >                               
                                    <MenuItem value= 'EN'>EN</MenuItem>
                                    <MenuItem value= 'RU'>RU</MenuItem>
                                    </Select>          
                        </FormControl>
                  </Toolbar>


            </AppBar>
         </Box>
            

  );        
          
}


export default AppHeader