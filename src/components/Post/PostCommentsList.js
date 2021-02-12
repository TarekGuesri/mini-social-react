import React from 'react';
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from '@material-ui/core';

import Spinner from 'src/components/Layout/Spinner';

const PostCommentsList = ({ comments, commentsLoading, classes }) => {
  if (commentsLoading) {
    return <Spinner />;
  }

  return (
    <List>
      {comments.map((comment) => {
        return (
          <React.Fragment key={comment.id}>
            <ListItem key={comment.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar
                  color="primary"
                  alt="avatar"
                  style={{
                    backgroundColor: '#37a000',
                    textTransform: 'uppercase',
                  }}
                >
                  {comment.user.username[0]}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography className={classes.fonts}>
                    {comment.user.username}
                  </Typography>
                }
                secondary={<>{comment.content}</>}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        );
      })}
    </List>
  );
};

export default PostCommentsList;
