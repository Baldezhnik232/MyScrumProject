import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography, CardMedia } from '@mui/material';
import { HomeAuthForm } from '../../auth/HomeAuthForm';

interface AnchorTemporaryDrawerProps {
  anchor: 'top';
  open: boolean;
  onClose: () => void;
}

export const AnchorTemporaryDrawer: React.FC<AnchorTemporaryDrawerProps> = ({
  anchor,
  open,
  onClose,
}) => {
  const [openFormAuth, setOpenFormAuth] = React.useState(false);
  const menuItems: string[] = ['Главная', 'Тарифы', 'Возможности', 'Блог', 'Чаво', 'Вход'];

  const handleClickOpen = (open: boolean) => () => {
    setOpenFormAuth(open);
  };

  const closeModal = () => {
    setOpenFormAuth(false);
  };

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
    >
      <Box
        component={'div' as React.ElementType}
        sx={{
          maxWidth: '37rem',
          height: 450,
          backgroundColor: 'black',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingBlockStart: '1rem',
        }}
      >
        <Box
          component={'div' as React.ElementType}
          position='relative'
          sx={{
            width: '1rem',
            height: '1rem',
            ml: '25rem',
          }}
          onClick={() => onClose()}
        >
          <CardMedia
            component='img'
            src='images/closeIcon/Vector 2.svg'
            sx={{
              width: '2rem',
              height: '2rem',
              position: 'absolute',
            }}
          ></CardMedia>
          <CardMedia
            component='img'
            src='images/closeIcon/Vector 3.svg'
            sx={{
              width: '2rem',
              height: '2rem',
            }}
          ></CardMedia>
        </Box>
        <List
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >
          {menuItems.map((text) => (
            <ListItem key={text}>
              <ListItemText
                primary={text}
                sx={{
                  color: 'white',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                }}
              />
            </ListItem>
          ))}
        </List>
        <Button
          variant='contained'
          onClick={handleClickOpen(true)}
          sx={{
            borderRadius: 26,
            width: 183,
            height: 47,
            backgroundColor: '#29AAE3',
          }}
        >
          <Typography
            textTransform='capitalize'
            fontSize='20'
          >
            Регистрация
          </Typography>
        </Button>
        <HomeAuthForm
          open={openFormAuth}
          onClose={handleClickOpen(false)}
        />
      </Box>
    </Drawer>
  );
};
