import {
  CHANGE_PASSWORD_START,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR,
} from './actionTypes';
import * as api from './services';

export const changePassword = (newPassword) => async (dispatch) => {
  dispatch({ type: CHANGE_PASSWORD_START });
  try {
    await api.changePassword(newPassword);
    dispatch({ type: CHANGE_PASSWORD_SUCCESS });
  } catch (e) {
    dispatch({ type: CHANGE_PASSWORD_ERROR, payload: 'There was a problem changing password' });
  }
};
