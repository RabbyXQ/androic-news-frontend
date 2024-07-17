import React from 'react';
import { Box, Grid, useBreakpointValue } from '@chakra-ui/react';
import Phones from './Phones'; // Ensure to update the import path if necessary
import Gadgets from './Gadgets'; // Ensure to update the import path if necessary

const PhonesNGadget: React.FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box>
      <Grid
        templateColumns={isMobile ? '1fr' : '1fr 1fr'} // Single column on mobile, two columns on larger screens
        gap={4}
      >
        <Box>
          <Phones /> {/* Render Phones component */}
        </Box>
        <Box>
          <Gadgets /> {/* Render Gadgets component */}
        </Box>
      </Grid>
    </Box>
  );
};

export default PhonesNGadget;
