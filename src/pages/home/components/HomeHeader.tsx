import * as React from 'react';
import { Box, AppBar, Toolbar, Typography,MenuItem } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useTranslation } from "react-i18next";

export default function AppHeader ()  {
      const { t, i18n } = useTranslation();
      const [lng, setLng] = React.useState('');

      const handleChange = (event:SelectChangeEvent) => {
          const newLang = event.target.value;
          setLng(newLang);
          i18n.changeLanguage(newLang)
          localStorage.setItem("lang", newLang); 
      }
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
                                          value={lng}
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