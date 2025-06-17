import { Box, Typography, CardMedia, Button } from '@mui/material';
import React from 'react';

interface HomeRedBlockProps {}

export const HomeRedBlock: React.FC<HomeRedBlockProps> = ({}) => {
  return (
    <Box
      sx={{
        minHeight: { xs: '40rem', sm: '20rem' },
        backgroundColor: '#F5F6F6',
        ml: { xs: '-1rem' },
      }}
    >
      <Typography
        variant='h3'
        sx={{
          fontSize: { xs: 28, sm: '28+calc(28+0.3vw)' },
          color: '#FF5966',
          textAlign: 'center',
          ml: { xs: '6rem' },
          width: { xs: '20rem' },
          pt: { xs: '1.8rem' },
        }}
      >
        Управление перерывами и отдыхом
      </Typography>
      <Box
        sx={{
          position: 'relative',
          mt: { xs: '5rem' },
          display: { xs: 'flex' },
          flexDirection: { xs: 'column', sm: 'row-reverse' },
          alignItems: 'center',
          marginBlockEnd: { xs: '12rem' },
        }}
      >
        <Box
          sx={{
            marginBlockEnd: { xs: '3rem' },
          }}
        >
          <CardMedia
            component='img'
            src='images/red-block/Ellipse 5.svg'
            sx={{
              width: { xs: '10rem', sm: '15rem' },
              height: { xs: '10rem', sm: '15rem' },
              mt: { xs: '-4rem', sm: '-15rem' },
              mr: { sm: '10rem' },
              ml: { xs: '5rem' },
              zIndex: 0,
            }}
          ></CardMedia>
          <CardMedia
            component='img'
            src='images/red-block/Screen.svg'
            sx={{
              width: { xs: '7.5rem', sm: '10rem' },
              height: { xs: '16rem', sm: '20rem' },
              zIndex: 2,
              mt: { xs: '-8rem', sm: '-13rem' },
              mx: { xs: '6.2rem', sm: '7.5rem' },
            }}
          ></CardMedia>
          <CardMedia
            component='img'
            src='images/red-block/slide3.svg'
            sx={{
              width: { xs: '6.8rem', sm: '8rem' },
              height: { xs: '14.8rem', sm: '19rem' },
              borderRadius: { xs: '1rem' },
              zIndex: 3,
              mt: { xs: '-15.4rem', sm: '-19.6rem' },
              mx: { xs: '6.6rem', sm: '8.5rem' },
            }}
          ></CardMedia>
          <CardMedia
            component='img'
            src='images/red-block/Ellipse.svg'
            sx={{
              width: { xs: '8.8rem', sm: '15.4rem' },
              height: { xs: '0.25rem' },
              zIndex: 1,
              mt: { xs: '0.5rem' },
              ml: { xs: '5.5rem', sm: '5rem' },
            }}
          ></CardMedia>
          <CardMedia
            component='img'
            src='images/red-block/EllipseSmall.svg'
            sx={{
              width: { xs: '3.5rem', sm: '4rem' },
              height: { xs: '3.5rem', sm: '4rem' },
              zIndex: 2,
              mt: { xs: '-7rem', sm: '-9rem' },
              ml: { xs: '14.5rem', sm: '19rem' },
            }}
          ></CardMedia>
        </Box>
        <Box
          sx={{
            marginInlineEnd: { xs: '-1rem', sm: '1rem' },
            paddingBlockEnd: { xs: '1rem', sm: '10rem' },
          }}
        >
          <Typography
            variant='h5'
            sx={{
              fontSize: 18,
              width: { xs: '20rem', sm: '26rem' },
              pt: { xs: '3rem' },
              ml: { xs: '2rem' },
            }}
          >
            Создавайте комфортные рабочие графики с учетом личных обстоятельств сотрудников.
            Работники оценят возможность обмениваться сменами или перерывами с коллегами, а в случае
            замены сотрудника Shifton мгновенно скорректирует любой график.
          </Typography>
          <Button
            variant='contained'
            sx={{
              borderRadius: 26,
              paddingBlock: { xs: '0.6rem', sm: '0.4rem' },
              m: { xs: '1.8rem' },
              color: 'white',
              backgroundColor: '#FF5966',
              width: { xs: '21rem', sm: '19rem' },
            }}
          >
            <Box
              sx={{
                width: { xs: '22rem' },
                fontWeight: 500,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Typography sx={{ textTransform: 'capitalize', mr: '0.7rem', fontSize: 20 }}>
                Попробовать{' '}
              </Typography>
              <Typography sx={{ textTransform: 'lowercase', fontSize: 20 }}>бесплатно</Typography>
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
