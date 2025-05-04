import { Box, Typography, Container, Link, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const AppFooter = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Box
      component='footer'
      sx={{
        minWidth: '100%',
        mt:{xs:'1rem', xl:'9rem'},
        mb:{xs:'70rem', sm: '0rem', md:'rem', lg:'rem', xl: 'rem'},
        pb:{xs:'2rem', xl:'3rem'},
        backgroundColor: theme.palette.primary.main,
        color: 'white',
      }}
    >
      <Container sx={{
        display: 'block',
        flexDirection: 'column',
        alignItems: 'center',
        pt:{xs:'1rem', xl:'3rem'}
      }}>
        <Typography
          variant='h4'
          align='center'
          gutterBottom
          fontSize={{xs:'1.5rem'}}
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
            fontSize={{xs:'1.5rem'}}
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

