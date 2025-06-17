import React from 'react';
import { Box, Typography, Link, CardMedia } from '@mui/material';

interface HomeVideoProps {}

export const HomeVideo: React.FC<HomeVideoProps> = ({}) => {
  return (
    <Box
      sx={{
        mt: { xs: '-10rem', sm: 'rem' },
        minHeight: { xs: '36rem' },
        display: 'block',
        textAlign: 'center',
        mb: { xs: '1.5rem' },
        marginInline: { xs: '3.5rem', sm: '4rem' },
      }}
    >
      <Typography
        variant='h5'
        sx={{
          fontWeight: '400',
          fontSize: { xs: 28, sm: '28+calc(28+0.3vw)' },
          color: `#434449 `,
          minWidth: { xs: '23rem' },
          mb: { xs: '2rem' },
          marginInline: { sm: '11rem' },
        }}
      >
        Shifton - автоматизированный сервис планирования расписаний
      </Typography>
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '1rem',
          minWidth: { xs: '22rem' },
          height: { xs: '10rem', sm: '20rem' },
          marginBlockEnd: { xs: '2rem' },
        }}
      >
        <iframe
          style={{ border: 0 }}
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/GjhKsd35JLg'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </Box>
      <Box
        sx={{
          height: { xs: '8rem' },
          textAlign: 'center',
          marginBlockEnd: { sm: '6rem' },
        }}
      >
        <Typography
          variant='h5'
          sx={{
            lineHeight: { xs: '2rem', sm: '2.5rem' },
            minWidth: { xs: '25rem', sm: '50rem' },
          }}
        >
          <Box
            sx={{
              minWidth: { xs: '25rem' },
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              marginInline: { sm: '8.5rem' },
            }}
          >
            <Box>Остались вопросы?&nbsp;</Box>
            <Box>С радостью на них ответим!</Box>
          </Box>
          <Box>
            Пишите в чат или на почту
            <Link> support@shifton.com</Link>
          </Box>
        </Typography>
        <Box
          sx={{
            mt: { xs: '2rem', sm: '3rem' },
            minWidth: { xs: '22rem', sm: '2rem' },
            display: 'flex',
            justifyContent: 'center',
            gap: '3rem',
          }}
        >
          <CardMedia
            component='img'
            sx={{ width: { xs: '3rem' } }}
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/600px-2023_Facebook_icon.svg.png?20231011122028'
          ></CardMedia>
          <CardMedia
            component='img'
            sx={{ width: { xs: '3rem' } }}
            src='https://www.svgrepo.com/show/303115/twitter-3-logo.svg'
          ></CardMedia>
          <CardMedia
            component='img'
            sx={{ width: { xs: '3rem' } }}
            src='images/Vectors/LinkedIn.svg'
          ></CardMedia>
          <CardMedia
            component='img'
            sx={{ width: { xs: '3rem' } }}
            src='images/Vectors/youtube.svg'
          ></CardMedia>
        </Box>
      </Box>
    </Box>
  );
};
