import { Box, Typography, Container, Link, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const AppFooter = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Box
      component='footer'
      sx={{
        width: '100%',
        position: 'fixed',
        top: {xs: 500, sm: 750, md:800, lg:760, xl: 844},
        backgroundColor: theme.palette.primary.main,
        color: 'white',
      }}
    >
      <Container maxWidth='lg'>
        <Typography
          variant='h4'
          align='center'
          gutterBottom
        >
          {t('footer.title')}
        </Typography>
        <Typography
          variant='h5'
          color='black'
          align='center'
        >
          {'© '}
          <Link
            color='inherit'
            href='https://mui.com/'
          >
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
};

