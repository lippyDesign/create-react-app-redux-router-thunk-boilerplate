import {
  FETCH_CURRENT_USER_START,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_ERROR,
  SIGN_IN_USER_START,
  SIGN_IN_USER_SUCCESS,
  SIGN_IN_USER_ERROR,
  SIGN_UP_USER_START,
  SIGN_UP_USER_SUCCESS,
  SIGN_UP_USER_ERROR,
  SIGN_OUT_USER_START,
  SIGN_OUT_USER_SUCCESS,
  SIGN_OUT_USER_ERROR,
} from './actionTypes';
import * as api from './services';

export const fetchUser = () => async (dispatch) => {
  dispatch({ type: FETCH_CURRENT_USER_START });
  try {
    const data = api.fetchUser();
    dispatch({ type: FETCH_CURRENT_USER_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: FETCH_CURRENT_USER_ERROR, payload: 'There was a problem fetching current user' });
  }
};

export const signInWithEmail = ({ email, password }) => async (dispatch) => {
  dispatch({ type: SIGN_IN_USER_START });
  try {
    const data = await api.signInWithEmail({ email, password });
    dispatch({ type: SIGN_IN_USER_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: SIGN_IN_USER_ERROR, payload: 'There was a problem signing in' });
  }
};

export const signUpWithEmail = ({ email, password, confirmPassword }) => async (dispatch) => {
  dispatch({ type: SIGN_UP_USER_START });
  try {
    const data = await api.signUpWithEmail({ email, password, confirmPassword });
    dispatch({ type: SIGN_UP_USER_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: SIGN_UP_USER_ERROR, payload: 'There was a problem signing up' });
  }
};

export const signOut = (push) => async (dispatch) => {
  dispatch({ type: SIGN_OUT_USER_START });
  try {
    await api.signOut();
    dispatch({ type: SIGN_OUT_USER_SUCCESS });
    push('/');
  } catch (e) {
    dispatch({ type: SIGN_OUT_USER_ERROR, payload: 'There was a problem signing out' });
  }
};
