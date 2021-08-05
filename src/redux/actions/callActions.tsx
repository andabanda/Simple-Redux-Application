import CallLists from '../../components/CallLists';
import { ActionTypes } from '../constants/action-types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const setCalls = (calls: any) => {
    return {
        type: ActionTypes.SET_CALLS,
        payload: calls,
    };
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const selectedCall = (calls: any) => {
    return {
        type: ActionTypes.SELECTED_CALL,
        payload: calls,
    };
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const removeSelectedCall = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_CALL,
    };
};
