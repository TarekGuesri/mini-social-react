import { CardContent, Typography } from '@material-ui/core';

const PostContent = ({ content }) => {
  return (
    <>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
    </>
  );
};

export default PostContent;
