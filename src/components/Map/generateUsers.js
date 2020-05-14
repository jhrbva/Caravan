// const userMarkerColors = { 0: '#9b59b6' };

export const generateUsers = (members, userLocation) => {
	const generatedUsers = members.map((user) => {
		var a = Math.random() * 3;
		a = a < 1.5 ? -a : a;
		return [
			user.username,
			{ lat: userLocation.lat + a, lng: userLocation.lng + a },
		];
	});
	return generatedUsers;
};
