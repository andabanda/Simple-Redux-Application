import { ActionTypes } from '../constants/action-types';

const initialState = {
    calls: [],
};

// @ts-ignore
export const callReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_CALLS:
            return { ...state, calls: payload };
        default:
            return state;
    }
};

export const selectedCallReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_CALL:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_CALL:
            return {};
        default:
            return state;
    }
};
