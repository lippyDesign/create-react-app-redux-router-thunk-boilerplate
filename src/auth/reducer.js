import {
  FETCH_CURRENT_USER_START,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_ERROR,
  SIGN_OUT_USER_START,
  SIGN_OUT_USER_SUCCESS,
  SIGN_OUT_USER_ERROR,
} from './actionTypes';

const INITIAL_STATE = {
  isLoading: false,
  user: null,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // fetch current user
    case FETCH_CURRENT_USER_START:
      return { ...state, user: null, error: '', isLoading: true };
    case FETCH_CURRENT_USER_SUCCESS:
      return { ...state, user: action.payload, error: '', isLoading: false };
    case FETCH_CURRENT_USER_ERROR:
      return { ...state, user: null, error: action.payload, isLoading: false };
    // sign out user
    case SIGN_OUT_USER_START:
      return { ...state, isLoading: true };
    case SIGN_OUT_USER_SUCCESS:
      return { ...state, user: null, error: '', isLoading: false };
    case SIGN_OUT_USER_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};