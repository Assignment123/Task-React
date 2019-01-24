import {
    LOGIN_REQUEST,
    LOGGED_IN,
    LOGIN_FAILED,
    LOGIN_BY_TOKEN_FAILURE,
    LOGIN_BY_TOKEN_SUCCESS,
    LOGIN_BY_TOKEN_REQUEST,
} from './constant';

export function loginRequest(data){
return {
    type : LOGIN_REQUEST,
    data
}
}

export function loginSuccess(user){
return {
    type : LOGGED_IN,
    user
}
}

export function loginFailed(error){
return {
    type: LOGIN_FAILED,
    error
}
}

export function loginByTokenRequest(userId){
return {
    type: LOGIN_BY_TOKEN_REQUEST,
    userId
}
}

export function loginByTokensuccess(response){
return {
    type: LOGIN_BY_TOKEN_SUCCESS,
    response
}
}

export function loginByTokenFailure(error){
return {
    type: LOGIN_BY_TOKEN_FAILURE,
    error
}
}