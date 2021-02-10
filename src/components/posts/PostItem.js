import React from 'react';
import TextTruncate from 'react-text-truncate';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '1.1rem',
  },
});

export default function PostItem({ post: { title, content, imgUrl } }) {
  const classes = useStyles();

  return (
    <Grid md={3} className={classes.root}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={
              imgUrl ||
              'https://i.pinimg.com/originals/5c/5d/04/5c5d04c629c243571643a1ba5c517333.jpg'
            }
            title="Contemplative Reptile"
          />
          <CardContent style={{ height: '98px', width: '218px' }}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <TextTruncate
                line={3}
                element="span"
                truncateText="…"
                text={content}
              />
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Read More...
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
