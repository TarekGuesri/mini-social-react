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
  RESET_LOGIN_ERROR,
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
