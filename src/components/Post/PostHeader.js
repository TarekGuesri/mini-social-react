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
          'https://i.pinimg.com/originals/5c/5d/04/5c5d04c629c243571643a1ba5c517333.jpg'
        }
        title={title}
      />
    </>
  );
};

export default PostHeader;
