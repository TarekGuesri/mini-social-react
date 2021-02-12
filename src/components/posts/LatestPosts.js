import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import Spinner from 'src/components/Layout/Spinner';
import LatestComments from './LatestComments';

import { getLatestPosts } from 'src/actions/posts';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // maxWidth: '36ch',
    // backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

const LatestPosts = ({
  latestPosts,
  latestPostsLoading,
  getLatestPostsAction,
}) => {
  const classes = useStyles();

  useEffect(() => {
    getLatestPostsAction();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Typography variant="h6" align="left" style={{ paddingLeft: '16px' }}>
        Latest Posts
      </Typography>
      {latestPostsLoading ? (
        <div style={{ marginTop: '2rem' }}>
          <Spinner />
        </div>
      ) : (
        <List className={classes.root}>
          {latestPosts.map((post, index) => (
            <Fragment key={post.id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    color="primary"
                    alt="avatar"
                    style={{
                      backgroundColor: '#37a000',
                      textTransform: 'uppercase',
                    }}
                  >
                    {post.user.username[0]}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    post.title.length > 20
                      ? `${post.title.substring(0, 17)}...`
                      : post.title
                  }
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {post.user.username}
                      </Typography>
                      {post.content.length > 20
                        ? `${post.content.substring(0, 17)}...`
                        : post.content}
                    </React.Fragment>
                  }
                />
              </ListItem>
              {index + 1 !== latestPosts.length && (
                <Divider variant="inset" component="li" />
              )}
            </Fragment>
          ))}
        </List>
      )}

      <Divider style={{ margin: '2rem 0' }} />
      <LatestComments />
    </>
  );
};

const constDispatchToProps = (dispatch) => ({
  getLatestPostsAction: bindActionCreators(getLatestPosts, dispatch),
});

const mapStateToProps = (state) => ({
  latestPosts: state.posts.latestPosts,
  latestPostsLoading: state.posts.latestPostsLoading,
});

export default connect(mapStateToProps, constDispatchToProps)(LatestPosts);
