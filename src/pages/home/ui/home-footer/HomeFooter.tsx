import { Box, Typography, useTheme, Container, CardMedia, Card } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useTranslation } from 'react-i18next';



export const AppFooter = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Box
      component='footer'
      sx={{
        minWidth: { xs: '23.25rem' },
        minHeight: { xs: '18rem' },
        backgroundColor: theme.palette.primary.main,
        color: 'white',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pt: { xs: '2rem' },
          mb: { xs: '0.8rem' },
          gap: { xs: 5 },
        }}
      >
        <Typography
          variant='h5'
          gutterBottom
          fontSize={{ xs: 18 }}
        >
          Возможности
        </Typography>
        <Typography
          variant='h5'
          fontSize={{ xs: 18 }}
        >
          Блог
        </Typography>
        <Typography
          color='inherit'
          variant='h5'
          fontSize={{ xs: 18 }}
        >
          ЧАВО
        </Typography>
      </Box>
      <Divider
        flexItem
        sx={{ marginInline: { xs: '5rem' }, backgroundColor: 'white' }}
      ></Divider>
      <Box
        display='flex'
        justifyContent='center'
        gap={2}
        flexWrap='wrap'
        sx={{
          marginBlock: { xs: '-1rem' },
        }}
      >
        <Box
          component='img'
          sx={{ minHeight: { xs: '0.1rem', width: '8.6rem' } }}
          src='images/banner/Google.svg'
        ></Box>
        <Box
          component='img'
          sx={{ minHeight: { xs: '0.1rem', width: '8rem' } }}
          src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg'
        ></Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: { xs: '21rem' },
          fontSize: { xs: 15 },
        }}
      >
        <Typography>Copyright 2017-2021, Shifton. All rights reserved.</Typography>
        <Typography>Privacy Policy | Terms of Use | Сookies</Typography>
      </Box>
    </Box>
  );
};
