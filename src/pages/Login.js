import React, { useState } from 'react';

import {
  Typography,
  Card,
  CardContent,
  TextField,
  makeStyles,
} from '@material-ui/core';

import AsyncButton from 'src/components/Buttons/AsyncButton';

const useStyles = makeStyles((theme) => ({
  formInput: {
    marginBottom: theme.spacing(3),
  },
  submitButton: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(5),
  },
}));

const Login = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });
  const classes = useStyles();

  const handleChange = (e) => {
    console.log(e.target);
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const { username, password } = state;
  return (
    <div align="center">
      <Typography variant="h4" component="h4" gutterBottom>
        Log in
      </Typography>

      <Card style={{ maxWidth: '500px' }}>
        <CardContent>
          <TextField
            className={classes.formInput}
            fullWidth
            label="Username"
            name="username"
            onChange={handleChange}
            required
            value={username}
            variant="outlined"
          />

          <TextField
            className={classes.formInput}
            fullWidth
            label="Password"
            name="password"
            onChange={handleChange}
            required
            value={password}
            variant="outlined"
          />

          <AsyncButton
            className={classes.submitButton}
            size="large"
            variant="contained"
            color="primary"
            text="Log in"
            loading={false}
            disabled={false}
            // onClick={handleSubmit}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
