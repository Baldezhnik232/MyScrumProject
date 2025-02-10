import { Box, Typography, Container, Link, useTheme } from '@mui/material';
import {useTranslation}  from "react-i18next"

const AppFooter = () => {
  const theme = useTheme();
  const { t  } = useTranslation(); 
  return (
    <Box
    component="footer"
    sx={{mt:4,
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      padding: 3
     }}
  >
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        {t("footer.title")}
      </Typography>
      <Typography variant="h5" color="black" align="center">
        {'© '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Container>
  </Box>
);
}
            
export default AppFooter
