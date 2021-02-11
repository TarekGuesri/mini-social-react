import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, Box } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  typography: {
    fontFamily: 'Yeseva One, cursive',
  },
});

export default function Types() {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
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
          Travel
        </Typography>
        <Typography className={classes.typography} variant="h4" gutterBottom>
          around
        </Typography>

        <Typography className={classes.typography} variant="h3">
          the world
        </Typography>

        <Typography
          variant="body1"
          gutterBottom
          style={{
            marginTop: '3rem',
            lineHeight: '200%',
            letterSpacing: '0.2px',
          }}
        >
          Being an outdoor junkie is incredibly common having nature hacks up
          your sleeve in the event of an emergency or random badassery is
          another knowing which spiders don’t bite so you can pick them up.
        </Typography>

        <Typography
          variant="caption"
          display="block"
          style={{
            marginTop: '1rem',
            marginBottom: '3rem',
            lineHeight: '230%',
            letterSpacing: '0.4px',
            color: '#555',
          }}
        >
          And hand over to your friends a party trick is just the beginning
          below are ten hardcore nature hacks starting with good ol’ fire.
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
