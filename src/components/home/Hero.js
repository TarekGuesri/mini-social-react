import React from 'react';
import { Typography } from '@material-ui/core';

const Hero = () => {
  return (
    <>
      <Typography variant="h2" component="h2" gutterBottom align="center">
        Welcome to M-Social
      </Typography>
      <Typography variant="h6" component="h6" gutterBottom align="center">
        This a mini social network for sharing posts and comments between other
        people!
      </Typography>
    </>
  );
};

export default Hero;
