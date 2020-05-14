const userMarkerColors = {
	0: '#9b59b6',
	1: '#3498db',
	2: '#1abc9c',
	3: '#f1c40f',
	4: '#f39c12',
	5: '#e74c3c',
	6: '#34495e',
};

export const generateUsers = (members, userLocation) => {
	const generatedMembers = members.map((member, i) => {
		var a = Math.random() * 2;
		a = a < 1.5 ? -a : a;
		return [
			member.username,
			userMarkerColors[i],
			{ lat: userLocation.lat + a, lng: userLocation.lng + a },
		];
	});
	return generatedMembers;
};
