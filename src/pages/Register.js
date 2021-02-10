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

import { register } from 'src/actions/auth';

const useStyles = makeStyles((theme) => ({
  formInput: {
    marginBottom: theme.spacing(3),
  },
  submitButton: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(5),
  },
}));

const Register = ({
  isAuthenticated,
  registerErrorMessage,
  registerAction,
}) => {
  const [state, setState] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
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

    const { username, password, passwordConfirm } = state;

    await registerAction(username, password);

    await setState({
      ...state,
      submitLoading: false,
    });
  };

  const { username, password, passwordConfirm, submitLoading } = state;

  if (isAuthenticated) {
    return <Redirect to={'/'} />;
  }

  return (
    <div align="center">
      <Typography variant="h4" component="h4" gutterBottom>
        Sign up
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
            type="password"
            helperText="Password must be at least 6 letters"
          />

          <TextField
            className={classes.formInput}
            fullWidth
            label="Confirm Password"
            name="passwordConfirm"
            onChange={handleChange}
            required
            value={passwordConfirm}
            variant="outlined"
            type="password"
          />

          {registerErrorMessage && (
            <Alert severity="error" className={classes.formInput}>
              {registerErrorMessage}
            </Alert>
          )}

          <AsyncButton
            className={classes.submitButton}
            size="large"
            variant="contained"
            color="primary"
            text="Create"
            loading={submitLoading}
            disabled={
              !username ||
              password.length < 6 ||
              !passwordConfirm ||
              submitLoading
            }
            onClick={handleSubmit}
          />
        </CardContent>
      </Card>
    </div>
  );
};

const constDispatchToProps = (dispatch) => ({
  registerAction: bindActionCreators(register, dispatch),
});

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  registerErrorMessage: state.auth.registerErrorMessage,
});

const RegisterConnected = connect(
  mapStateToProps,
  constDispatchToProps
)(Register);

export default RegisterConnected;
