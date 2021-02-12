import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Grid, Typography } from '@material-ui/core';

import Spinner from 'src/components/Layout/Spinner';
import { getPosts } from 'src/actions/posts';

import PostItem from './PostItem';
const posts = [
  { id: 1, title: 'Post 1', content: 'Hello World' },
  { id: 2, title: 'Post 2', content: 'Goodbye World' },
  { id: 4, title: 'Post 2', content: 'Goodbye World' },
  { id: 3, title: 'Post 2', content: 'Goodbye World' },
];

const PostsList = ({ posts, loading, getPostsAction }) => {
  useEffect(() => {
    getPostsAction();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Grid container spacing={2}>
      {posts.length < 1 ? (
        <Typography> There are no posts yet </Typography>
      ) : (
        posts.map((post) => (
          <Grid key={post.id} md={6}>
            <PostItem key={post.id} post={post} />{' '}
          </Grid>
        ))
      )}
    </Grid>
  );
};

const constDispatchToProps = (dispatch) => ({
  getPostsAction: bindActionCreators(getPosts, dispatch),
});

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
  loading: state.posts.loading,
});

const PostsListConnected = connect(
  mapStateToProps,
  constDispatchToProps
)(PostsList);

export default PostsListConnected;
