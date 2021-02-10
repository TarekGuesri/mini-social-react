import React from 'react';
import { connect } from 'react-redux';
import { Box, makeStyles } from '@material-ui/core';
import Spinner from 'src/components/layout/Spinner';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
    marginTop: '4rem',
    minHeight: '60vh',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto',
  },
}));

const MainLayout = ({ loading, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <div className={classes.content}>
          <Box mx={5}> {loading ? <Spinner /> : children}</Box>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
});

export default connect(mapStateToProps)(MainLayout);
