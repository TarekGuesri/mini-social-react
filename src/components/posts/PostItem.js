import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Button,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   height: '100%',
  // },
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
    backgroundColor: '#37a000',
    textTransform: 'uppercase',
  },
}));

const PostItem = ({
  post: { id, title, content, imgUrl, createdAt, user },
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div style={{ padding: '0 0 16px 16px' }}>
      <Card className={classes.root} variant="elevation">
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              color="primary"
              className={classes.avatar}
            >
              {user.username[0]}
            </Avatar>
          }
          action={
            /*        <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton> */
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          }
          title={title}
          subheader={moment(createdAt).format('MMM DD, YYYY')}
          style={{
            textAlign: 'left',
          }}
        />
        <CardMedia
          className={classes.media}
          image={
            imgUrl ||
            `https://source.unsplash.com/collection/${Math.floor(
              Math.random() * 10 + 1
            )}`
          }
          title="Paella dish"
        />
        <CardContent
          style={{
            height: '100px',
            width: '432px',
            maxWidth: 'fit-content',
            overflowWrap: 'anywhere',
          }}
        >
          <Typography variant="body2" color="textSecondary" component="p">
            {content.length > 100 ? `${content.substring(0, 97)}...` : content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            component={Link}
            to={`post/${id}`}
          >
            <CommentIcon />
          </IconButton>

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <FavoriteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default PostItem;
