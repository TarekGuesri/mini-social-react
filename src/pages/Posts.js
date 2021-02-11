import React from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Container } from '@material-ui/core';

import PostAdd from 'src/components/Posts/PostAdd';
import PostsList from 'src/components/Posts/PostsList';
import Sidebar from 'src/components/Posts/LatestPosts';

const Posts = ({ isAuthenticated }) => {
  return (
    <div align="center">
      {/* {isAuthenticated  && <PostAdd />} */}
      {false && <PostAdd />}
      <Container maxWidth="lg">
        <Grid justify="center" container>
          <Grid
            md={8}
            sm={12}
            style={{
              marginRight: '32px',
            }}
          >
            <PostsList />
          </Grid>
          <Grid md={3}>
            <Sidebar></Sidebar>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

const PostsConnected = connect(mapStateToProps)(Posts);

export default PostsConnected;
