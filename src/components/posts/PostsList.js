import React from 'react';

import { Grid } from '@material-ui/core';

import PostItem from './PostItem';
const posts = [
  { id: 1, title: 'Post 1', content: 'Hello World' },
  { id: 2, title: 'Post 2', content: 'Goodbye World' },
  { id: 4, title: 'Post 2', content: 'Goodbye World' },
  { id: 3, title: 'Post 2', content: 'Goodbye World' },
];

const PostsList = () => {
  return (
    <div style={{ maxWidth: '1000px' }}>
      <Grid justify="center" container>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </Grid>
    </div>
  );
};

export default PostsList;
