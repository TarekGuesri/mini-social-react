import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  typography: {
    fontFamily: 'Caveat, cursive',
  },
});

export default function Types() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <div className={classes.root} style={{ textAlign: 'center' }}>
        <Typography className={classes.typography} variant="h1" component="h2">
          We
        </Typography>
        <Typography
          className={classes.typography}
          variant="h1"
          component="h2"
          style={{ fontWeight: '500' }}
        >
          Share
        </Typography>
        <Typography className={classes.typography} variant="h2">
          A smile{' '}
        </Typography>
        <Typography className={classes.typography} variant="h3">
          around
        </Typography>
        <Typography className={classes.typography} variant="h5" gutterBottom>
          the world
        </Typography>

        <Typography
          variant="body1"
          gutterBottom
          style={{
            margin: '3rem 0',
            lineHeight: '170%',
            letterSpacing: '0.2px',
          }}
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, magni
          incidunt? Ab asperiores obcaecati velit aliquid, corporis perferendis
          et voluptas fuga qui quibusdam molestias reiciendis perspiciatis quo
          delectus pariatur doloribus quia laboriosam totam corrupti blanditiis
          similique sint? Saepe consectetur blanditiis labore iure facilis
          minima enim ad. Odit possimus unde id.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          style={{ marginBottom: '3rem', padding: '16px 48px' }}
        >
          Browse stories ➝
        </Button>
      </div>
    </Container>
  );
}
