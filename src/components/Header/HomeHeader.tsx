import { Box, AppBar, Toolbar, Typography, MenuItem } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useLanguage } from './Logic/UseHomeHeader.ts';

const AppHeader = () => {
  const { t } = useTranslation();
  const { language, handleChange } = useLanguage();
  return (
    <Box  >
      <AppBar
        sx={{height:{xs: 70, sm: 100, md: 100, lg: 100, xl:70 }}}
        position='static'>
        <Toolbar>
          <Typography
            component={Link}
            variant= 'h5'
            color={'inherit'}
            to='/'
            sx={{
              flexGrow: 1,
              textDecoration: 'none'
          }}
          >
            {t('header.title')}
          </Typography>
          <FormControl sx={{ m: 4, minWidth: 60, minHeight: 50 }}>
            <Select
              labelId='demo-simple-select-autowidth-label'
              id='demo-simple-select-autowidth'
              value={language}
              onChange={handleChange}
              displayEmpty
              sx={{
                bgcolor: 'white',
                width: 70,
                height: 50
              }}
              renderValue={(selected) => (selected ? selected : 'Lang')}
            >
              <MenuItem value='EN'>EN</MenuItem>
              <MenuItem value='RU'>RU</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeader;
