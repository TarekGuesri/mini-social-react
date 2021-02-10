import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import clsx from 'clsx';
import {
  Card,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Spinner from 'src/components/Layout/Spinner';
import NotFoundMessage from 'src/components/NotFound/NotFoundMessage';
import PostHeader from 'src/components/Post/PostHeader';
import PostContent from 'src/components/Post/PostContent';

import { getPost } from 'src/actions/posts';

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

const Post = ({ match, post, loading, getPostAction }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    getPostAction(match.params.id);
    // eslint-disable-next-line
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Comments:</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

const constDispatchToProps = (dispatch) => ({
  getPostAction: bindActionCreators(getPost, dispatch),
});

const mapStateToProps = (state) => ({
  post: state.posts.post,
  loading: state.posts.loading,
});

export default connect(mapStateToProps, constDispatchToProps)(Post);
