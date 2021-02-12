import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Card,
  CardActions,
  Collapse,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';

import Spinner from 'src/components/Layout/Spinner';
import NotFoundMessage from 'src/components/NotFound/NotFoundMessage';
import PostHeader from 'src/components/Post/PostHeader';
import PostContent from 'src/components/Post/PostContent';
import PostComments from 'src/components/Post/PostComments';

import { getPost, getCommentsByPostId } from 'src/actions/posts';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Post = ({
  match,
  post,
  loading,
  comments,
  commentsLoading,
  getPostAction,
  getCommentsByPostIdAction,
}) => {
  const classes = useStyles();

  useEffect(() => {
    getPostAction(match.params.id);
    getCommentsByPostIdAction(match.params.id);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (!post) {
    return <NotFoundMessage />;
  }

  const { title, content, createdAt, imgUrl } = post;

  return (
    <div align="center">
      <Card className={classes.root}>
        <PostHeader
          classes={classes}
          title={title}
          date={createdAt}
          imgUrl={imgUrl}
        />
        <PostContent content={content} />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        </CardActions>
        <Collapse in timeout="auto" unmountOnExit>
          <PostComments comments={comments} commentsLoading={commentsLoading} />
        </Collapse>
      </Card>
    </div>
  );
};

const constDispatchToProps = (dispatch) => ({
  getPostAction: bindActionCreators(getPost, dispatch),
  getCommentsByPostIdAction: bindActionCreators(getCommentsByPostId, dispatch),
});

const mapStateToProps = (state) => ({
  post: state.posts.post,
  loading: state.posts.loading,
  comments: state.posts.comments,
  commentsLoading: state.posts.commentsLoading,
});

export default connect(mapStateToProps, constDispatchToProps)(Post);
