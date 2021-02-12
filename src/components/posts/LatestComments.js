import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import Spinner from 'src/components/Layout/Spinner';

import { getLatestComments } from 'src/actions/posts';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
  },
}));

const LatestComments = ({
  latestComments,
  latestCommentsLoading,
  getLatestCommentsAction,
}) => {
  const classes = useStyles();

  useEffect(() => {
    getLatestCommentsAction();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Typography variant="h6" align="left" style={{ paddingLeft: '16px' }}>
        Latest Comments
      </Typography>
      {latestCommentsLoading ? (
        <div style={{ marginTop: '2rem' }}>
          <Spinner />
        </div>
      ) : (
        <List className={classes.root}>
          {latestComments.map((comment) => (
            <ListItem key={comment.id}>
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
                  comment.post.title.length > 20
                    ? `${comment.post.title.substring(0, 17)}...`
                    : comment.post.title
                }
                secondary={comment.content}
              />
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

const constDispatchToProps = (dispatch) => ({
  getLatestCommentsAction: bindActionCreators(getLatestComments, dispatch),
});

const mapStateToProps = (state) => ({
  latestComments: state.posts.latestComments,
  latestCommentsLoading: state.posts.latestCommentsLoading,
});

export default connect(mapStateToProps, constDispatchToProps)(LatestComments);
