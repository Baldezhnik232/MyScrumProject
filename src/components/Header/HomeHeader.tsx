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
        sx={{height:{xs: '4rem', sm: '4rem', md: '4rem', lg: '4rem', xl:'4rem' }}}
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
          fontSize={{xs:'1.5rem'}}
          >
            {t('header.title')}
          </Typography>
          <FormControl sx={{ m: {xs: '0.4rem', sm: '0.2rem', md: '0.4rem', lg: '0.4rem', xl:'0.4rem'}, minWidth: '0.1rem', minHeight: '0.2rem' }}>
            <Select
              value={language}
              onChange={handleChange}
              displayEmpty
              sx={{
                bgcolor: 'white',
                width: '4.4rem',
                height: '2.5rem'
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
