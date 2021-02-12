import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

import PostCommentsList from './PostCommentsList';
import PostCommentsAdd from './PostCommentsAdd';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    marginTop: '1rem',
  },
  fonts: {
    fontWeight: 'bold',
  },
  inline: {
    display: 'inline',
  },
}));

const PostComments = ({ comments, commentsLoading }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container justify="space-between" className={classes.spacing}>
        <Grid item>
          <Typography
            className={classes.header}
            variant="h5"
            gutterBottom
            style={{ paddingLeft: '16px' }}
          >
            Comments:
          </Typography>
        </Grid>
      </Grid>

      <PostCommentsAdd />
      <PostCommentsList
        classes={classes}
        comments={comments}
        commentsLoading={commentsLoading}
      />
    </div>
  );
};

export default PostComments;
