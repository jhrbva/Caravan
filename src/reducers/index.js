import currentUser from './currentUser';
import isLogged from './isLogged';
import { combineReducers } from 'redux';

/**
 * This is our combined reducer. It takes all of our individual
 * reducers and creates one large reducer that manages a larger
 * state.
 */
const indexReducer = combineReducers({
	currentUser,
	isLogged,
});

export default indexReducer;
