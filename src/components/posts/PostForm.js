import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Card, CardContent, TextField, makeStyles } from '@material-ui/core';

import AsyncButton from 'src/components/Buttons/AsyncButton';
import Alert from 'src/components/Messages/Alert';

import { login } from 'src/actions/auth';

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(5),
  },
  formInput: {
    marginBottom: theme.spacing(3),
  },
  submitButton: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(5),
  },
}));

const PostForm = ({ isAuthenticated, loginErrorMessage, loginAction }) => {
  const [state, setState] = useState({
    title: '',
    imgUrl: '',
    content: '',
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

    // await loginAction(title, imgUrl);

    await setState({
      ...state,
      submitLoading: false,
    });
  };

  const { title, imgUrl, content, submitLoading } = state;

  return (
    <div align="center" className={classes.container}>
      <Card style={{ maxWidth: '500px' }}>
        <CardContent>
          <TextField
            className={classes.formInput}
            fullWidth
            label="Title"
            name="title"
            onChange={handleChange}
            required
            value={title}
            variant="outlined"
          />

          <TextField
            className={classes.formInput}
            fullWidth
            label="Image URL"
            name="imgUrl"
            onChange={handleChange}
            value={imgUrl}
            variant="outlined"
          />

          <TextField
            className={classes.formInput}
            fullWidth
            label="Content"
            name="content"
            onChange={handleChange}
            value={content}
            variant="outlined"
            required
            multiline
            rows={5}
            helperText="Content must be at least 10 letters"
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
            text="Create"
            loading={submitLoading}
            disabled={!title || content.length < 10 || submitLoading}
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

const PostFormConnected = connect(
  mapStateToProps,
  constDispatchToProps
)(PostForm);

export default PostFormConnected;
