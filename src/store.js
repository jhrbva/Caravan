import { createStore } from 'redux';
import indexReducer from './reducers';

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(
	indexReducer /* preloadedState, */,
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
		window.__REDUX_DEVTOOLS_EXTENSION__() /* for redux devtools */
);
// const store = createStore(counter);

export default store;
