import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
// import Avatar from '@material-ui/core/Avatar';

const PostHeader = ({ classes }) => {
  return (
    <>
      <CardHeader
        /*         avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        } */
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="https://i.pinimg.com/originals/5c/5d/04/5c5d04c629c243571643a1ba5c517333.jpg"
        title="Paella dish"
      />
    </>
  );
};

export default PostHeader;
