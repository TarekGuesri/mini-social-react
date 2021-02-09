import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { bindActionCreators } from 'redux';

import {
  Typography,
  Card,
  CardContent,
  TextField,
  makeStyles,
} from '@material-ui/core';

import AsyncButton from 'src/components/Buttons/AsyncButton';
import Alert from 'src/components/Messages/Alert';

import { login } from 'src/actions/auth';

const useStyles = makeStyles((theme) => ({
  formInput: {
    marginBottom: theme.spacing(3),
  },
  submitButton: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(5),
  },
}));

const Login = ({ isAuthenticated, loginErrorMessage, loginAction }) => {
  const [state, setState] = useState({
    username: '',
    password: '',
    submitLoading: false,
  });
  const classes = useStyles();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    await setState({
      ...state,
      submitLoading: true,
    });

    await loginAction(username, password);

    await setState({
      ...state,
      submitLoading: false,
    });
  };

  const { username, password, submitLoading } = state;

  if (isAuthenticated) {
    return <Redirect to={'/'} />;
  }

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

          {loginErrorMessage && (
            <Alert severity="error" className={classes.formInput}>
              {loginErrorMessage}
            </Alert>
          )}

          <AsyncButton
            className={classes.submitButton}
            size="large"
            variant="contained"
            color="primary"
            text="Log in"
            loading={submitLoading}
            disabled={!username || !password || submitLoading}
            onClick={handleSubmit}
          />
        </CardContent>
      </Card>
    </div>
  );
};

const constDispatchToProps = (dispatch) => ({
  loginAction: bindActionCreators(login, dispatch),
});

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loginErrorMessage: state.auth.loginErrorMessage,
});

const LoginConnected = connect(mapStateToProps, constDispatchToProps)(Login);

export default LoginConnected;
