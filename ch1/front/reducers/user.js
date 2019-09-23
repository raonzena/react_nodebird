import { bindActionCreators } from "redux";

const dummyUser = {
  nickname: 'raonzena',
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false
};

const initialState = {
  isLoggedIn: false,
  user: null,
  sighUpData: null
};

export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

export const signUpAction = (data) => {
  return {
    type: SIGN_UP,
    data: data
  };
};
export const loginAction = {
  type: LOG_IN,
  data: {
    nickname: 'raonzena'
  }
};
export const logoutAction = {
  type: LOG_OUT
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser
      }
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null
      }
    }
    case SIGN_UP: {
      return {
        ...state,
        sighUpData: action.data
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
};