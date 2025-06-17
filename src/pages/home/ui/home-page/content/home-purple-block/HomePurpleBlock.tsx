import { Box, CardMedia, Typography, Button } from '@mui/material';
import React from 'react';

interface HomePurpleBlockProps {}

export const HomePurpleBlock: React.FC<HomePurpleBlockProps> = ({}) => {
  return (
    <Box
      sx={{
        minHeight: { xs: '38rem' },
        ml: { xs: '-1rem' },
      }}
    >
      <Typography
        variant='h3'
        textAlign='center'
        color='#9033F9'
        sx={{
          marginInline: { xs: '7rem' },
          pt: '3rem',
          fontSize: { xs: 28, sm: '28+calc(28+0.3vw)' },
        }}
      >
        Оптимизация командной работы
      </Typography>
      <Box
        sx={{
          position: 'relative',
          mt: { xs: '1rem' },
          display: { xs: 'flex' },
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
        }}
      >
        <Box>
          <CardMedia
            component='img'
            src='images/purple-block/Ellipse 2.svg'
            sx={{
              width: { xs: '15em', sm: '32rem' },
              height: { xs: '3.5rem', sm: '7rem' },
              ml: { xs: '6rem', sm: '3rem' },
              marginBlockStart: { xs: '5rem', sm: '20rem' },
              zIndex: 0,
            }}
          ></CardMedia>
          <CardMedia
            component='img'
            src='images/purple-block/Keep it.svg'
            sx={{
              width: { xs: '11rem', sm: '25rem' },
              height: { xs: '7rem', sm: '13rem' },
              mx: { xs: '7rem', sm: '4rem' },
              marginBlockStart: { xs: '-7.5rem', sm: '-14.8rem' },
              zIndex: 1,
            }}
          ></CardMedia>
          <CardMedia
            component='img'
            src='images/purple-block/Design.svg'
            sx={{
              width: { xs: '8.3rem', sm: '18rem' },
              height: { xs: '5.2rem', sm: '11.2rem' },
              mt: { xs: '-6.5rem', sm: '-12.7rem' },
              ml: { xs: '8.3rem', sm: '7.4rem' },
              zIndex: 2,
            }}
          ></CardMedia>
          <CardMedia
            component='img'
            src='images/purple-block/Screen.svg'
            sx={{
              width: { xs: '2rem', sm: '4rem' },
              height: { xs: '4rem', sm: '8rem' },
              ml: { xs: '18.3rem', sm: '29rem' },
              mt: { xs: '-3.2rem', sm: '-6.5rem' },
              zIndex: 3,
            }}
          ></CardMedia>
          <CardMedia
            component='img'
            src='images/purple-block/slide1.svg'
            sx={{
              width: { xs: '1.6rem', sm: '3.2rem' },
              height: { xs: '3.6rem', sm: '7rem' },
              ml: { xs: '18.48rem', sm: '29.4rem' },
              mt: { xs: '-3.8rem', sm: '-7.5rem' },
              zIndex: 4,
            }}
          ></CardMedia>
        </Box>
        <Box
          sx={{
            marginInlineStart: { sm: '1rem' },
            marginBlockEnd: { sm: '10rem' },
          }}
        >
          <Typography
            variant='h5'
            sx={{ fontSize: 18, width: { xs: '20rem', sm: '25rem' }, pt: { xs: '3rem' } }}
          >
            Shifton поможет компании сэкономить средства, минимизировав время простоев в работе.
            Система автоматически назначает смены сотрудникам, обеспечивая плавный и бесперебойный
            рабочий процесс на предприятии.
          </Typography>
          <Button
            variant='contained'
            sx={{
              borderRadius: 26,
              paddingBlock: { xs: '0.6rem', sm: '0.4rem' },
              m: { xs: '1.8rem' },
              color: 'white',
              backgroundColor: '#9033F9',
              width: { xs: '22rem', sm: '16rem' },
              ml: { xs: '-0.4rem', sm: '-1rem' },
            }}
          >
            <Box
              sx={{
                fontWeight: 500,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Typography sx={{ textTransform: 'capitalize', mr: '0.7rem', fontSize: 20 }}>
                Начать{' '}
              </Typography>
              <Typography sx={{ textTransform: 'lowercase', fontSize: 20 }}>работу</Typography>
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
