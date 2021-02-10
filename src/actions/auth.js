/* eslint-disable arrow-parens */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import setAuthToken from 'src/utils/setAuthToken';
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
} from './types';

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
    try {
      const res = await axios.get('users/self/');
      // const res = await axios.get(`${baseUrl}/users/self/`);

      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  } else {
    dispatch({ type: AUTH_ERROR });
  }
};

// Login User
export const login = (username, password) => async (dispatch) => {
  dispatch({ type: RESET_LOGIN_ERROR });
  const body = { username, password };

  try {
    const res = await axios.post('/users/login', body);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (error) {
    const { response } = error;

    dispatch({
      type: LOGIN_FAIL,
      payload: response.data,
    });
  }
};

// Login User
export const register = (username, password) => async (dispatch) => {
  dispatch({ type: RESET_REGISTER_ERROR });
  const body = { username, password };

  try {
    const res = await axios.post('/users', body);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (error) {
    const { response } = error;

    dispatch({
      type: REGISTER_FAIL,
      payload: response.data,
    });
  }
};

// Logout User
export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};

// Logout User
export const setLoginErrorMessage = (msg) => async (dispatch) => {
  dispatch({
    type: LOGIN_FAIL,
    payload: {
      msg,
    },
  });
};

// Logout User
export const setRegisterErrorMessage = (msg) => async (dispatch) => {
  dispatch({
    type: SET_REGISTER_ERROR,
    payload: {
      msg,
    },
  });
};

// Logout User
export const resetRegisterErrorMessage = (msg) => async (dispatch) => {
  dispatch({
    type: RESET_REGISTER_ERROR,
  });
};
