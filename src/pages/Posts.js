import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import PostAdd from 'src/components/Posts/PostAdd';
import PostsList from 'src/components/Posts/PostsList';

const Posts = ({ isAuthenticated }) => {
  return (
    <div align="center">
      {isAuthenticated && <PostAdd />}
      <Typography variant="h4" component="h4" gutterBottom>
        Posts:
      </Typography>
      <PostsList></PostsList>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const PostsConnected = connect(mapStateToProps)(Posts);

export default PostsConnected;
