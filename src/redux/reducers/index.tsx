import { combineReducers } from 'redux';
import { callReducer, selectedCallReducer } from './callReducer';

const reducers = combineReducers({
    allCalls: callReducer,
    call: selectedCallReducer,
});

export default reducers;
