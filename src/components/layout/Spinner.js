import { Grid, CircularProgress } from '@material-ui/core';

const Spinner = () => (
  <Grid container alignItems="flex-start" justify="center" direction="row">
    <CircularProgress size={100} color="primary" />
  </Grid>
);

export default Spinner;
