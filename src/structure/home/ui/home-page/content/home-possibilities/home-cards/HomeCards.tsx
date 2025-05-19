import { Box, Button, CardMedia, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { SxProps, Theme } from '@mui/material';

type IconImage = {
  src: string;
  sx?: SxProps<Theme>;
};

export interface HomePossibilitiesCards {
  iconColor: string;
  iconImages: IconImage[];
  title: string;
  subtitile: string;
  items: string[];
  boxSx?: SxProps<Theme>;
}

export const HomeCards: React.FC<HomePossibilitiesCards> = ({
  iconColor,
  iconImages,
  title,
  subtitile,
  items,
  boxSx,
}) => {
  return (
    <Box
      sx={{
        minWidth: { xs: '0.1rem' },
        display: { xs: 'flex', flexDirection: 'column' },
        backgroundColor: '#F9F9F9',
        borderRadius: 10,
        ...boxSx,
      }}
    >
      <Box
        sx={{
          ml: '3.5rem',
          mt: '3rem',
          width: '5rem',
          height: '5rem',
          borderRadius: '1.8rem',
          backgroundColor: iconColor,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            p: '0.45rem',
          }}
        >
          {iconImages.map((img, i) => (
            <CardMedia
              key={i}
              component='img'
              src={img.src}
              sx={img.sx}
            ></CardMedia>
          ))}
        </Box>
      </Box>
      <Typography
        variant='h3'
        sx={{
          fontSize: { xs: 22 },
          width: '1rem',
          ml: { xs: '3.5rem' },
          mt: { xs: '1rem' },
          fontWeight: { xs: 900 },
          color: '#29AAE3',
        }}
      >
        {title}
      </Typography>
      <Typography
        variant='h4'
        sx={{
          fontSize: { xs: 20 },
          ml: { xs: '3.5rem' },
          mt: { xs: '1rem' },
          fontWeight: { xs: 500 },
          color: '#434449',
        }}
      >
        {subtitile}
      </Typography>
      <List
        sx={{
          listStyleType: 'disc',
          '& .MuiListItem-root': {
            display: 'list-item',
            p: 0,
            '&:nth-of-type(2)': { width: '12rem' },
            '&:nth-of-type(5)': { width: '12rem' },
            '&::marker': {
              color: '#29AAE3',
              fontSize: 25,
            },
            '& + .MuiListItem-root': {
              mt: '0.4rem',
              fontSize: '1rem',
            },
          },
          pl: '4.9rem',
          mt: '1rem',
        }}
      >
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item}></ListItemText>
          </ListItem>
        ))}
      </List>
      <Box>
        <Button
          variant='contained'
          sx={{
            borderRadius: 26,
            borderColor: '#54A757',
            fontSize: 20,
            p: { xs: '0.6rem' },
            paddingInline: { xs: '6.3rem' },
            color: 'white',
            backgroundColor: '#008500',
            mt: '1rem',
            ml: '4rem',
          }}
        >
          Подробнее
        </Button>
      </Box>
    </Box>
  );
};
