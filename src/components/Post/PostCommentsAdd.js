import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TextareaAutosize, Box, makeStyles } from '@material-ui/core';

import AsyncButton from 'src/components/Buttons/AsyncButton';

import { addComment } from 'src/actions/posts';

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

const PostCommentsAdd = ({ isAuthenticated, post, addCommentAction }) => {
  const classes = style();
  const [state, setState] = useState({
    content: '',
    submitLoading: false,
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setState({
      ...state,
      submitLoading: true,
    });

    const { content } = state;
    addCommentAction(post.id, content);

    setState({
      ...state,
      submitLoading: false,
      content: '',
    });
  };

  const { content, submitLoading } = state;

  if (!isAuthenticated) {
    return <></>;
  }
  return (
    <div style={{ width: '100%', marginBottom: '59px' }}>
      <TextareaAutosize
        style={{ minWidth: '96%', maxWidth: '96%' }}
        aria-label="Share your opinion..."
        rowsMin={3}
        placeholder="Share your opinion about this post..."
        value={content}
        name="content"
        onChange={handleChange}
      />

      <Box
        className={classes.titleBar}
        style={{ minWidth: '96%', maxWidth: '96%', marginTop: '1rem' }}
      >
        <AsyncButton
          className={classes.titleItemRight}
          classes={{
            label: classes.buttonText,
          }}
          size="large"
          variant="contained"
          color="primary"
          text="Submit"
          loading={submitLoading}
          disabled={!content || submitLoading}
          onClick={handleSubmit}
          style={{ marginTop: '0.3rem', padding: '18px' }}
        />
      </Box>
    </div>
  );
};

const constDispatchToProps = (dispatch) => ({
  addCommentAction: bindActionCreators(addComment, dispatch),
});

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  post: state.posts.post,
});

export default connect(mapStateToProps, constDispatchToProps)(PostCommentsAdd);
