import axios from 'axios';
import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  POST_ERROR,
  SET_POSTS_LOADING,
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
    const res = await axios.get('posts');

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
