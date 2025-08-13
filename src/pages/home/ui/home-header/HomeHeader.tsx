import {
  AppBar,
  Toolbar,
  Typography,
  MenuItem,
  FormControl,
  Select,
  IconButton,
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
  useTheme,
  Backdrop,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useLanguage } from './logic/UseHomeHeader.ts';
import * as React from 'react';
import { AnchorTemporaryDrawer } from './layout/Sidebar.tsx';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@emotion/react';
import { HomeAuthForm } from '../auth/HomeAuthForm.tsx';

interface AppHeaderProps {}

export const AppHeader: React.FC<AppHeaderProps> = ({}) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const { language, handleChange } = useLanguage();
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const [openFormAuth, setOpenFormAuth] = React.useState(false);

  const menuItems: string[] = [
    'Главная',
    'Тарифы',
    'Возможности',
    'Блог',
    'Чаво',
    'Вход',
    'Регистрация',
  ];

  const isMobile: boolean = useMediaQuery<Theme>(theme.breakpoints.down('sm'));

  const handleClickOpen = (open: boolean) => () => {
    setOpenFormAuth(open);
  };

  const toggleDrawer = (open: boolean) => () => {
    setOpenDrawer(open);
  };
  return (
    <AppBar
      sx={{
        minHeight: { xs: '3.91rem', sm: '4rem', md: '4rem', lg: '4rem', xl: '4rem' },
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
            ml: { xs: '1.6rem', sm: '-0.4rem' },
            mt: { xs: '0.1rem' },
          }}
          fontSize={{ xs: '1.5rem', sm: '1.4rem' }}
        >
          {t('header.title')}
        </Typography>
        {!isMobile && (
          <List
            sx={{
              display: 'flex',
            }}
          >
            {menuItems.map((item, index) => (
              <React.Fragment key={item}>
                {index === menuItems.length - 1 ? (
                  <Button
                    onClick={handleClickOpen(true)}
                    variant='contained'
                    sx={{
                      borderRadius: 26,
                      width: 121,
                      height: 47,
                      backgroundColor: '#29AAE3',
                      marginInline: '1rem',
                    }}
                  >
                    <Typography
                      mt={'0.1rem'}
                      fontSize={'0.9rem'}
                    >
                      {item}
                    </Typography>
                  </Button>
                ) : (
                  <Box>
                    <ListItem
                      key={item}
                      sx={{
                        mt: '.4rem',
                        ml: '1rem',
                        p: 0,
                      }}
                    >
                      <ListItemText
                        primary={item}
                        sx={{}}
                      />
                    </ListItem>
                  </Box>
                )}
              </React.Fragment>
            ))}
          </List>
        )}
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
        {isMobile && (
          <IconButton
            onClick={toggleDrawer(true)}
            size='large'
            edge='end'
            color='inherit'
            sx={{ minWidth: '2.9rem', mt: '0.1rem' }}
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
      <HomeAuthForm
        open={openFormAuth}
        onClose={handleClickOpen(false)}
      />

      <AnchorTemporaryDrawer
        anchor='top'
        open={openDrawer}
        onClose={toggleDrawer(false)}
      />
    </AppBar>
  );
};
