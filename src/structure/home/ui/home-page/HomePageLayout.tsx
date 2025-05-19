import { HomeBanner } from './content/home-banner/HomeBanner';
import { Box } from '@mui/material';
import { HomePossibilities } from './content/home-possibilities/HomePossibilities';

import React from 'react';

export const HomePageLayout: React.FC = ({}) => {
  return (
    <Box>
      <HomeBanner />
      <HomePossibilities />
    </Box>
  );
};
