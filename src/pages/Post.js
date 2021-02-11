import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import clsx from 'clsx';
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

import { getPost } from 'src/actions/posts';

const comments = [
  {
    postId: 1,
    id: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body:
      'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
  },
  {
    postId: 1,
    id: 2,
    name: 'quo vero reiciendis velit similique earum',
    email: 'Jayne_Kuhic@sydney.com',
    body:
      'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
  },
  {
    postId: 1,
    id: 3,
    name: 'odio adipisci rerum aut animi',
    email: 'Nikita@garfield.biz',
    body:
      'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
  },
];

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
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    getPostAction(match.params.id);
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
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <PostComments comments={comments} />
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
