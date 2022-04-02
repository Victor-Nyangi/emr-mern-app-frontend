// import {SET_USER_INFO, RESET_USER_INFO } from './authenticationTypes';

const INITIAL_STATE = {
    token: localStorage.getItem("token"),
    first_name:localStorage.getItem("first_name"),
    last_name:localStorage.getItem("last_name"),
    isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn"))
};

if(localStorage.getItem("isAdmin")!==null ) INITIAL_STATE.isAdmin= JSON.parse(localStorage.getItem("isAdmin"))


export default function authenticationReducer(state, action) {
    switch (action.type) {
        case 'SET_USER_INFO':
            const payload = action.data

            if(payload.status && payload.status === "success"){
                
                const isSeller = payload.hasOwnProperty('isSeller') ? payload.isSeller : null;
                const isAdmin = payload.hasOwnProperty('isAdmin') ? payload.isAdmin : null;

                const newState = {
                    ...state,
                    isLoggedIn:true,
                    token:payload.access_token,
                    ...payload.user
                }
                if(isSeller) newState.isSeller = true
                if(isAdmin) newState.isAdmin = true

                return newState;
            }
            return {...state, ...action.payload };
        case 'RESET_USER_INFO':
            return { ...state,...INITIAL_STATE };
        default:
            return { ...state,...INITIAL_STATE };
    }
};
