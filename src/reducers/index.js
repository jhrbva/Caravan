import currentUserReducer from './currentUser';
import isLoggedReducer from './isLogged';
import { combineReducers } from 'redux';

/**
 * This is our combined reducer. It takes all of our individual
 * reducers and creates one large reducer that manages a larger
 * state.
 */
const indexReducer = combineReducers({
	currentUserReducer,
	isLoggedReducer,
});

export default indexReducer;
