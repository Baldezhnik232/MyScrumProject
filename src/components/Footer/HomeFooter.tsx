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
        minWidth: { xs: '31.25rem' },
        minHeight: { xs: '15rem' },
        backgroundColor: theme.palette.primary.main,
        color: 'white',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          mt: { xs: '2rem' },
          mb: { xs: '0.8rem' },
        }}
      >
        <Typography
          variant='h4'
          align='center'
          gutterBottom
          fontSize={{ xs: '1.5rem' }}
        >
          Opportunities
        </Typography>
        <Typography
          variant='h5'
          align='center'
          fontSize={{ xs: '1.5rem' }}
        >
          Blog
        </Typography>
        <Typography
          fontSize={{ xs: '1.5rem' }}
          color='inherit'
        >
          Your Website
        </Typography>
      </Container>
      <Divider
        flexItem
        sx={{ mx: { xs: 2 }, backgroundColor: 'white' }}
      ></Divider>
      <Box
        display='flex'
        justifyContent='center'
        gap={2}
        flexWrap='wrap'
      >
        <Box
          component='img'
          sx={{ minHeight: { xs: '0.1rem', width: '8rem' } }}
          src='images/Google.svg'
        ></Box>
        <Box
          component='img'
          sx={{ minHeight: { xs: '0.1rem', width: '7.4rem' } }}
          src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg'
        ></Box>
      </Box>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mb: { xs: '3.2rem' },
          minWidth: { xs: '21rem' },
          minHeight: { xs: '2.7rem' },
        }}
      >
        <Typography>Copyright 2017-2021, Shifton. All rights reserved.</Typography>
        <Typography>Privacy Policy | Terms of Use | Сookies</Typography>
      </Container>
    </Box>
  );
};
