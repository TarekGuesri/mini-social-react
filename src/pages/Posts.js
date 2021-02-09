import React from 'react';

import { Typography } from '@material-ui/core';

import PostsList from 'src/components/posts/PostsList';

const Posts = () => {
  return (
    <div align="center">
      <Typography variant="h4" component="h4" gutterBottom>
        Posts:
      </Typography>
      <PostsList></PostsList>
    </div>
  );
};

export default Posts;
