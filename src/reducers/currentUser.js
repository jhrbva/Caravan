const currentUserReducer = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_USER':
			return action.payload;
		case 'REMOVE_USER':
			return {};
		default:
			return state;
	}
};

export default currentUserReducer;
