import { HomeBanner } from './content/home-banner/HomeBanner';
import { Box } from '@mui/material';
import { HomePossibilities } from './content/home-possibilities/HomePossibilities';
import  {AppHeader}  from '../home-header/HomeHeader';
import { AppFooter } from '../home-footer/HomeFooter';

import React from 'react';

export const HomePageLayout: React.FC = ({}) => {
  return (
    <Box
      sx={{
        maxWidth: { xs: '37.43rem', sm: '56rem' },
        minWidth: { xs: '30.43rem', sm: '60rem' },
      }}
    >
      <AppHeader />
      <HomeBanner />
      <HomePossibilities />
      <AppFooter />
    </Box>
  );
};
