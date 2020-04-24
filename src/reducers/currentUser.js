const currentUserReducer = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_USER':
			return { id: 2 };
		case 'REMOVE_USER':
			return {};
		default:
			return state;
	}
};

export default currentUserReducer;
