import { Typography } from '@material-ui/core';

const NotFoundMessage = () => {
  return (
    <>
      <Typography variant="h2" component="h2" gutterBottom align="center">
        404
      </Typography>
      <Typography variant="h6" component="h6" gutterBottom align="center">
        Sorry, we couldn't find this page
      </Typography>
    </>
  );
};

export default NotFoundMessage;
