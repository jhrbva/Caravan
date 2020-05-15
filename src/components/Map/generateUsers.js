const userMarkerColors = {
	0: '#9b59b6',
	1: '#1abc9c',
	2: '#3498db',
	3: '#f1c40f',
	4: '#f39c12',
	5: '#e74c3c',
	6: '#34495e',
};

export const generateUsers = (members, userid, userLocation) => {
	const generatedMembers = members
		.filter((member) => member.userid !== userid)
		.map((member, i) => {
			var a = Math.random() * 2;
			a = a < 1.5 ? -a : a;
			return {
				username: member.username,
				markerColor: userMarkerColors[i],
				position: { lat: userLocation.lat + a, lng: userLocation.lng + a },
			};
		});

	return generatedMembers;
};
