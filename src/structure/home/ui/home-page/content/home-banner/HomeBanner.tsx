import React from 'react';
import { Box, Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

export const HomeBanner: React.FC = ({}) => {
  return (
    <Box sx={{ minHeight: { xs: '1rem' }, minWidth: { xs: '31.25rem' }, ml: { xs: '-1rem' } }}>
      <CardMedia
        sx={{
          minHeight: { xs: '34rem' },
          minWidth: { xs: '21rem' },
          backgroundImage:
            "url('https://nipkef.ru/upload/medialibrary/50c/cksbfps4089lqamooxysuzplieq2lhwz.jpg')",
          backgrooundSize: '90%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box
          sx={{
            p: { xs: '4rem 3rem' },
            pl: { xs: '3rem' },
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: '2.5rem' },
          }}
        >
          <Typography
            variant='h5'
            sx={{ fontWeight: '500', fontSize: 32, color: `#310062 ` }}
          >
            Automation of online drafting of work projects
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '1.25rem' } }}>
            <Typography
              variant='h1'
              sx={{ fontWeight: '500', fontSize: 20, color: '#310062' }}
            >
              Экономия времени и денег
            </Typography>
            <Typography
              variant='h1'
              sx={{ fontWeight: '500', fontSize: 20, color: '#310062' }}
            >
              Грамотное распределение рабочей нагрузки
            </Typography>
            <Typography
              variant='h1'
              sx={{ fontWeight: '500', fontSize: 20, color: '#310062' }}
            >
              Построение оптимального сменного рабочего расписания для любого количества сотрудников
            </Typography>
          </Box>
          <Box>
            <Button
              variant='contained'
              sx={{
                borderRadius: 26,
                borderColor: '#54A757',
                fontSize: 20,
                p: { xs: '0.6rem' },
                paddingInline: { xs: '3.3rem' },
                color: 'white',
                backgroundColor: '#008500',
              }}
            >
              Попробовать бесплатно
            </Button>
          </Box>
        </Box>
      </CardMedia>
    </Box>
  );
};
