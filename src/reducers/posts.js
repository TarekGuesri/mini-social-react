/* eslint-disable import/no-anonymous-default-export */
import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  POST_ERROR,
  SET_POSTS_LOADING,
  ADD_COMMENT,
  GET_COMMENTS,
  SET_COMMENTS_LOADING,
  GET_LATEST_POSTS,
  SET_LATEST_POSTS_LOADING,
  GET_LATEST_COMMENTS,
  SET_LATEST_COMMENTS_LOADING,
} from '../actions/types';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  comments: [],
  commentsLoading: true,
  latestPosts: [],
  latestPostsLoading: true,
  latestComments: [],
  latestCommentsLoading: true,
  errorMessage: '',
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
    case GET_POST:
      return {
        ...state,
        post: payload,
        loading: false,
      };
    case POST_ERROR:
      return {
        ...state,
        errorMessage: payload,
        post: null,
        loading: false,
      };
    case SET_POSTS_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_COMMENTS:
      return {
        ...state,
        comments: payload,
        commentsLoading: false,
      };
    case SET_COMMENTS_LOADING:
      return {
        ...state,
        commentsLoading: true,
      };
    case GET_LATEST_POSTS:
      return {
        ...state,
        latestPosts: payload,
        latestPostsLoading: false,
      };
    case SET_LATEST_POSTS_LOADING:
      return {
        ...state,
        latestPostsLoading: true,
      };
    case GET_LATEST_COMMENTS:
      return {
        ...state,
        latestComments: payload,
        latestCommentsLoading: false,
      };
    case SET_LATEST_COMMENTS_LOADING:
      return {
        ...state,
        latestCommentsLoading: true,
      };
    default:
      return state;
  }
}
