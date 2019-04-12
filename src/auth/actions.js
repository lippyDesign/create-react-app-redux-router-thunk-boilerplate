import {
  FETCH_CURRENT_USER_START,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_ERROR,
  SIGN_OUT_USER_START,
  SIGN_OUT_USER_SUCCESS,
  SIGN_OUT_USER_ERROR,
} from './actionTypes';

// fetch curently signed in user
export const fetchUser = () => async dispatch => {
  dispatch({ type: FETCH_CURRENT_USER_START });
  try {
    // Go to server and get the user
    const data = { id: '123', firstName: 'Jane', lastName: 'Doe' };
    dispatch({ type: FETCH_CURRENT_USER_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: FETCH_CURRENT_USER_ERROR, payload: 'There was a problem fetching current user' });
  }
};

// sign out curently signed in user
export const signOut = () => async dispatch => {
  dispatch({ type: SIGN_OUT_USER_START });
  try {
    // Go to server and sign out the user
    dispatch({ type: SIGN_OUT_USER_SUCCESS });
  } catch (e) {
    dispatch({ type: SIGN_OUT_USER_ERROR, payload: 'There was a problem signing out' });
  }
};