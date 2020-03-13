import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.scss';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import TripForm from './components/TripForm/TripForm';
import TripDetails from './components/TripDetails/TripDetails';

function App() {
	return (
		<Router>
			<div className='App'>
				<header className='app-wrapper'>
					<Route exact path='/'>
						<Login />
					</Route>
					<Route exact path='/signup'>
						<Signup />
					</Route>
					<Route exact path='/trip'>
						<TripForm />
					</Route>
					{/* invitation route should later be something like /trip/$trip-id where $ is the invitation id */}
					<Route exact path='/invitation'>
						<TripDetails />
					</Route>
				</header>
			</div>
		</Router>
	);
}

export default App;
