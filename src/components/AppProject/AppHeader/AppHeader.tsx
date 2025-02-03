import * as React from 'react';
import { Box, AppBar, Toolbar, Typography,MenuItem } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";






export default function AppHeader ()  {
      const { t, i18n } = useTranslation();

      console.log("Текущий язык:", i18n.language);


  return ( <Box sx = {{flexGrow:1}}>
            <AppBar position='static'>
                  <Toolbar>
                        <Typography variant='h5' component={'div'} color={'inherit'} sx={{flexGrow:1}}>
                              Scrum Projects
                        </Typography>
                        <FormControl sx={{m:4, minWidth: 80}}>
                                    <InputLabel id="demo-simple-select-autowidth-label" >Lang</InputLabel>
                                    <Select
                                          labelId="demo-simple-select-autowidth-label"
                                          id="demo-simple-select-autowidth"
                                          value={i18n.language || 'EN'}
                                          onChange={(e)=> i18n.changeLanguage(e.target.value)}
                                          autoWidth
                                          sx={{
                                                bgcolor: 'white'
                                          }}
                                          label="Age"
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




