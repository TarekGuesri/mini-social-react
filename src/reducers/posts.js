/* eslint-disable import/no-anonymous-default-export */
import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  POST_ERROR,
  SET_POSTS_LOADING,
} from '../actions/types';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  postsErrorMessage: '',
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case SET_POSTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
