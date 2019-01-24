
import { LOGGED_IN, LOGIN_REQUEST, LOGIN_FAILED, LOGIN_BY_TOKEN_SUCCESS } from './constant'

const initialState = ({
  requesting: false,
  success: true,
  response: null,
  errors: null,
  token : null,
  isLoggedIn: false,
  userInfo: {},
  email: '',
  shouldRedirect: false,
});

function loginReducer(state = initialState, action) {
  switch (action.type) {

    //case LOGIN_BY_TOKEN_REQUEST:
    case LOGIN_REQUEST:
      return state.merge({
        requesting: true,
        success: false,
        errors: null,
        response: null,
        email: '',
      });

    case LOGIN_FAILED:
      return state.merge({
        requesting: false,
        success: false, 
        errors: action.errors.message,
        response: null,
      });

    case LOGGED_IN: 
     let newState={
        ...state,
        requesting: false,
        token: action.user,
        success: true,
        isLoggedIn: true,
        error: null,
        email:'email',
        shouldRedirect: true,
        userInfo: action.user.userInfo,
      }; 
    return newState; 

    default:
      return state;
  }
}

export default loginReducer;