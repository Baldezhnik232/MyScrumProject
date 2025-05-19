import { Box, AppBar, Toolbar, Typography, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useLanguage } from './Logic/UseHomeHeader.ts';

const AppHeader = () => {
  const { t } = useTranslation();
  const { language, handleChange } = useLanguage();
  return (
    <Box>
      <AppBar
        sx={{
          minHeight: { xs: '3.91rem', sm: '4rem', md: '4rem', lg: '4rem', xl: '4rem' },
          minWidth: { xs: '25.25rem' },
        }}
        position='static'
      >
        <Toolbar>
          <Typography
            component={Link}
            variant='h5'
            color={'inherit'}
            to='/'
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              minWidth: { xs: '7.1rem' },
              minHeight: { xs: '2rem' },
              ml: { xs: '1.6rem' },
              mt: { xs: '0.1rem' },
            }}
            fontSize={{ xs: '1.5rem' }}
          >
            {t('header.title')}
          </Typography>
          <FormControl
            size='small'
            sx={{
              minWidth: { xs: '2.9rem' },
              mt: { xs: '0.1rem' },
            }}
          >
            <Select
              value={language}
              onChange={handleChange}
              sx={{
                bgcolor: 'white',
              }}
              renderValue={(selected) => (selected ? selected : 'Lang')}
            >
              <MenuItem value='EN'>EN</MenuItem>
              <MenuItem value='RU'>RU</MenuItem>
            </Select>
          </FormControl>
          <IconButton
            size='large'
            edge='end'
            color='inherit'
            sx={{ minWidth: { xs: '2.9rem' }, mt: { xs: '0.1rem' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppHeader;
