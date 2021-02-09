import React from 'react';
import { Typography } from '@material-ui/core';

import Box from '@material-ui/core/Box';

export default function SimpleBottomNavigation() {
  return (
    <div style={{ width: '100%' }}>
      <Box
        display="flex"
        justifyContent="center"
        m={1}
        p={1}
        bgcolor="background.paper"
      >
        <Box justifyContent="center">
          <Typography variant="h6">Developed by Tariq L. Guesri</Typography>
        </Box>
      </Box>
    </div>
  );
}
