import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
    marginTop: '2rem',
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

const MainLayout = ({ children }) => {
  const classes = useStyles();

  console.log(children);

  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <div className={classes.content}>
          <Box mx={5}>{children}</Box>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
