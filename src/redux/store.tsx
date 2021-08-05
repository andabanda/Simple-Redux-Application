import { createStore, compose } from 'redux';
import reducers from './reducers/index';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, {}, composeEnhancers());
export type RootState = ReturnType<typeof store.getState>;
export default store;
