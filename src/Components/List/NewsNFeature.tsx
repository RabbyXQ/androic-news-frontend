import React from 'react';
import { Box, Grid, useBreakpointValue } from '@chakra-ui/react';
import News from './News'; // Ensure to update the import path if necessary
import Features from './Features'; // Ensure to update the import path if necessary

const NewsNFeature: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box p={4}>
      <Grid
        templateColumns={isMobile ? '1fr' : '1fr 1fr'} // Single column on mobile, two columns on larger screens
        gap={4}
      >
        <Box>
          <News /> {/* Render News component */}
        </Box>
        <Box>
          <Features /> {/* Render Features component */}
        </Box>
      </Grid>
    </Box>
  );
};

export default NewsNFeature;
