import React from 'react';

import { Typography } from '@material-ui/core';

import PostAdd from 'src/components/Posts/PostAdd';
import PostsList from 'src/components/Posts/PostsList';

const Posts = () => {
  return (
    <div align="center">
      <PostAdd />
      <Typography variant="h4" component="h4" gutterBottom>
        Posts:
      </Typography>
      <PostsList></PostsList>
    </div>
  );
};

export default Posts;
