/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable space-before-function-paren */
import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  RESET_LOGIN_ERROR,
  SET_REGISTER_ERROR,
  RESET_REGISTER_ERROR,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null,
  loginErrorMessage: '',
  registerErrorMessage: '',
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...payload,
        loginErrorMessage: '',
      };

    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loginErrorMessage: payload.msg,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        registerErrorMessage: payload.msg,
      };
    case RESET_LOGIN_ERROR:
      return {
        ...state,
        loginErrorMessage: '',
      };
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
      };

    case SET_REGISTER_ERROR:
      return {
        ...state,
        registerErrorMessage: payload.msg,
      };
    case RESET_REGISTER_ERROR:
      return {
        ...state,
        registerErrorMessage: '',
      };
    default:
      return state;
  }
}
