import {
    GET_PENDING_FRIEND_LOADED,
    GET_USER_FRIEND_LOADING,
    GET_PENDING_FRIEND_LOADING,
    GET_USER_FRIEND_LOADED,
    GET_FRIEND_LOADING,
    GET_FRIEND_LOADED,
} from '../types';

const initialState: any = {
    loading: true,
    users: [],
    friends: [],
    request: [],
};

export function friendReducer(state = initialState, action: any) {
    const { type, payload } = action;
    switch (type) {
        case GET_PENDING_FRIEND_LOADING:
        case GET_USER_FRIEND_LOADING:
        case GET_FRIEND_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_FRIEND_LOADED:
            return {
                ...state,
                loading: false,
                friends: payload.data.friends,
            };
        case GET_PENDING_FRIEND_LOADED:
            return {
                ...state,
                loading: false,
                request: payload.data.users,
            };
        case GET_USER_FRIEND_LOADED:
            return {
                ...state,
                loading: false,
                users: payload.data.users,
            };

        default:
            return state;
    }
}
