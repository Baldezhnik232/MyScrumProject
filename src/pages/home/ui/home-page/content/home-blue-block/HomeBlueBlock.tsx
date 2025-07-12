import { Box, Button, CardMedia, Typography } from '@mui/material';
import React from 'react';

interface HomeBlueBlockProps {}

export const HomeBlueBlock: React.FC<HomeBlueBlockProps> = ({}) => {
  return (
    <Box
      sx={{
        minHeight: { xs: '40rem', sm: '35rem' },
        ml: { xs: '-1rem' },
        backgroundColor: '#F5F6F6',
      }}
    >
      <Typography
        variant='h3'
        align='center'
        sx={{
          fontSize: { xs: 28, sm: 'calc(28+0.3vw)' },
          color: '#29AAE3',
          marginInline: { xs: '7rem' },
          pt: { xs: '1.8rem' },
        }}
      >
        Автоматизированное создание онлайн расписаний
      </Typography>
      <Box
        sx={{
          position: 'relative',
          mt: { xs: '6rem', sm: '-5rem' },
          display: { xs: 'flex' },
          flexDirection: { xs: 'column', sm: 'row-reverse' },
          transition: 'all 2.5s ease',
          alignItems: { xs: 'center', sm: 'left' },
          mb: { xs: '7rem' },
        }}
      >
        <Box>
          <CardMedia
            component='img'
            src='images/blue-block/Ellipse 3.svg'
            sx={{
              width: { xs: '14rem', sm: '25rem' },
              height: { xs: '6.5rem', sm: '11.5rem' },
              marginBlockStart: { sm: '20rem' },
              mx: { xs: '7rem', sm: '1rem' },
              zIndex: 0,
            }}
          ></CardMedia>
          <CardMedia
            component='img'
            src='images/blue-block/Comp.svg'
            sx={{
              width: { xs: '11rem', sm: '20rem' },
              height: { xs: '8.5rem', sm: '15rem' },
              zIndex: 1,
              mx: { xs: '8rem', sm: '4rem' },
              marginBlockStart: { xs: '-10rem', sm: '-18rem' },
            }}
          ></CardMedia>
          <CardMedia
            component='img'
            src='images/blue-block/slide2.svg'
            sx={{
              width: { xs: '10.5rem', sm: '18rem' },
              height: { xs: '6rem', sm: '10rem' },
              zIndex: 2,
              mt: { xs: '-8rem', sm: '-14rem' },
              mx: { xs: '8.3rem', sm: '5rem' },
            }}
          ></CardMedia>
        </Box>
        <Box
          sx={{
            marginInlineEnd: { sm: '-2rem' },
          }}
        >
          <Typography
            variant='h5'
            sx={{
              fontSize: 18,
              width: { xs: '23rem', sm: '26rem' },
              pt: { xs: '6rem' },
              transition: 'all 3.5s ease',
            }}
          >
            Онлайн-система Shifton разработана для оптимизации времени и ресурсов в создании рабочих
            расписаний сотрудников. Shifton - прекрасное решение для компаний любых сфер
            деятельности и размеров.
          </Typography>
          <Button
            variant='contained'
            sx={{
              borderRadius: 26,
              paddingBlock: { xs: '0.6rem', sm: '0.4rem' },
              my: { xs: '1.8rem' },
              color: 'white',
              backgroundColor: '#29AAE3',
              width: { xs: '22rem', sm: '18rem' },
              ml: { xs: '-0.4rem', sm: '-0.4rem' },
            }}
          >
            <Typography
              sx={{
                fontSize: 20,
                textTransform: 'capitalize',
                fontWeight: 500,
              }}
            >
              Зарегистирироваться
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
