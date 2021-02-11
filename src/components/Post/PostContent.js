import { CardContent, Typography } from '@material-ui/core';

const PostContent = ({ content }) => {
  return (
    <>
      <CardContent style={{ padding: '70px 20px' }}>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
    </>
  );
};

export default PostContent;
