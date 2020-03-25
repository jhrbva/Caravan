import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Dashboard() {
	return (
		<>
			<h1>Dashboard</h1>
			<Link to='/trip'>
				<Button variant='success'>New Trip +</Button>
			</Link>
		</>
	);
}

export default Dashboard;
