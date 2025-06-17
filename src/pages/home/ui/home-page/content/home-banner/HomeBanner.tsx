import React from 'react';
import { Box, Button, CardMedia, Typography } from '@mui/material';

export const HomeBanner: React.FC = ({}) => {
  return (
    <Box position={'relative'}>
      <CardMedia
        sx={{
          backgroundImage:
            "url('https://nipkef.ru/upload/medialibrary/50c/cksbfps4089lqamooxysuzplieq2lhwz.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        />
        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            py: { xs: '5rem ', sm: '6rem 5rem' },
            paddingInline: { xs: '4.25rem', sm: '7rem' },
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: '2.5rem' },
            minWidth: { xs: '21rem', sm: '10rem' },
          }}
        >
          <Typography
            variant='h5'
            sx={{ fontWeight: '500', fontSize: { xs: 32, sm: 40, md: 40 }, color: `#FFDF00` }}
          >
            Автоматизированное составление рабочих расписаний онлайн
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '1.25rem' } }}>
            <Typography
              variant='h1'
              sx={{ fontWeight: '500', fontSize: { xs: 20, sm: 26 }, color: '#FFDF00' }}
            >
              Экономия времени и денег
            </Typography>
            <Typography
              variant='h1'
              sx={{
                fontWeight: '500',
                fontSize: { xs: 20, sm: 26 },
                color: '#FFDF00',
                width: { xs: '19rem', sm: '40rem' },
              }}
            >
              Грамотное распределение рабочей нагрузки
            </Typography>
            <Typography
              variant='h1'
              sx={{
                fontWeight: '500',
                fontSize: { xs: 20, sm: 26 },
                color: '#FFDF00',
                width: { xs: '21rem', sm: '40rem' },
              }}
            >
              Построение оптимального сменного рабочего расписания для любого количества сотрудников
            </Typography>
          </Box>
          <Box>
            <Button
              variant='contained'
              sx={{
                borderRadius: 26,
                color: 'white',
                backgroundColor: '#54A757',
                paddingBlock: '0.7rem',
                paddingInline: { xs: '11.6rem', sm: '12rem' },
                width: { xs: '20rem', sm: '1rem' },
                '&:click': {
                  backgroundColor: 'red',
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 20, sm: 25 },
                  fontWeight: 500,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Box sx={{ textTransform: 'capitalize', mr: '0.7rem' }}>Попробовать </Box>
                <Box sx={{ textTransform: 'lowercase' }}>бесплатно</Box>
              </Typography>
            </Button>
          </Box>
        </Box>
      </CardMedia>
    </Box>
  );
};
