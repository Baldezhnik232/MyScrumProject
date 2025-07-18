import { Box, Button, CardMedia, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react';
import { SxProps, Theme } from '@mui/material';

type IconImage = {
  src: string;
  sx?: SxProps<Theme>;
  position?: SxProps<Theme>;
};
type ListItemData = {
  text: string;
  sx?: SxProps<Theme>;
  customsWidth?: Record<number, string>;
};

export interface HomePossibilitiesCards {
  index: number;
  iconColor: string;
  iconImages: IconImage[];
  title: string;
  subtitle: string;
  items: ListItemData[];
  boxSx?: SxProps<Theme>;
  titleSX?: SxProps<Theme>;
  subtitleSx?: SxProps<Theme>;
}

export const HomeCards: React.FC<HomePossibilitiesCards> = ({
  index,
  iconColor,
  iconImages,
  title,
  subtitle: subtitle,
  items,
  boxSx,
  titleSX,
  subtitleSx: subtitleSx,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column' },
        backgroundColor: '#F9F9F9',
        borderRadius: 10,
        ...boxSx,
        marginInline: { xs: '2.5rem', sm: '0.2rem' },
      }}
    >
      <Box
        sx={{
          ml: { xs: '3.5rem', sm: '1.5rem' },
          mt: { xs: '3rem', sm: '2rem' },
          width: '5rem',
          height: '5rem',
          borderRadius: '1.8rem',
          backgroundColor: iconColor,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            position: { xs: 'relative' },
            flexDirection: 'column',
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
          ml: { xs: '3.5rem', sm: '1.5rem' },
          mt: { xs: '1rem', sm: '1rem' },
          fontWeight: { xs: 900 },
          color: '#29AAE3',
          ...titleSX,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant='h4'
        sx={{
          fontSize: { xs: 21 },
          ml: { xs: '3.5rem', sm: '1.5rem' },
          mt: { xs: '1rem' },
          fontWeight: { xs: 500 },
          color: '#434449',
          ...subtitleSx,
        }}
      >
        {subtitle}
      </Typography>
      <List
        sx={{
          listStyleType: 'disc',
          '& .MuiListItem-root': {
            display: 'list-item',
            p: 0,
            '&::marker': {
              color: '#29AAE3',
              fontSize: 25,
            },
            '& + .MuiListItem-root': {
              mt: '0.7rem',
            },
          },
          pl: { xs: '4.9rem', sm: '2.8rem' },
          mt: { xs: '1rem', sm: '0.5rem' },
        }}
      >
        {items.map((item, index) => (
          <ListItem
            key={index}
            sx={{
              ...item.sx,
            }}
          >
            <ListItemText primary={item.text}></ListItemText>
          </ListItem>
        ))}
      </List>
      <Button
        variant='contained'
        sx={{
          borderRadius: 26,
          fontSize: 20,
          fontWeight: 500,
          paddingInline: { xs: '5.5rem', sm: '3rem' },
          color: 'white',
          backgroundColor: '#54A757',
          mt: '1rem',
          marginInline: { xs: '3.6rem', sm: '0.5rem' },
          textTransform: 'capitalize',
          marginBlockStart:
            index === 2
              ? { sm: '4.5rem' }
              : index === 3
                ? { sm: '10.4rem' }
                : index === 4
                  ? { sm: '11.3rem' }
                  : null,
        }}
      >
        Подробнее
      </Button>
    </Box>
  );
};
