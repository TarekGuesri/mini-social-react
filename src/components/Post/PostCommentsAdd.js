import React, { useState } from 'react';
import {
  Button,
  TextareaAutosize,
  Grid,
  Box,
  makeStyles,
} from '@material-ui/core';

const style = makeStyles({
  titleItemRight: {
    // color: 'white',
    // backgroundColor: 'blue',
    top: '50%',
    height: 30,
    float: 'right',
    position: 'relative',
    transform: 'translateY(-50%)',
    fontSize: '10px',
  },
  buttonText: {
    fontSize: '19px',
  },
});

export default function MinHeightTextarea() {
  const classes = style();
  const [state, setState] = useState({
    content: '',
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const { content } = state;
  return (
    <div style={{ width: '100%', marginBottom: '59px' }}>
      <TextareaAutosize
        style={{ minWidth: '96%', maxWidth: '96%' }}
        aria-label="Share your opinion..."
        rowsMin={3}
        placeholder="Share your opinion..."
        value={content}
        name="content"
        onChange={handleChange}
      />

      <Box
        className={classes.titleBar}
        style={{ minWidth: '96%', maxWidth: '96%', marginTop: '1rem' }}
      >
        <Button
          className={classes.titleItemRight}
          variant="contained"
          color="primary"
          classes={{
            label: classes.buttonText,
          }}
          style={{ marginTop: '0.3rem', padding: '18px' }}
          disabled={!content}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
}
