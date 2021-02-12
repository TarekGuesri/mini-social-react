import moment from 'moment';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

// import Avatar from '@material-ui/core/Avatar';

const PostHeader = ({ classes, title, date, imgUrl }) => {
  return (
    <>
      <CardHeader
        /*         avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        } */
        title={title}
        subheader={moment(date).format('MMM DD, YYYY')}
      />
      <CardMedia
        className={classes.media}
        image={
          imgUrl ||
          `https://source.unsplash.com/collection/${Math.floor(
            Math.random() * 10 + 1
          )}`
        }
        title={title}
      />
    </>
  );
};

export default PostHeader;
