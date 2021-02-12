import axios from 'axios';
import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  POST_ERROR,
  SET_POSTS_LOADING,
  ADD_COMMENT,
  GET_COMMENTS,
  SET_COMMENTS_LOADING,
  GET_LATEST_COMMENTS,
  SET_LATEST_COMMENTS_LOADING,
  GET_LATEST_POSTS,
  SET_LATEST_POSTS_LOADING,
} from './types';

// Get posts
export const getPosts = () => async (dispatch) => {
  dispatch({
    type: SET_POSTS_LOADING,
  });

  try {
    const res = await axios.get('posts');

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.data.msg },
    });
  }
};

// Create post
export const createPost = (formData) => async (dispatch) => {
  try {
    await axios.post('posts', formData);
    await axios.get('posts');

    dispatch({
      type: ADD_POST,
    });

    dispatch(getPosts());
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.data.msg },
    });
  }
};

// Get posts
export const getPost = (id) => async (dispatch) => {
  dispatch({
    type: SET_POSTS_LOADING,
  });

  try {
    const res = await axios.get(`posts/${id}`);

    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.data.msg },
    });
  }
};

// Add comment
export const addComment = (postId, content) => async (dispatch) => {
  try {
    await axios.post(`comments/post/${postId}`, { content });

    dispatch({
      type: ADD_COMMENT,
    });

    dispatch(getCommentsByPostId(postId));
  } catch (err) {
    console.log(err);
  }
};

// Get comments by post Id
export const getCommentsByPostId = (id) => async (dispatch) => {
  dispatch({
    type: SET_COMMENTS_LOADING,
  });

  try {
    const res = await axios.get(`comments/post/${id}`);

    dispatch({
      type: GET_COMMENTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: POST_ERROR,
    //   payload: { msg: err.response.data.msg },
    // });
  }
};

// Get latest posts
export const getLatestPosts = () => async (dispatch) => {
  dispatch({
    type: SET_LATEST_POSTS_LOADING,
  });

  try {
    const res = await axios.get('posts/latest');

    dispatch({
      type: GET_LATEST_POSTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

// Get latest comments
export const getLatestComments = () => async (dispatch) => {
  dispatch({
    type: SET_LATEST_COMMENTS_LOADING,
  });

  try {
    const res = await axios.get('comments/latest');

    dispatch({
      type: GET_LATEST_COMMENTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
